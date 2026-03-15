# 🍔 FoodPanda Microservices Demo using Docker

This project demonstrates a simple **Microservices Architecture using Docker**.

The main goal of this project is to show students that:

> In microservices, if one module fails, the remaining modules can still continue working.

This demo simulates a FoodPanda-style application with the following services:

- Login Service
- Food Menu Service
- Order Details Service
- Track Delivery Service
- Notification Service

Each service runs in its own Docker container.

---

# 📦 Project Structure

```bash
foodpanda/
│
├── docker-compose.yml
├── login-service/
│   ├── Dockerfile
│   ├── package.json
│   └── server.js
├── foodmenu-service/
│   ├── Dockerfile
│   ├── package.json
│   └── server.js
├── orderdetails-service/
│   ├── Dockerfile
│   ├── package.json
│   └── server.js
├── trackdelivery-service/
│   ├── Dockerfile
│   ├── package.json
│   └── server.js
└── notification-service/
    ├── Dockerfile
    ├── package.json
    └── server.js
```

---

# ⚙️ Technologies Used

- Docker
- Docker Compose
- Node.js
- Express.js
- Axios

---

# 🚀 How to Run

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/foodpanda-microservices-demo.git
cd foodpanda-microservices-demo
```

Start all services:

```bash
docker-compose up --build
```

Or run in background:

```bash
docker-compose up --build -d
```

---

# 🌐 Service URLs

- Login Service → http://localhost:5001
- Food Menu Service → http://localhost:5002
- Order Details Service → http://localhost:5003
- Track Delivery Service → http://localhost:5004
- Notification Service → http://localhost:5005/notify

---

# 🔁 How This Demo Works

The most important part of this project is the **Order Details Service**.

When you open:

```bash
http://localhost:5003
```

The Order Details Service internally calls the Notification Service.

If Notification Service is running, the response will show:

```json
{
  "service": "Order Details Service",
  "order": "Order placed successfully",
  "item": "Chicken Biryani",
  "notification": "Notification sent successfully"
}
```

---

# 💥 Failure Demo

Now stop the Notification Service:

```bash
docker stop notification-service
```

Open Order Details Service again:

```bash
http://localhost:5003
```

Now the output becomes:

```json
{
  "service": "Order Details Service",
  "order": "Order placed successfully",
  "item": "Chicken Biryani",
  "notification": "Notification service is unavailable, but order still works"
}
```

This proves that:

> Even if one microservice fails, the whole application does not stop.

This is called **fault isolation** or **graceful degradation** in microservices.

---

# 🧑‍🏫 Trainer Explanation

In monolithic architecture, if one important module crashes, the whole application may be affected.

In microservices architecture, each module runs independently in its own container.

So if Notification Service fails:

- Login still works ✅
- Food Menu still works ✅
- Order still works ✅
- Track Delivery still works ✅
- Only Notification fails ❌

This is the biggest advantage of microservices.

---

# 🐳 Useful Docker Commands

Start services:

```bash
docker-compose up --build
```

Run in background:

```bash
docker-compose up -d
```

Check running containers:

```bash
docker ps
```

Stop one service:

```bash
docker stop notification-service
```

Start again:

```bash
docker start notification-service
```

Remove a service:

```bash
docker rm -f notification-service
```

Stop everything:

```bash
docker-compose down
```

---

# 🎯 Learning Outcome

After this demo, students will understand:

- What microservices are
- How Docker runs microservices in separate containers
- How one service can call another
- What happens when one service fails
- Why microservices are more reliable than monolithic applications

---

# 📌 Best Use Case

This project is useful for:

- Docker classroom demos
- DevOps workshops
- Microservices introduction sessions
- Beginner system design explanation

---

⭐ If this project helped you, consider giving it a star.
