# -*- coding: utf-8 -*-
import json
import os

base_dir = r"h:\Software Projects\alimulfazalnabil.github.io-main"
portfolio_html_path = os.path.join(base_dir, "portfolio.html")
career_graph_js_path = os.path.join(base_dir, "assets", "js", "career-graph.js")

# 1. Define the 9 Categories
CATEGORIES = [
    {"id": "dom_embedded", "slug": "embedded", "title": "Robotics and Embedded Systems", "shortTitle": "Robotics & Embedded", "color": "#14b8a6", "desc": "Autonomous mobile platforms, articulated manipulators, embedded C/C++, sensor integration, and solar PV tracking."},
    {"id": "dom_vision", "slug": "vision", "title": "Computer Vision and Autonomous Systems", "shortTitle": "Computer Vision & Autonomy", "color": "#38bdf8", "desc": "Deterministic roadway perception, Hough transform lane boundary extraction, CARLA simulation, and YOLO visual tracking."},
    {"id": "dom_aiml", "slug": "aiml", "title": "Artificial Intelligence and Machine Learning", "shortTitle": "AI & Machine Learning", "color": "#a855f7", "desc": "Enterprise RAG architectures, multi-tenant hybrid retrieval, clinical risk classification, and predictive modeling."},
    {"id": "dom_cloud_data", "slug": "cloud-data", "title": "Cloud Computing and Data Engineering", "shortTitle": "Cloud & Data Engineering", "color": "#3b82f6", "desc": "Microsoft Azure cloud architectures, Terraform Infrastructure-as-Code, distributed PySpark processing, and scalable ETL."},
    {"id": "dom_automation", "slug": "automation", "title": "Industrial Automation and Digital Twins", "shortTitle": "Industrial Automation & Twins", "color": "#f59e0b", "desc": "Industrial digital-twin concepts, simulated vibration predictive maintenance, and telemetry control topology."},
    {"id": "dom_hardware", "slug": "hardware", "title": "Hardware Engineering and System Integration", "shortTitle": "Hardware Engineering", "color": "#ec4899", "desc": "10+ years custom computing workstation engineering, liquid cooling, thermal optimization, BIOS/UEFI profiling, and edge AI stations."},
    {"id": "dom_web", "slug": "web", "title": "Web Engineering and Automation", "shortTitle": "Web Engineering & Automation", "color": "#06b6d4", "desc": "Full-stack institutional web portals (PGCB), automated scraping suites, workflow tooling, and database-backed applications."},
    {"id": "dom_smartcity", "slug": "smartcity", "title": "Smart Cities and Traffic Optimization", "shortTitle": "Smart Cities & Traffic", "color": "#8b5cf6", "desc": "Territorial intelligence blueprints, MAXBAND green-wave arterial progression, Deep Q-Networks (DQN), and SUMO microscopic traffic simulation."},
    {"id": "dom_cad", "slug": "cad", "title": "Engineering Design and AutoCAD", "shortTitle": "Engineering Design & CAD", "color": "#64748b", "desc": "2D/3D precision drafting, mechanical component modeling, orthographic projections, and layout visualizations."}
]

# 2. Define the 6 Statuses
STATUS_MAP = {
    "academic": {"label": "Academic Project", "badgeClass": "badge-academic"},
    "prototype": {"label": "Prototype", "badgeClass": "badge-prototype"},
    "concept": {"label": "Concept", "badgeClass": "badge-concept"},
    "learning": {"label": "Learning Project", "badgeClass": "badge-learning"},
    "collection": {"label": "Repository Collection", "badgeClass": "badge-collection"},
    "deployment": {"label": "Verified Deployment", "badgeClass": "badge-deployment"}
}

