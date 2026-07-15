# 🚀 Del Company – Portfólio de Serviços de Tecnologia

[![GitHub last commit](https://img.shields.io/github/last-commit/eli-bernardi/Del-Company)](https://github.com/eli-bernardi/Del-Company/commits/main)
[![GitHub repo size](https://img.shields.io/github/repo-size/eli-bernardi/Del-Company)](https://github.com/eli-bernardi/Del-Company)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Website institucional desenvolvido para apresentar serviços de tecnologia, projetos, fundamentos de programação, robótica industrial e muito mais. Layout moderno com tema escuro, responsivo e interativo.

🔗 **Acesse o site online:** [del-company.vercel.app](https://del-company.vercel.app)

---

## 📋 Conteúdo

- [Visão Geral](#visão-geral)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Como Executar Localmente](#como-executar-localmente)
- [Páginas Disponíveis](#páginas-disponíveis)
- [Destaques Técnicos](#destaques-técnicos)
- [Licença](#licença)
- [Contato](#contato)

---

## 🧠 Visão Geral

O **Del Company** é um portfólio digital que reúne os conhecimentos e projetos da empresa fictícia Del Company. O site serve como vitrine de serviços e também como plataforma educativa, com seções detalhadas sobre:

- Lógica de programação
- Banco de dados
- Redes de computadores
- Eletrônica e Arduino
- Tecnologia da informação
- **Robotização industrial** – catálogo completo de robôs (Cartesiano, SCARA, Articulado, Cilíndrico, Delta, Polar e Colaborativo) com características técnicas, aplicações e integração IoT.

O design é escuro, com tons de vermelho (#d62828), animações suaves, efeitos de mouse hover e uma navegação fluida entre as páginas.

---

## ✨ Funcionalidades

- **Menu responsivo** com dropdown para Serviços e Robotização
- **Animações de revelação** (Intersection Observer) ao rolar a página
- **Efeito de brilho vermelho** que segue o mouse nos cards
- **Carrossel interativo** na página de Serviços
- **Programas funcionais em JavaScript** (ordenadores, calculadora de IMC, conversor de temperatura, busca linear etc.)
- **Cálculo de circuitos elétricos** em tempo real
- **Comparação de modelos OSI e TCP/IP**
- **Linha do tempo da história da eletrônica**
- **Seção "Robotização"** com 7 modelos de robôs industriais, incluindo especificações, aplicações e fabricantes reais
- **Catálogo de projetos anteriores** com links externos
- **Código fonte comentado** e organizado
- **Totalmente responsivo** (mobile, tablet, desktop)

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia     | Uso no projeto                                |
|----------------|-----------------------------------------------|
| **HTML5**      | Estrutura semântica das páginas               |
| **CSS3**       | Estilização, animações, responsividade (sem frameworks CSS) |
| **JavaScript** | Interatividade, menus, carrossel, cálculos, efeitos visuais |
| **Tailwind CSS**| Apenas como utilitário de background e cores (via CDN) |
| **Google Fonts (Inter)** | Tipografia moderna e limpa          |
| **Google Maps Embed** | Mapa de localização na página de contato |
| **Vercel**     | Hospedagem e deploy contínuo                  |
| **Git & GitHub** | Versionamento e portfólio público           |

---

## 📁 Estrutura do Projeto
Del-Company/
├── index.html # Página inicial (Home)
├── service.html # Página de serviços e projetos
├── contato.html # Página de contato e canais
├── robotizacao.html # Introdução à Robotização e IoT
├── css/
│ ├── home.css
│ ├── service.css
│ ├── contato.css
│ ├── banco_dados.css
│ ├── fundamento_eletronica.css
│ ├── fundamento_rede.css
│ ├── logica_computacional.css
│ ├── logica_programacao.css
│ ├── tecnologia_informacao.css
│ └── robotizacao.css # CSS unificado para páginas de robôs
├── js/
│ ├── home.js
│ ├── service.js
│ ├── contato.js
│ ├── banco_dados.js
│ ├── fundamento_eletronica.js
│ ├── fundamento_rede.js
│ ├── logica_computacional.js
│ ├── logica_programacao.js
│ ├── tecnologia_informacao.js
│ └── robotizacao.js # JS unificado para menu e efeitos
├── servicos/ # Páginas de serviços específicos
│ ├── logica_programacao.html
│ ├── fundamentos_rede.html
│ ├── logica_computacional.html
│ ├── fundamentos_eletronica.html
│ ├── tecnologia_informacao.html
│ └── banco_dados.html
├── robotizacao/ # Páginas dos 7 modelos de robôs
│ ├── robo_cartesiano.html
│ ├── robo_scara.html
│ ├── robo_articulado.html
│ ├── robo_cilindrico.html
│ ├── robo_delta.html
│ ├── robo_polar.html
│ └── robo_colaborativo.html
├── img/ # Imagens e ilustrações
│ ├── dell.png (favicon)
│ ├── robos/ # Imagens dos robôs e fabricantes
│ └── ... # Logos, diagramas, fotos da equipe
└── README.md

text

---

## 🚀 Como Executar Localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/eli-bernardi/Del-Company.git
Acesse a pasta do projeto:

bash
cd Del-Company
Abra o arquivo index.html em seu navegador, ou utilize uma extensão como Live Server no VS Code para uma melhor experiência.

Não são necessárias dependências ou instalação de pacotes. O projeto é puramente front‑end.

📄 Páginas Disponíveis
🏠 Institucionais
Home – apresentação, equipe, serviços, localização

Serviços – lista de serviços e catálogo de projetos

Contato – canais de comunicação e formulário

📚 Conteúdo Técnico
Lógica de Programação – linguagens interpretadas/compiladas, programas interativos

Banco de Dados – SGBDs, modelagem DER/MER, SQL

Sistemas de Rede – hardware, protocolos, modelos OSI/TCP‑IP, código Node.js

Lógica Computacional – fluxogramas, algoritmos, Portugol

Fundamentos de Eletrônica – componentes, timeline, cálculo de circuitos, Arduino

Tecnologia da Informação – componentes de PC, sistemas operacionais, softwares de escritório

🤖 Robotização (Indústria 4.0)
Introdução – IoT, robótica industrial, automação

Robô Cartesiano

Robô SCARA

Robô Articulado

Robô Cilíndrico

Robô Delta

Robô Polar

Robô Colaborativo (Cobot)

🔧 Destaques Técnicos
Código JavaScript moderno (ES6+) sem dependências externas para lógica.

Utilização de Intersection Observer para animações de scroll, com fallback.

Mouse tracking com mousemove aplicando gradiente radial vermelho nos cards – efeito sutil que enriquece a experiência do usuário.

Programas interativos na página de Lógica de Programação (Bubble Sort, IMC, conversão de temperatura, etc.) totalmente funcionais.

Cálculo de circuitos elétricos na página de Eletrônica (Lei de Ohm, potência).

Carrossel puro em JavaScript na página de Serviços, responsivo e com navegação por botões.

Organização do CSS utilizando classes reutilizáveis e variáveis de cores no padrão #d62828.

📝 Licença
Distribuído sob a licença MIT. Veja LICENSE para mais informações.

📬 Contato
Eliel Bernardi

📷 https://www.instagram.com/elielbrnrd/

💬 https://api.whatsapp.com/send/?phone=5548991013184&text&type=phone_number&app_absent=0

🐙 https://github.com/eli-bernardi

✉  elielbernardi0012@gmail.com
