# Alimul Fazal Nabil — Futuristic AI Engineering Portfolio

A modern, high-performance, responsive AI Solutions Engineer portfolio website designed with a dark navy & near-black aesthetic, electric blue and vibrant cyan glows, interactive architectural schematics, domain-filtered project gallery, light/dark mode persistence, and zero build dependencies.

Fully optimized and compatible with **GitHub Pages**.

---

## Directory & File Structure

```
alimulfazalnabil.github.io-main/
├── .github/
│   └── workflows/
│       └── deploy-pages.yml  # GitHub Actions automated Pages deployment
├── .gitignore                # Git ignore rules
├── index.html                # Semantic HTML5 layout with all 8 core sections
├── profile.jpg               # Professional portrait image
├── Profile.pdf               # Verified resume / credentials document
├── README.md                 # Project documentation & local preview guide
└── assets/
    ├── css/
    │   └── styles.css        # Futuristic dark/light theme, typography, cards & responsive queries
    └── js/
        └── main.js           # Theme toggle persistence, mobile nav, and interactive project filters
```

---

## Portfolio Architecture & Sections

1. **Hero & Professional Identity**:
   - Status Indicator: `AVAILABLE FOR RELEVANT OPPORTUNITIES`
   - Primary Identity: **AI Solutions Engineer | GenAI • RAG • AI Agents • MLOps**
   - Core Value Proposition: Turning AI capabilities into practical, scalable, and reliable cloud-native business solutions.
   - Quick Stat Metrics: 7+ Years Infrastructure Foundations, 5+ Production/Open-Source Projects, 2 Peer-Reviewed Publications, C2 English Proficient (EF SET 72/100).
   - Direct Actions: "Explore Selected Work", "Connect on LinkedIn", "Download Resume (PDF)".
   - Architecture Core Showcase: Live focus modules and technical stack overview.

2. **About & Methodology (The Engineering Loop)**:
   - Profile showcase with portrait asset (`profile.jpg`).
   - Detailed background grounding AI engineering in 7+ years of IT infrastructure, cloud engineering, automation, and DevOps.
   - 5-stage Engineering Loop:
     - `01 / Problem Scoping & Data Foundations`
     - `02 / Hybrid Retrieval & Knowledge Grounding`
     - `03 / Reasoning & Multi-Agent Workflows`
     - `04 / Containerization, IaC & CI/CD`
     - `05 / Observability, Telemetry & Scale`

3. **Featured AI & Software Projects**:
   - **LLM Enterprise RAG Knowledge Platform**: Multi-tenant RAG reference architecture with interactive pipeline schematic (`DOCS → EMBEDDINGS (pgvector) → HYBRID SEARCH (BM25 + Dense) → CROSS-ENCODER → GROUNDED ANSWER`).
   - **AI Traffic Signal Coordination (MoviSabio)**: Real-time urban intersection coordination and simulation models (SUMO/TraCI, CARLA, PostGIS).

4. **Project Gallery with Interactive Filters**:
   - Filter chips: `All Projects`, `Generative AI & RAG`, `Applied ML & Analytics`, `Computer Vision & Robotics`, `Cloud & DevOps`.
   - Real-time client-side instant filtering via `assets/js/main.js`.
   - Verified project repositories:
     - `LLM-enterprise-rag-knowledge-platform`
     - `MoviSabio`
     - `Autonomous-Lane-Detection`
     - `heart-disease-prediction`
     - `azure-terraform-cicd-foundation`
     - `Computer-Vision-Projects`
     - `Python-Projects`
     - Directory card linking to all 60+ GitHub repositories.

5. **Professional Experience**:
   - High-tech vertical connected timeline with glowing markers:
     - **March 2026 — Present**: `AI & ML Instructor` · ReDI School of Digital Integration (Berlin / Remote).
     - **January 2026 — Present**: `Chief Technology Officer & Co-founder` · MoviSabio.
     - **July 2023 — Present**: `Infrastructure & Cloud Systems Engineer` · Energy Crown Bangladesh Ltd (99.9% uptime, Terraform & Ansible 45% efficiency, AI-assisted log analysis 30% alert reduction).
     - **January 2019 — June 2023**: `Information Technology Support Engineer` · Energy Crown Bangladesh Ltd.
     - **January 2022 — December 2022**: `Graduate Student Researcher` · Cox’s Bazar International University.

6. **Education, Publications & Credentials**:
   - **Academic**:
     - `Bachelor of Science in Computer Engineering` · Cox’s Bazar International University (July 2017 – December 2021). CGPA: 3.50 / 4.00, full academic scholarship, founding alumni member.
     - `Higher Secondary Certificate (HSC), Science` · Cox's Bazar Government College (2013 – 2014).
   - **Peer-Reviewed Publications**:
     - *Implementation of IoT Based Notice Board* (IRJMETS, Nov 2022) with direct PDF link.
     - *Implementation of Online Shopping and Auction System (SPAROO)* (IRJET, Nov 2022) with direct PDF link.
   - **Verified Certifications**:
     - Microsoft Azure Fundamentals (AZ-900)
     - Micro1 Certified Cloud Systems Engineer
     - Python 3 Programming Specialization
     - Developing Front-End Apps with React
     - Learning PowerShell
     - Toastmasters International Public Speaking Skills Certificate
     - Turkish Diyanet Foundation Scholarship
     - EF SET English Certificate 72/100 (C2 Proficient)
     - Continuous study: Azure Administrator (AZ-104), Azure AI Engineer (AI-102), Azure Developer (AZ-204), Azure Solutions Architect (AZ-305).

7. **Technical Skills Matrix**:
   - AI & Machine Learning, Software & Data Engineering, Cloud / DevOps / Infrastructure, and Intelligent Systems & Computer Vision.

8. **Contact & Social**:
   - Direct Email (`alimul.nabil@gmail.com`), LinkedIn, GitHub, LeetCode, MoviSabio, and Resume PDF download.

---

## Local Preview

To preview the website locally in any browser:

```bash
# From within this directory (H:\Software Projects\alimulfazalnabil.github.io-main)
python -m http.server 8000
```

Then visit:
```
http://localhost:8000
```

Or open `index.html` directly in your web browser.

---

## GitHub Pages Deployment

The repository includes [.github/workflows/deploy-pages.yml](.github/workflows/deploy-pages.yml) for automated deployments:

1. When you are satisfied with the local preview, stage and commit the changes:
   ```bash
   git add .
   git commit -m "feat: redesign portfolio into futuristic AI engineering experience"
   ```
2. Push to GitHub:
   ```bash
   git push origin main
   ```
3. GitHub Actions will build and deploy the site automatically to:
   `https://alimulfazalnabil.github.io/`
