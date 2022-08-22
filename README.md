# DrivenOps

### Descrição
- Nesse projeto, recebi o back-end e o front-end prontos de um simples sorteador.
- A missão era cuidar da infraestrutura de *deploy* da aplicação.
- Conceitos e Tecnologias:
  - Docker + Docker Compose
  - NGINX + proxy reverso
  - CI, CD, GitHub Actions
  - Amazon Web Services (EC2, Route 53)


### Etapas
- [x] Criação e orquestração de containers
  - Backend: Postgres, Node
  - Frontend: React, NGINX
- [x] Deploy
  - Aluguel de máquina na AWS (EC2) e conexão via SSH
  - Disponibilização da aplicação na porta 80 (HTTP)
  - Proxy reverso: NGINX gerencia acesso ao back-end pela rota `/api`
- [x] GitHub Workflows
  - CI: Testes automáticos a cada novo PR na main
  - CD: Deploy automático a cada commit na main
- [x] Domínio customizado
  - Registro e configuração de domínio
  - [Acesse aqui](qualquerdominiodeteste.cf)
