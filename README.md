# 🚀 TaskHub Production Lab

A production-ready backend application built to learn modern backend architecture, DevOps, and cloud deployment.

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB
- Redis
- RabbitMQ
- Docker
- Docker Compose
- JWT Authentication

---

## ✨ Features

- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Redis Dashboard Cache
- RabbitMQ Background Jobs
- Worker Service
- Dockerized Infrastructure

---

## 🏗 Architecture

```
                 Client
                    │
                    ▼
              Express API
                    │
     ┌──────────────┼──────────────┐
     ▼              ▼              ▼
 MongoDB         Redis         RabbitMQ
                                   │
                                   ▼
                              Worker Service
```

---

## 📂 Project Structure

```
backend/
│
├── src/
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── queues/
│   ├── routes/
│   ├── services/
│   ├── workers/
│   └── app.js
│
├── Dockerfile
├── package.json
│
docker-compose.yml
```

---

## 🚀 Run Locally

```bash
docker compose up --build
```

---

## 📌 Roadmap

- [x] Docker
- [x] MongoDB
- [x] JWT Authentication
- [x] Redis
- [x] RabbitMQ
- [x] Worker Service
- [ ] GitHub Actions CI/CD
- [ ] Kubernetes
- [ ] AWS Deployment"" 
