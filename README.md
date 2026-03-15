# 🍔 FoodPanda Microservices Demo using Docker

This project demonstrates a **simple microservices architecture using Docker containers**.

The purpose of this project is to help students understand an important concept:

> **In Microservices Architecture, if one module fails or is removed, the other modules continue to work independently.**

This demo simulates a **FoodPanda-like application** where each feature runs as an independent microservice.

---

# 🧠 Microservices in this Project

The application is divided into **five independent services**:

| Service | Purpose |
|------|------|
| Login Service | Handles user authentication |
| Food Menu Service | Displays available food items |
| Order Details Service | Handles order creation and details |
| Track Delivery Service | Tracks delivery status |
| Notification Service | Sends notifications to users |

Each service runs inside its **own Docker container**.

---

# 📦 Project Structure

```
foodpanda/
│
├── docker-compose.yml
│
├── login-service/
│   ├── Dockerfile
│   ├── package.json
│   └── server.js
│
├── foodmenu-service/
│   ├── Dockerfile
│   ├── package.json
│   └── server.js
│
├── orderdetails-service/
│   ├── Dockerfile
│   ├── package.json
│   └── server.js
│
├── trackdelivery-service/
│   ├── Dockerfile
│   ├── package.json
│   └── server.js
│
└── notification-service/
    ├── Dockerfile
    ├── package.json
    └── server.js
```

Each folder represents **one microservice**.

---

# ⚙️ Technologies Used

- Docker
- Docker Compose
- Node.js
- Express.js

---

# 🚀 Running the Application

### Step 1 — Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/foodpanda-microservices-demo.git
cd foodpanda-microservices-demo
```

---

### Step 2 — Start all services

```bash
docker-compose up --build
```

Docker will automatically:

1. Build images for each service  
2. Create containers  
3. Start all services  

---

# 🌐 Access the Services

Open the following URLs in your browser:

| Service | URL |
|------|------|
Login Service | http://localhost:5001 |
Food Menu Service | http://localhost:5002 |
Order Details Service | http://localhost:5003 |
Track Delivery Service | http://localhost:5004 |
Notification Service | http://localhost:5005 |

Example response:

```
Login Service is running
```

---

# 🧪 Microservices Failure Demonstration

This is the **main learning objective of the project**.

We will simulate a **service failure**.

### Stop Notification Service

```bash
docker stop notification-service
```

Now check the services again.

| Service | Status |
|------|------|
Login | ✅ Working |
Food Menu | ✅ Working |
Order Details | ✅ Working |
Track Delivery | ✅ Working |
Notification | ❌ Stopped |

This demonstrates:

> **Failure of one microservice does not break the entire application.**

---

# 🔥 Stronger Demonstration (Remove a Service)

You can even remove a service completely.

```bash
docker rm -f notification-service
```

Now check running containers.

```bash
docker ps
```

You will see that **all other services are still running**.

---

# 📊 Verify Running Containers

```bash
docker ps
```

Example output:

```
login-service
foodmenu-service
orderdetails-service
trackdelivery-service
```

Notification service will be missing if removed.

---

# 🧑‍🏫 Trainer Explanation (For Classroom)

In **Monolithic Architecture**

```
Login + Menu + Order + Delivery + Notification
(all inside one application)
```

If one module crashes, the **entire application may fail**.

Example:

```
Notification crashes → Whole system affected
```

---

In **Microservices Architecture**

Each module runs independently.

```
Login Service
Food Menu Service
Order Service
Tracking Service
Notification Service
```

Each service runs inside its **own container**.

So if one service fails:

```
Notification Service ❌
```

Other services continue:

```
Login Service ✅
Food Menu Service ✅
Order Service ✅
Tracking Service ✅
```

This is the **main advantage of Microservices Architecture**.

---

# 🐳 Useful Docker Commands

Start containers

```bash
docker-compose up --build
```

Run in background

```bash
docker-compose up -d
```

List containers

```bash
docker ps
```

Stop a container

```bash
docker stop notification-service
```

Remove container

```bash
docker rm -f notification-service
```

Stop everything

```bash
docker-compose down
```

---

# 🎯 Learning Outcome

After this demo, students will understand:

- What Microservices Architecture is
- How Docker runs independent services
- Why Microservices improve system reliability
- How failure isolation works
- How Docker containers support Microservices architecture

---

# 📌 Best Use Case

This project is perfect for:

- DevOps Training
- Docker Workshops
- Microservices Introduction
- Classroom Demonstrations

---

⭐ If this project helps you in learning, consider giving the repository a **star**.
