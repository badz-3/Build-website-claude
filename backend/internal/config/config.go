package config

import (
	"os"
	"strings"
)

type Config struct {
	Port        string
	SMTPHost    string
	SMTPPort    string
	SMTPUser    string
	SMTPPass    string
	ToEmail     string
	CORSOrigins []string
	DistDir     string
}

func Load() *Config {
	origins := os.Getenv("CORS_ORIGINS")
	if origins == "" {
		origins = "*"
	}

	return &Config{
		Port:        getEnv("PORT", "8080"),
		SMTPHost:    getEnv("SMTP_HOST", "smtp.gmail.com"),
		SMTPPort:    getEnv("SMTP_PORT", "587"),
		SMTPUser:    os.Getenv("SMTP_USER"),
		SMTPPass:    os.Getenv("SMTP_PASS"),
		ToEmail:     getEnv("TO_EMAIL", "hello@nexuslab.io"),
		CORSOrigins: strings.Split(origins, ","),
		// DistDir is relative to the working directory when the binary runs.
		// Local dev (go run ./cmd/server from backend/): ../../dist
		// Docker (binary at /app/server, dist at /app/dist):  ./dist
		DistDir: getEnv("DIST_DIR", "../../dist"),
	}
}

func getEnv(key, fallback string) string {
	if v := os.Getenv(key); v != "" {
		return v
	}
	return fallback
}
