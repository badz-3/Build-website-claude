package handler

import (
	"encoding/json"
	"log"
	"net/http"
	"regexp"
	"strings"

	"nexuslab/backend/internal/mailer"
)

var emailRE = regexp.MustCompile(`^[^\s@]+@[^\s@]+\.[^\s@]+$`)

type contactRequest struct {
	Name    string `json:"name"`
	Email   string `json:"email"`
	Company string `json:"company"`
	Message string `json:"message"`
}

type contactResponse struct {
	Success bool   `json:"success"`
	Message string `json:"message"`
}

func writeJSON(w http.ResponseWriter, status int, v any) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(status)
	json.NewEncoder(w).Encode(v)
}

// Contact returns an http.HandlerFunc that processes contact form submissions.
func Contact(m *mailer.Mailer) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		var req contactRequest
		if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
			writeJSON(w, http.StatusBadRequest, contactResponse{Message: "invalid request body"})
			return
		}

		// Trim whitespace
		req.Name = strings.TrimSpace(req.Name)
		req.Email = strings.TrimSpace(req.Email)
		req.Company = strings.TrimSpace(req.Company)
		req.Message = strings.TrimSpace(req.Message)

		// Validate
		if req.Name == "" {
			writeJSON(w, http.StatusBadRequest, contactResponse{Message: "name is required"})
			return
		}
		if req.Email == "" || !emailRE.MatchString(req.Email) {
			writeJSON(w, http.StatusBadRequest, contactResponse{Message: "valid email is required"})
			return
		}
		if req.Message == "" {
			writeJSON(w, http.StatusBadRequest, contactResponse{Message: "message is required"})
			return
		}
		if len(req.Message) > 2000 {
			writeJSON(w, http.StatusBadRequest, contactResponse{Message: "message must be 2000 characters or fewer"})
			return
		}

		msg := mailer.ContactMessage{
			Name:    req.Name,
			Email:   req.Email,
			Company: req.Company,
			Message: req.Message,
		}

		// Send emails asynchronously so the response is fast
		go func() {
			if err := m.SendContactNotification(msg); err != nil {
				log.Printf("ERROR sending contact notification: %v", err)
			}
			if err := m.SendAutoReply(msg); err != nil {
				log.Printf("ERROR sending auto-reply: %v", err)
			}
		}()

		writeJSON(w, http.StatusOK, contactResponse{
			Success: true,
			Message: "Thanks! We'll get back to you within 24 hours.",
		})
	}
}
