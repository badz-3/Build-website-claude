package mailer

import (
	"crypto/tls"
	"fmt"
	"net"
	"net/smtp"
	"strings"
	"time"
)

type Mailer struct {
	host    string
	port    string
	user    string
	pass    string
	toEmail string
}

func New(host, port, user, pass, toEmail string) *Mailer {
	return &Mailer{
		host:    host,
		port:    port,
		user:    user,
		pass:    pass,
		toEmail: toEmail,
	}
}

type ContactMessage struct {
	Name    string
	Email   string
	Company string
	Message string
}

// SendContactNotification sends an HTML notification email to the site owner.
func (m *Mailer) SendContactNotification(msg ContactMessage) error {
	subject := fmt.Sprintf("New Contact: %s from %s", msg.Name, coalesce(msg.Company, msg.Email))
	body := buildNotificationHTML(msg)
	return m.send(m.toEmail, subject, body)
}

// SendAutoReply sends a confirmation email to the person who submitted the form.
func (m *Mailer) SendAutoReply(msg ContactMessage) error {
	subject := "We received your message — NexusLab"
	body := buildAutoReplyHTML(msg)
	return m.send(msg.Email, subject, body)
}

func (m *Mailer) send(to, subject, htmlBody string) error {
	addr := net.JoinHostPort(m.host, m.port)

	header := strings.Join([]string{
		"MIME-Version: 1.0",
		"Content-Type: text/html; charset=UTF-8",
		fmt.Sprintf("From: NexusLab <%s>", m.user),
		fmt.Sprintf("To: %s", to),
		fmt.Sprintf("Subject: %s", subject),
		fmt.Sprintf("Date: %s", time.Now().Format(time.RFC1123Z)),
	}, "\r\n")

	message := []byte(header + "\r\n\r\n" + htmlBody)

	auth := smtp.PlainAuth("", m.user, m.pass, m.host)

	// Use STARTTLS (port 587)
	conn, err := net.Dial("tcp", addr)
	if err != nil {
		return fmt.Errorf("dial: %w", err)
	}

	client, err := smtp.NewClient(conn, m.host)
	if err != nil {
		return fmt.Errorf("smtp client: %w", err)
	}
	defer client.Close()

	tlsConfig := &tls.Config{ServerName: m.host}
	if err = client.StartTLS(tlsConfig); err != nil {
		return fmt.Errorf("starttls: %w", err)
	}

	if err = client.Auth(auth); err != nil {
		return fmt.Errorf("auth: %w", err)
	}

	if err = client.Mail(m.user); err != nil {
		return fmt.Errorf("mail from: %w", err)
	}
	if err = client.Rcpt(to); err != nil {
		return fmt.Errorf("rcpt to: %w", err)
	}

	wc, err := client.Data()
	if err != nil {
		return fmt.Errorf("data: %w", err)
	}
	if _, err = wc.Write(message); err != nil {
		return fmt.Errorf("write: %w", err)
	}
	return wc.Close()
}

func buildNotificationHTML(msg ContactMessage) string {
	company := coalesce(msg.Company, "<em>not provided</em>")
	return fmt.Sprintf(`<!DOCTYPE html>
<html>
<body style="font-family:sans-serif;max-width:600px;margin:40px auto;color:#1a1a2e;">
  <div style="background:#07081a;border-radius:12px;padding:32px;color:#f0f0ff;">
    <h2 style="color:#a78bfa;margin-top:0;">New Contact Form Submission</h2>
    <table style="width:100%%;border-collapse:collapse;">
      <tr><td style="padding:8px 0;color:#8b8daa;width:100px;">Name</td><td style="padding:8px 0;font-weight:600;">%s</td></tr>
      <tr><td style="padding:8px 0;color:#8b8daa;">Email</td><td style="padding:8px 0;"><a href="mailto:%s" style="color:#06b6d4;">%s</a></td></tr>
      <tr><td style="padding:8px 0;color:#8b8daa;">Company</td><td style="padding:8px 0;">%s</td></tr>
    </table>
    <div style="margin-top:24px;padding:20px;background:rgba(124,58,237,0.1);border-radius:8px;border-left:3px solid #7c3aed;">
      <p style="margin:0;line-height:1.7;white-space:pre-wrap;">%s</p>
    </div>
  </div>
</body>
</html>`, msg.Name, msg.Email, msg.Email, company, msg.Message)
}

func buildAutoReplyHTML(msg ContactMessage) string {
	return fmt.Sprintf(`<!DOCTYPE html>
<html>
<body style="font-family:sans-serif;max-width:600px;margin:40px auto;color:#1a1a2e;">
  <div style="background:#07081a;border-radius:12px;padding:32px;color:#f0f0ff;">
    <h2 style="color:#a78bfa;margin-top:0;">Thanks for reaching out, %s!</h2>
    <p style="color:#8b8daa;line-height:1.7;">We've received your message and will get back to you within <strong style="color:#f0f0ff;">24 hours</strong> with a tailored proposal.</p>
    <div style="margin:24px 0;padding:20px;background:rgba(124,58,237,0.1);border-radius:8px;border-left:3px solid #7c3aed;">
      <p style="margin:0;color:#8b8daa;font-size:13px;">Your message:</p>
      <p style="margin:8px 0 0;line-height:1.7;white-space:pre-wrap;">%s</p>
    </div>
    <p style="color:#8b8daa;font-size:13px;margin-bottom:0;">— The NexusLab Team</p>
  </div>
</body>
</html>`, msg.Name, msg.Message)
}

func coalesce(a, b string) string {
	if a != "" {
		return a
	}
	return b
}
