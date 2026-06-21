\# 🎬 Mini Netflix — End-to-End DevOps Project



A complete movie streaming web application built to demonstrate

end-to-end DevOps engineering skills.



!\[Mini Netflix](https://img.shields.io/badge/DevOps-Project-red)

!\[Docker](https://img.shields.io/badge/Docker-Ready-blue)

!\[Kubernetes](https://img.shields.io/badge/Kubernetes-Deployed-blue)

!\[CI/CD](https://img.shields.io/badge/CI%2FCD-GitHub%20Actions-green)



\---



\## 🛠️ Tech Stack



| Tool | Purpose |

|------|---------|

| Node.js + Express | Backend web server |

| MongoDB | Database |

| Docker | Containerisation |

| Docker Compose | Local multi-service setup |

| GitHub Actions | CI/CD pipeline |

| Terraform | Cloud infrastructure (AWS) |

| Ansible | Server configuration |

| Kubernetes | Container orchestration |

| Prometheus | Metrics collection |

| Grafana | Monitoring dashboards |

| AWS EC2 | Cloud server |



\---



\## 📁 Project Structure

mini-netflix/



├── server.js                    # Node.js backend



├── package.json                 # Dependencies



├── Dockerfile                   # Docker image definition



├── docker-compose.yml           # Local multi-service setup



├── .github/



│   └── workflows/



│       └── deploy.yml           # CI/CD pipeline



├── public/



│   ├── index.html               # Frontend



│   ├── style.css                # Netflix-style UI



│   └── app.js                   # Frontend logic



├── terraform/

│   ├── main.tf                  # AWS infrastructure



│   ├── variables.tf             # Configuration variables



│   └── outputs.tf               # Output values



├── ansible/



│   ├── inventory.ini            # Server inventory



│   └── playbook.yml             # Server configuration



├── k8s/



│   ├── mongo-deployment.yml     # MongoDB on K8s



│   └── app-deployment.yml       # App on K8s



└── monitoring/



└── prometheus-simple.yml    # Prometheus + Grafana



\---



\## 🚀 How to Run This Project



\### Prerequisites



Make sure you have these installed:

\- \[Node.js 20+](https://nodejs.org)

\- \[Docker Desktop](https://www.docker.com/products/docker-desktop)

\- \[Git](https://git-scm.com)

\- \[Minikube](https://minikube.sigs.k8s.io/docs/start)

\- \[kubectl](https://kubernetes.io/docs/tasks/tools)

\- \[Terraform](https://developer.hashicorp.com/terraform/install)

\- \[AWS CLI](https://aws.amazon.com/cli)



\---



\### Option 1 — Run Locally with Node.js



```bash

\# Clone the repository

git clone https://github.com/anshika8998/mini-netflix.git

cd mini-netflix



\# Install dependencies

npm install



\# Start the app

node server.js

```



Open http://localhost:3000



\---



\### Option 2 — Run with Docker



```bash

\# Clone the repository

git clone https://github.com/anshika8998/mini-netflix.git

cd mini-netflix



\# Build Docker image

docker build -t mini-netflix:v1 .



\# Run container

docker run -p 3000:3000 mini-netflix:v1

```



Open http://localhost:3000



\---



\### Option 3 — Run with Docker Compose (App + MongoDB)



```bash

\# Clone the repository

git clone https://github.com/anshika8998/mini-netflix.git

cd mini-netflix



\# Start all services

docker compose up --build

```



Open:

\- App: http://localhost:3000

\- MongoDB UI: http://localhost:8081



\---



\### Option 4 — Run on Kubernetes (Minikube)



```bash

\# Clone the repository

git clone https://github.com/anshika8998/mini-netflix.git

cd mini-netflix



\# Start Minikube

minikube start



\# Deploy MongoDB

kubectl apply -f k8s/mongo-deployment.yml



\# Deploy App

kubectl apply -f k8s/app-deployment.yml



\# Check pods are running

kubectl get pods



\# Access the app

minikube service mini-netflix-service

```



\---



\### Option 5 — Deploy to AWS with Terraform + Ansible



```bash

\# Configure AWS credentials

aws configure



\# Generate SSH key

ssh-keygen -t rsa -b 2048 -f \~/.ssh/mini-netflix-key



\# Provision AWS server

cd terraform

terraform init

terraform apply



\# Note the server IP from output

\# server\_ip = "x.x.x.x"



\# Configure server with Ansible

cd ../ansible

ansible-playbook -i inventory.ini playbook.yml

```



Open http://YOUR\_SERVER\_IP:3000



\---



\### Option 6 — Set up Monitoring



```bash

\# Start Minikube first

minikube start



\# Create monitoring namespace

kubectl create namespace monitoring



\# Deploy Prometheus + Grafana

kubectl apply -f monitoring/prometheus-simple.yml



\# Access Prometheus

minikube service prometheus -n monitoring



\# Access Grafana

minikube service grafana -n monitoring



Grafana login:

Username:admin

Password:admin



\---------------------------------------------------------------------------



\## 🔄 CI/CD Pipeline



Every push to `main` branch automatically:

git push → GitHub Actions → Build Docker Image → Push to Docker Hub



Required GitHub Secrets:



DOCKER\_USERNAME = your Docker Hub username



DOCKER\_PASSWORD = your Docker Hub access token



\------------------------------------------------------------------------------



\## Architecture



Browser

│

▼



Node.js App (port 3000)

│

▼



MongoDB (port 27017)

Monitoring:



Prometheus (port 9090) → Grafana (port 3000)



\---



\## 🔐 Security Notes



\- Never commit `.env` files

\- Never commit AWS credentials

\- Use GitHub Secrets for sensitive values

\- Use SSH keys instead of passwords

\- Rotate tokens regularly



\---



\## 👩‍💻 Author



\*\*Anshika Tyagi\*\*

\- GitHub: \[@anshika8998](https://github.com/anshika8998)

\- Docker Hub: \[anshikatyagi899](https://hub.docker.com/u/anshikatyagi899)



\---



\## 📝 License



This project is open source and available under the MIT License.





