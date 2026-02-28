# ─────────────────────────────────────────────
# Stage 1: Build React frontend
# ─────────────────────────────────────────────
FROM node:22-alpine AS frontend-builder

WORKDIR /app

# Install deps first (cache layer)
COPY package*.json ./
RUN npm ci

# Copy source and build
COPY index.html vite.config.js ./
COPY src ./src
RUN npm run build


# ─────────────────────────────────────────────
# Stage 2: Build Go backend
# ─────────────────────────────────────────────
FROM golang:1.22-alpine AS backend-builder

WORKDIR /app

# Download modules first (cache layer)
COPY backend/go.mod backend/go.sum ./
RUN go mod download

# Copy source and build a statically linked binary
COPY backend/ .
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 \
    go build -ldflags="-w -s" -o server ./cmd/server


# ─────────────────────────────────────────────
# Stage 3: Final minimal image
# ─────────────────────────────────────────────
FROM alpine:3.20

# ca-certificates — needed for SMTP TLS
# tzdata — correct timezone in logs
RUN apk add --no-cache ca-certificates tzdata

WORKDIR /app

# Copy compiled binary
COPY --from=backend-builder /app/server .

# Copy React build output
COPY --from=frontend-builder /app/dist ./dist

EXPOSE 8080

# DIST_DIR=./dist because the binary runs from /app
ENV DIST_DIR=./dist

CMD ["./server"]