# 3. Complete Specification of 27 Projects
PROJECTS = [
    # 1. Robotics and Embedded Systems (7)
    {
        "id": "PRJ-EMB-001",
        "domainId": "dom_embedded",
        "domainSlug": "embedded",
        "categoryTitle": "Robotics and Embedded Systems",
        "status": "academic",
        "title": "Solar-Powered Electric Vehicle with Multi-Sensor Accident Detection",
        "period": "July 2021 – November 2021 · PRJ-EMB-001",
        "yearStart": 2021, "yearEnd": 2021,
        "desc": "Electric micro-mobility platform featuring autonomous hazard identification and rapid accident alerting to protect operators in transit while maximizing solar PV energy harvesting.",
        "contribution": "Conceptualized system architecture; authored Arduino Mega 2560 embedded C/C++ firmware; integrated ultrasonic proximity ranging, infrared hazard sensors, and 3-axis accelerometer collision trigger thresholds; wired solar PV charge controller.",
        "technologies": ["Arduino Mega 2560", "Embedded C/C++", "Ultrasonic Sensors", "Infrared Sensors", "3-Axis Accelerometer", "Solar PV Controller"],
        "evidenceNote": "Physical hardware vehicle photograph featured on page 1 of author's Technical Project Portfolio document. Academic project work.",
        "repoUrl": "",
        "liveUrl": "",
        "caseStudyUrl": "",
        "isPrivate": False,
        "actionText": "Academic Archive"
    },
    {
        "id": "PRJ-EMB-002",
        "domainId": "dom_embedded",
        "domainSlug": "embedded",
        "categoryTitle": "Robotics and Embedded Systems",
        "status": "prototype",
        "title": "Servo-Motor Robotic Arm (4-Axis Articulated Manipulator)",
        "period": "2018 – 2019 · PRJ-EMB-002",
        "yearStart": 2018, "yearEnd": 2019,
        "desc": "Four-axis articulated robotic arm utilizing PWM-driven servo motors and microcontroller logic for multi-degree-of-freedom spatial positioning and wireless Bluetooth control.",
        "contribution": "Assembled 4-axis mechanical linkage; programmed PWM servo motion trajectories and angular boundaries in Arduino C++; implemented serial command handling for wireless Bluetooth (HC-05) control.",
        "technologies": ["Arduino", "Servo Motors (SG90/MG995)", "HC-05 Bluetooth Module", "PWM Control", "Embedded C++"],
        "evidenceNote": "GitHub repository documentation outline; portfolio document listing. Awaiting full circuit schematics and verified bench test metrics before presenting as fully validated build.",
        "repoUrl": "https://github.com/alimulfazalnabil/Bluetooth-Controlled-Robotic-Arm",
        "liveUrl": "",
        "caseStudyUrl": "",
        "isPrivate": False,
        "actionText": "View Code"
    },
    {
        "id": "PRJ-EMB-003",
        "domainId": "dom_embedded",
        "domainSlug": "embedded",
        "categoryTitle": "Robotics and Embedded Systems",
        "status": "academic",
        "title": "Dual-Axis Solar-Tracking Photovoltaic Optimization System",
        "period": "2018 – 2019 · PRJ-EMB-003",
        "yearStart": 2018, "yearEnd": 2019,
        "desc": "Light-seeking solar photovoltaic tracking platform utilizing light-dependent resistor (LDR) sensor arrays and servo actuators to dynamically orient PV panels toward maximum solar irradiance.",
        "contribution": "Designed differential light-sensing circuit using 4 LDRs; programmed tracking feedback loop with deadband threshold in Arduino C++ to eliminate motor jitter; mounted dual-axis servo gimbal.",
        "technologies": ["Arduino", "LDR Sensors", "Servo Motors", "Microcontroller", "Embedded C++"],
        "evidenceNote": "Documented in author's Technical Project Portfolio document (Section 2). Energy generation percentage improvement not claimed due to lack of comparative baseline setup.",
        "repoUrl": "",
        "liveUrl": "",
        "caseStudyUrl": "",
        "isPrivate": False,
        "actionText": "Academic Archive"
    },
    {
        "id": "PRJ-EMB-004",
        "domainId": "dom_embedded",
        "domainSlug": "embedded",
        "categoryTitle": "Robotics and Embedded Systems",
        "status": "academic",
        "title": "Autonomous Line-Follower Ground Robot",
        "period": "2017 – 2018 · PRJ-EMB-004",
        "yearStart": 2017, "yearEnd": 2018,
        "desc": "Autonomous ground vehicle designed to follow high-contrast optical track boundaries at steady speed using reflective infrared sensing arrays and closed-loop motor control.",
        "contribution": "Built 2WD differential drive chassis; calibrated 5-channel infrared reflectance array; programmed bang-bang and proportional steering feedback algorithms in Arduino C++ for rapid line recovery.",
        "technologies": ["Arduino Mega 2560", "Infrared Sensor Array", "H-Bridge Motor Driver", "Differential Drive", "Embedded C++"],
        "evidenceNote": "Verified robotics competition and academic archive. Documented without unconfirmed performance figures in portfolio document.",
        "repoUrl": "https://github.com/alimulfazalnabil/Robotics-projects",
        "liveUrl": "",
        "caseStudyUrl": "",
        "isPrivate": False,
        "actionText": "View Code"
    },
    {
        "id": "PRJ-EMB-005",
        "domainId": "dom_embedded",
        "domainSlug": "embedded",
        "categoryTitle": "Robotics and Embedded Systems",
        "status": "academic",
        "title": "IoT-Based Digital Information & Notice Board System",
        "period": "2021 – November 2022 · PRJ-EMB-005",
        "yearStart": 2021, "yearEnd": 2022,
        "desc": "Wireless electronic bulletin board architecture replacing physical paper displays with real-time digital announcements pushed over embedded microcontrollers and IoT protocols.",
        "contribution": "Authored embedded firmware interfacing microcontroller with wireless communication modules (ESP8266/Bluetooth); structured MQTT/serial message payloads; authored peer-reviewed paper in IRJMETS (2022).",
        "technologies": ["Arduino", "ESP8266 Wi-Fi", "MQTT", "LiquidCrystal / Dot Matrix Display", "Embedded C++"],
        "evidenceNote": "Published peer-reviewed research: IRJMETS Volume 4, Issue 11, November 2022.",
        "repoUrl": "",
        "liveUrl": "",
        "caseStudyUrl": "",
        "isPrivate": False,
        "actionText": "Peer-Reviewed Paper (IRJMETS 2022)"
    },
    {
        "id": "PRJ-EMB-006",
        "domainId": "dom_embedded",
        "domainSlug": "embedded",
        "categoryTitle": "Robotics and Embedded Systems",
        "status": "collection",
        "title": "Robotics Projects (Foundations & Autonomous Rover Modules)",
        "period": "2017 – 2023 · PRJ-EMB-006",
        "yearStart": 2017, "yearEnd": 2023,
        "desc": "Open-source collection of robotics sub-modules, circuit interfaces, obstacle avoidance routines, Bluetooth teleoperation, robotic arm control, and GPS rover concepts.",
        "contribution": "Curated, implemented, and documented diverse microcontroller robotics firmware routines, sensor pinout mappings, and motor driver calibration scripts.",
        "technologies": ["Arduino", "C/C++", "Ultrasonic Ranging", "Motor Drivers (L298N)", "GPS Modules", "Sensors"],
        "evidenceNote": "Open-source repository collection on GitHub; collection does not imply individual production validation for every experimental script.",
        "repoUrl": "https://github.com/alimulfazalnabil/Robotics-projects",
        "liveUrl": "",
        "caseStudyUrl": "",
        "isPrivate": False,
        "actionText": "Explore Repository"
    },
    {
        "id": "PRJ-ENG-002",
        "domainId": "dom_embedded",
        "domainSlug": "embedded",
        "categoryTitle": "Robotics and Embedded Systems",
        "status": "concept",
        "title": "Autonomous Quadcopter Aerial Concept with ArduPilot & Pixhawk",
        "period": "2019 – 2020 · PRJ-ENG-002",
        "yearStart": 2019, "yearEnd": 2020,
        "desc": "Autonomous aerial survey and remote telemetry gathering concept utilizing open-source flight stacks and multi-sensor navigation in unstructured outdoor environments.",
        "contribution": "Conceptualized UAV airframe layout; configured ArduPilot flight stack parameters; integrated Pixhawk flight controller, GPS, IMU, and 433MHz telemetry transceiver.",
        "technologies": ["ArduPilot", "Pixhawk Flight Controller", "GPS", "IMU", "Telemetry Radio", "Mission Planner"],
        "evidenceNote": "Documented in Technical Project Portfolio document (Page 2). Listed as concept project; no unverified navigation accuracy or successful flight-test results are claimed.",
        "repoUrl": "",
        "liveUrl": "",
        "caseStudyUrl": "",
        "isPrivate": False,
        "actionText": "Academic Concept Archive"
    },

    # 2. Computer Vision and Autonomous Systems (4)
    {
        "id": "PRJ-CV-001",
        "domainId": "dom_vision",
        "domainSlug": "vision",
        "categoryTitle": "Computer Vision and Autonomous Systems",
        "status": "prototype",
        "title": "Autonomous Lane Detection Pipeline & CARLA Bridge",
        "period": "2023 – 2024 · PRJ-CV-001",
        "yearStart": 2023, "yearEnd": 2024,
        "desc": "Deterministic computer vision pipeline for roadway boundary detection under variable lighting, featuring synthetic evaluation tests and a modular CARLA simulator adapter.",
        "contribution": "Engineered end-to-end vision pipeline: HSL/grayscale colorspace transformation, Canny edge detection, trapezoidal ROI masking, Hough line extraction, temporal lane line smoothing, and synthetic image test harness.",
        "technologies": ["Python", "OpenCV", "NumPy", "Hough Transform", "CARLA Simulator", "Pytest"],
        "evidenceNote": "Fully documented GitHub repository with reproducible unit tests and synthetic test harness. Classical vision pipeline; CNN-based steering-angle prediction and extensive scenario testing are not claimed.",
        "repoUrl": "https://github.com/alimulfazalnabil/Autonomous-Lane-Detection",
        "liveUrl": "",
        "caseStudyUrl": "case-studies/autonomous-lane-detection.html",
        "isPrivate": False,
        "actionText": "View Code"
    },
    {
        "id": "PRJ-CV-002",
        "domainId": "dom_vision",
        "domainSlug": "vision",
        "categoryTitle": "Computer Vision and Autonomous Systems",
        "status": "learning",
        "title": "Vehicle and Pedestrian Visual Detection System",
        "period": "2023 – 2025 · PRJ-CV-002",
        "yearStart": 2023, "yearEnd": 2025,
        "desc": "Project-based exploration of real-time object detection models (YOLOv8) for identifying vehicles, pedestrians, and cyclists in urban traffic video streams.",
        "contribution": "Configured YOLOv8 pre-trained model weights; evaluated bounding box detection on traffic video snippets; benchmarked inference latency on CPU environments.",
        "technologies": ["Python", "YOLOv8", "OpenCV", "PyTorch", "Computer Vision Tooling"],
        "evidenceNote": "Documented in Technical Project Portfolio document (Section 3). Exploratory learning project; Jetson hardware acceleration and TensorRT runtime optimization were not performed.",
        "repoUrl": "https://github.com/alimulfazalnabil/Computer-Vision-Projects",
        "liveUrl": "",
        "caseStudyUrl": "",
        "isPrivate": False,
        "actionText": "View Code"
    },
    {
        "id": "PRJ-CV-003",
        "domainId": "dom_vision",
        "domainSlug": "vision",
        "categoryTitle": "Computer Vision and Autonomous Systems",
        "status": "learning",
        "title": "Autonomous Driving Virtual Simulation in CARLA",
        "period": "2023 – 2024 · PRJ-CV-003",
        "yearStart": 2023, "yearEnd": 2024,
        "desc": "Virtual environment simulation in the CARLA simulator exploring camera sensor placement, weather condition presets, and vehicle telemetry streaming.",
        "contribution": "Spawned ego-vehicles and sensor suites in CARLA Python API; captured RGB camera buffers; tested bridge passing frames to perception algorithms.",
        "technologies": ["CARLA Simulator", "Python", "Unreal Engine Environment", "OpenCV"],
        "evidenceNote": "Exploration of autonomous driving functions in CARLA. No safety-critical performance guarantees or full closed-loop autonomy claimed.",
        "repoUrl": "https://github.com/alimulfazalnabil/Autonomous-Lane-Detection",
        "liveUrl": "",
        "caseStudyUrl": "",
        "isPrivate": False,
        "actionText": "View Simulation Setup"
    },
    {
        "id": "PRJ-CV-004",
        "domainId": "dom_vision",
        "domainSlug": "vision",
        "categoryTitle": "Computer Vision and Autonomous Systems",
        "status": "collection",
        "title": "Computer Vision Projects (Deep Learning & Perception Hub)",
        "period": "2022 – 2024 · PRJ-CV-004",
        "yearStart": 2022, "yearEnd": 2024,
        "desc": "Curated repository collection of applied computer vision architectures, transfer learning workflows, YOLOv8/DeepSORT tracking examples, and image segmentation tests.",
        "contribution": "Implemented notebooks and scripts demonstrating transfer learning, image augmentation, object tracking basics, and model evaluation.",
        "technologies": ["Python", "OpenCV", "YOLOv8", "DeepSORT", "PyTorch", "Transfer Learning"],
        "evidenceNote": "Public GitHub repository collection. Represents exploratory learning examples; individual production benchmarks are not claimed.",
        "repoUrl": "https://github.com/alimulfazalnabil/Computer-Vision-Projects",
        "liveUrl": "",
        "caseStudyUrl": "",
        "isPrivate": False,
        "actionText": "Explore Repository"
    },

    # 3. Artificial Intelligence and Machine Learning (3)
    {
        "id": "PRJ-ML-001",
        "domainId": "dom_aiml",
        "domainSlug": "aiml",
        "categoryTitle": "Artificial Intelligence and Machine Learning",
        "status": "prototype",
        "title": "Heart Disease Clinical Risk Prediction Platform",
        "period": "2023 – 2024 · PRJ-ML-001",
        "yearStart": 2023, "yearEnd": 2024,
        "desc": "End-to-end machine learning microservice for cardiovascular clinical risk assessment, with stratified 10-fold cross-validation, FastAPI inference API, and Docker CI/CD automation.",
        "contribution": "Cleaned and preprocessed UCI Heart Disease dataset; trained Random Forest and Logistic Regression models (achieving 86.89% ROC-AUC); implemented FastAPI schema validation; packaged containerized Docker service.",
        "technologies": ["Python", "scikit-learn", "FastAPI", "Pandas", "Docker", "GitHub Actions"],
        "evidenceNote": "Educational ML engineering demonstration. This is not a clinically validated diagnostic medical device.",
        "repoUrl": "https://github.com/alimulfazalnabil/heart-disease-prediction",
        "liveUrl": "",
        "caseStudyUrl": "case-studies/heart-disease-prediction.html",
        "isPrivate": False,
        "actionText": "View Code"
    },
    {
        "id": "PRJ-ML-003",
        "domainId": "dom_aiml",
        "domainSlug": "aiml",
        "categoryTitle": "Artificial Intelligence and Machine Learning",
        "status": "learning",
        "title": "Machine Learning Projects (Falcon 9 Landing & Forecasting)",
        "period": "2022 – 2023 · PRJ-ML-003",
        "yearStart": 2022, "yearEnd": 2023,
        "desc": "Collection of exploratory machine learning and data science projects covering SpaceX Falcon 9 first-stage landing classification, launch cost estimation, and stock price forecasting.",
        "contribution": "Wrote data extraction routines via SpaceX REST API; cleaned structured telemetry; trained Logistic Regression, SVM, Decision Tree, and KNN models with hyperparameter grid search tuning.",
        "technologies": ["Python", "scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
        "evidenceNote": "Documented in Technical Project Portfolio document (Section 3). Exploratory academic data science coursework.",
        "repoUrl": "https://github.com/alimulfazalnabil/Python-Projects",
        "liveUrl": "",
        "caseStudyUrl": "",
        "isPrivate": False,
        "actionText": "View Notebooks"
    },
    {
        "id": "PRJ-GENAI-001",
        "domainId": "dom_aiml",
        "domainSlug": "aiml",
        "categoryTitle": "Artificial Intelligence and Machine Learning",
        "status": "prototype",
        "title": "Enterprise RAG Knowledge Intelligence Platform",
        "period": "2024 – 2025 · PRJ-GENAI-001",
        "yearStart": 2024, "yearEnd": 2025,
        "desc": "Multi-tenant Retrieval-Augmented Generation (RAG) platform combining dense vector search and sparse BM25 lexical ranking via Reciprocal Rank Fusion (RRF) and cross-encoder reranking.",
        "contribution": "Architected hybrid retrieval engine using PostgreSQL and pgvector; implemented document chunking, BM25 scoring, and RRF fusion; structured FastAPI endpoints with tenant access control.",
        "technologies": ["Python", "FastAPI", "PostgreSQL", "pgvector", "BM25", "Cross-Encoder Reranker"],
        "evidenceNote": "Reproducible architecture blueprint with complete database schema and automated integration tests in repository.",
        "repoUrl": "https://github.com/alimulfazalnabil/LLM-enterprise-rag-knowledge-platform",
        "liveUrl": "",
        "caseStudyUrl": "case-studies/enterprise-rag-platform.html",
        "isPrivate": False,
        "actionText": "View Code"
    },

    # 4. Cloud Computing and Data Engineering (4)
    {
        "id": "PRJ-CLOUD-001",
        "domainId": "dom_cloud_data",
        "domainSlug": "cloud-data",
        "categoryTitle": "Cloud Computing and Data Engineering",
        "status": "prototype",
        "title": "Azure Terraform Infrastructure CI/CD Foundation",
        "period": "2024 – 2025 · PRJ-CLOUD-001",
        "yearStart": 2024, "yearEnd": 2025,
        "desc": "Modular Infrastructure-as-Code (IaC) repository provisioning enterprise Azure hub-spoke networking, Azure Container Registry, Azure Kubernetes Service (AKS), and Key Vault with automated GitHub Actions CI/CD.",
        "contribution": "Structured reusable Terraform modules; configured remote state locking with Azure Blob Storage and native encryption; authored multi-stage GitHub Actions workflow for linting, security scanning, and plan/apply automation.",
        "technologies": ["Terraform", "Microsoft Azure", "GitHub Actions", "Azure AKS", "Azure Blob Storage", "Key Vault"],
        "evidenceNote": "Tested and validated Terraform code with automated security checks. Cloud-execution evidence presented as sample reference architecture.",
        "repoUrl": "https://github.com/alimulfazalnabil/azure-terraform-cicd-foundation",
        "liveUrl": "",
        "caseStudyUrl": "case-studies/azure-terraform-cicd.html",
        "isPrivate": False,
        "actionText": "View Code"
    },
    {
        "id": "PRJ-DATA-001",
        "domainId": "dom_cloud_data",
        "domainSlug": "cloud-data",
        "categoryTitle": "Cloud Computing and Data Engineering",
        "status": "prototype",
        "title": "Azure Data and AI Analytics Foundation",
        "period": "2024 – 2025 · PRJ-DATA-001",
        "yearStart": 2024, "yearEnd": 2025,
        "desc": "Scalable enterprise data analytics blueprint integrating Azure Data Factory, Azure Data Lake Gen2, Synapse Analytics, Terraform automation, and Python forecasting on simulated telemetry.",
        "contribution": "Authored Terraform templates for Data Lake Gen2 storage and Synapse workspaces; designed ELT data flow pipelines; wrote Python forecasting models evaluating time-series patterns.",
        "technologies": ["Microsoft Azure", "Azure Data Factory", "Azure Data Lake Gen2", "Synapse Analytics", "Terraform", "Python"],
        "evidenceNote": "Documented in GitHub repository and Technical Project Portfolio document (Section 4). Reference architecture on simulated telemetry; not an active production deployment.",
        "repoUrl": "https://github.com/alimulfazalnabil/azure-data-ai-analytics",
        "liveUrl": "",
        "caseStudyUrl": "",
        "isPrivate": False,
        "actionText": "View Code"
    },
    {
        "id": "PRJ-DATA-002",
        "domainId": "dom_cloud_data",
        "domainSlug": "cloud-data",
        "categoryTitle": "Cloud Computing and Data Engineering",
        "status": "collection",
        "title": "Data Engineering Projects (Distributed Pipelines & ETL)",
        "period": "2023 – 2025 · PRJ-DATA-002",
        "yearStart": 2023, "yearEnd": 2025,
        "desc": "Collection of data engineering implementations exploring Apache Airflow DAG orchestration, Apache Spark/PySpark batch processing, AWS S3/Redshift warehousing, Kafka streaming, and PostgreSQL data modeling.",
        "contribution": "Authored PySpark transformation jobs, Airflow DAG schedules, schema migration scripts, and streaming ingestion handlers for heterogeneous data sources.",
        "technologies": ["Apache Airflow", "Apache Spark", "PySpark", "Kafka", "PostgreSQL", "AWS S3 / Redshift"],
        "evidenceNote": "Open-source GitHub repository collection representing technical learning and exploratory data pipeline implementations.",
        "repoUrl": "https://github.com/alimulfazalnabil/Data-Engineering-Projects",
        "liveUrl": "",
        "caseStudyUrl": "",
        "isPrivate": False,
        "actionText": "Explore Repository"
    },
    {
        "id": "PRJ-GENAI-004",
        "domainId": "dom_cloud_data",
        "domainSlug": "cloud-data",
        "categoryTitle": "Cloud Computing and Data Engineering",
        "status": "concept",
        "title": "ML Deployment & AI-Assisted Log Analysis",
        "period": "2024 – 2025 · PRJ-GENAI-004",
        "yearStart": 2024, "yearEnd": 2025,
        "desc": "Exploratory project investigating API-based machine learning model serving with Flask/Docker, container deployment on AWS ECS, and AI-assisted triage of operational infrastructure log anomalies.",
        "contribution": "Prototyped Flask API model wrappers; containerized service using Docker; investigated LLM prompting routines for parsing structured error logs and generating incident summaries.",
        "technologies": ["Flask", "Docker", "AWS ECS", "Python", "OpenAI API", "LangChain"],
        "evidenceNote": "Documented in Technical Project Portfolio document (Section 4). Project-based exploration; no percentage reduction in incident triage time is claimed without production verification.",
        "repoUrl": "",
        "liveUrl": "",
        "caseStudyUrl": "",
        "isPrivate": False,
        "actionText": "Concept Exploration"
    },

    # 5. Industrial Automation and Digital Twins (2)
    {
        "id": "PRJ-DATA-003",
        "domainId": "dom_automation",
        "domainSlug": "automation",
        "categoryTitle": "Industrial Automation and Digital Twins",
        "status": "concept",
        "title": "Digital-Twin Concept for Industrial Energy Management",
        "period": "2025 · PRJ-DATA-003",
        "yearStart": 2025, "yearEnd": 2025,
        "desc": "Conceptual blueprint of an industrial digital twin for HVAC, substation telemetry, and hybrid energy distribution systems, incorporating control topology and remote telemetry connectivity.",
        "contribution": "Drafted system architecture linking simulated PLC sensors to Azure Digital Twins graph models; defined spatial relationship hierarchies and edge ingestion routes.",
        "technologies": ["Azure Digital Twins", "PLC / Network Architecture", "IoT Telemetry", "Digital Twin Modeling"],
        "evidenceNote": "Documented in Technical Project Portfolio document (Section 4). Explicitly a conceptual architecture blueprint, not an active production digital twin deployment.",
        "repoUrl": "",
        "liveUrl": "",
        "caseStudyUrl": "",
        "isPrivate": False,
        "actionText": "Concept Architecture"
    },
    {
        "id": "PRJ-ML-002",
        "domainId": "dom_automation",
        "domainSlug": "automation",
        "categoryTitle": "Industrial Automation and Digital Twins",
        "status": "concept",
        "title": "Predictive-Maintenance System (Equipment Fault Forecasting)",
        "period": "2024 – 2025 · PRJ-ML-002",
        "yearStart": 2024, "yearEnd": 2025,
        "desc": "Machine learning approach exploring equipment degradation and anomaly forecasting using simulated industrial vibration accelerometer time-series data.",
        "contribution": "Engineered feature extraction pipeline for time-series vibration data; evaluated anomaly classification algorithms; formulated deployment model for edge gateways.",
        "technologies": ["Python", "scikit-learn", "Simulated Vibration Data", "Azure IoT Edge", "Time-Series Analysis"],
        "evidenceNote": "Documented in Technical Project Portfolio document (Section 4). Concept exploration using synthetic vibration signals; no unverified 72-hour forecast or accuracy figure is claimed.",
        "repoUrl": "",
        "liveUrl": "",
        "caseStudyUrl": "",
        "isPrivate": False,
        "actionText": "Concept Exploration"
    },

    # 6. Hardware Engineering and System Integration (1)
    {
        "id": "PRJ-CLOUD-004",
        "domainId": "dom_hardware",
        "domainSlug": "hardware",
        "categoryTitle": "Hardware Engineering and System Integration",
        "status": "deployment",
        "title": "Custom PC Building & Workstation Design (Hardware Engineering)",
        "period": "2016 – Present (10+ Years Practice) · PRJ-CLOUD-004",
        "yearStart": 2016, "yearEnd": 2026,
        "desc": "Over a decade designing, building, and maintaining custom high-performance computing workstations for deep learning training, simulation, industrial edge inference, and office IT infrastructure.",
        "contribution": "Specified, assembled, and tested multi-GPU workstations (NVIDIA RTX, AMD Ryzen / Intel Xeon, 64–128GB ECC/non-ECC RAM); engineered custom liquid cooling and thermal airflow; diagnosed VRM throttling and GPU memory faults; integrated fanless IPCs, NVIDIA Jetson Xavier/Nano/Orin edge stations, and BIOS/UEFI XMP/VT-x virtualization tuning.",
        "technologies": ["NVIDIA RTX / Jetson", "AMD Ryzen / Intel Xeon", "Custom Liquid Cooling", "Fanless IPCs", "BIOS/UEFI Tuning", "Industrial SSDs"],
        "evidenceNote": "Documented in Technical Project Portfolio document (Section 5: 8 detailed engineering competency areas across 10+ years of hardware practice).",
        "repoUrl": "",
        "liveUrl": "",
        "caseStudyUrl": "",
        "isPrivate": False,
        "actionText": "10+ Year Practice"
    },

    # 7. Web Engineering and Automation (3)
    {
        "id": "PRJ-CLOUD-002",
        "domainId": "dom_web",
        "domainSlug": "web",
        "categoryTitle": "Web Engineering and Automation",
        "status": "deployment",
        "title": "Enterprise Web Portal for PGCB Engineers",
        "period": "2023 – 2024 · PRJ-CLOUD-002",
        "yearStart": 2023, "yearEnd": 2024,
        "desc": "Full-stack institutional web portal engineered for the Power Grid Company of Bangladesh (PGCB) Engineers' Association, providing member administration, role-based access, automated notifications, and official notice boards.",
        "contribution": "Developed full-stack web architecture, backend APIs, relational database schema, user authentication with role-based access control, admin dashboards, and automated unit tests; deployed live service on Render.",
        "technologies": ["Node.js", "Express", "PostgreSQL", "JavaScript", "HTML5 / CSS3", "Render Cloud"],
        "evidenceNote": "Publicly deployed live application on Render with verified web repository.",
        "repoUrl": "https://github.com/alimulfazalnabil/pgcb-org-portal",
        "liveUrl": "https://pgcb-org-portal.onrender.com/",
        "caseStudyUrl": "",
        "isPrivate": False,
        "actionText": "View Code"
    },
    {
        "id": "PRJ-CLOUD-003",
        "domainId": "dom_web",
        "domainSlug": "web",
        "categoryTitle": "Web Engineering and Automation",
        "status": "collection",
        "title": "Automation Projects (Enterprise Scraping, Tooling & Workflow Suite)",
        "period": "2023 – 2025 · PRJ-CLOUD-003",
        "yearStart": 2023, "yearEnd": 2025,
        "desc": "Collection of practical Python automation scripts, web scrapers, report generation utilities, data conversion tools, and document processing workflows.",
        "contribution": "Authored automated web scrapers (BeautifulSoup/Selenium), CSV/JSON transformation utilities, and file system watcher scripts for workflow automation.",
        "technologies": ["Python", "BeautifulSoup", "Selenium", "Requests", "Pandas", "Automation Tooling"],
        "evidenceNote": "Public repository collection on GitHub; each script represents a targeted utility tool rather than an enterprise platform.",
        "repoUrl": "https://github.com/alimulfazalnabil/Automation-Projects",
        "liveUrl": "",
        "caseStudyUrl": "",
        "isPrivate": False,
        "actionText": "Explore Repository"
    },
    {
        "id": "PRJ-ENG-001",
        "domainId": "dom_web",
        "domainSlug": "web",
        "categoryTitle": "Web Engineering and Automation",
        "status": "academic",
        "title": "SPAROO — Online Shopping & Dynamic Auctioning Web Architecture",
        "period": "2021 – November 2022 · PRJ-ENG-001",
        "yearStart": 2021, "yearEnd": 2022,
        "desc": "E-commerce web architecture integrating fixed-price product purchasing with dynamic real-time auction bidding, product catalogs, user accounts, and database session handling.",
        "contribution": "Designed relational database schema, server-side bidding logic with bid increment validation, session authentication, and dynamic front-end views; authored peer-reviewed research paper in IRJET (2022).",
        "technologies": ["PHP", "MySQL", "JavaScript", "HTML5 / CSS3", "Relational Database Design"],
        "evidenceNote": "Published peer-reviewed research: IRJET Volume 9, Issue 11, November 2022.",
        "repoUrl": "",
        "liveUrl": "",
        "caseStudyUrl": "",
        "isPrivate": False,
        "actionText": "Peer-Reviewed Paper (IRJET 2022)"
    },

    # 8. Smart Cities and Traffic Optimization (2)
    {
        "id": "PRJ-GENAI-002",
        "domainId": "dom_smartcity",
        "domainSlug": "smartcity",
        "categoryTitle": "Smart Cities and Traffic Optimization",
        "status": "concept",
        "title": "MoviSabio Enterprise Smart City System",
        "period": "2025 – 2026 · PRJ-GENAI-002",
        "yearStart": 2025, "yearEnd": 2026,
        "desc": "Territorial-intelligence and smart-city software architecture blueprint integrating geospatial analytics, traffic data ingestion, and urban decision support dashboards.",
        "contribution": "Co-conceptualized system blueprint; structured geospatial data models and telemetry ingestion protocols for urban traffic optimization.",
        "technologies": ["Python", "Geospatial Data", "PostGIS", "Docker", "System Architecture"],
        "evidenceNote": "Private GitHub repository described as a territorial-intelligence and smart-city architecture blueprint. Access available on request for technical evaluation.",
        "repoUrl": "https://github.com/alimulfazalnabil/Movisabio-Enterprise-Smart-City-System",
        "liveUrl": "",
        "caseStudyUrl": "",
        "isPrivate": True,
        "actionText": "Request Access"
    },
    {
        "id": "PRJ-GENAI-003",
        "domainId": "dom_smartcity",
        "domainSlug": "smartcity",
        "categoryTitle": "Smart Cities and Traffic Optimization",
        "status": "concept",
        "title": "AI Traffic Signal Coordination (MAXBAND & DQN Traffic Optimization)",
        "period": "2025 – 2026 · PRJ-GENAI-003",
        "yearStart": 2025, "yearEnd": 2026,
        "desc": "Traffic signal coordination architecture combining MAXBAND green-wave arterial progression optimization with Deep Q-Networks (DQN) reinforcement learning, with optional LSTM/GRU traffic flow forecasting and SUMO/TraCI microscopic traffic simulation.",
        "contribution": "Designed mathematical framework combining classical bandwidth maximization with deep reinforcement learning; configured SUMO/TraCI microscopic simulation environment for validating corridor travel times.",
        "technologies": ["Python", "SUMO / TraCI", "DQN (Deep Q-Networks)", "MAXBAND Algorithm", "PyTorch"],
        "evidenceNote": "Private GitHub repository documented in Technical Project Portfolio document (Section 7). Formulated as concept/MVP architecture; recruiter access available on request.",
        "repoUrl": "https://github.com/alimulfazalnabil/AI-Traffic-Signal-Coordination",
        "liveUrl": "",
        "caseStudyUrl": "",
        "isPrivate": True,
        "actionText": "Request Access"
    },

    # 9. Engineering Design and AutoCAD (1)
    {
        "id": "PRJ-ENG-003",
        "domainId": "dom_cad",
        "domainSlug": "cad",
        "categoryTitle": "Engineering Design and AutoCAD",
        "status": "academic",
        "title": "Engineering Design & Industrial 2D/3D AutoCAD Portfolio",
        "period": "2017 – 2022 · PRJ-ENG-003",
        "yearStart": 2017, "yearEnd": 2022,
        "desc": "Comprehensive portfolio of over 15 project-based 2D engineering drawings, 3D solid models, orthographic projections, and layout visualizations.",
        "contribution": "Drafted technical drawings including mechanical component assemblies, robotic chassis profiles, electrical single-line diagrams, and architectural floor plans adhering to standard dimensioning tolerances.",
        "technologies": ["Autodesk AutoCAD", "2D Drafting", "3D Solid Modeling", "Orthographic Projections", "Technical Dimensioning"],
        "evidenceNote": "Documented in Technical Project Portfolio document (Section 6: Over 15 project-based AutoCAD drawings and layout planning files).",
        "repoUrl": "",
        "liveUrl": "",
        "caseStudyUrl": "",
        "isPrivate": False,
        "actionText": "Academic Design Archive"
    }
]

print(f"Total projects defined: {len(PROJECTS)}")
assert len(PROJECTS) == 27, "Must have exactly 27 projects"

# Check category counts
cat_counts = {}
for p in PROJECTS:
    cat_counts[p["domainSlug"]] = cat_counts.get(p["domainSlug"], 0) + 1
print("Category counts:")
for c in CATEGORIES:
    print(f"  - {c['title']} ({c['slug']}): {cat_counts.get(c['slug'], 0)}")

# Check status counts
status_counts = {}
for p in PROJECTS:
    status_counts[p["status"]] = status_counts.get(p["status"], 0) + 1
print("\nStatus counts:")
for s_k, s_v in STATUS_MAP.items():
    print(f"  - {s_v['label']} ({s_k}): {status_counts.get(s_k, 0)}")

# 4. Generate HTML for Filter Tabs & Status Pills
def generate_filter_tabs_html():
    lines = ['        <!-- Domain Filter Buttons -->',
             '        <div class="filter-tabs" role="tablist" aria-label="Category filters">',
             '          <button class="archive-filter-btn active" data-domain="all" type="button" role="tab" aria-pressed="true">',
             '            All Projects <span class="filter-badge-count">27</span>',
             '          </button>']
    for cat in CATEGORIES:
        count = sum(1 for p in PROJECTS if p["domainSlug"] == cat["slug"])
        lines.append(f'          <button class="archive-filter-btn" data-domain="{cat["slug"]}" type="button" role="tab" aria-pressed="false">')
        lines.append(f'            {cat["shortTitle"]} <span class="filter-badge-count">{count}</span>')
        lines.append('          </button>')
    lines.append('        </div>')
    return "\n".join(lines)

def generate_status_pills_html():
    lines = ['        <!-- Status Filter Pills -->',
             '        <div class="status-filters" aria-label="Status filters">',
             '          <span class="status-filter-label">Filter by Status:</span>',
             '          <button class="status-pill-btn active" data-status="all" type="button" aria-pressed="true">All Statuses</button>']
    for s_k, s_v in STATUS_MAP.items():
        count = sum(1 for p in PROJECTS if p["status"] == s_k)
        lines.append(f'          <button class="status-pill-btn" data-status="{s_k}" type="button" aria-pressed="false">{s_v["label"]} ({count})</button>')
    lines.append('        </div>')
    return "\n".join(lines)

def generate_card_html(p):
    s_info = STATUS_MAP[p["status"]]
    chips_html = "".join([f'<span class="tech-chip">{t}</span>' for t in p["technologies"]])
    
    actions_html = []
    if p.get("isPrivate"):
        actions_html.append('<span class="badge-private-repo" title="Private Repository — Access available on request">🔒 Private Repo</span>')
    
    if p.get("caseStudyUrl"):
        actions_html.append(f'<a class="card-link-btn card-link-primary" href="{p["caseStudyUrl"]}">Case Study <span aria-hidden="true">&rarr;</span></a>')
    
    if p.get("liveUrl"):
        actions_html.append(f'<a class="card-link-btn card-link-primary" href="{p["liveUrl"]}" target="_blank" rel="noopener noreferrer">Live Demo <span aria-hidden="true">&nearr;</span></a>')
    
    if p.get("repoUrl"):
        actions_html.append(f'<a class="card-link-btn card-link-secondary" href="{p["repoUrl"]}" target="_blank" rel="noopener noreferrer">View Code <span aria-hidden="true">&nearr;</span></a>')
    elif not p.get("caseStudyUrl") and not p.get("liveUrl"):
        actions_html.append(f'<span class="card-link-btn card-link-secondary">{p["actionText"]}</span>')
        
    actions_block = "\n            ".join(actions_html)
    
    return f"""        <!-- Card {p['id']} -->
        <article class="archive-card" data-id="{p['id']}" data-domain="{p['domainSlug']}" data-status="{p['status']}" data-year-start="{p['yearStart']}" data-year-end="{p['yearEnd']}">
          <div class="archive-card-header">
            <span class="archive-domain-badge">{p['categoryTitle'].upper()}</span>
            <span class="status-tag {s_info['badgeClass']}">
              <span class="status-dot-sm" aria-hidden="true"></span>
              <span>{s_info['label'].upper()}</span>
            </span>
          </div>
          <h3 class="archive-card-title">{p['title']}</h3>
          <div class="archive-card-period">{p['period']}</div>
          <p class="archive-card-desc">{p['desc']}</p>
          <div class="archive-card-contribution">
            <strong>Verified Contribution:</strong>
            {p['contribution']}
          </div>
          <div class="archive-tech-chips">
            {chips_html}
          </div>
          <div class="archive-evidence-note">
            <span class="evidence-icon" aria-hidden="true">&check;</span>
            <span class="evidence-text">{p['evidenceNote']}</span>
          </div>
          <div class="archive-card-actions">
            {actions_block}
          </div>
        </article>"""

# 5. Apply Updates to portfolio.html
with open(portfolio_html_path, "r", encoding="utf-8") as f:
    html = f.read()

# Replace filter-tabs
sp_tabs = html.find('<div class="filter-tabs"')
ep_tabs = html.find('</div>\n\n        <!-- Status Filter Pills -->', sp_tabs)
if sp_tabs != -1 and ep_tabs != -1:
    ep_tabs += len('</div>')
    new_tabs = generate_filter_tabs_html()
    html = html[:sp_tabs] + new_tabs + html[ep_tabs:]
    print("[SUCCESS] Replaced filter tabs with 9 categories")

# Replace status-filters
sp_status = html.find('<div class="status-filters"')
ep_status = html.find('</div>\n      </div>\n    </section>', sp_status)
if sp_status != -1 and ep_status != -1:
    ep_status += len('</div>')
    new_status = generate_status_pills_html()
    html = html[:sp_status] + new_status + html[ep_status:]
    print("[SUCCESS] Replaced status filters with 6 statuses")

# Replace archive-grid cards
sp_grid = html.find('<div class="archive-grid" id="archiveGrid">')
ep_empty = html.find('<!-- Empty State Container -->', sp_grid)
if sp_grid != -1 and ep_empty != -1:
    cards_html = "\n\n".join([generate_card_html(p) for p in PROJECTS])
    new_grid_content = '<div class="archive-grid" id="archiveGrid">\n' + cards_html + '\n\n        '
    html = html[:sp_grid] + new_grid_content + html[ep_empty:]
    print("[SUCCESS] Replaced all 27 project cards in archiveGrid")

with open(portfolio_html_path, "w", encoding="utf-8") as f:
    f.write(html)
print(f"[SUCCESS] Wrote updated portfolio.html ({len(html):,} bytes)")

# 6. Generate GRAPH_DATA for career-graph.js
def match_tech_for_project(chips):
    matched = set()
    for chip in chips:
        c = chip.lower()
        if "arduino" in c or "ardupilot" in c or "pixhawk" in c or "embedded c" in c or "microcontroller" in c:
            matched.add("tech_arduino")
        if "opencv" in c or "yolo" in c or "hough" in c:
            matched.add("tech_opencv")
        if "carla" in c:
            matched.add("tech_carla")
        if "sumo" in c or "traci" in c:
            matched.add("tech_sumo")
        if "ros 2" in c or c == "ros":
            matched.add("tech_ros")
        if "scikit" in c or "logistic" in c or "random forest" in c:
            matched.add("tech_scikit")
        if "python" in c or "pyspark" in c or "pytorch" in c:
            matched.add("tech_python")
        if "fastapi" in c:
            matched.add("tech_fastapi")
        if "pgvector" in c or "postgres" in c or "postgis" in c:
            matched.add("tech_pgvector")
        if "rag" in c or "bm25" in c or "rerank" in c:
            matched.add("tech_rag")
        if "azure" in c:
            matched.add("tech_azure")
        if "terraform" in c:
            matched.add("tech_terraform")
        if "docker" in c or "container" in c:
            matched.add("tech_docker")
        if "kubernetes" in c or "aks" in c:
            matched.add("tech_k8s")
    return sorted(list(matched))

# Roles
ROLES = [
    {
        "id": "role_redi",
        "title": "ReDI School — AI & ML Instructor",
        "category": "role",
        "color": "#10b981",
        "radius": 20,
        "period": "March 2026 – Present · Berlin / Remote",
        "desc": "Teaches applied machine learning, scikit-learn, and hands-on Python AI workflows to diverse aspiring engineers."
    },
    {
        "id": "role_movisabio",
        "title": "MoviSabio — CTO & Co-Founder",
        "category": "role",
        "color": "#a855f7",
        "radius": 20,
        "period": "January 2026 – Present",
        "desc": "Directs technical architecture, urban data models, and reinforcement learning strategies for intelligent traffic signal coordination."
    },
    {
        "id": "role_energy_cloud",
        "title": "Energy Crown — Infrastructure & Cloud Systems Engineer",
        "category": "role",
        "color": "#3b82f6",
        "radius": 20,
        "period": "July 2023 – Present",
        "desc": "Operates Microsoft Azure infrastructure, Terraform IaC, automated CI/CD pipelines, and industrial telemetry."
    },
    {
        "id": "role_energy_it",
        "title": "Energy Crown — IT Support Engineer",
        "category": "role",
        "color": "#06b6d4",
        "radius": 20,
        "period": "January 2019 – June 2023",
        "desc": "Managed enterprise LAN/WAN networking, server administration, custom computing workstations, and hardware diagnostics."
    },
    {
        "id": "role_cbiu",
        "title": "CBIU — Graduate Student Researcher",
        "category": "role",
        "color": "#14b8a6",
        "radius": 20,
        "period": "January 2022 – December 2022",
        "desc": "Applied research in IoT architectures, embedded systems, and robotics resulting in 2 peer-reviewed journal publications."
    }
]

# Techs
TECHS = [
    {"id": "tech_python", "title": "Python 3.12+", "category": "technology", "color": "#fbbf24", "radius": 16, "desc": "Core language for ML modeling, FastAPI services, computer vision pipelines, and data engineering."},
    {"id": "tech_fastapi", "title": "FastAPI", "category": "technology", "color": "#009688", "radius": 15, "desc": "High-performance Python asynchronous REST APIs with Pydantic validation and OpenAPI docs."},
    {"id": "tech_pgvector", "title": "PostgreSQL & pgvector", "category": "technology", "color": "#336791", "radius": 15, "desc": "Relational storage, PostGIS spatial indexing, and high-dimensional vector similarity search."},
    {"id": "tech_rag", "title": "RAG & Hybrid Search", "category": "technology", "color": "#c084fc", "radius": 15, "desc": "Retrieval-Augmented Generation combining dense embeddings with sparse BM25 lexical ranking."},
    {"id": "tech_azure", "title": "Microsoft Azure", "category": "technology", "color": "#008ad7", "radius": 16, "desc": "Enterprise cloud platform: Azure Kubernetes Service (AKS), App Services, VNets, and Key Vault."},
    {"id": "tech_terraform", "title": "Terraform (IaC)", "category": "technology", "color": "#844fba", "radius": 15, "desc": "Declarative Infrastructure as Code for automated, reproducible multi-tier cloud architectures."},
    {"id": "tech_docker", "title": "Docker & Containers", "category": "technology", "color": "#2496ed", "radius": 15, "desc": "OCI-compliant containerization for reproducible microservices, local debugging, and CI/CD."},
    {"id": "tech_k8s", "title": "Kubernetes (AKS)", "category": "technology", "color": "#326ce5", "radius": 15, "desc": "Container orchestration, rolling updates, ingress controllers, and auto-scaling workloads."},
    {"id": "tech_opencv", "title": "OpenCV", "category": "technology", "color": "#5c3ee8", "radius": 15, "desc": "Computer vision library for color space conversions, Canny edge detection, and Hough transforms."},
    {"id": "tech_carla", "title": "CARLA Simulator", "category": "technology", "color": "#f97316", "radius": 15, "desc": "Open-source autonomous driving simulator for synthetic perception data generation and vehicle testing."},
    {"id": "tech_sumo", "title": "SUMO / TraCI", "category": "technology", "color": "#e11d48", "radius": 15, "desc": "Microscopic traffic flow simulator with Python TraCI interface for reinforcement learning control."},
    {"id": "tech_ros", "title": "ROS 2", "category": "technology", "color": "#22c55e", "radius": 15, "desc": "Robot Operating System for modular node communication, sensor drivers, and motion control."},
    {"id": "tech_scikit", "title": "scikit-learn", "category": "technology", "color": "#f59e0b", "radius": 15, "desc": "Classical machine learning: Random Forest, Logistic Regression, Cross-Validation, and grid search."},
    {"id": "tech_arduino", "title": "Embedded C / Arduino", "category": "technology", "color": "#00979d", "radius": 15, "desc": "Low-level microcontroller programming, PWM servo control, sensor interfacing, and serial communications."}
]

# Build graph nodes
graph_nodes = []

# 1. 9 Domain nodes
for cat in CATEGORIES:
    graph_nodes.append({
        "id": cat["id"],
        "title": cat["title"],
        "shortTitle": cat["shortTitle"],
        "category": "domain",
        "domain": cat["slug"],
        "color": cat["color"],
        "radius": 24,
        "desc": cat["desc"]
    })

# 2. 5 Role nodes
for r in ROLES:
    graph_nodes.append(r)

# 3. 14 Tech nodes
for t in TECHS:
    graph_nodes.append(t)

# 4. 27 Project nodes
for p in PROJECTS:
    cat_match = next(c for c in CATEGORIES if c["id"] == p["domainId"])
    graph_nodes.append({
        "id": p["id"],
        "title": p["title"],
        "shortTitle": p["title"][:22] + "…" if len(p["title"]) > 25 else p["title"],
        "category": "project",
        "domain": p["domainSlug"],
        "color": cat_match["color"],
        "radius": 12 if p.get("caseStudyUrl") else 10,
        "status": p["status"],
        "period": p["period"],
        "desc": p["desc"],
        "contribution": p["contribution"],
        "technologies": p["technologies"],
        "caseStudyUrl": p.get("caseStudyUrl", ""),
        "repoUrl": p.get("repoUrl", ""),
        "liveUrl": p.get("liveUrl", ""),
        "isPrivateRepo": p.get("isPrivate", False)
    })

print(f"Total graph nodes: {len(graph_nodes)} (9 domains, 5 roles, 14 techs, 27 projects = 55 total)")

# Build edges
graph_edges = []

# 1. Domain edges (27)
for p in PROJECTS:
    graph_edges.append({
        "source": p["id"],
        "target": p["domainId"],
        "type": "domain",
        "label": "categorized_by"
    })

# 2. Role edges (21)
role_mapping = {
    "PRJ-EMB-001": "role_cbiu",
    "PRJ-EMB-002": "role_cbiu",
    "PRJ-EMB-003": "role_cbiu",
    "PRJ-EMB-004": "role_cbiu",
    "PRJ-EMB-005": "role_cbiu",
    "PRJ-EMB-006": "role_cbiu",
    "PRJ-ENG-001": "role_cbiu",
    "PRJ-ENG-002": "role_cbiu",
    "PRJ-ENG-003": "role_cbiu",
    "PRJ-ML-001": "role_redi",
    "PRJ-CLOUD-001": "role_energy_cloud",
    "PRJ-CLOUD-002": "role_energy_cloud",
    "PRJ-CLOUD-003": "role_energy_cloud",
    "PRJ-DATA-001": "role_energy_cloud",
    "PRJ-DATA-002": "role_energy_cloud",
    "PRJ-DATA-003": "role_energy_cloud",
    "PRJ-ML-002": "role_energy_cloud",
    "PRJ-GENAI-004": "role_energy_cloud",
    "PRJ-CLOUD-004": "role_energy_it",
    "PRJ-GENAI-002": "role_movisabio",
    "PRJ-GENAI-003": "role_movisabio"
}
for p_id, r_id in role_mapping.items():
    graph_edges.append({
        "source": p_id,
        "target": r_id,
        "type": "role",
        "label": "developed_during"
    })

# 3. Tech edges
for p in PROJECTS:
    matched_techs = match_tech_for_project(p["technologies"])
    for t_id in matched_techs:
        graph_edges.append({
            "source": p["id"],
            "target": t_id,
            "type": "tech",
            "label": "implements"
        })

print(f"Total graph edges: {len(graph_edges)}")
print(f"  - Domain edges: {sum(1 for e in graph_edges if e['type'] == 'domain')}")
print(f"  - Role edges: {sum(1 for e in graph_edges if e['type'] == 'role')}")
print(f"  - Tech edges: {sum(1 for e in graph_edges if e['type'] == 'tech')}")

# Verify no invalid node references
all_node_ids = set(n["id"] for n in graph_nodes)
for e in graph_edges:
    assert e["source"] in all_node_ids, f"Invalid edge source: {e['source']}"
    assert e["target"] in all_node_ids, f"Invalid edge target: {e['target']}"
print("[PASS] All edges point to strictly existing nodes!")

# Update career-graph.js
with open(career_graph_js_path, "r", encoding="utf-8") as f:
    js_code = f.read()

start_marker = "const GRAPH_DATA = "
end_marker = ";\n\n  let initialized"
sp_js = js_code.find(start_marker)
ep_js = js_code.find(end_marker, sp_js)

if sp_js != -1 and ep_js != -1:
    new_json_data = json.dumps({"nodes": graph_nodes, "edges": graph_edges}, indent=2)
    js_code = js_code[:sp_js + len(start_marker)] + new_json_data + js_code[ep_js:]
    with open(career_graph_js_path, "w", encoding="utf-8") as f:
        f.write(js_code)
    print(f"[SUCCESS] Updated career-graph.js with 55 nodes and {len(graph_edges)} edges!")
