GreenFields Farming Company — Pages 1–8

Open index.html or enquiries.html in a browser.

Page 8: dedicated multi-crop enquiry builder with customer details, supply preferences, form validation, review, copy and text-file download. Product can be preselected via enquiries.html?product=Cabbage.

IMPORTANT: This is a static front-end preview. Enquiries are NOT sent, stored, emailed, or available in an admin dashboard. Do not publish as a functioning submission form until a secure backend, anti-spam measures, data retention rules and owner-confirmed contact details are added.

Page 9: Admin Login (requires a backend for real authentication).


PAGE 9 — ADMIN LOGIN
Open admin-login.html for the authentication-ready frontend. This page intentionally DOES NOT log in, save passwords, or use client-side fake authentication. Connect to a backend with HTTPS, hashed passwords, secure HttpOnly cookies, CSRF protection, rate limiting, and server-side authorization before deployment.


## Page 10: Admin dashboard
Open `admin.html` to preview the dashboard. This is a **standalone demonstration only**: it is NOT password protected, does NOT connect to the admin login form, and must NOT be deployed as a real administrator portal. All sample customers are fictional. Status and availability changes are stored in this browser's localStorage only. No customer enquiries or payments are received.

Before production: build backend authentication and authorization, secure sessions and CSRF protection, database and validated API endpoints, real enquiry submissions, product/gallery management, audit logs and testing. Do not rely on hiding the admin link for security.
