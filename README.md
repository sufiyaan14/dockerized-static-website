# 🚀 Dockerized Static Website

This project demonstrates how to containerize a static website using Docker and Nginx as part of my DevOps Internship.

The goal of this project was to understand:
- Docker fundamentals
- Containerization workflow
- Docker image creation
- Container lifecycle management
- Port mapping and application deployment

---

# 📌 Project Overview

This project demonstrates how to containerize and deploy a static website using Docker and Nginx as part of a DevOps learning workflow.

The website is served through Nginx and exposed to the browser using Docker port mapping.

---

# 🛠️ Technologies Used

- Docker
- Nginx
- HTML
- CSS
- JavaScript
- Linux (Ubuntu)

---

# ⚙️ Dockerfile

```dockerfile
FROM nginx:alpine

COPY ./app /usr/share/nginx/html

EXPOSE 80
```

---

# 🧠 Dockerfile Explanation

## `FROM nginx:alpine`
Uses the lightweight Alpine-based Nginx image from Docker Hub for smaller image size and faster deployments.

## `COPY ./app /usr/share/nginx/html`
Copies website files into the default Nginx web directory.

## `EXPOSE 80`
Exposes port 80 inside the container.

---

# 🐳 Docker Commands Used

## Build Docker Image

```bash
docker build -t static-site .
```

## List Docker Images

```bash
docker images
```

## Run Docker Container

```bash
docker run -d -p 8080:80 --name dockerized-static-web static-site
```

## List Running Containers

```bash
docker ps
```

## Stop Container

```bash
docker stop dockerized-static-web
```

## Start Container

```bash
docker start dockerized-static-web
```

## Remove Container

```bash
docker rm dockerized-static-web
```

---

# 🌐 Access Application

Open in browser:

```text
http://localhost:8080
```

---

# 📸 Screenshots

## Project Structure
<img width="439" height="335" alt="docker-tree" src="https://github.com/user-attachments/assets/5ed403a7-4bdb-471f-861e-f741eb52d9a2" />

---

## Docker Version
<img width="1422" height="474" alt="docker-version" src="https://github.com/user-attachments/assets/7cd04c9f-638a-4620-825a-93c64649ed29" />

---

## Docker Images
<img width="1423" height="406" alt="docker-images" src="https://github.com/user-attachments/assets/92055230-064e-4edb-b7a9-7fa453fa9101" />

---

## Running Containers
<img width="1423" height="406" alt="docker-containers" src="https://github.com/user-attachments/assets/bbf84744-ec4a-4a8a-808f-e648e30c9e20" />

---

## Website Running in Browser
<img width="1855" height="1040" alt="website-running" src="https://github.com/user-attachments/assets/9827e6e0-b420-460a-8514-c004176b3f31" />

---

# 💡 Key Learnings

- Understanding Docker images and containers
- Writing and using Dockerfiles
- Building Docker images
- Running and managing containers
- Port mapping between host and container
- Using Nginx to serve static content
- Basic container lifecycle management

---

# 🚀 Future Improvements

- Add Docker Compose
- Deploy container on AWS EC2
- Add CI/CD pipeline using GitHub Actions
- Push Docker image to Docker Hub

---

# 🤝 Acknowledgment

This project was completed as part of my DevOps Internship to strengthen my understanding of Docker and containerization workflows.

---

# 📬 Connect With Me

- GitHub: https://github.com/sufiyaan14
- LinkedIn: https://www.linkedin.com/in/sufiyaan-hussain/
