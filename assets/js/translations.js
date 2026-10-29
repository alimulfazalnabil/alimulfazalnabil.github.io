/**
 * Bilingual Translation Dictionary (English & German)
 * Authoritative translation source for the portfolio of Alimul Fazal Nabil.
 * 
 * Rules:
 * 1. Consistent language codes: 'en' and 'de'.
 * 2. Established technical names (FastAPI, Kubernetes, Terraform, RAG, OpenCV, PyTorch, Docker, etc.) remain in English.
 * 3. Project IDs (e.g. PRJ-GENAI-001), repository URLs, and personal brand names are strictly preserved.
 * 4. High-quality, idiomatic, professional German technical phrasing.
 */
(() => {
  const TRANSLATIONS = {
    en: {
      // General & Common
      brandName: "Alimul Fazal Nabil",
      statusAvailable: "AVAILABLE FOR RELEVANT OPPORTUNITIES",
      skipLink: "Skip to main content",
      themeToggleAria: "Toggle theme",
      liveClockUtc: "Current local time in Dhaka (UTC+6)",

      // Navigation Links
      navAbout: "About",
      navFeatured: "Featured",
      navProjects: "Selected Projects",
      navExperience: "Experience",
      navEducation: "Education & Credentials",
      navMore: "More",
      navMedia: "Media Showcase",
      navSkills: "Skills & Capabilities",
      navServices: "Professional Services",
      navEstimator: "Budget Estimator",
      navProposal: "AI Proposal Generator",
      navPortfolio: "Full Portfolio (27 Projects) ↗",
      navPortfolioOverview: "Overview",
      navPortfolioAll: "All Projects (27)",
      navContact: "Contact",
      navResume: "Resume (PDF) ↓",
      navSearch: "Search",
      navSearchMobile: "Search Portfolio & Skills",
      mobileLangLabel: "Language / Sprache:",

      // Hero Section (#home)
      heroStatus: "AVAILABLE FOR RELEVANT OPPORTUNITIES",
      heroHeading: "Building Scalable,<br><span class=\"gradient-text\">Intelligent AI Systems</span><br>for Enterprise Impact.",
      heroSubtitle: "AI SOLUTIONS ENGINEER | GENAI · RAG · AI AGENTS · MLOPS",
      heroLead: "I bridge machine learning and production engineering: turning modern AI capabilities—from RAG architectures and autonomous agents to computer vision—into resilient, scalable cloud systems that solve genuine operational challenges.",
      heroBtnWork: "Explore Selected Work <span aria-hidden=\"true\">↘</span>",
      heroBtnLinkedIn: "Connect on LinkedIn <span aria-hidden=\"true\">↗</span>",
      heroBtnResume: "Download Resume <span aria-hidden=\"true\">↓</span>",
      heroMetricYears: "YEARS INFRASTRUCTURE",
      heroMetricRepos: "PRODUCTION & OPEN REPOS",
      heroMetricPapers: "PEER-REVIEWED PAPERS",
      heroMetricEnglish: "EF SET ENGLISH PROFICIENT",
      heroCardKicker: "01 / ARCHITECTURE CORE",
      heroCardStatus: "ACTIVE PRODUCTION",
      heroFocus1Title: "Generative AI & RAG",
      heroFocus1Desc: "Hybrid retrieval (dense + sparse BM25), pgvector, reranking, and citation grounding.",
      heroFocus2Title: "Autonomous AI Agents",
      heroFocus2Desc: "Tool calling, multi-agent orchestration, structured output, and deterministic reasoning.",
      heroFocus3Title: "MLOps & Cloud Systems",
      heroFocus3Desc: "Microsoft Azure, Docker, Kubernetes, Terraform IaC, and automated CI/CD pipelines.",
      heroFocus4Title: "Computer Vision & Robotics",
      heroFocus4Desc: "OpenCV perception, YOLO object tracking, ROS 2, and CARLA/SUMO simulation.",

      // Section 02: About & Methodology (#about)
      aboutEyebrow: "02 / ABOUT & METHODOLOGY",
      aboutTitle: "Systems Thinking Meets<br><span class=\"gradient-text\">Applied Intelligence.</span>",
      aboutDesc: "Operational engineering experience applied directly to the frontier of artificial intelligence.",
      aboutBadge: "Alimul Fazal Nabil · AI Solutions Engineer",
      aboutLead: "I am an AI Solutions Engineer grounded in over 7 years of infrastructure, cloud architecture, automation, and DevOps experience.",
      aboutP1: "AI solutions cannot live in an isolated notebook: they require robust data ingestion, fast vector retrieval, resilient APIs, secure authentication, containerized orchestration, and rigorous telemetry in production.",
      aboutP2: "My progression connects the entire engineering stack: <strong>Python → Machine Learning → APIs → LLMs → RAG → Vector Databases → AI Agents → Evaluation → MLOps</strong>. Beyond building software, I teach applied AI at ReDI School of Digital Integration, serve as Adjunct Faculty at Cox's Bazar International University, and co-founded MoviSabio to advance intelligent transportation systems.",
      lifecycleEyebrow: "HOW I BUILD AI SOLUTIONS · 6-STAGE LIFECYCLE",
      lifecycleHeading: "Systematic Engineering Pipeline from Scope to Scale",

      // Section 10: AI Digital Twin (#ai-twin)
      aiTwinEyebrow: "INTERACTIVE AGENT · LOCAL CLIENT-SIDE RETRIEVAL",
      aiTwinTitle: "Query My <span class=\"gradient-text\">AI Digital Twin.</span>",
      aiTwinDesc: "Explore my engineering work, technical expertise, projects, and professional background through a private, interactive knowledge interface.",
      aiTwinBadge: "LOCAL KNOWLEDGE ENGINE",
      aiTwinStatus: "Local processing enabled · Grounded across 27 projects · Privacy-first",
      aiTwinArchitectureBtn: "ℹ️ Architecture",
      aiTwinClearBtn: "Clear Chat",
      aiTwinInfoHeading: "Deterministic Local Retrieval Engine",
      aiTwinInfoText: "Answers are computed 100% locally in your browser using deterministic layered retrieval: intent classification, entity & alias resolution, TF-IDF scoring, and structured composition grounded strictly in Alimul's 27 documented projects and career history. No remote AI or embedding API is called, and no visitor data leaves your device.",
      aiTwinPlaceholder: "Ask about RAG architectures, Azure infra, CV models, project comparison, or roles...",
      aiTwinSendBtn: "Send Inquiry →",
      aiTwinDisclaimer: "🔒 Runs locally in browser · No external AI API round trip · Grounded across 27 documented projects · Zero visitor data leakage",
      aiTwinGreeting: "Hi! I am Alimul's <strong>AI Twin</strong>, running locally in your browser through a deterministic knowledge retrieval engine. Ask me anything about Alimul's 27 verified projects, Enterprise RAG architectures, Azure & Terraform infrastructure, computer vision systems, or engineering qualifications.",
      aiTwinGreetingSub: "Click any of the suggested prompts below, ask for project comparisons, or paste a target job description for a grounded suitability analysis!",

      // Section 03: Flagship Initiatives (#featured)
      featuredEyebrow: "03 / FLAGSHIP INITIATIVES",
      featuredTitle: "Architectures Built For<br><span class=\"gradient-text\">Real Enterprise Scenarios.</span>",
      featuredDesc: "Deep dive into flagship production reference platforms and live engineering initiatives.",
      featuredAllBtn: "Explore All 27 Projects →",
      featuredBadge1: "FLAGSHIP ARCHITECTURE",
      featuredBadge2: "CO-FOUNDER & CTO",
      featuredReadCase: "Read Deep Case Study →",
      featuredViewCode: "View Code ↗",
      featuredVisitMoviSabio: "Visit MoviSabio Platform ↗",

      // Architecture Impact (#architecture-impact)
      impactEyebrow: "ENGINEERING IMPACT · BEFORE VS AFTER",
      impactTitle: "Architectural Rationale &<br><span class=\"gradient-text\">Measurable Transformation.</span>",
      impactDesc: "See how disciplined engineering solves baseline limitations across flagship RAG, perception, and clinical machine learning platforms.",

      // Engineering Challenge (#engineering-challenge)
      challengeEyebrow: "INTERACTIVE TRADEOFF CHALLENGE",
      challengeTitle: "You Be The AI Engineer:<br><span class=\"gradient-text\">Make The Architectural Call.</span>",
      challengeDesc: "Evaluate real production tradeoffs across retrieval quality, latency targets, and compute costs.",

      // Section 04: Project Directory (#projects)
      projectsEyebrow: "04 / PROJECT DIRECTORY",
      projectsTitle: "Explore Verified<br><span class=\"gradient-text\">Repositories &amp; Prototypes.</span>",
      projectsDesc: "Search and filter through verified projects across AI, Cloud, Embedded Systems, and Robotics.",
      projectsSearchPlaceholder: "Filter by technology, keyword, or domain...",
      projectsTabAll: "All Projects",
      projectsTabAiml: "AI & Machine Learning",
      projectsTabCloud: "Cloud & Infrastructure",
      projectsTabVision: "Computer Vision",
      projectsTabEmbedded: "Robotics & Embedded",
      projectsArchiveKicker: "Looking for the Complete 10-Year Engineering Archive?",
      projectsArchiveLink: "View Master Directory (27 Projects) →",
      projectsBtnCaseStudy: "Read Case Study →",
      projectsBtnRepo: "View Repository ↗",
      projectsBtnLive: "Live System ↗",

      // Section 09: Media Showcase (#media)
      mediaEyebrow: "MEDIA SHOWCASE",
      mediaTitle: "Beyond the Code.<br><span class=\"gradient-text\">Into the Field.</span>",
      mediaDesc: "Explore selected moments from engineering projects, robotics experiments, drone and travel photography, technical demonstrations, and visual explorations.",
      mediaCatAll: "All Media",
      mediaCatDrone: "Drone Photography & Aerial Mapping",
      mediaCatTravel: "Travel & Exploration",
      mediaCatRobotics: "Robotics & Hardware",
      mediaCatVision: "AI & Computer Vision",
      mediaCatDemos: "Engineering & Technical Demonstrations",
      mediaCatPubs: "Presentations & Publications",
      mediaOriginalBtn: "View Original Asset ↗",
      mediaRelatedBtn: "View Related Project",
      mediaZoomBtn: "Full Screen",

      // Section 05: Experience (#experience)
      expEyebrow: "05 / CAREER JOURNEY",
      expTitle: "Engineering, Leadership &<br><span class=\"gradient-text\">Technical Instruction.</span>",
      expDesc: "Track record of technical leadership, instructional delivery, and robust software engineering.",

      // Section 06: Education (#education)
      eduEyebrow: "06 / ACADEMIC & CREDENTIALS",
      eduTitle: "Academic Foundations,<br><span class=\"gradient-text\">Research &amp; Certifications.</span>",
      eduDesc: "Rigorous academic background in Computer Engineering backed by peer-reviewed research and industry certifications.",

      // Section 07: Technical Capabilities Matrix (#skills)
      skillsEyebrow: "07 / TECHNICAL CAPABILITIES",
      skillsTitle: "An Integrated<br><span class=\"gradient-text\">Engineering Matrix.</span>",
      skillsDesc: "Technical proficiencies organized by discipline: AI engineering, core software, cloud infrastructure, and intelligent systems.",
      skillsSubtitle: "SPECIALIZED & CROSS-FUNCTIONAL PRACTICES",
      skillsDom1: "🧠 AI & Machine Learning",
      skillsDom2: "⚡ Software & Data Engineering",
      skillsDom3: "☁️ Cloud Infrastructure & DevOps",
      skillsDom4: "👁️ Computer Vision & Autonomous Systems",
      skillsDom5: "🤖 Embedded Systems, Robotics & IoT",
      skillsDom6: "🛠️ Hardware Prototyping & Digital Fabrication",
      skillsDom7: "🔄 Hardware-Software Co-Design & Digital Twins",

      // Section 08: Professional Services (#services)
      servicesEyebrow: "08 / PROFESSIONAL SERVICES CATALOG",
      servicesTitle: "End-to-End Engineering &<br><span class=\"gradient-text\">Intelligent Solutions</span>",
      servicesDesc: "Tailored technical services spanning enterprise AI architectures, full-stack cloud systems, IoT prototyping, and technical leadership.",
      servicesSearchPlaceholder: "Search services by keyword, tech stack, or deliverable...",
      servicesEstimatorLink: "Estimate Project Budget 🧮",
      servicesProposalLink: "Generate Formal Proposal 📄",
      servicesDeliverablesLabel: "KEY DELIVERABLES",
      servicesUseCasesLabel: "TYPICAL USE CASES",
      servicesTechLabel: "TECH STACK",
      servicesBtnEstimate: "Estimate Budget ↗",
      servicesBtnProposal: "Request Proposal →",

      // Section 11: Budget Estimator (#estimator)
      estEyebrow: "TRANSPARENT PRICING / EFFORT MODELING",
      estTitle: "Interactive Project Budget &<br><span class=\"gradient-text\">Effort Estimator</span>",
      estDesc: "Configure project parameters to calculate transparent, realistic engineering hours, cost estimates, and delivery timelines.",
      estSecScope: "1. Project Scope & Classification",
      estLblType: "Project Type",
      estLblPlatform: "Target Platform / Architecture",
      estSecArch: "2. Core Architecture & Integration Complexity",
      estLblComplexity: "Overall Complexity",
      estLblDesign: "UI/UX & Design Requirement",
      estLblRoles: "User Roles & Access Levels",
      estLblIntegrations: "External Integrations & APIs",
      estLblAi: "AI & Automation Capability",
      estSecFeatures: "3. Key Technical Features & Add-ons",
      estSecCommercials: "4. Commercials & Deployment Timelines",
      estLblTimeline: "Expected Delivery Timeline",
      estLblSupport: "Post-Launch Support & SLA",
      estLblCurrency: "Preferred Currency",
      estSummaryHeading: "ESTIMATION SUMMARY",
      estLblCostRange: "Estimated Cost Range",
      estLblDuration: "Estimated Timeline",
      estLblTargetBudget: "Target Budget (Likely)",
      estLblConservative: "Conservative / MVP",
      estLblHours: "Estimated Effort",
      estLblMaintenance: "Ongoing Maintenance",
      estLblThirdParty: "Cloud/API Third-Party Est.",
      estBtnProposal: "Generate Proposal with these parameters →",
      estBtnReset: "Reset Estimator",

      // Section 12: Proposal Generator (#proposal-generator)
      propEyebrow: "AUTOMATED SCOPE SYNTHESIS / FORMAL DOCUMENT GENERATION",
      propTitle: "Client Requirement-Based<br><span class=\"gradient-text\">AI Proposal Generator</span>",
      propDesc: "Synthesize client goals, deliverables, architectural stacks, milestones, and commercial terms into a formal, production-grade proposal document.",
      propStep1: "1. Client & Context",
      propStep2: "2. Scope & Features",
      propStep3: "3. Tech & Security",
      propStep4: "4. Commercials & SLA",
      propBtnNext: "Next Step →",
      propBtnPrev: "← Back",
      propBtnGenerate: "Generate Formal Proposal 📄",
      propBtnCopy: "Copy Markdown",
      propBtnPrint: "Print / PDF Export",
      propBtnReset: "Reset Generator",

      // Section 13: Contact & Social (#contact)
      contactEyebrow: "09 / INITIATE CONTACT",
      contactTitle: "Let’s Build Intelligent Systems<br><span class=\"gradient-text\">Together.</span>",
      contactDesc: "Whether you are looking to architect enterprise RAG platforms, deploy autonomous AI agents, scale cloud-native infrastructure, or collaborate on technical challenges—my inbox is open.",
      contactIntentLabel: "What brings you here? Select inquiry intent to prefill:",
      contactIntentHiring: "💼 Hiring AI Solutions Engineer",
      contactIntentRag: "🤝 Enterprise RAG & Cloud Project",
      contactIntentVision: "👁️ Computer Vision / Perception",
      contactIntentWorkshop: "🎓 Mentorship & Tech Workshops",
      contactIntentGeneral: "💬 General Engineering Inquiry",
      contactSubjectPlaceholder: "Subject",
      contactMessagePlaceholder: "Your message...",
      contactBtnSubmit: "Send via Email Client ↗",
      contactBtnDirect: "Direct Email (Plain Link) ↗",

      // Footer
      footerCopy: "AI Solutions Engineer · <a href=\"portfolio.html\" style=\"color:var(--cyan);text-decoration:none;\">Full Project Archive (27)</a> · Production-Grade Architectures",
      footerBackTop: "BACK TO TOP ↑",
      footerCopyright: "© <span id=\"year\">2026</span> Alimul Fazal Nabil. All rights reserved.",

      // Portfolio Page (portfolio.html)
      portEyebrow: "VERIFIED ENGINEERING MASTER ARCHIVE",
      portHeading: "A Decade of Engineering Projects<br><span class=\"gradient-text\">(2016–2026).</span>",
      portDesc: "Comprehensive chronological index of production deployments, research prototypes, embedded systems, and open-source contributions.",
      portStatProjects: "Verified Projects",
      portStatDomains: "Engineering Domains",
      portStatPrototypes: "Hardware Prototypes",
      portStatYears: "Years Documented",
      portSearchPlaceholder: "Search 27 projects by technology, domain, keyword, or ID...",
      portSortLabel: "Sort by:",
      portSortNewest: "Newest First",
      portSortOldest: "Oldest First",
      portSortTitle: "Project Title (A-Z)",
      portSortDomain: "Domain",
      portFilterAll: "All Projects",
      portEmptyTitle: "No matching engineering projects found.",
      portEmptyDesc: "Try adjusting your search keywords or clearing active filters.",
      portEmptyReset: "Reset All Filters",

      // Command Palette (command-palette.js)
      cmdSearchPlaceholder: "Type a project, technology, case study, or domain...",
      cmdCloseKbd: "ESC to close",
      cmdFooterNavigate: "to navigate",
      cmdFooterOpen: "to open",
      cmdFooterDismiss: "to dismiss",
      cmdFooterArchive: "Alimul Fazal Nabil · Verified Archive"
    },

    de: {
      // General & Common
      brandName: "Alimul Fazal Nabil",
      statusAvailable: "VERFÜGBAR FÜR RELEVANTE PROJEKTE",
      skipLink: "Zum Hauptinhalt springen",
      themeToggleAria: "Farbschema wechseln",
      liveClockUtc: "Aktuelle Ortszeit in Dhaka (UTC+6)",

      // Navigation Links
      navAbout: "Über mich",
      navFeatured: "Highlights",
      navProjects: "Ausgewählte Projekte",
      navExperience: "Berufserfahrung",
      navEducation: "Ausbildung & Qualifikationen",
      navMore: "Mehr",
      navMedia: "Medien-Galerie",
      navSkills: "Fähigkeiten & Matrix",
      navServices: "Dienstleistungen",
      navEstimator: "Kosten-Kalkulator",
      navProposal: "KI-Angebotsersteller",
      navPortfolio: "Vollständiges Portfolio (27) ↗",
      navPortfolioOverview: "Übersicht",
      navPortfolioAll: "Alle Projekte (27)",
      navContact: "Kontakt",
      navResume: "Lebenslauf (PDF) ↓",
      navSearch: "Suche",
      navSearchMobile: "Portfolio & Fähigkeiten durchsuchen",
      mobileLangLabel: "Language / Sprache:",

      // Hero Section (#home)
      heroStatus: "VERFÜGBAR FÜR RELEVANTE PROJEKTE",
      heroHeading: "Skalierbare,<br><span class=\"gradient-text\">intelligente KI-Systeme</span><br>für messbaren Unternehmenserfolg.",
      heroSubtitle: "AI SOLUTIONS ENGINEER | GENAI · RAG · KI-AGENTEN · MLOPS",
      heroLead: "Ich schlage die Brücke zwischen maschinellem Lernen und produktionsreifer Software: Von RAG-Architekturen und autonomen Agenten bis hin zu Computer Vision entwickle ich resiliente, skalierbare Cloud-Systeme, die reale betriebliche Herausforderungen lösen.",
      heroBtnWork: "Ausgewählte Arbeiten <span aria-hidden=\"true\">↘</span>",
      heroBtnLinkedIn: "Auf LinkedIn vernetzen <span aria-hidden=\"true\">↗</span>",
      heroBtnResume: "Lebenslauf herunterladen <span aria-hidden=\"true\">↓</span>",
      heroMetricYears: "JAHRE INFRASTRUKTUR",
      heroMetricRepos: "PRODUKTIONS- & OPEN-SOURCE-REPOS",
      heroMetricPapers: "PEER-REVIEW-PUBLIKATIONEN",
      heroMetricEnglish: "EF SET ENGLISCH (C2 PROFICIENT)",
      heroCardKicker: "01 / ARCHITEKTUR-KERN",
      heroCardStatus: "PRODUKTIVSYSTEM",
      heroFocus1Title: "Generative KI & RAG",
      heroFocus1Desc: "Hybrides Retrieval (Dense + Sparse BM25), pgvector, Reranking und zitierte Antworten.",
      heroFocus2Title: "Autonome KI-Agenten",
      heroFocus2Desc: "Tool Calling, Multi-Agenten-Orchestrierung, strukturierte Ausgaben und deterministisches Denken.",
      heroFocus3Title: "MLOps & Cloud-Systeme",
      heroFocus3Desc: "Microsoft Azure, Docker, Kubernetes, Terraform IaC und automatisierte CI/CD-Pipelines.",
      heroFocus4Title: "Computer Vision & Robotik",
      heroFocus4Desc: "OpenCV-Wahrnehmung, YOLO-Objektverfolgung, ROS 2 und CARLA/SUMO-Simulation.",

      // Section 02: About & Methodology (#about)
      aboutEyebrow: "02 / ÜBER MICH & METHODIK",
      aboutTitle: "Ganzheitliches Denken trifft auf<br><span class=\"gradient-text\">angewandte Intelligenz.</span>",
      aboutDesc: "Praxiserprobte Engineering-Erfahrung, direkt angewendet an der Schnittstelle moderner KI.",
      aboutBadge: "Alimul Fazal Nabil · AI Solutions Engineer",
      aboutLead: "Ich bin AI Solutions Engineer mit über 7 Jahren Erfahrung in Infrastruktur, Cloud-Architektur, Automatisierung und DevOps.",
      aboutP1: "KI-Lösungen dürfen nicht im isolierten Jupyter-Notebook enden: Sie erfordern robuste Datenerfassung, schnelles Vektor-Retrieval, resiliente APIs, sichere Authentifizierung, containerisierte Orchestrierung und lückenlose Telemetrie im Produktionsbetrieb.",
      aboutP2: "Mein Werdegang verbindet den gesamten Entwicklungsstack: <strong>Python → Machine Learning → APIs → LLMs → RAG → Vektordatenbanken → KI-Agenten → Evaluation → MLOps</strong>. Neben der Softwareentwicklung unterrichte ich angewandte KI an der ReDI School of Digital Integration, bin Lehrbeauftragter an der Cox's Bazar International University und Co-Gründer von MoviSabio zur Optimierung intelligenter Verkehrssysteme.",
      lifecycleEyebrow: "WIE ICH KI-LÖSUNGEN ENTWICKLE · 6-STUFIGER LEBENSZYKLUS",
      lifecycleHeading: "Systematische Engineering-Pipeline vom Konzept bis zum Betrieb",

      // Section 10: AI Digital Twin (#ai-twin)
      aiTwinEyebrow: "INTERAKTIVER AGENT · LOKALE CLIENTSEITIGE RETRIEVAL-ENGINE",
      aiTwinTitle: "Befragen Sie meinen <span class=\"gradient-text\">KI-Zwilling.</span>",
      aiTwinDesc: "Erkunden Sie meine Ingenieurprojekte, Fachkompetenzen und berufliche Stationen über eine private, interaktive Wissensschnittstelle.",
      aiTwinBadge: "LOKALE WISSENS-ENGINE",
      aiTwinStatus: "Lokale Verarbeitung aktiviert · Gestützt auf 27 Projekte · Datenschutz an erster Stelle",
      aiTwinArchitectureBtn: "ℹ️ Architektur",
      aiTwinClearBtn: "Chat leeren",
      aiTwinInfoHeading: "Deterministische lokale Retrieval-Engine",
      aiTwinInfoText: "Antworten werden zu 100% lokal in Ihrem Browser über mehrstufiges Retrieval berechnet: Intent-Klassifizierung, Entitätsauflösung, TF-IDF-Scoring und strukturierte Synthese, gestützt auf 27 dokumentierte Projekte. Keine Remote-KI-Aufrufe, keine Datenweitergabe.",
      aiTwinPlaceholder: "Fragen Sie nach RAG-Architekturen, Azure-Infrastruktur, CV-Modellen, Projektvergleichen...",
      aiTwinSendBtn: "Frage senden →",
      aiTwinDisclaimer: "🔒 Läuft lokal im Browser · Keine externen KI-APIs · Gestützt auf 27 dokumentierte Projekte · 100% Datenschutz",
      aiTwinGreeting: "Hallo! Ich bin Alimuls <strong>KI-Zwilling</strong>, der lokal in Ihrem Browser über eine deterministische Retrieval-Engine läuft. Fragen Sie mich gerne zu Alimuls 27 verifizierten Projekten, Enterprise-RAG-Architekturen, Azure- und Terraform-Infrastruktur oder CV-Systemen.",
      aiTwinGreetingSub: "Klicken Sie auf einen der Vorschläge unten, fordern Sie Projektvergleiche an oder fügen Sie eine Stellenbeschreibung für eine Passungsanalyse ein!",

      // Section 03: Flagship Initiatives (#featured)
      featuredEyebrow: "03 / LEUCHTTURM-PROJEKTE",
      featuredTitle: "Architekturen gebaut für<br><span class=\"gradient-text\">reale Unternehmensszenarien.</span>",
      featuredDesc: "Tiefgehende Einblicke in produktive Referenzplattformen und aktive Engineering-Initiativen.",
      featuredAllBtn: "Alle 27 Projekte erkunden →",
      featuredBadge1: "LEUCHTTURM-ARCHITEKTUR",
      featuredBadge2: "CO-GRÜNDER & CTO",
      featuredReadCase: "Ausführliche Fallstudie lesen →",
      featuredViewCode: "Code ansehen ↗",
      featuredVisitMoviSabio: "MoviSabio-Plattform besuchen ↗",

      // Architecture Impact (#architecture-impact)
      impactEyebrow: "ENGINEERING-EFFEKT · VORHER VS. NACHHER",
      impactTitle: "Architektur-Entscheidungen &<br><span class=\"gradient-text\">messbare Transformation.</span>",
      impactDesc: "Erleben Sie, wie methodisches Engineering grundlegende Schwächen bei RAG-, Computer-Vision- und Machine-Learning-Plattformen überwindet.",

      // Engineering Challenge (#engineering-challenge)
      challengeEyebrow: "INTERAKTIVE ARCHITEKTUR-CHALLENGE",
      challengeTitle: "Sie als KI-Ingenieur:<br><span class=\"gradient-text\">Treffen Sie die Architekturentscheidung.</span>",
      challengeDesc: "Bewerten Sie reale Produktionsabwägungen zwischen Retrieval-Qualität, Latenzzielen und Rechenkosten.",

      // Section 04: Project Directory (#projects)
      projectsEyebrow: "04 / PROJEKT-VERZEICHNIS",
      projectsTitle: "Verifizierte Repositories &amp;<br><span class=\"gradient-text\">Prototypen erkunden.</span>",
      projectsDesc: "Durchsuchen und filtern Sie verifizierte Projekte aus den Bereichen KI, Cloud, Eingebettete Systeme und Robotik.",
      projectsSearchPlaceholder: "Nach Technologie, Stichwort oder Bereich filtern...",
      projectsTabAll: "Alle Projekte",
      projectsTabAiml: "KI & Maschinelles Lernen",
      projectsTabCloud: "Cloud & Infrastruktur",
      projectsTabVision: "Computer Vision",
      projectsTabEmbedded: "Robotik & Eingebettete Systeme",
      projectsArchiveKicker: "Suchen Sie das vollständige 10-Jahres-Projektarchiv?",
      projectsArchiveLink: "Hauptverzeichnis ansehen (27 Projekte) →",
      projectsBtnCaseStudy: "Fallstudie lesen →",
      projectsBtnRepo: "Repository ansehen ↗",
      projectsBtnLive: "Live-System ↗",

      // Section 09: Media Showcase (#media)
      mediaEyebrow: "MEDIEN-GALERIE",
      mediaTitle: "Jenseits des Codes.<br><span class=\"gradient-text\">Mitten im Einsatz.</span>",
      mediaDesc: "Entdecken Sie ausgewählte Momente aus Ingenieurprojekten, Robotik-Experimenten, Drohnen- und Reisefotografie, technischen Demonstrationen und visuellen Erkundungen.",
      mediaCatAll: "Alle Medien",
      mediaCatDrone: "Drohnenfotografie & Luftbildkartierung",
      mediaCatTravel: "Reisen & Erkundung",
      mediaCatRobotics: "Robotik & Hardware",
      mediaCatVision: "KI & Computer Vision",
      mediaCatDemos: "Ingenieurwesen & Demos",
      mediaCatPubs: "Präsentationen & Publikationen",
      mediaOriginalBtn: "Originalmedium ansehen ↗",
      mediaRelatedBtn: "Zugehöriges Projekt ansehen",
      mediaZoomBtn: "Vollbild",

      // Section 05: Experience (#experience)
      expEyebrow: "05 / BERUFLICHER WERDEGANG",
      expTitle: "Engineering, Führung &<br><span class=\"gradient-text\">technische Ausbildung.</span>",
      expDesc: "Erfolgsbilanz in technischer Leitung, Wissensvermittlung und robuster Softwareentwicklung.",

      // Section 06: Education (#education)
      eduEyebrow: "06 / AUSBILDUNG & QUALIFIKATIONEN",
      eduTitle: "Akademische Grundlagen,<br><span class=\"gradient-text\">Forschung &amp; Zertifikate.</span>",
      eduDesc: "Fundierte Ausbildung in Computer Engineering, gestützt durch wissenschaftliche Publikationen und Industriezertifizierungen.",

      // Section 07: Technical Capabilities Matrix (#skills)
      skillsEyebrow: "07 / TECHNISCHE FÄHIGKEITEN",
      skillsTitle: "Eine integrierte<br><span class=\"gradient-text\">Engineering-Matrix.</span>",
      skillsDesc: "Technische Kernkompetenzen gegliedert nach Fachbereichen: KI-Engineering, Core-Software, Cloud-Infrastruktur und intelligente Systeme.",
      skillsSubtitle: "SPEZIALISIERTE & INTERDISZIPLINÄRE DISZIPLINEN",
      skillsDom1: "🧠 KI & Maschinelles Lernen",
      skillsDom2: "⚡ Software- & Daten-Engineering",
      skillsDom3: "☁️ Cloud-Infrastruktur & DevOps",
      skillsDom4: "👁️ Computer Vision & Autonome Systeme",
      skillsDom5: "🤖 Eingebettete Systeme, Robotik & IoT",
      skillsDom6: "🛠️ Hardware-Prototyping & Digitale Fertigung",
      skillsDom7: "🔄 Hardware-Software-Co-Design & Digitale Zwillinge",

      // Section 08: Professional Services (#services)
      servicesEyebrow: "08 / DIENSTLEISTUNGSKATALOG",
      servicesTitle: "Ganzheitliches Engineering &<br><span class=\"gradient-text\">intelligente Lösungen</span>",
      servicesDesc: "Maßgeschneiderte Ingenieursdienstleistungen von Enterprise-KI-Architekturen über Cloud-Systeme bis hin zu IoT-Prototypen.",
      servicesSearchPlaceholder: "Dienstleistungen nach Stichwort, Tech-Stack oder Leistung filtern...",
      servicesEstimatorLink: "Budget kalkulieren 🧮",
      servicesProposalLink: "Angebot erstellen 📄",
      servicesDeliverablesLabel: "WICHTIGSTE LEISTUNGEN",
      servicesUseCasesLabel: "TYPISCHE ANWENDUNGSFÄLLE",
      servicesTechLabel: "TECH-STACK",
      servicesBtnEstimate: "Budget kalkulieren ↗",
      servicesBtnProposal: "Angebot anfordern →",

      // Section 11: Budget Estimator (#estimator)
      estEyebrow: "TRANSPARENTE PREIS- & AUFWANDSKALKULATION",
      estTitle: "Interaktiver Projekt-Budget- &<br><span class=\"gradient-text\">Aufwandskalkulator</span>",
      estDesc: "Konfigurieren Sie Projektparameter, um realistische Entwicklungsstunden, Kostenschätzungen und Zeitpläne zu berechnen.",
      estSecScope: "1. Projektumfang & Klassifizierung",
      estLblType: "Projekttyp",
      estLblPlatform: "Zielplattform / Architektur",
      estSecArch: "2. Kernarchitektur & Integrationskomplexität",
      estLblComplexity: "Gesamtkomplexität",
      estLblDesign: "UI/UX & Design-Anforderung",
      estLblRoles: "Benutzerrollen & Berechtigungen",
      estLblIntegrations: "Externe Integrationen & APIs",
      estLblAi: "KI- & Automatisierungsfunktionen",
      estSecFeatures: "3. Technische Features & Erweiterungen",
      estSecCommercials: "4. Kaufmännische Details & Zeitplan",
      estLblTimeline: "Erwarteter Lieferzeitplan",
      estLblSupport: "Post-Launch-Support & SLA",
      estLblCurrency: "Bevorzugte Währung",
      estSummaryHeading: "KALKULATIONS-ÜBERSICHT",
      estLblCostRange: "Geschätzter Kostenrahmen",
      estLblDuration: "Geschätzte Projektdauer",
      estLblTargetBudget: "Zielbudget (Wahrscheinlich)",
      estLblConservative: "Konservativ / MVP",
      estLblHours: "Geschätzter Aufwand",
      estLblMaintenance: "Laufende Wartung",
      estLblThirdParty: "Geschätzte Cloud-/API-Kosten",
      estBtnProposal: "Angebot mit diesen Parametern erstellen →",
      estBtnReset: "Kalkulator zurücksetzen",

      // Section 12: Proposal Generator (#proposal-generator)
      propEyebrow: "AUTOMATISIERTE UMFANGS-SYNTHESE / ANGEBOTSERSTELLUNG",
      propTitle: "Anforderungsbasierter<br><span class=\"gradient-text\">KI-Angebotsersteller</span>",
      propDesc: "Fassen Sie Kundenziele, Lieferergebnisse, Architektur-Stacks, Meilensteine und kaufmännische Konditionen in einem formellen Angebot zusammen.",
      propStep1: "1. Kunde & Kontext",
      propStep2: "2. Umfang & Features",
      propStep3: "3. Tech & Sicherheit",
      propStep4: "4. Konditionen & SLA",
      propBtnNext: "Nächster Schritt →",
      propBtnPrev: "← Zurück",
      propBtnGenerate: "Formelles Angebot generieren 📄",
      propBtnCopy: "Markdown kopieren",
      propBtnPrint: "Drucken / PDF-Export",
      propBtnReset: "Generator zurücksetzen",

      // Section 13: Contact & Social (#contact)
      contactEyebrow: "09 / KONTAKT AUFNEHMEN",
      contactTitle: "Lassen Sie uns intelligente Systeme<br><span class=\"gradient-text\">gemeinsam bauen.</span>",
      contactDesc: "Ob Sie eine Enterprise-RAG-Plattform konzipieren, autonome KI-Agenten bereitstellen, Cloud-Infrastruktur skalieren oder an technischen Herausforderungen zusammenarbeiten möchten: Ich freue mich auf Ihre Nachricht.",
      contactIntentLabel: "Was führt Sie hierher? Wählen Sie ein Thema zur Vorbelegung:",
      contactIntentHiring: "💼 AI Solutions Engineer einstellen",
      contactIntentRag: "🤝 Enterprise-RAG- & Cloud-Projekt",
      contactIntentVision: "👁️ Computer Vision & Wahrnehmung",
      contactIntentWorkshop: "🎓 Mentoring & Tech-Workshops",
      contactIntentGeneral: "💬 Allgemeine Engineering-Anfrage",
      contactSubjectPlaceholder: "Betreff",
      contactMessagePlaceholder: "Ihre Nachricht...",
      contactBtnSubmit: "Über E-Mail-Programm senden ↗",
      contactBtnDirect: "Direkte E-Mail (Link) ↗",

      // Footer
      footerCopy: "AI Solutions Engineer · <a href=\"portfolio.html\" style=\"color:var(--cyan);text-decoration:none;\">Vollständiges Projektarchiv (27)</a> · Produktionsreife Architekturen",
      footerBackTop: "NACH OBEN ↑",
      footerCopyright: "© <span id=\"year\">2026</span> Alimul Fazal Nabil. Alle Rechte vorbehalten.",

      // Portfolio Page (portfolio.html)
      portEyebrow: "VERIFIZIERTES ENGINEERING-GESAMTARCHIV",
      portHeading: "Ein Jahrzehnt Engineering-Projekte<br><span class=\"gradient-text\">(2016–2026).</span>",
      portDesc: "Vollständiges chronologisches Verzeichnis von Produktionssystemen, Forschungsprototypen, eingebetteten Systemen und Open-Source-Beiträgen.",
      portStatProjects: "Verifizierte Projekte",
      portStatDomains: "Fachbereiche",
      portStatPrototypes: "Hardware-Prototypen",
      portStatYears: "Jahre Dokumentation",
      portSearchPlaceholder: "27 Projekte nach Technologie, Bereich, Stichwort oder ID durchsuchen...",
      portSortLabel: "Sortieren nach:",
      portSortNewest: "Neueste zuerst",
      portSortOldest: "Älteste zuerst",
      portSortTitle: "Projekttitel (A–Z)",
      portSortDomain: "Fachbereich",
      portFilterAll: "Alle Projekte",
      portEmptyTitle: "Keine passenden Engineering-Projekte gefunden.",
      portEmptyDesc: "Versuchen Sie, Ihre Suchbegriffe anzupassen oder Filter zurückzusetzen.",
      portEmptyReset: "Alle Filter zurücksetzen",

      // Command Palette (command-palette.js)
      cmdSearchPlaceholder: "Projekt, Technologie, Fallstudie oder Bereich eingeben...",
      cmdCloseKbd: "ESC zum Schließen",
      cmdFooterNavigate: "zum Navigieren",
      cmdFooterOpen: "zum Öffnen",
      cmdFooterDismiss: "zum Schließen",
      cmdFooterArchive: "Alimul Fazal Nabil · Verifiziertes Archiv"
    }
  };

  // Expose to window
  if (typeof window !== "undefined") {
    window.TRANSLATIONS = TRANSLATIONS;
    window.I18N = TRANSLATIONS; // Backwards compatibility
  }

  // Export for node testing
  if (typeof module !== "undefined" && module.exports) {
    module.exports = TRANSLATIONS;
  }
})();
