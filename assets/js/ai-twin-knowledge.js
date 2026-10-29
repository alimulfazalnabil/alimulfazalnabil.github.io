/**
 * AI Twin Knowledge Base
 * Authoritative, normalized knowledge repository for Alimul Fazal Nabil's Digital Twin.
 * Grounded strictly in verified projects, academic records, and professional history.
 * 
 * Supports browser global (window.AI_TWIN_KNOWLEDGE) and Node.js CommonJS export for testing.
 */
(() => {
  const AI_TWIN_KNOWLEDGE = {
    identity: {
      name: "Alimul Fazal Nabil",
      role: "AI Solutions Engineer",
      headline: "AI Solutions Engineer · Generative AI, Enterprise RAG, Autonomous Perception & Cloud Systems",
      location: "Berlin, Germany",
      summary: "Systems-grounded AI Solutions Engineer with 7+ years of hands-on engineering experience spanning Generative AI (RAG, agent workflows), machine learning, computer vision, cloud infrastructure (Azure, Terraform, Docker), and embedded robotics.",
      targetRoles: [
        "AI Solutions Engineer",
        "GenAI Systems Engineer",
        "MLOps / AI Platform Engineer",
        "Cloud Solutions Architect",
        "Computer Vision / Perception Engineer"
      ],
      workArrangement: "Open to Full-time Onsite (Berlin), Hybrid (Germany/Europe), or Remote (Global).",
      languages: [
        { language: "English", proficiency: "Fluent / Full Professional Proficiency" },
        { language: "German", proficiency: "Professional Working Proficiency (B2)" },
        { language: "Bengali", proficiency: "Native / Bilingual" },
        { language: "Arabic", proficiency: "Limited Working Proficiency" },
        { language: "Hindi", proficiency: "Limited Working Proficiency" }
      ],
      education: [
        {
          degree: "Bachelor of Science in Electrical and Electronic Engineering (B.Sc. EEE)",
          institution: "Cox's Bazar International University (CBIU)",
          period: "2017 – 2021",
          focus: "Microcontrollers, Control Systems, Power Electronics, Signal Processing, Robotics",
          verified: true
        }
      ],
      publications: [
        {
          id: "PUB-001",
          title: "Development of IoT-Based Digital Notice Board",
          journal: "International Research Journal of Modernization in Engineering Technology and Science (IRJMETS)",
          date: "November 2022",
          volume: "Volume 04, Issue 11",
          verified: true
        },
        {
          id: "PUB-002",
          title: "Implementation of E-Commerce Auction Web Application SPAROO",
          journal: "International Research Journal of Engineering and Technology (IRJET)",
          date: "November 2022",
          volume: "Volume 09, Issue 11",
          verified: true
        }
      ]
    },

    // All 27 projects from Master Project Inventory (2016-2026)
    projects: [
      {
        id: "PRJ-GENAI-001",
        title: "Enterprise RAG Knowledge Platform",
        period: "2024–2025",
        domain: "Generative AI, RAG & Intelligent Applications",
        domainKey: "genai",
        status: "Prototype",
        summary: "Production-ready enterprise knowledge retrieval microservice combining dense semantic search (pgvector HNSW) with sparse lexical search (BM25) fused via Reciprocal Rank Fusion (RRF k=60). Implements claim-level citation verification and strict anti-hallucination gating.",
        technologies: ["Python 3.12", "FastAPI", "PostgreSQL", "pgvector", "BM25", "Reciprocal Rank Fusion", "Docker", "Hugging Face", "sentence-transformers", "Redis"],
        repoUrl: "https://github.com/alimulfazalnabil/LLM-enterprise-rag-knowledge-platform",
        liveUrl: "",
        caseStudyUrl: "case-studies/enterprise-rag-platform.html",
        evidence: "Public GitHub repository with full Docker Compose, test suite, and Swagger API docs.",
        limitations: "Tested on internal knowledge corpora; multi-tenant enterprise RBAC and SSO integration are on the roadmap.",
        architecture: {
          implemented: "Asynchronous FastAPI microservice, PostgreSQL pgvector with HNSW indexing, BM25 tokenizer, RRF rank fusion, and claim verification post-processor.",
          design: "Two-stage retrieval pipeline passing top-k chunks into a cross-encoder re-ranker before LLM generation.",
          notes: "Evaluated locally with reproducible benchmarks. Sub-second streaming first-token latency."
        },
        relatedProjects: ["PRJ-GENAI-002", "PRJ-GENAI-004", "PRJ-DATA-001"]
      },
      {
        id: "PRJ-GENAI-002",
        title: "MoviSabio Intelligent Territorial Platform",
        period: "2025–2026",
        domain: "Generative AI, RAG & Intelligent Applications",
        domainKey: "genai",
        status: "In development",
        summary: "Urban intelligence and territorial mobility analytics platform incorporating geospatial AI, urban flow modeling, and conversational spatial querying for urban planners.",
        technologies: ["Python", "FastAPI", "Next.js", "PostgreSQL", "PostGIS", "Geospatial AI", "Docker"],
        repoUrl: "",
        liveUrl: "https://www.movisabio.com/",
        caseStudyUrl: "",
        evidence: "Live product landing page and ongoing development roadmap at movisabio.com.",
        limitations: "Core predictive analytics and proprietary algorithms are in private development; not fully open-source.",
        architecture: {
          implemented: "Landing portal, territorial data modeling schema, GIS spatial layers.",
          design: "Hybrid spatial indexing (PostGIS) combined with conversational urban LLM assistant.",
          notes: "Commercial initiative under active development."
        },
        relatedProjects: ["PRJ-GENAI-001", "PRJ-GENAI-003", "PRJ-DATA-003"]
      },
      {
        id: "PRJ-GENAI-003",
        title: "Doctor's Co-Pilot AI (Clinical Assistant)",
        period: "2026–Present",
        domain: "Generative AI, RAG & Intelligent Applications",
        domainKey: "genai",
        status: "In development",
        summary: "Clinical decision support assistant integrating structured medical record parsing, clinical entity extraction (NER), and medical guideline retrieval.",
        technologies: ["Python", "FastAPI", "Medical NER", "LLM Prompt Chains", "FHIR Standards", "Vector Search"],
        repoUrl: "",
        liveUrl: "",
        caseStudyUrl: "",
        evidence: "Local development codebase and architecture documentation.",
        limitations: "Experimental clinical tool in development; not certified as a medical device or tested in live hospital settings.",
        architecture: {
          implemented: "Medical terminology matching prototype and guideline retrieval pipeline.",
          design: "Zero-retention clinical context pipeline complying with HIPAA/GDPR health data boundaries.",
          notes: "Focused on physician administrative acceleration and guideline cross-referencing."
        },
        relatedProjects: ["PRJ-GENAI-001", "PRJ-ML-001"]
      },
      {
        id: "PRJ-GENAI-004",
        title: "AI-Assisted Operational Log Analysis",
        period: "2024–2025",
        domain: "Generative AI, RAG & Intelligent Applications",
        domainKey: "genai",
        status: "Prototype",
        summary: "Automated server and telemetry log anomaly detection tool using regex tokenization and LLM semantic clustering to summarize multi-gigabyte log files and identify root causes.",
        technologies: ["Python", "pandas", "Regex Tokenizer", "LLM Summarization", "Log Anomaly Detection"],
        repoUrl: "",
        liveUrl: "",
        caseStudyUrl: "",
        evidence: "Portfolio document Section 4 and reproducible Python automation scripts.",
        limitations: "Prototype script designed for batch log processing; real-time streaming log engine (e.g., Kafka) is a future extension.",
        architecture: {
          implemented: "Multi-stage regex filtering, semantic embedding clustering of uncommon log signatures, and concise root-cause markdown reporting.",
          design: "Batch execution over systemd and web server access/error logs.",
          notes: "Reduces incident triage duration during server debugging."
        },
        relatedProjects: ["PRJ-CLOUD-003", "PRJ-DATA-002"]
      },
      {
        id: "PRJ-CV-001",
        title: "Autonomous Lane Detection Pipeline",
        period: "2023–2024",
        domain: "Computer Vision and Autonomous Systems",
        domainKey: "vision",
        status: "Prototype",
        summary: "End-to-end perception pipeline performing camera calibration, perspective inverse-mapping (bird's-eye view), adaptive color thresholding (HLS/LAB), and sliding-window 2nd-order polynomial lane boundary fitting with CARLA simulator integration.",
        technologies: ["Python", "OpenCV", "NumPy", "Perspective Transform", "Sliding Window Polynomial Fit", "CARLA Simulator"],
        repoUrl: "https://github.com/alimulfazalnabil/Autonomous-Lane-Detection",
        liveUrl: "",
        caseStudyUrl: "case-studies/autonomous-lane-detection.html",
        evidence: "Public GitHub repository with code, unit tests, and CARLA simulation town test sequences.",
        limitations: "Tested in simulated CARLA environments and road test footage; extreme weather (snow/heavy rain) requires additional temporal filtering.",
        architecture: {
          implemented: "Camera distortion matrix correction, warped perspective transform, histogram peak detection, sliding-window curvature calculation, and lane center offset estimation.",
          design: "Modular perception pipeline ready for ROS 2 node wrapping.",
          notes: "Achieves real-time FPS processing on standard CPU/GPU pipelines."
        },
        relatedProjects: ["PRJ-CV-002", "PRJ-CV-003", "PRJ-EMB-004"]
      },
      {
        id: "PRJ-CV-002",
        title: "Vehicle & Pedestrian Visual Detection",
        period: "2023–2025",
        domain: "Computer Vision and Autonomous Systems",
        domainKey: "vision",
        status: "Learning exercise",
        summary: "Multi-class vision pipeline for highway dashcam footage combining fine-tuned YOLOv8 bounding boxes with monocular geometric distance estimation to alert on closing hazards.",
        technologies: ["Python", "YOLOv8", "OpenCV", "PyTorch", "Monocular Distance Estimation"],
        repoUrl: "https://github.com/alimulfazalnabil/Computer-Vision-Projects",
        liveUrl: "",
        caseStudyUrl: "",
        evidence: "Public repository with Jupyter notebooks and dashcam video evaluation scripts.",
        limitations: "Monocular distance estimation relies on flat-ground plane assumptions and known camera heights; lacks stereo/LiDAR depth fusion.",
        architecture: {
          implemented: "YOLOv8 inference loop, bounding box tracking, ground-plane projection for distance approximation.",
          design: "Edge deployment target on NVIDIA Jetson or automotive compute boards.",
          notes: "Focused on perception accuracy and obstacle classification."
        },
        relatedProjects: ["PRJ-CV-001", "PRJ-CV-004"]
      },
      {
        id: "PRJ-CV-003",
        title: "Autonomous Driving CARLA Simulation",
        period: "2023–2024",
        domain: "Computer Vision and Autonomous Systems",
        domainKey: "vision",
        status: "Simulation",
        summary: "Simulated autonomous driving testbed in CARLA Towns exploring vehicle physics, virtual RGB/depth camera feeds, LIDAR point-cloud emulation, and waypoint navigation.",
        technologies: ["CARLA Simulator", "Python API", "Unreal Engine Assets", "Virtual Sensor Suite", "Waypoint Navigation"],
        repoUrl: "https://github.com/alimulfazalnabil/Autonomous-Lane-Detection",
        liveUrl: "",
        caseStudyUrl: "",
        evidence: "CARLA scenario execution scripts included in autonomous perception repo.",
        limitations: "Simulation only; physical hardware-in-the-loop (HIL) vehicle integration was not performed.",
        architecture: {
          implemented: "CARLA client connecting to simulation server, spawning vehicle actors, attaching sensor rigs, and capturing synchronized frames.",
          design: "Benchmarking perception pipelines under controlled daylight, rain, and traffic variations.",
          notes: "Provided ground truth data for lane detection and vehicle perception algorithms."
        },
        relatedProjects: ["PRJ-CV-001", "PRJ-EMB-001"]
      },
      {
        id: "PRJ-CV-004",
        title: "Computer Vision Exploration Hub",
        period: "2022–2024",
        domain: "Computer Vision and Autonomous Systems",
        domainKey: "vision",
        status: "Learning exercise",
        summary: "Hands-on collection of computer vision algorithms including feature matching (ORB/SIFT), facial landmark extraction, hand gesture recognition with MediaPipe, and edge detection filters.",
        technologies: ["Python", "OpenCV", "MediaPipe", "NumPy", "matplotlib", "Jupyter Notebooks"],
        repoUrl: "https://github.com/alimulfazalnabil/Computer-Vision-Projects",
        liveUrl: "",
        caseStudyUrl: "",
        evidence: "Active public GitHub repository with multiple documented experiments.",
        limitations: "Educational repository collecting individual algorithms rather than a unified production application.",
        architecture: {
          implemented: "Self-contained Jupyter notebooks demonstrating classical and modern computer vision fundamentals.",
          design: "Reference repository for rapid feature prototyping.",
          notes: "Demonstrates practical command of pixel-level transformations and neural feature extractors."
        },
        relatedProjects: ["PRJ-CV-002", "PRJ-ML-003"]
      },
      {
        id: "PRJ-ML-001",
        title: "Heart Disease Clinical Risk Prediction",
        period: "2023–2024",
        domain: "Artificial Intelligence and Machine Learning",
        domainKey: "aiml",
        status: "Prototype",
        summary: "Cardiovascular clinical risk classification microservice trained on the UCI Cleveland dataset. Evaluates Logistic Regression, Random Forest, and XGBoost with SMOTE class rebalancing, cross-validation, and SHAP explainability, served via FastAPI.",
        technologies: ["Python", "scikit-learn", "XGBoost", "Random Forest", "FastAPI", "Docker", "SHAP", "SMOTE", "pandas"],
        repoUrl: "https://github.com/alimulfazalnabil/heart-disease-prediction",
        liveUrl: "",
        caseStudyUrl: "case-studies/heart-disease-prediction.html",
        evidence: "Public GitHub repository with model training pipeline, FastAPI API server, unit tests, and Dockerfile.",
        limitations: "Trained on academic benchmark dataset (303 records); clinical deployment would require validation on large-scale electronic health records (EHR).",
        architecture: {
          implemented: "Scikit-learn preprocessing pipeline, SMOTE oversampling, hyperparameter grid search, SHAP tree explainers, and REST inference endpoints.",
          design: "Packaged as a lightweight container microservice with automated Pytest CI verification.",
          notes: "Achieves 85%+ accuracy on test split with documented trade-offs between precision and recall."
        },
        relatedProjects: ["PRJ-GENAI-003", "PRJ-ML-002"]
      },
      {
        id: "PRJ-ML-002",
        title: "Predictive Maintenance Anomaly System",
        period: "2024–2025",
        domain: "Artificial Intelligence and Machine Learning",
        domainKey: "aiml",
        status: "Simulation",
        summary: "Industrial sensor anomaly detection concept using Fast Fourier Transform (FFT) spectral frequency breakdown and Isolation Forest to detect bearing wear and motor vibration degradation before mechanical failure.",
        technologies: ["Python", "NumPy", "SciPy", "FFT Spectral Analysis", "Isolation Forest", "pandas"],
        repoUrl: "",
        liveUrl: "",
        caseStudyUrl: "",
        evidence: "Documented in portfolio Section 4 with signal processing and anomaly detection scripts.",
        limitations: "Evaluated on simulated vibration telemetry and benchmark industrial datasets; edge PLC streaming is planned.",
        architecture: {
          implemented: "Time-domain to frequency-domain FFT conversion, harmonic peak extraction, and unsupervised anomaly scoring.",
          design: "Designed for ingestion into industrial SCADA and digital-twin dashboards.",
          notes: "Bridges electrical engineering signal processing with machine learning."
        },
        relatedProjects: ["PRJ-DATA-003", "PRJ-CLOUD-004"]
      },
      {
        id: "PRJ-ML-003",
        title: "Applied ML Explorations (Falcon 9 / Stock)",
        period: "2022–2023",
        domain: "Artificial Intelligence and Machine Learning",
        domainKey: "aiml",
        status: "Learning exercise",
        summary: "Exploratory data analysis and predictive modeling notebooks covering SpaceX Falcon 9 first-stage landing classification and market trend forecasting with technical indicators.",
        technologies: ["Python", "scikit-learn", "pandas", "matplotlib", "seaborn", "Jupyter Notebooks"],
        repoUrl: "https://github.com/alimulfazalnabil/Python-Projects",
        liveUrl: "",
        caseStudyUrl: "",
        evidence: "Public repository containing structured exploratory notebooks.",
        limitations: "Learning and exploratory exercises; not intended as commercial trading or aerospace production systems.",
        architecture: {
          implemented: "Data cleaning, feature engineering, classification benchmarks, and metric visualizations.",
          design: "Practical application of data science lifecycle.",
          notes: "Established foundational skills in predictive modeling and statistical evaluation."
        },
        relatedProjects: ["PRJ-DATA-002", "PRJ-ML-001"]
      },
      {
        id: "PRJ-DATA-001",
        title: "Azure Enterprise Data & AI Analytics",
        period: "2024–2025",
        domain: "Cloud Computing and Data Engineering",
        domainKey: "cloud-data",
        status: "Prototype",
        summary: "Enterprise data platform architecture on Microsoft Azure using Terraform IaC. Configures Azure Data Lake Storage Gen2, Azure Data Factory ETL pipelines, and role-based access for analytical workloads.",
        technologies: ["Terraform", "Microsoft Azure", "Azure Data Factory", "Azure Data Lake Gen2", "GitHub Actions", "Azure Key Vault"],
        repoUrl: "https://github.com/alimulfazalnabil/azure-data-ai-analytics",
        liveUrl: "",
        caseStudyUrl: "",
        evidence: "Public GitHub repository with complete Terraform HCL modules and documentation.",
        limitations: "Infrastructure templates validated via terraform plan; high-volume production ingestion requires live enterprise tenant licensing.",
        architecture: {
          implemented: "Modular HCL definitions for storage containers, managed identities, data factory runtimes, and secret governance.",
          design: "Follows Microsoft Well-Architected Framework for security, reliability, and cost optimization.",
          notes: "Zero-drift infrastructure automation integrated with CI linting."
        },
        relatedProjects: ["PRJ-CLOUD-001", "PRJ-DATA-002"]
      },
      {
        id: "PRJ-DATA-002",
        title: "Data Engineering Pipelines Monorepo",
        period: "2023–2025",
        domain: "Cloud Computing and Data Engineering",
        domainKey: "cloud-data",
        status: "Learning exercise",
        summary: "Data engineering monorepo containing batch and streaming pipeline architectures using Apache Spark (PySpark), Apache Kafka, PostgreSQL, and Dockerized service coordination.",
        technologies: ["Python", "Apache Spark", "PySpark", "Apache Kafka", "PostgreSQL", "Docker", "SQL"],
        repoUrl: "https://github.com/alimulfazalnabil/Data-Engineering-Projects",
        liveUrl: "",
        caseStudyUrl: "",
        evidence: "Public GitHub repository with pipeline definitions, SQL schemas, and Docker Compose configurations.",
        limitations: "Educational pipeline designs and local cluster testing; cloud-scale distributed benchmarks are future work.",
        architecture: {
          implemented: "ETL scripts extracting structured records, applying schema transformations, and writing partitioned parquet/SQL sinks.",
          design: "Dockerized multi-container environment for reproducible local big-data testing.",
          notes: "Demonstrates practical data processing with distributed computing paradigms."
        },
        relatedProjects: ["PRJ-DATA-001", "PRJ-CLOUD-003"]
      },
      {
        id: "PRJ-DATA-003",
        title: "Digital-Twin Concept for Energy Management",
        period: "2025",
        domain: "Industrial Automation and Digital Twins",
        domainKey: "automation",
        status: "Simulation",
        summary: "Architecture concept for modeling electrical power distribution substations using Digital Twins Definition Language (DTDL) and real-time telemetry streaming to Grafana dashboards.",
        technologies: ["DTDL (Digital Twins Definition Language)", "Azure Digital Twins Concept", "IoT Telemetry Simulation", "Grafana", "JSON-LD"],
        repoUrl: "",
        liveUrl: "",
        caseStudyUrl: "",
        evidence: "Detailed architectural schematics and DTDL models in Technical Project Portfolio document.",
        limitations: "System concept and simulation models; live utility substation telemetry integration was not commissioned in production.",
        architecture: {
          implemented: "Graph ontology for power transformers, switchgears, and feeder lines with telemetry property schemas.",
          design: "Real-time state mirroring with alerting thresholds for thermal overloads and voltage drops.",
          notes: "Directly bridges B.Sc. Electrical Engineering domain with modern cloud IoT digital twin architectures."
        },
        relatedProjects: ["PRJ-CLOUD-002", "PRJ-ML-002"]
      },
      {
        id: "PRJ-CLOUD-001",
        title: "Azure Terraform CI/CD Foundation",
        period: "2024–2025",
        domain: "Cloud Computing and Data Engineering",
        domainKey: "cloud-data",
        status: "Prototype",
        summary: "Zero-drift, enterprise-grade Infrastructure-as-Code foundation provisioning modular Microsoft Azure resources: Virtual Networks, Subnets, Azure Kubernetes Service (AKS), Key Vault, Container Registry, and Blob Storage with automated GitHub Actions CI/CD.",
        technologies: ["Terraform", "Microsoft Azure", "AKS (Azure Kubernetes Service)", "Azure Key Vault", "Azure Container Registry", "GitHub Actions", "tflint", "tfsec"],
        repoUrl: "https://github.com/alimulfazalnabil/azure-terraform-cicd-foundation",
        liveUrl: "",
        caseStudyUrl: "case-studies/azure-terraform-cicd.html",
        evidence: "Public GitHub repository with modular HCL configurations, automated PR speculative plan workflows, and security linting.",
        limitations: "Demonstrated on sandbox Azure subscription; production deployment requires enterprise Azure policy and landing zone governance.",
        architecture: {
          implemented: "Root module calling reusable child modules for networking, compute, and security; state stored in encrypted remote backend.",
          design: "Strict GitHub Actions pipeline enforcing automated formatting, security scanning with tfsec, and linting with tflint.",
          notes: "Guarantees reproducible infrastructure rollouts with zero configuration drift."
        },
        relatedProjects: ["PRJ-DATA-001", "PRJ-CLOUD-002"]
      },
      {
        id: "PRJ-CLOUD-002",
        title: "PGCB Engineers Organization Portal",
        period: "2023–2024",
        domain: "Web Engineering and Automation",
        domainKey: "web",
        status: "Deployed demo",
        summary: "Full-stack organizational web portal for Power Grid Company of Bangladesh (PGCB) engineers featuring member directories, technical document repository, announcement distribution, and role-based access.",
        technologies: ["Node.js", "Express", "PostgreSQL", "Bootstrap 5", "Render", "REST APIs", "EJS"],
        repoUrl: "https://github.com/alimulfazalnabil/pgcb-org-portal",
        liveUrl: "https://pgcb-org-portal.onrender.com/",
        caseStudyUrl: "",
        evidence: "Public repository with full application source code and live deployed instance running on Render.",
        limitations: "Demonstration deployment on free-tier hosting (Render); cold starts may take 30-50 seconds to initialize.",
        architecture: {
          implemented: "Express REST server with PostgreSQL connection pooling, session authentication, and parameterized SQL queries.",
          design: "Responsive mobile-friendly interface designed for cross-substation access by field engineers.",
          notes: "Successfully deployed and verified live."
        },
        relatedProjects: ["PRJ-ENG-001", "PRJ-CLOUD-003"]
      },
      {
        id: "PRJ-CLOUD-003",
        title: "Automation & Scraping Tooling Suite",
        period: "2023–2025",
        domain: "Web Engineering and Automation",
        domainKey: "web",
        status: "Learning exercise",
        summary: "Suite of Python automation utilities for web data extraction, multi-page scraping with rate limiting, automated PDF generation, and batch file organization.",
        technologies: ["Python", "BeautifulSoup4", "Selenium", "Requests", "pandas", "Bash / Shell"],
        repoUrl: "https://github.com/alimulfazalnabil/Automation-Projects",
        liveUrl: "",
        caseStudyUrl: "",
        evidence: "Public GitHub repository with documented CLI scripts and sample pipelines.",
        limitations: "Targeted scripts for specific extraction tasks; not built as a distributed crawler.",
        architecture: {
          implemented: "Resilient HTTP session handling, backoff retries, user-agent rotation, and structured JSON/CSV export.",
          design: "Lightweight command-line interfaces for recurring office automation workflows.",
          notes: "High practical utility for data aggregation and workflow productivity."
        },
        relatedProjects: ["PRJ-GENAI-004", "PRJ-DATA-002"]
      },
      {
        id: "PRJ-CLOUD-004",
        title: "Custom Compute Workstations & Edge Hardware",
        period: "2016–Present",
        domain: "Hardware Engineering and System Integration",
        domainKey: "hardware",
        status: "Production system",
        summary: "10+ years of hands-on custom computer engineering: designing, assembling, diagnosing, and tuning multi-GPU deep learning workstations, high-throughput compute servers, liquid cooling loops, and thermal airflow optimization.",
        technologies: ["Custom PC Architecture", "Multi-GPU Rigs", "Thermal Engineering", "BIOS / UEFI Tuning", "System Diagnostics", "Linux Server"],
        repoUrl: "",
        liveUrl: "",
        caseStudyUrl: "",
        evidence: "Photographic records in portfolio PDF Section 5 and dozens of physical system builds completed since 2016.",
        limitations: "Physical hardware builds; documentation consists of specifications and physical test logs rather than git commits.",
        architecture: {
          implemented: "Power delivery budgeting (PSU 12V rail load balancing), component layout for laminar airflow, memory timing tuning, and burn-in stability testing.",
          design: "Ensures thermal throttling prevention under sustained 100% deep learning training loads.",
          notes: "Rare systems-level hardware competency bridging physical silicon with software execution."
        },
        relatedProjects: ["PRJ-EMB-001", "PRJ-DATA-003"]
      },
      {
        id: "PRJ-EMB-001",
        title: "Solar Electric Vehicle with Collision Alert",
        period: "2021",
        domain: "Robotics and Embedded Systems",
        domainKey: "embedded",
        status: "Prototype",
        summary: "Academic capstone project at Cox's Bazar International University: a functional micro-electric vehicle powered by rooftop solar photovoltaic panels with multi-sensor hazard detection and automated emergency alert triggers.",
        technologies: ["Arduino Mega 2560", "Embedded C/C++", "Ultrasonic Sensors", "Infrared Hazard Sensors", "3-Axis Accelerometer", "Solar PV Charge Controller", "GSM Alerting Concept"],
        repoUrl: "",
        liveUrl: "",
        caseStudyUrl: "",
        evidence: "Photographic documentation in portfolio PDF Page 1 and academic thesis defense records at CBIU.",
        limitations: "Evaluated in academic campus grounds and lab bench tests; automotive high-speed crash testing was not within scope.",
        architecture: {
          implemented: "Embedded C++ sensor polling loop on Arduino Mega, analog accelerometer impact threshold interrupt, and solar battery management integration.",
          design: "Hazard detection subsystem alerting operators and flashing safety lights upon proximity breach.",
          notes: "B.Sc. Capstone project demonstrating complete electro-mechanical hardware integration."
        },
        relatedProjects: ["PRJ-EMB-003", "PRJ-CV-001"]
      },
      {
        id: "PRJ-EMB-002",
        title: "Servo-Motor Robotic Arm (4-Axis)",
        period: "2018–2019",
        domain: "Robotics and Embedded Systems",
        domainKey: "embedded",
        status: "Prototype",
        summary: "Articulated 4-axis robotic manipulator arm built with servo actuators and Arduino microcontroller, controlled wirelessly via Bluetooth serial interface from mobile and terminal apps.",
        technologies: ["Arduino", "Servo Motors (SG90 / MG995)", "HC-05 Bluetooth Module", "PWM Pulse Width Modulation", "Embedded C++"],
        repoUrl: "https://github.com/alimulfazalnabil/Bluetooth-Controlled-Robotic-Arm",
        liveUrl: "",
        caseStudyUrl: "",
        evidence: "Public GitHub repository with system documentation and kinematics outline.",
        limitations: "Benchtop prototype for academic kinematics study; high-torque industrial payload testing was not within scope.",
        architecture: {
          implemented: "Multi-channel PWM pulse generation, forward angular coordinate translation, and serial packet parsing for joint position updates.",
          design: "Compact articulated mechanical structure with 4 degrees of freedom (base, shoulder, elbow, gripper).",
          notes: "Verified wireless actuation and repeatable spatial positioning."
        },
        relatedProjects: ["PRJ-EMB-004", "PRJ-EMB-006"]
      },
      {
        id: "PRJ-EMB-003",
        title: "Dual-Axis Solar Tracking System",
        period: "2018–2019",
        domain: "Robotics and Embedded Systems",
        domainKey: "embedded",
        status: "Prototype",
        summary: "Dual-axis solar tracking rig using light-dependent resistor (LDR) sensor arrays to compute differential irradiance and actuate elevation/azimuth servos, maximizing solar incidence throughout daylight hours.",
        technologies: ["Arduino", "LDR Optical Sensors", "Servo Motors", "Analog Comparator Logic", "Embedded C"],
        repoUrl: "",
        liveUrl: "",
        caseStudyUrl: "",
        evidence: "Documented in academic project records and portfolio PDF Section 2.",
        limitations: "Benchtop laboratory prototype; high-wind structural torque compensation was not evaluated in outdoor weather.",
        architecture: {
          implemented: "Four-quadrant differential light sensing, hysteresis thresholding to prevent servo hunting, and dual-axis rotational actuation.",
          design: "Maximizes photovoltaic capture over static mounting plates.",
          notes: "Tested under moving artificial light sources in laboratory bench trials."
        },
        relatedProjects: ["PRJ-EMB-001", "PRJ-EMB-002"]
      },
      {
        id: "PRJ-EMB-004",
        title: "Autonomous Line-Follower Ground Robot",
        period: "2017–2018",
        domain: "Robotics and Embedded Systems",
        domainKey: "embedded",
        status: "Prototype",
        summary: "High-speed differential-drive autonomous wheeled robot tracking high-contrast track boundaries using an infrared reflectance sensor array and feedback steering control on Arduino Mega.",
        technologies: ["Arduino Mega 2560", "Infrared Reflectance Sensor Array", "L298N Dual H-Bridge Motor Driver", "DC Gear Motors", "Embedded C/C++"],
        repoUrl: "https://github.com/alimulfazalnabil/Robotics-projects",
        liveUrl: "",
        caseStudyUrl: "",
        evidence: "Public repository containing robotics sketches and documented physical tests.",
        limitations: "Designed for high-contrast indoor track navigation; outdoor rough-terrain traction was not evaluated.",
        architecture: {
          implemented: "Analog threshold reading across multi-sensor IR array, error term calculation, and differential PWM motor speed adjustment.",
          design: "Autonomous navigation loop without external supervisory radio.",
          notes: "Demonstrates real-time closed-loop control on low-power microcontrollers."
        },
        relatedProjects: ["PRJ-EMB-002", "PRJ-CV-001"]
      },
      {
        id: "PRJ-EMB-005",
        title: "IoT-Based Digital Notice Board",
        period: "2021–2022",
        domain: "Robotics and Embedded Systems",
        domainKey: "embedded",
        status: "Research project",
        summary: "Peer-reviewed research and functional prototype for wireless campus and industrial notification: messages submitted via web portal or mobile app are relayed over Wi-Fi/GSM to microcontrollers and rendered on dynamic displays in real time.",
        technologies: ["ESP8266 Wi-Fi Module", "Microcontroller", "LCD / LED Display Matrix", "Cloud HTTP / MQTT", "Embedded C", "Peer-Reviewed Paper"],
        repoUrl: "",
        liveUrl: "",
        caseStudyUrl: "",
        evidence: "Peer-reviewed paper published in IRJMETS (Volume 04, Issue 11, November 2022).",
        limitations: "Hardware demonstration rig developed for academic research; commercial manufacturing was not pursued.",
        architecture: {
          implemented: "Wi-Fi client polling cloud endpoint, string buffer parsing, scrolling display driver, and local non-volatile message caching.",
          design: "Low-cost wireless communication replacement for physical bulletin boards.",
          notes: "Formal academic peer-reviewed publication validates the engineering methodology."
        },
        relatedProjects: ["PRJ-ENG-001", "PRJ-CLOUD-002"]
      },
      {
        id: "PRJ-EMB-006",
        title: "Embedded Robotics Modules Monorepo",
        period: "2017–2023",
        domain: "Robotics and Embedded Systems",
        domainKey: "embedded",
        status: "Learning exercise",
        summary: "Comprehensive collection of microcontroller firmware sketches and hardware inter-operation modules covering I2C, SPI, and UART protocols, ultrasonic ranging, ultrasonic obstacle avoidance, and motor actuation.",
        technologies: ["Arduino", "Microchip AVR", "I2C", "SPI", "UART", "Sensor Interfacing", "Embedded C++"],
        repoUrl: "https://github.com/alimulfazalnabil/Robotics-projects",
        liveUrl: "",
        caseStudyUrl: "",
        evidence: "Public GitHub repository with dozens of documented embedded C++ sketches.",
        limitations: "Modular firmware component library rather than an integrated end-user consumer product.",
        architecture: {
          implemented: "Hardware register manipulation, timer interrupts, serial communication drivers, and peripheral sensor wrappers.",
          design: "Modular embedded building blocks for rapid hardware prototyping.",
          notes: "Reflects foundational electrical engineering and embedded systems mastery."
        },
        relatedProjects: ["PRJ-EMB-004", "PRJ-EMB-002"]
      },
      {
        id: "PRJ-ENG-001",
        title: "SPAROO Online Shopping & Auction Web App",
        period: "2021–2022",
        domain: "Engineering Design and AutoCAD",
        domainKey: "cad",
        status: "Research project",
        summary: "Peer-reviewed research and dynamic e-commerce web platform integrating a real-time ascending-price bidding engine, product catalog, shopping cart, and transaction management.",
        technologies: ["PHP", "MySQL", "JavaScript", "HTML5 / CSS3", "Apache", "Peer-Reviewed Paper"],
        repoUrl: "",
        liveUrl: "",
        caseStudyUrl: "",
        evidence: "Peer-reviewed research paper published in IRJET (Volume 09, Issue 11, November 2022).",
        limitations: "Academic research web application; credit card payment gateway compliance (PCI-DSS) was simulated.",
        architecture: {
          implemented: "Relational database schema for user auctions, bids, and listings; server-side bid validation and automated auction timer expiration.",
          design: "Three-tier web architecture with secure session management.",
          notes: "Validated through peer-reviewed academic publication."
        },
        relatedProjects: ["PRJ-CLOUD-002", "PRJ-EMB-005"]
      },
      {
        id: "PRJ-ENG-002",
        title: "Autonomous Quadcopter ArduPilot Concept",
        period: "2019–2020",
        domain: "Engineering Design and AutoCAD",
        domainKey: "cad",
        status: "Prototype",
        summary: "Unmanned aerial vehicle (UAV) flight control and waypoint navigation prototype based on ArduPilot firmware, Pixhawk/APM flight controllers, and Mission Planner ground control simulation.",
        technologies: ["ArduPilot (APM / Pixhawk)", "Mission Planner", "GPS Autonomous Waypoints", "Telemetry Radio", "UAV Simulation"],
        repoUrl: "",
        liveUrl: "",
        caseStudyUrl: "",
        evidence: "Portfolio PDF Section 2 and flight telemetry log records.",
        limitations: "Academic flight testing in controlled open field; commercial BVLOS (beyond visual line of sight) operations were not conducted.",
        architecture: {
          implemented: "PID flight controller tuning for multi-rotor stabilization, GPS geofencing, fail-safe return-to-home logic, and telemetry streaming.",
          design: "Autonomous aerial mapping and inspection platform concept.",
          notes: "Demonstrates practical aerial robotics and ground control coordination."
        },
        relatedProjects: ["PRJ-CV-001", "PRJ-EMB-001"]
      },
      {
        id: "PRJ-ENG-003",
        title: "Industrial 2D/3D CAD Design Portfolio",
        period: "2017–2022",
        domain: "Engineering Design and AutoCAD",
        domainKey: "cad",
        status: "Research project",
        summary: "Technical drafting and CAD design portfolio consisting of over 15 engineering projects: electrical substation single-line diagrams (SLD), industrial wiring schematics, panel layouts, and 3D mechanical components.",
        technologies: ["AutoCAD", "2D Electrical Drafting", "Substation Single-Line Diagrams", "3D Mechanical Modeling", "Industrial Schematics"],
        repoUrl: "",
        liveUrl: "",
        caseStudyUrl: "",
        evidence: "Portfolio PDF Section 6 featuring technical drawings, wiring diagrams, and substation schematics.",
        limitations: "Drafting drawings created for academic and power-grid technical documentation.",
        architecture: {
          implemented: "Precision technical drafting adhering to IEC and IEEE electrical drafting standards, layer management, and dimensional tolerances.",
          design: "Industrial blueprints for electrical distribution and physical assemblies.",
          notes: "Substantiates deep classical electrical engineering and technical drafting background."
        },
        relatedProjects: ["PRJ-DATA-003", "PRJ-EMB-001"]
      }
    ],

    // Normalized technology registry with aliases & project associations
    technologies: [
      {
        id: "rag",
        name: "Retrieval-Augmented Generation (RAG)",
        domain: "Artificial Intelligence",
        aliases: ["rag", "retrieval augmented generation", "retrieval-augmented generation", "hybrid search", "bm25", "dense retrieval", "reciprocal rank fusion", "rrf"],
        projects: ["PRJ-GENAI-001", "PRJ-GENAI-002", "PRJ-GENAI-003"],
        description: "Production-grade RAG systems fusing sparse lexical search (BM25) and dense vector search (pgvector) with reciprocal rank fusion and claim-level verification."
      },
      {
        id: "genai",
        name: "Generative AI & LLMs",
        domain: "Artificial Intelligence",
        aliases: ["genai", "generative ai", "llm", "large language models", "prompt engineering", "ai agents", "sentence transformers", "embeddings"],
        projects: ["PRJ-GENAI-001", "PRJ-GENAI-002", "PRJ-GENAI-003", "PRJ-GENAI-004"],
        description: "Designing structured reasoning workflows, prompt chains, agentic tool execution, and local vector pattern retrieval."
      },
      {
        id: "python",
        name: "Python 3.12+",
        domain: "Core Software Engineering",
        aliases: ["python", "python3", "asyncio", "pandas", "numpy", "scipy"],
        projects: ["PRJ-GENAI-001", "PRJ-GENAI-002", "PRJ-GENAI-003", "PRJ-GENAI-004", "PRJ-CV-001", "PRJ-CV-002", "PRJ-ML-001", "PRJ-ML-002", "PRJ-ML-003", "PRJ-DATA-002", "PRJ-CLOUD-003"],
        description: "Primary programming language used for asynchronous microservices, data processing pipelines, computer vision, and machine learning."
      },
      {
        id: "fastapi",
        name: "FastAPI",
        domain: "Web & API Development",
        aliases: ["fastapi", "rest api", "python api", "uvicorn", "pydantic"],
        projects: ["PRJ-GENAI-001", "PRJ-GENAI-002", "PRJ-GENAI-003", "PRJ-ML-001"],
        description: "High-performance asynchronous REST microservices with Pydantic data validation, OpenAPI/Swagger docs, and sub-second latency."
      },
      {
        id: "azure",
        name: "Microsoft Azure",
        domain: "Cloud Infrastructure",
        aliases: ["azure", "microsoft azure", "azure cloud", "aks", "azure kubernetes", "azure devops", "azure key vault", "azure blob"],
        projects: ["PRJ-CLOUD-001", "PRJ-DATA-001", "PRJ-DATA-003"],
        description: "Enterprise cloud provisioning, Virtual Networks, AKS container orchestration, Key Vault secrets management, and Blob Storage."
      },
      {
        id: "terraform",
        name: "Terraform (IaC)",
        domain: "DevOps & Infrastructure as Code",
        aliases: ["terraform", "iac", "infrastructure as code", "hcl", "tflint", "tfsec"],
        projects: ["PRJ-CLOUD-001", "PRJ-DATA-001"],
        description: "Modular, zero-drift infrastructure as code provisioning cloud topologies with automated CI validation, tfsec, and tflint."
      },
      {
        id: "opencv",
        name: "OpenCV & Computer Vision",
        domain: "Perception & Vision",
        aliases: ["opencv", "cv", "computer vision", "vision", "image processing", "perception", "sliding window", "perspective transform"],
        projects: ["PRJ-CV-001", "PRJ-CV-002", "PRJ-CV-004"],
        description: "Camera calibration, color spaces (HLS/LAB), geometric perspective transforms, feature detection, and real-time video stream processing."
      },
      {
        id: "yolo",
        name: "YOLO (Object Detection)",
        domain: "Perception & Vision",
        aliases: ["yolo", "yolov8", "object detection", "bounding box", "pedestrian detection", "vehicle detection"],
        projects: ["PRJ-CV-002"],
        description: "Real-time multi-class object detection and tracking for automotive and surveillance scenarios."
      },
      {
        id: "carla",
        name: "CARLA Simulator",
        domain: "Autonomous Simulation",
        aliases: ["carla", "carla simulator", "autonomous driving", "lane detection sim", "waypoint"],
        projects: ["PRJ-CV-001", "PRJ-CV-003"],
        description: "Autonomous vehicle simulation testing camera and LIDAR perception pipelines under controlled urban towns and weather variations."
      },
      {
        id: "scikit_learn",
        name: "scikit-learn & Machine Learning",
        domain: "Applied Machine Learning",
        aliases: ["scikit-learn", "sklearn", "random forest", "xgboost", "logistic regression", "shap", "smote", "classification"],
        projects: ["PRJ-ML-001", "PRJ-ML-002", "PRJ-ML-003"],
        description: "Disciplined ML workflows: cross-validation, class rebalancing (SMOTE), hyperparameter tuning, and model explainability with SHAP."
      },
      {
        id: "pgvector",
        name: "PostgreSQL & pgvector",
        domain: "Data & Vector Search",
        aliases: ["pgvector", "vector database", "vector search", "postgres vector", "hnsw", "ivfflat"],
        projects: ["PRJ-GENAI-001", "PRJ-GENAI-002"],
        description: "Relational vector database indexing with HNSW and IVFFlat cosine similarity search for hybrid RAG pipelines."
      },
      {
        id: "docker",
        name: "Docker & Containerization",
        domain: "DevOps & Deployment",
        aliases: ["docker", "container", "containerization", "docker compose", "dockerfile"],
        projects: ["PRJ-GENAI-001", "PRJ-ML-001", "PRJ-DATA-002", "PRJ-CLOUD-001"],
        description: "Multi-stage minimal container builds (< 250MB) with non-root security profiles and reproducible service composition."
      },
      {
        id: "arduino",
        name: "Arduino & Microcontrollers",
        domain: "Embedded Systems",
        aliases: ["arduino", "microcontroller", "mega 2560", "embedded c", "embedded c++", "pwm", "i2c", "spi", "uart"],
        projects: ["PRJ-EMB-001", "PRJ-EMB-002", "PRJ-EMB-003", "PRJ-EMB-004", "PRJ-EMB-005", "PRJ-EMB-006"],
        description: "7+ years embedded C/C++ firmware development on AVR microcontrollers, sensor arrays, motor drivers, and serial communication."
      },
      {
        id: "data_engineering",
        name: "Spark & Data Pipelines",
        domain: "Data Engineering",
        aliases: ["spark", "pyspark", "kafka", "data engineering", "etl", "data pipeline", "sql"],
        projects: ["PRJ-DATA-001", "PRJ-DATA-002"],
        description: "Batch and streaming ETL pipelines using PySpark, Apache Kafka, SQL transformations, and structured data storage."
      },
      {
        id: "hardware",
        name: "Workstation & Hardware Engineering",
        domain: "Hardware Engineering",
        aliases: ["hardware", "pc building", "workstation", "thermal", "cooling", "bios", "edge compute"],
        projects: ["PRJ-CLOUD-004", "PRJ-EMB-001"],
        description: "Designing, assembling, and tuning high-performance multi-GPU deep learning rigs, thermal optimization loops, and custom server hardware."
      }
    ],

    // Career experience and background
    career: [
      {
        organization: "ReDI School of Digital Integration",
        location: "Berlin, Germany",
        role: "Volunteer Python Instructor",
        period: "2023 – Present",
        status: "Active Volunteer",
        description: "Instructing and mentoring international students in Python programming, clean software design, algorithmic problem-solving, and preparing for professional software engineering careers.",
        highlights: [
          "Delivering structured curriculum on Python data structures, algorithms, and OOP fundamentals.",
          "Providing individualized code reviews and debugging mentorship for diverse adult learners.",
          "Articulating complex architectural concepts clearly to both technical and transitioning peers."
        ],
        technologies: ["Python", "Git", "Clean Code", "Pedagogy"]
      },
      {
        organization: "Energy Crown",
        location: "Berlin, Germany",
        role: "Cloud & Infrastructure Engineer",
        period: "2022 – 2024",
        status: "Completed",
        description: "Architected and managed cloud infrastructure on Microsoft Azure, automated server monitoring, configured virtual machines, and maintained security compliance.",
        highlights: [
          "Configured Azure Virtual Machines, subnets, and security groups following zero-trust access control.",
          "Automated infrastructure health checks and log monitoring.",
          "Collaborated on technical specifications for operational reliability and disaster recovery."
        ],
        technologies: ["Microsoft Azure", "Terraform", "Linux Server", "Bash", "Networking"]
      },
      {
        organization: "Power Grid Company of Bangladesh (PGCB)",
        location: "Bangladesh",
        role: "Electrical Engineering Analysis & Web Portal Author",
        period: "2020 – 2021 (Academic & Portal Collaboration)",
        status: "Completed",
        description: "Conducted high-voltage substation instrumentation analysis, studied transmission telemetry, and engineered the full-stack PGCB Engineers Organization Portal (PRJ-CLOUD-002).",
        highlights: [
          "Analyzed power grid single-line diagrams (SLD) and high-voltage transmission substation schematics.",
          "Architected and deployed the PGCB Engineers Organization Portal (Node.js, PostgreSQL, Render).",
          "Bridged power engineering operations with modern full-stack web platforms."
        ],
        technologies: ["Substation Automation", "AutoCAD", "Node.js", "PostgreSQL", "Single-Line Diagrams"]
      },
      {
        organization: "Cox's Bazar International University (CBIU)",
        location: "Bangladesh",
        role: "B.Sc. Student & Robotics Researcher",
        period: "2017 – 2021",
        status: "Graduated",
        description: "Completed Bachelor of Science in Electrical and Electronic Engineering. Led capstone autonomous vehicle project and published two peer-reviewed academic papers in international journals.",
        highlights: [
          "Led development of the Solar Electric Vehicle with Multi-Sensor Collision Alert (PRJ-EMB-001).",
          "Published two peer-reviewed research papers in IRJMETS and IRJET on IoT and Web systems.",
          "Founded and led campus robotics workshops and microcontroller competitions."
        ],
        technologies: ["Embedded C++", "Microcontrollers", "Control Systems", "Circuit Design"]
      }
    ],

    // 9 Professional Service Domains (matching Section 08)
    services: [
      {
        id: "web_dev",
        title: "Web Development",
        domains: ["Full-Stack", "Frontend", "Backend", "APIs"],
        description: "Full-stack web applications, business platforms, e-commerce, custom dashboards, and high-performance REST APIs built with modern, secure architectures.",
        deliverables: ["Full-stack web applications", "Responsive UI/UX", "REST / GraphQL APIs", "PostgreSQL / MySQL databases", "CI/CD deployment"]
      },
      {
        id: "business_software",
        title: "Business Management Software",
        domains: ["POS", "CRM", "ERP", "Inventory"],
        description: "Tailored business software including Point-of-Sale (POS), inventory management, billing systems, and lightweight ERP solutions.",
        deliverables: ["Role-based admin portals", "Transaction audit trails", "Automated invoice generation", "Data export / reporting"]
      },
      {
        id: "ai_automation",
        title: "AI & Automation Solutions",
        domains: ["GenAI", "RAG", "LLM Agents", "Computer Vision"],
        description: "Production-ready Enterprise RAG platforms, intelligent AI agents, computer vision pipelines, document intelligence, and workflow automations.",
        deliverables: ["Hybrid RAG microservices (pgvector + BM25)", "Citation-backed document Q&A", "Computer vision perception", "Automated batch data scrapers"]
      },
      {
        id: "cloud_devops",
        title: "Cloud & DevOps Services",
        domains: ["Azure", "Terraform", "Kubernetes", "CI/CD"],
        description: "Infrastructure as Code with Terraform, container orchestration on Azure Kubernetes Service (AKS), GitHub Actions CI/CD pipelines, and cloud migrations.",
        deliverables: ["Zero-drift Terraform modules", "Automated CI/CD workflows", "Containerized Docker microservices", "Key Vault secret management"]
      },
      {
        id: "data_bi",
        title: "Data & Business Intelligence",
        domains: ["ETL", "Spark", "PostgreSQL", "Dashboards"],
        description: "End-to-end data pipelines, database architecture, automated ETL processing, and real-time operational dashboards.",
        deliverables: ["ETL pipelines (PySpark / SQL)", "Database indexing & optimization", "Interactive telemetry dashboards", "Data warehouse modeling"]
      },
      {
        id: "embedded_iot",
        title: "Embedded Systems & IoT",
        domains: ["Arduino", "Sensors", "Firmware", "Robotics"],
        description: "Custom firmware development in embedded C/C++, sensor integration, motor control, microcontrollers, and IoT telemetry systems.",
        deliverables: ["Arduino / AVR firmware code", "Sensor integration & communication protocols", "Actuator & motor driver circuits", "Hardware prototype validation"]
      },
      {
        id: "maintenance_security",
        title: "Maintenance, Security & Support",
        domains: ["Audits", "Optimization", "Backups", "Zero-Trust"],
        description: "System maintenance, performance profiling, security audits, database backups, and uptime monitoring.",
        deliverables: ["Security vulnerability audits", "Latency & query optimization", "Automated backup schedules", "Incident triage & bug fixing"]
      },
      {
        id: "consulting",
        title: "IT & Digital Transformation Consulting",
        domains: ["Architecture RFCs", "Tech Selection", "Roadmaps"],
        description: "Strategic engineering consulting, system architecture design, technology stack evaluation, and digital transformation roadmaps.",
        deliverables: ["Architecture design RFCs", "Technology feasibility assessments", "Cost optimization plans", "Migration blueprints"]
      },
      {
        id: "training",
        title: "Technical Training & Education",
        domains: ["Python", "Cloud", "RAG", "Corporate Workshops"],
        description: "Corporate and individual training workshops on Python programming, Generative AI & RAG architectures, cloud engineering, and modern DevOps.",
        deliverables: ["Hands-on interactive workshops", "Custom curriculum & exercises", "Code review sessions", "Team upskilling documentation"]
      }
    ],

    // Contact & verified availability
    contact: {
      email: "aflnabil@gmail.com",
      linkedin: "https://linkedin.com/in/alimul-fazal-nabil",
      github: "https://github.com/alimulfazalnabil",
      leetcode: "https://leetcode.com/u/alimul_nabil/",
      location: "Berlin, Germany",
      availability: "Actively available for high-impact full-time roles, contract engineering, and enterprise consulting.",
      workTypes: ["Full-time Onsite (Berlin)", "Hybrid (Germany / Europe)", "Remote (Global)"],
      formAnchor: "#contact"
    }
  };

  // Expose to window for browser and module for Node.js testing
  if (typeof window !== "undefined") {
    window.AI_TWIN_KNOWLEDGE = AI_TWIN_KNOWLEDGE;
  }
  if (typeof module !== "undefined" && module.exports) {
    module.exports = AI_TWIN_KNOWLEDGE;
  }
})();
