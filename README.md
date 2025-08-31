# 🛡️ Cloud-Based Database Security Assessment Project

> **Internship Project** — Cybersecurity Intern @ TimesPro  
> [LinkedIn – Aditya Srichandan](https://www.linkedin.com/in/aditya-srichandan/)
---
> Documentation Link - https://drive.google.com/file/d/1wu2cP__itfNqK1O67C5Y9o0Vk1Po5vkO/view?usp=drive_link

---

## 📌 Project Overview

This project demonstrates a full-stack vulnerability assessment and remediation of a Node.js + MongoDB Atlas cloud-based system. It simulates real-world attack scenarios, identifies flaws, and applies secure coding best practices.

---

## 🔧 Technologies & Tools

| Category             | Tools / Frameworks                          |
|----------------------|---------------------------------------------|
| Backend              | Node.js, Express.js                         |
| Database             | MongoDB Atlas (Cloud NoSQL DB)              |
| Security Tools       | Nessus, Nikto, Nmap, Nuclei, Hydra          |
| Middleware           | Helmet, express-validator, rate-limit, bcryptjs, jsonwebtoken |
| Vulnerability Fixes  | Input validation, JWT auth, error handling  |
| OS/Testing Platforms | Kali Linux, Windows 11, Linux               |

---

## 📁 Project Structure

```bash
mongo-security-app/
├── routes/
│   └── userRoutes.js
├── models/
│   └── userModel.js
├── middleware/
│   └── auth.js
├── .env
├── .gitignore
├── app.js
├── package.json
└── README.md

⚙️ Installation & Setup :

git clone https://github.com/yourusername/mongo-security-app.git
cd mongo-security-app

npm install


🚀 Running the App

npm start
# or
node app.js

🔍 Security Testing Performed

| Phase                             | Actions Taken                                                                               |
| --------------------------------- | ------------------------------------------------------------------------------------------- |
| Phase 2: Vulnerability Assessment | Nmap, Nikto, Nessus, Nuclei used to scan for missing headers, open ports, outdated services |
| Phase 3: Security Testing         | Brute-force with Hydra, NoSQL Injection, XSS, Input abuse, log injection attempts           |
| Phase 4: Remediation              | JWT auth, secure headers, input validation, error handling, rate limiting                   |



✅ Remediation Implemented
JWT-based authentication with role support

Strong password policy + hashing with bcrypt

Input sanitization (express-validator, xss-clean)

Rate limiting on login endpoint

Centralized error handler

.env secrets hidden from source control

Routes protected with JWT middleware

