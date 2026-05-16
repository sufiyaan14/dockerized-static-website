# Docker Commands Used

## Build Docker Image

```bash
docker build -t static-site .
```

---

## Run Docker Container

```bash
docker run -d -p 8080:80 --name dockerized-static-web static-site
```

---

## List Docker Images

```bash
docker images
```

---

## List Running Containers

```bash
docker ps
```

---

## Stop Container

```bash
docker stop dockerized-static-web
```

---

## Remove Container

```bash
docker rm dockerized-static-web
```