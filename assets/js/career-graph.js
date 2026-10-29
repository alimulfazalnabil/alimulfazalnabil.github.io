/**
 * Career & Engineering Knowledge Graph (Vanilla SVG + Force Simulation)
 * Author: Alimul Fazal Nabil — AI Solutions Engineer
 * Zero external dependencies. Fully responsive, accessible, and high-performance.
 */
(() => {
  const GRAPH_DATA = {
  "nodes": [
    {
      "id": "dom_embedded",
      "title": "Robotics and Embedded Systems",
      "shortTitle": "Robotics & Embedded",
      "category": "domain",
      "domain": "embedded",
      "color": "#14b8a6",
      "radius": 24,
      "desc": "Autonomous mobile platforms, articulated manipulators, embedded C/C++, sensor integration, and solar PV tracking."
    },
    {
      "id": "dom_vision",
      "title": "Computer Vision and Autonomous Systems",
      "shortTitle": "Computer Vision & Autonomy",
      "category": "domain",
      "domain": "vision",
      "color": "#38bdf8",
      "radius": 24,
      "desc": "Deterministic roadway perception, Hough transform lane boundary extraction, CARLA simulation, and YOLO visual tracking."
    },
    {
      "id": "dom_aiml",
      "title": "Artificial Intelligence and Machine Learning",
      "shortTitle": "AI & Machine Learning",
      "category": "domain",
      "domain": "aiml",
      "color": "#a855f7",
      "radius": 24,
      "desc": "Enterprise RAG architectures, multi-tenant hybrid retrieval, clinical risk classification, and predictive modeling."
    },
    {
      "id": "dom_cloud_data",
      "title": "Cloud Computing and Data Engineering",
      "shortTitle": "Cloud & Data Engineering",
      "category": "domain",
      "domain": "cloud-data",
      "color": "#3b82f6",
      "radius": 24,
      "desc": "Microsoft Azure cloud architectures, Terraform Infrastructure-as-Code, distributed PySpark processing, and scalable ETL."
    },
    {
      "id": "dom_automation",
      "title": "Industrial Automation and Digital Twins",
      "shortTitle": "Industrial Automation & Twins",
      "category": "domain",
      "domain": "automation",
      "color": "#f59e0b",
      "radius": 24,
      "desc": "Industrial digital-twin concepts, simulated vibration predictive maintenance, and telemetry control topology."
    },
    {
      "id": "dom_hardware",
      "title": "Hardware Engineering and System Integration",
      "shortTitle": "Hardware Engineering",
      "category": "domain",
      "domain": "hardware",
      "color": "#ec4899",
      "radius": 24,
      "desc": "10+ years custom computing workstation engineering, liquid cooling, thermal optimization, BIOS/UEFI profiling, and edge AI stations."
    },
    {
      "id": "dom_web",
      "title": "Web Engineering and Automation",
      "shortTitle": "Web Engineering & Automation",
      "category": "domain",
      "domain": "web",
      "color": "#06b6d4",
      "radius": 24,
      "desc": "Full-stack institutional web portals (PGCB), automated scraping suites, workflow tooling, and database-backed applications."
    },
    {
      "id": "dom_smartcity",
      "title": "Smart Cities and Traffic Optimization",
      "shortTitle": "Smart Cities & Traffic",
      "category": "domain",
      "domain": "smartcity",
      "color": "#8b5cf6",
      "radius": 24,
      "desc": "Territorial intelligence blueprints, MAXBAND green-wave arterial progression, Deep Q-Networks (DQN), and SUMO microscopic traffic simulation."
    },
    {
      "id": "dom_cad",
      "title": "Engineering Design and AutoCAD",
      "shortTitle": "Engineering Design & CAD",
      "category": "domain",
      "domain": "cad",
      "color": "#64748b",
      "radius": 24,
      "desc": "2D/3D precision drafting, mechanical component modeling, orthographic projections, and layout visualizations."
    },
    {
      "id": "role_redi",
      "title": "ReDI School \u2014 AI & ML Instructor",
      "category": "role",
      "color": "#10b981",
      "radius": 20,
      "period": "March 2026 \u2013 Present \u00b7 Berlin / Remote",
      "desc": "Teaches applied machine learning, scikit-learn, and hands-on Python AI workflows to diverse aspiring engineers."
    },
    {
      "id": "role_movisabio",
      "title": "MoviSabio \u2014 CTO & Co-Founder",
      "category": "role",
      "color": "#a855f7",
      "radius": 20,
      "period": "January 2026 \u2013 Present",
      "desc": "Directs technical architecture, urban data models, and reinforcement learning strategies for intelligent traffic signal coordination."
    },
    {
      "id": "role_energy_cloud",
      "title": "Energy Crown \u2014 Infrastructure & Cloud Systems Engineer",
      "category": "role",
      "color": "#3b82f6",
      "radius": 20,
      "period": "July 2023 \u2013 Present",
      "desc": "Operates Microsoft Azure infrastructure, Terraform IaC, automated CI/CD pipelines, and industrial telemetry."
    },
    {
      "id": "role_energy_it",
      "title": "Energy Crown \u2014 IT Support Engineer",
      "category": "role",
      "color": "#06b6d4",
      "radius": 20,
      "period": "January 2019 \u2013 June 2023",
      "desc": "Managed enterprise LAN/WAN networking, server administration, custom computing workstations, and hardware diagnostics."
    },
    {
      "id": "role_cbiu",
      "title": "CBIU \u2014 Graduate Student Researcher",
      "category": "role",
      "color": "#14b8a6",
      "radius": 20,
      "period": "January 2022 \u2013 December 2022",
      "desc": "Applied research in IoT architectures, embedded systems, and robotics resulting in 2 peer-reviewed journal publications."
    },
    {
      "id": "tech_python",
      "title": "Python 3.12+",
      "category": "technology",
      "color": "#fbbf24",
      "radius": 16,
      "desc": "Core language for ML modeling, FastAPI services, computer vision pipelines, and data engineering."
    },
    {
      "id": "tech_fastapi",
      "title": "FastAPI",
      "category": "technology",
      "color": "#009688",
      "radius": 15,
      "desc": "High-performance Python asynchronous REST APIs with Pydantic validation and OpenAPI docs."
    },
    {
      "id": "tech_pgvector",
      "title": "PostgreSQL & pgvector",
      "category": "technology",
      "color": "#336791",
      "radius": 15,
      "desc": "Relational storage, PostGIS spatial indexing, and high-dimensional vector similarity search."
    },
    {
      "id": "tech_rag",
      "title": "RAG & Hybrid Search",
      "category": "technology",
      "color": "#c084fc",
      "radius": 15,
      "desc": "Retrieval-Augmented Generation combining dense embeddings with sparse BM25 lexical ranking."
    },
    {
      "id": "tech_azure",
      "title": "Microsoft Azure",
      "category": "technology",
      "color": "#008ad7",
      "radius": 16,
      "desc": "Enterprise cloud platform: Azure Kubernetes Service (AKS), App Services, VNets, and Key Vault."
    },
    {
      "id": "tech_terraform",
      "title": "Terraform (IaC)",
      "category": "technology",
      "color": "#844fba",
      "radius": 15,
      "desc": "Declarative Infrastructure as Code for automated, reproducible multi-tier cloud architectures."
    },
    {
      "id": "tech_docker",
      "title": "Docker & Containers",
      "category": "technology",
      "color": "#2496ed",
      "radius": 15,
      "desc": "OCI-compliant containerization for reproducible microservices, local debugging, and CI/CD."
    },
    {
      "id": "tech_k8s",
      "title": "Kubernetes (AKS)",
      "category": "technology",
      "color": "#326ce5",
      "radius": 15,
      "desc": "Container orchestration, rolling updates, ingress controllers, and auto-scaling workloads."
    },
    {
      "id": "tech_opencv",
      "title": "OpenCV",
      "category": "technology",
      "color": "#5c3ee8",
      "radius": 15,
      "desc": "Computer vision library for color space conversions, Canny edge detection, and Hough transforms."
    },
    {
      "id": "tech_carla",
      "title": "CARLA Simulator",
      "category": "technology",
      "color": "#f97316",
      "radius": 15,
      "desc": "Open-source autonomous driving simulator for synthetic perception data generation and vehicle testing."
    },
    {
      "id": "tech_sumo",
      "title": "SUMO / TraCI",
      "category": "technology",
      "color": "#e11d48",
      "radius": 15,
      "desc": "Microscopic traffic flow simulator with Python TraCI interface for reinforcement learning control."
    },
    {
      "id": "tech_ros",
      "title": "ROS 2",
      "category": "technology",
      "color": "#22c55e",
      "radius": 15,
      "desc": "Robot Operating System for modular node communication, sensor drivers, and motion control."
    },
    {
      "id": "tech_scikit",
      "title": "scikit-learn",
      "category": "technology",
      "color": "#f59e0b",
      "radius": 15,
      "desc": "Classical machine learning: Random Forest, Logistic Regression, Cross-Validation, and grid search."
    },
    {
      "id": "tech_arduino",
      "title": "Embedded C / Arduino",
      "category": "technology",
      "color": "#00979d",
      "radius": 15,
      "desc": "Low-level microcontroller programming, PWM servo control, sensor interfacing, and serial communications."
    },
    {
      "id": "PRJ-EMB-001",
      "title": "Solar-Powered Electric Vehicle with Multi-Sensor Accident Detection",
      "shortTitle": "Solar-Powered Electric\u2026",
      "category": "project",
      "domain": "embedded",
      "color": "#14b8a6",
      "radius": 10,
      "status": "academic",
      "period": "July 2021 \u2013 November 2021 \u00b7 PRJ-EMB-001",
      "desc": "Electric micro-mobility platform featuring autonomous hazard identification and rapid accident alerting to protect operators in transit while maximizing solar PV energy harvesting.",
      "contribution": "Conceptualized system architecture; authored Arduino Mega 2560 embedded C/C++ firmware; integrated ultrasonic proximity ranging, infrared hazard sensors, and 3-axis accelerometer collision trigger thresholds; wired solar PV charge controller.",
      "technologies": [
        "Arduino Mega 2560",
        "Embedded C/C++",
        "Ultrasonic Sensors",
        "Infrared Sensors",
        "3-Axis Accelerometer",
        "Solar PV Controller"
      ],
      "caseStudyUrl": "",
      "repoUrl": "",
      "liveUrl": "",
      "isPrivateRepo": false
    },
    {
      "id": "PRJ-EMB-002",
      "title": "Servo-Motor Robotic Arm (4-Axis Articulated Manipulator)",
      "shortTitle": "Servo-Motor Robotic Ar\u2026",
      "category": "project",
      "domain": "embedded",
      "color": "#14b8a6",
      "radius": 10,
      "status": "prototype",
      "period": "2018 \u2013 2019 \u00b7 PRJ-EMB-002",
      "desc": "Four-axis articulated robotic arm utilizing PWM-driven servo motors and microcontroller logic for multi-degree-of-freedom spatial positioning and wireless Bluetooth control.",
      "contribution": "Assembled 4-axis mechanical linkage; programmed PWM servo motion trajectories and angular boundaries in Arduino C++; implemented serial command handling for wireless Bluetooth (HC-05) control.",
      "technologies": [
        "Arduino",
        "Servo Motors (SG90/MG995)",
        "HC-05 Bluetooth Module",
        "PWM Control",
        "Embedded C++"
      ],
      "caseStudyUrl": "",
      "repoUrl": "https://github.com/alimulfazalnabil/Bluetooth-Controlled-Robotic-Arm",
      "liveUrl": "",
      "isPrivateRepo": false
    },
    {
      "id": "PRJ-EMB-003",
      "title": "Dual-Axis Solar-Tracking Photovoltaic Optimization System",
      "shortTitle": "Dual-Axis Solar-Tracki\u2026",
      "category": "project",
      "domain": "embedded",
      "color": "#14b8a6",
      "radius": 10,
      "status": "academic",
      "period": "2018 \u2013 2019 \u00b7 PRJ-EMB-003",
      "desc": "Light-seeking solar photovoltaic tracking platform utilizing light-dependent resistor (LDR) sensor arrays and servo actuators to dynamically orient PV panels toward maximum solar irradiance.",
      "contribution": "Designed differential light-sensing circuit using 4 LDRs; programmed tracking feedback loop with deadband threshold in Arduino C++ to eliminate motor jitter; mounted dual-axis servo gimbal.",
      "technologies": [
        "Arduino",
        "LDR Sensors",
        "Servo Motors",
        "Microcontroller",
        "Embedded C++"
      ],
      "caseStudyUrl": "",
      "repoUrl": "",
      "liveUrl": "",
      "isPrivateRepo": false
    },
    {
      "id": "PRJ-EMB-004",
      "title": "Autonomous Line-Follower Ground Robot",
      "shortTitle": "Autonomous Line-Follow\u2026",
      "category": "project",
      "domain": "embedded",
      "color": "#14b8a6",
      "radius": 10,
      "status": "academic",
      "period": "2017 \u2013 2018 \u00b7 PRJ-EMB-004",
      "desc": "Autonomous ground vehicle designed to follow high-contrast optical track boundaries at steady speed using reflective infrared sensing arrays and closed-loop motor control.",
      "contribution": "Built 2WD differential drive chassis; calibrated 5-channel infrared reflectance array; programmed bang-bang and proportional steering feedback algorithms in Arduino C++ for rapid line recovery.",
      "technologies": [
        "Arduino Mega 2560",
        "Infrared Sensor Array",
        "H-Bridge Motor Driver",
        "Differential Drive",
        "Embedded C++"
      ],
      "caseStudyUrl": "",
      "repoUrl": "https://github.com/alimulfazalnabil/Robotics-projects",
      "liveUrl": "",
      "isPrivateRepo": false
    },
    {
      "id": "PRJ-EMB-005",
      "title": "IoT-Based Digital Information & Notice Board System",
      "shortTitle": "IoT-Based Digital Info\u2026",
      "category": "project",
      "domain": "embedded",
      "color": "#14b8a6",
      "radius": 10,
      "status": "academic",
      "period": "2021 \u2013 November 2022 \u00b7 PRJ-EMB-005",
      "desc": "Wireless electronic bulletin board architecture replacing physical paper displays with real-time digital announcements pushed over embedded microcontrollers and IoT protocols.",
      "contribution": "Authored embedded firmware interfacing microcontroller with wireless communication modules (ESP8266/Bluetooth); structured MQTT/serial message payloads; authored peer-reviewed paper in IRJMETS (2022).",
      "technologies": [
        "Arduino",
        "ESP8266 Wi-Fi",
        "MQTT",
        "LiquidCrystal / Dot Matrix Display",
        "Embedded C++"
      ],
      "caseStudyUrl": "",
      "repoUrl": "",
      "liveUrl": "",
      "isPrivateRepo": false
    },
    {
      "id": "PRJ-EMB-006",
      "title": "Robotics Projects (Foundations & Autonomous Rover Modules)",
      "shortTitle": "Robotics Projects (Fou\u2026",
      "category": "project",
      "domain": "embedded",
      "color": "#14b8a6",
      "radius": 10,
      "status": "collection",
      "period": "2017 \u2013 2023 \u00b7 PRJ-EMB-006",
      "desc": "Open-source collection of robotics sub-modules, circuit interfaces, obstacle avoidance routines, Bluetooth teleoperation, robotic arm control, and GPS rover concepts.",
      "contribution": "Curated, implemented, and documented diverse microcontroller robotics firmware routines, sensor pinout mappings, and motor driver calibration scripts.",
      "technologies": [
        "Arduino",
        "C/C++",
        "Ultrasonic Ranging",
        "Motor Drivers (L298N)",
        "GPS Modules",
        "Sensors"
      ],
      "caseStudyUrl": "",
      "repoUrl": "https://github.com/alimulfazalnabil/Robotics-projects",
      "liveUrl": "",
      "isPrivateRepo": false
    },
    {
      "id": "PRJ-ENG-002",
      "title": "Autonomous Quadcopter Aerial Concept with ArduPilot & Pixhawk",
      "shortTitle": "Autonomous Quadcopter \u2026",
      "category": "project",
      "domain": "embedded",
      "color": "#14b8a6",
      "radius": 10,
      "status": "concept",
      "period": "2019 \u2013 2020 \u00b7 PRJ-ENG-002",
      "desc": "Autonomous aerial survey and remote telemetry gathering concept utilizing open-source flight stacks and multi-sensor navigation in unstructured outdoor environments.",
      "contribution": "Conceptualized UAV airframe layout; configured ArduPilot flight stack parameters; integrated Pixhawk flight controller, GPS, IMU, and 433MHz telemetry transceiver.",
      "technologies": [
        "ArduPilot",
        "Pixhawk Flight Controller",
        "GPS",
        "IMU",
        "Telemetry Radio",
        "Mission Planner"
      ],
      "caseStudyUrl": "",
      "repoUrl": "",
      "liveUrl": "",
      "isPrivateRepo": false
    },
    {
      "id": "PRJ-CV-001",
      "title": "Autonomous Lane Detection Pipeline & CARLA Bridge",
      "shortTitle": "Autonomous Lane Detect\u2026",
      "category": "project",
      "domain": "vision",
      "color": "#38bdf8",
      "radius": 12,
      "status": "prototype",
      "period": "2023 \u2013 2024 \u00b7 PRJ-CV-001",
      "desc": "Deterministic computer vision pipeline for roadway boundary detection under variable lighting, featuring synthetic evaluation tests and a modular CARLA simulator adapter.",
      "contribution": "Engineered end-to-end vision pipeline: HSL/grayscale colorspace transformation, Canny edge detection, trapezoidal ROI masking, Hough line extraction, temporal lane line smoothing, and synthetic image test harness.",
      "technologies": [
        "Python",
        "OpenCV",
        "NumPy",
        "Hough Transform",
        "CARLA Simulator",
        "Pytest"
      ],
      "caseStudyUrl": "case-studies/autonomous-lane-detection.html",
      "repoUrl": "https://github.com/alimulfazalnabil/Autonomous-Lane-Detection",
      "liveUrl": "",
      "isPrivateRepo": false
    },
    {
      "id": "PRJ-CV-002",
      "title": "Vehicle and Pedestrian Visual Detection System",
      "shortTitle": "Vehicle and Pedestrian\u2026",
      "category": "project",
      "domain": "vision",
      "color": "#38bdf8",
      "radius": 10,
      "status": "learning",
      "period": "2023 \u2013 2025 \u00b7 PRJ-CV-002",
      "desc": "Project-based exploration of real-time object detection models (YOLOv8) for identifying vehicles, pedestrians, and cyclists in urban traffic video streams.",
      "contribution": "Configured YOLOv8 pre-trained model weights; evaluated bounding box detection on traffic video snippets; benchmarked inference latency on CPU environments.",
      "technologies": [
        "Python",
        "YOLOv8",
        "OpenCV",
        "PyTorch",
        "Computer Vision Tooling"
      ],
      "caseStudyUrl": "",
      "repoUrl": "https://github.com/alimulfazalnabil/Computer-Vision-Projects",
      "liveUrl": "",
      "isPrivateRepo": false
    },
    {
      "id": "PRJ-CV-003",
      "title": "Autonomous Driving Virtual Simulation in CARLA",
      "shortTitle": "Autonomous Driving Vir\u2026",
      "category": "project",
      "domain": "vision",
      "color": "#38bdf8",
      "radius": 10,
      "status": "learning",
      "period": "2023 \u2013 2024 \u00b7 PRJ-CV-003",
      "desc": "Virtual environment simulation in the CARLA simulator exploring camera sensor placement, weather condition presets, and vehicle telemetry streaming.",
      "contribution": "Spawned ego-vehicles and sensor suites in CARLA Python API; captured RGB camera buffers; tested bridge passing frames to perception algorithms.",
      "technologies": [
        "CARLA Simulator",
        "Python",
        "Unreal Engine Environment",
        "OpenCV"
      ],
      "caseStudyUrl": "",
      "repoUrl": "https://github.com/alimulfazalnabil/Autonomous-Lane-Detection",
      "liveUrl": "",
      "isPrivateRepo": false
    },
    {
      "id": "PRJ-CV-004",
      "title": "Computer Vision Projects (Deep Learning & Perception Hub)",
      "shortTitle": "Computer Vision Projec\u2026",
      "category": "project",
      "domain": "vision",
      "color": "#38bdf8",
      "radius": 10,
      "status": "collection",
      "period": "2022 \u2013 2024 \u00b7 PRJ-CV-004",
      "desc": "Curated repository collection of applied computer vision architectures, transfer learning workflows, YOLOv8/DeepSORT tracking examples, and image segmentation tests.",
      "contribution": "Implemented notebooks and scripts demonstrating transfer learning, image augmentation, object tracking basics, and model evaluation.",
      "technologies": [
        "Python",
        "OpenCV",
        "YOLOv8",
        "DeepSORT",
        "PyTorch",
        "Transfer Learning"
      ],
      "caseStudyUrl": "",
      "repoUrl": "https://github.com/alimulfazalnabil/Computer-Vision-Projects",
      "liveUrl": "",
      "isPrivateRepo": false
    },
    {
      "id": "PRJ-ML-001",
      "title": "Heart Disease Clinical Risk Prediction Platform",
      "shortTitle": "Heart Disease Clinical\u2026",
      "category": "project",
      "domain": "aiml",
      "color": "#a855f7",
      "radius": 12,
      "status": "prototype",
      "period": "2023 \u2013 2024 \u00b7 PRJ-ML-001",
      "desc": "End-to-end machine learning microservice for cardiovascular clinical risk assessment, with stratified 10-fold cross-validation, FastAPI inference API, and Docker CI/CD automation.",
      "contribution": "Cleaned and preprocessed UCI Heart Disease dataset; trained Random Forest and Logistic Regression models (achieving 86.89% ROC-AUC); implemented FastAPI schema validation; packaged containerized Docker service.",
      "technologies": [
        "Python",
        "scikit-learn",
        "FastAPI",
        "Pandas",
        "Docker",
        "GitHub Actions"
      ],
      "caseStudyUrl": "case-studies/heart-disease-prediction.html",
      "repoUrl": "https://github.com/alimulfazalnabil/heart-disease-prediction",
      "liveUrl": "",
      "isPrivateRepo": false
    },
    {
      "id": "PRJ-ML-003",
      "title": "Machine Learning Projects (Falcon 9 Landing & Forecasting)",
      "shortTitle": "Machine Learning Proje\u2026",
      "category": "project",
      "domain": "aiml",
      "color": "#a855f7",
      "radius": 10,
      "status": "learning",
      "period": "2022 \u2013 2023 \u00b7 PRJ-ML-003",
      "desc": "Collection of exploratory machine learning and data science projects covering SpaceX Falcon 9 first-stage landing classification, launch cost estimation, and stock price forecasting.",
      "contribution": "Wrote data extraction routines via SpaceX REST API; cleaned structured telemetry; trained Logistic Regression, SVM, Decision Tree, and KNN models with hyperparameter grid search tuning.",
      "technologies": [
        "Python",
        "scikit-learn",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn"
      ],
      "caseStudyUrl": "",
      "repoUrl": "https://github.com/alimulfazalnabil/Python-Projects",
      "liveUrl": "",
      "isPrivateRepo": false
    },
    {
      "id": "PRJ-GENAI-001",
      "title": "Enterprise RAG Knowledge Intelligence Platform",
      "shortTitle": "Enterprise RAG Knowled\u2026",
      "category": "project",
      "domain": "aiml",
      "color": "#a855f7",
      "radius": 12,
      "status": "prototype",
      "period": "2024 \u2013 2025 \u00b7 PRJ-GENAI-001",
      "desc": "Multi-tenant Retrieval-Augmented Generation (RAG) platform combining dense vector search and sparse BM25 lexical ranking via Reciprocal Rank Fusion (RRF) and cross-encoder reranking.",
      "contribution": "Architected hybrid retrieval engine using PostgreSQL and pgvector; implemented document chunking, BM25 scoring, and RRF fusion; structured FastAPI endpoints with tenant access control.",
      "technologies": [
        "Python",
        "FastAPI",
        "PostgreSQL",
        "pgvector",
        "BM25",
        "Cross-Encoder Reranker"
      ],
      "caseStudyUrl": "case-studies/enterprise-rag-platform.html",
      "repoUrl": "https://github.com/alimulfazalnabil/LLM-enterprise-rag-knowledge-platform",
      "liveUrl": "",
      "isPrivateRepo": false
    },
    {
      "id": "PRJ-CLOUD-001",
      "title": "Azure Terraform Infrastructure CI/CD Foundation",
      "shortTitle": "Azure Terraform Infras\u2026",
      "category": "project",
      "domain": "cloud-data",
      "color": "#3b82f6",
      "radius": 12,
      "status": "prototype",
      "period": "2024 \u2013 2025 \u00b7 PRJ-CLOUD-001",
      "desc": "Modular Infrastructure-as-Code (IaC) repository provisioning enterprise Azure hub-spoke networking, Azure Container Registry, Azure Kubernetes Service (AKS), and Key Vault with automated GitHub Actions CI/CD.",
      "contribution": "Structured reusable Terraform modules; configured remote state locking with Azure Blob Storage and native encryption; authored multi-stage GitHub Actions workflow for linting, security scanning, and plan/apply automation.",
      "technologies": [
        "Terraform",
        "Microsoft Azure",
        "GitHub Actions",
        "Azure AKS",
        "Azure Blob Storage",
        "Key Vault"
      ],
      "caseStudyUrl": "case-studies/azure-terraform-cicd.html",
      "repoUrl": "https://github.com/alimulfazalnabil/azure-terraform-cicd-foundation",
      "liveUrl": "",
      "isPrivateRepo": false
    },
    {
      "id": "PRJ-DATA-001",
      "title": "Azure Data and AI Analytics Foundation",
      "shortTitle": "Azure Data and AI Anal\u2026",
      "category": "project",
      "domain": "cloud-data",
      "color": "#3b82f6",
      "radius": 10,
      "status": "prototype",
      "period": "2024 \u2013 2025 \u00b7 PRJ-DATA-001",
      "desc": "Scalable enterprise data analytics blueprint integrating Azure Data Factory, Azure Data Lake Gen2, Synapse Analytics, Terraform automation, and Python forecasting on simulated telemetry.",
      "contribution": "Authored Terraform templates for Data Lake Gen2 storage and Synapse workspaces; designed ELT data flow pipelines; wrote Python forecasting models evaluating time-series patterns.",
      "technologies": [
        "Microsoft Azure",
        "Azure Data Factory",
        "Azure Data Lake Gen2",
        "Synapse Analytics",
        "Terraform",
        "Python"
      ],
      "caseStudyUrl": "",
      "repoUrl": "https://github.com/alimulfazalnabil/azure-data-ai-analytics",
      "liveUrl": "",
      "isPrivateRepo": false
    },
    {
      "id": "PRJ-DATA-002",
      "title": "Data Engineering Projects (Distributed Pipelines & ETL)",
      "shortTitle": "Data Engineering Proje\u2026",
      "category": "project",
      "domain": "cloud-data",
      "color": "#3b82f6",
      "radius": 10,
      "status": "collection",
      "period": "2023 \u2013 2025 \u00b7 PRJ-DATA-002",
      "desc": "Collection of data engineering implementations exploring Apache Airflow DAG orchestration, Apache Spark/PySpark batch processing, AWS S3/Redshift warehousing, Kafka streaming, and PostgreSQL data modeling.",
      "contribution": "Authored PySpark transformation jobs, Airflow DAG schedules, schema migration scripts, and streaming ingestion handlers for heterogeneous data sources.",
      "technologies": [
        "Apache Airflow",
        "Apache Spark",
        "PySpark",
        "Kafka",
        "PostgreSQL",
        "AWS S3 / Redshift"
      ],
      "caseStudyUrl": "",
      "repoUrl": "https://github.com/alimulfazalnabil/Data-Engineering-Projects",
      "liveUrl": "",
      "isPrivateRepo": false
    },
    {
      "id": "PRJ-GENAI-004",
      "title": "ML Deployment & AI-Assisted Log Analysis",
      "shortTitle": "ML Deployment & AI-Ass\u2026",
      "category": "project",
      "domain": "cloud-data",
      "color": "#3b82f6",
      "radius": 10,
      "status": "concept",
      "period": "2024 \u2013 2025 \u00b7 PRJ-GENAI-004",
      "desc": "Exploratory project investigating API-based machine learning model serving with Flask/Docker, container deployment on AWS ECS, and AI-assisted triage of operational infrastructure log anomalies.",
      "contribution": "Prototyped Flask API model wrappers; containerized service using Docker; investigated LLM prompting routines for parsing structured error logs and generating incident summaries.",
      "technologies": [
        "Flask",
        "Docker",
        "AWS ECS",
        "Python",
        "OpenAI API",
        "LangChain"
      ],
      "caseStudyUrl": "",
      "repoUrl": "",
      "liveUrl": "",
      "isPrivateRepo": false
    },
    {
      "id": "PRJ-DATA-003",
      "title": "Digital-Twin Concept for Industrial Energy Management",
      "shortTitle": "Digital-Twin Concept f\u2026",
      "category": "project",
      "domain": "automation",
      "color": "#f59e0b",
      "radius": 10,
      "status": "concept",
      "period": "2025 \u00b7 PRJ-DATA-003",
      "desc": "Conceptual blueprint of an industrial digital twin for HVAC, substation telemetry, and hybrid energy distribution systems, incorporating control topology and remote telemetry connectivity.",
      "contribution": "Drafted system architecture linking simulated PLC sensors to Azure Digital Twins graph models; defined spatial relationship hierarchies and edge ingestion routes.",
      "technologies": [
        "Azure Digital Twins",
        "PLC / Network Architecture",
        "IoT Telemetry",
        "Digital Twin Modeling"
      ],
      "caseStudyUrl": "",
      "repoUrl": "",
      "liveUrl": "",
      "isPrivateRepo": false
    },
    {
      "id": "PRJ-ML-002",
      "title": "Predictive-Maintenance System (Equipment Fault Forecasting)",
      "shortTitle": "Predictive-Maintenance\u2026",
      "category": "project",
      "domain": "automation",
      "color": "#f59e0b",
      "radius": 10,
      "status": "concept",
      "period": "2024 \u2013 2025 \u00b7 PRJ-ML-002",
      "desc": "Machine learning approach exploring equipment degradation and anomaly forecasting using simulated industrial vibration accelerometer time-series data.",
      "contribution": "Engineered feature extraction pipeline for time-series vibration data; evaluated anomaly classification algorithms; formulated deployment model for edge gateways.",
      "technologies": [
        "Python",
        "scikit-learn",
        "Simulated Vibration Data",
        "Azure IoT Edge",
        "Time-Series Analysis"
      ],
      "caseStudyUrl": "",
      "repoUrl": "",
      "liveUrl": "",
      "isPrivateRepo": false
    },
    {
      "id": "PRJ-CLOUD-004",
      "title": "Custom PC Building & Workstation Design (Hardware Engineering)",
      "shortTitle": "Custom PC Building & W\u2026",
      "category": "project",
      "domain": "hardware",
      "color": "#ec4899",
      "radius": 10,
      "status": "deployment",
      "period": "2016 \u2013 Present (10+ Years Practice) \u00b7 PRJ-CLOUD-004",
      "desc": "Over a decade designing, building, and maintaining custom high-performance computing workstations for deep learning training, simulation, industrial edge inference, and office IT infrastructure.",
      "contribution": "Specified, assembled, and tested multi-GPU workstations (NVIDIA RTX, AMD Ryzen / Intel Xeon, 64\u2013128GB ECC/non-ECC RAM); engineered custom liquid cooling and thermal airflow; diagnosed VRM throttling and GPU memory faults; integrated fanless IPCs, NVIDIA Jetson Xavier/Nano/Orin edge stations, and BIOS/UEFI XMP/VT-x virtualization tuning.",
      "technologies": [
        "NVIDIA RTX / Jetson",
        "AMD Ryzen / Intel Xeon",
        "Custom Liquid Cooling",
        "Fanless IPCs",
        "BIOS/UEFI Tuning",
        "Industrial SSDs"
      ],
      "caseStudyUrl": "",
      "repoUrl": "",
      "liveUrl": "",
      "isPrivateRepo": false
    },
    {
      "id": "PRJ-CLOUD-002",
      "title": "Enterprise Web Portal for PGCB Engineers",
      "shortTitle": "Enterprise Web Portal \u2026",
      "category": "project",
      "domain": "web",
      "color": "#06b6d4",
      "radius": 10,
      "status": "deployment",
      "period": "2023 \u2013 2024 \u00b7 PRJ-CLOUD-002",
      "desc": "Full-stack institutional web portal engineered for the Power Grid Company of Bangladesh (PGCB) Engineers' Association, providing member administration, role-based access, automated notifications, and official notice boards.",
      "contribution": "Developed full-stack web architecture, backend APIs, relational database schema, user authentication with role-based access control, admin dashboards, and automated unit tests; deployed live service on Render.",
      "technologies": [
        "Node.js",
        "Express",
        "PostgreSQL",
        "JavaScript",
        "HTML5 / CSS3",
        "Render Cloud"
      ],
      "caseStudyUrl": "",
      "repoUrl": "https://github.com/alimulfazalnabil/pgcb-org-portal",
      "liveUrl": "https://pgcb-org-portal.onrender.com/",
      "isPrivateRepo": false
    },
    {
      "id": "PRJ-CLOUD-003",
      "title": "Automation Projects (Enterprise Scraping, Tooling & Workflow Suite)",
      "shortTitle": "Automation Projects (E\u2026",
      "category": "project",
      "domain": "web",
      "color": "#06b6d4",
      "radius": 10,
      "status": "collection",
      "period": "2023 \u2013 2025 \u00b7 PRJ-CLOUD-003",
      "desc": "Collection of practical Python automation scripts, web scrapers, report generation utilities, data conversion tools, and document processing workflows.",
      "contribution": "Authored automated web scrapers (BeautifulSoup/Selenium), CSV/JSON transformation utilities, and file system watcher scripts for workflow automation.",
      "technologies": [
        "Python",
        "BeautifulSoup",
        "Selenium",
        "Requests",
        "Pandas",
        "Automation Tooling"
      ],
      "caseStudyUrl": "",
      "repoUrl": "https://github.com/alimulfazalnabil/Automation-Projects",
      "liveUrl": "",
      "isPrivateRepo": false
    },
    {
      "id": "PRJ-ENG-001",
      "title": "SPAROO \u2014 Online Shopping & Dynamic Auctioning Web Architecture",
      "shortTitle": "SPAROO \u2014 Online Shoppi\u2026",
      "category": "project",
      "domain": "web",
      "color": "#06b6d4",
      "radius": 10,
      "status": "academic",
      "period": "2021 \u2013 November 2022 \u00b7 PRJ-ENG-001",
      "desc": "E-commerce web architecture integrating fixed-price product purchasing with dynamic real-time auction bidding, product catalogs, user accounts, and database session handling.",
      "contribution": "Designed relational database schema, server-side bidding logic with bid increment validation, session authentication, and dynamic front-end views; authored peer-reviewed research paper in IRJET (2022).",
      "technologies": [
        "PHP",
        "MySQL",
        "JavaScript",
        "HTML5 / CSS3",
        "Relational Database Design"
      ],
      "caseStudyUrl": "",
      "repoUrl": "",
      "liveUrl": "",
      "isPrivateRepo": false
    },
    {
      "id": "PRJ-GENAI-002",
      "title": "MoviSabio Enterprise Smart City System",
      "shortTitle": "MoviSabio Enterprise S\u2026",
      "category": "project",
      "domain": "smartcity",
      "color": "#8b5cf6",
      "radius": 10,
      "status": "concept",
      "period": "2025 \u2013 2026 \u00b7 PRJ-GENAI-002",
      "desc": "Territorial-intelligence and smart-city software architecture blueprint integrating geospatial analytics, traffic data ingestion, and urban decision support dashboards.",
      "contribution": "Co-conceptualized system blueprint; structured geospatial data models and telemetry ingestion protocols for urban traffic optimization.",
      "technologies": [
        "Python",
        "Geospatial Data",
        "PostGIS",
        "Docker",
        "System Architecture"
      ],
      "caseStudyUrl": "",
      "repoUrl": "https://github.com/alimulfazalnabil/Movisabio-Enterprise-Smart-City-System",
      "liveUrl": "",
      "isPrivateRepo": true
    },
    {
      "id": "PRJ-GENAI-003",
      "title": "AI Traffic Signal Coordination (MAXBAND & DQN Traffic Optimization)",
      "shortTitle": "AI Traffic Signal Coor\u2026",
      "category": "project",
      "domain": "smartcity",
      "color": "#8b5cf6",
      "radius": 10,
      "status": "concept",
      "period": "2025 \u2013 2026 \u00b7 PRJ-GENAI-003",
      "desc": "Traffic signal coordination architecture combining MAXBAND green-wave arterial progression optimization with Deep Q-Networks (DQN) reinforcement learning, with optional LSTM/GRU traffic flow forecasting and SUMO/TraCI microscopic traffic simulation.",
      "contribution": "Designed mathematical framework combining classical bandwidth maximization with deep reinforcement learning; configured SUMO/TraCI microscopic simulation environment for validating corridor travel times.",
      "technologies": [
        "Python",
        "SUMO / TraCI",
        "DQN (Deep Q-Networks)",
        "MAXBAND Algorithm",
        "PyTorch"
      ],
      "caseStudyUrl": "",
      "repoUrl": "https://github.com/alimulfazalnabil/AI-Traffic-Signal-Coordination",
      "liveUrl": "",
      "isPrivateRepo": true
    },
    {
      "id": "PRJ-ENG-003",
      "title": "Engineering Design & Industrial 2D/3D AutoCAD Portfolio",
      "shortTitle": "Engineering Design & I\u2026",
      "category": "project",
      "domain": "cad",
      "color": "#64748b",
      "radius": 10,
      "status": "academic",
      "period": "2017 \u2013 2022 \u00b7 PRJ-ENG-003",
      "desc": "Comprehensive portfolio of over 15 project-based 2D engineering drawings, 3D solid models, orthographic projections, and layout visualizations.",
      "contribution": "Drafted technical drawings including mechanical component assemblies, robotic chassis profiles, electrical single-line diagrams, and architectural floor plans adhering to standard dimensioning tolerances.",
      "technologies": [
        "Autodesk AutoCAD",
        "2D Drafting",
        "3D Solid Modeling",
        "Orthographic Projections",
        "Technical Dimensioning"
      ],
      "caseStudyUrl": "",
      "repoUrl": "",
      "liveUrl": "",
      "isPrivateRepo": false
    }
  ],
  "edges": [
    {
      "source": "PRJ-EMB-001",
      "target": "dom_embedded",
      "type": "domain",
      "label": "categorized_by"
    },
    {
      "source": "PRJ-EMB-002",
      "target": "dom_embedded",
      "type": "domain",
      "label": "categorized_by"
    },
    {
      "source": "PRJ-EMB-003",
      "target": "dom_embedded",
      "type": "domain",
      "label": "categorized_by"
    },
    {
      "source": "PRJ-EMB-004",
      "target": "dom_embedded",
      "type": "domain",
      "label": "categorized_by"
    },
    {
      "source": "PRJ-EMB-005",
      "target": "dom_embedded",
      "type": "domain",
      "label": "categorized_by"
    },
    {
      "source": "PRJ-EMB-006",
      "target": "dom_embedded",
      "type": "domain",
      "label": "categorized_by"
    },
    {
      "source": "PRJ-ENG-002",
      "target": "dom_embedded",
      "type": "domain",
      "label": "categorized_by"
    },
    {
      "source": "PRJ-CV-001",
      "target": "dom_vision",
      "type": "domain",
      "label": "categorized_by"
    },
    {
      "source": "PRJ-CV-002",
      "target": "dom_vision",
      "type": "domain",
      "label": "categorized_by"
    },
    {
      "source": "PRJ-CV-003",
      "target": "dom_vision",
      "type": "domain",
      "label": "categorized_by"
    },
    {
      "source": "PRJ-CV-004",
      "target": "dom_vision",
      "type": "domain",
      "label": "categorized_by"
    },
    {
      "source": "PRJ-ML-001",
      "target": "dom_aiml",
      "type": "domain",
      "label": "categorized_by"
    },
    {
      "source": "PRJ-ML-003",
      "target": "dom_aiml",
      "type": "domain",
      "label": "categorized_by"
    },
    {
      "source": "PRJ-GENAI-001",
      "target": "dom_aiml",
      "type": "domain",
      "label": "categorized_by"
    },
    {
      "source": "PRJ-CLOUD-001",
      "target": "dom_cloud_data",
      "type": "domain",
      "label": "categorized_by"
    },
    {
      "source": "PRJ-DATA-001",
      "target": "dom_cloud_data",
      "type": "domain",
      "label": "categorized_by"
    },
    {
      "source": "PRJ-DATA-002",
      "target": "dom_cloud_data",
      "type": "domain",
      "label": "categorized_by"
    },
    {
      "source": "PRJ-GENAI-004",
      "target": "dom_cloud_data",
      "type": "domain",
      "label": "categorized_by"
    },
    {
      "source": "PRJ-DATA-003",
      "target": "dom_automation",
      "type": "domain",
      "label": "categorized_by"
    },
    {
      "source": "PRJ-ML-002",
      "target": "dom_automation",
      "type": "domain",
      "label": "categorized_by"
    },
    {
      "source": "PRJ-CLOUD-004",
      "target": "dom_hardware",
      "type": "domain",
      "label": "categorized_by"
    },
    {
      "source": "PRJ-CLOUD-002",
      "target": "dom_web",
      "type": "domain",
      "label": "categorized_by"
    },
    {
      "source": "PRJ-CLOUD-003",
      "target": "dom_web",
      "type": "domain",
      "label": "categorized_by"
    },
    {
      "source": "PRJ-ENG-001",
      "target": "dom_web",
      "type": "domain",
      "label": "categorized_by"
    },
    {
      "source": "PRJ-GENAI-002",
      "target": "dom_smartcity",
      "type": "domain",
      "label": "categorized_by"
    },
    {
      "source": "PRJ-GENAI-003",
      "target": "dom_smartcity",
      "type": "domain",
      "label": "categorized_by"
    },
    {
      "source": "PRJ-ENG-003",
      "target": "dom_cad",
      "type": "domain",
      "label": "categorized_by"
    },
    {
      "source": "PRJ-EMB-001",
      "target": "role_cbiu",
      "type": "role",
      "label": "developed_during"
    },
    {
      "source": "PRJ-EMB-002",
      "target": "role_cbiu",
      "type": "role",
      "label": "developed_during"
    },
    {
      "source": "PRJ-EMB-003",
      "target": "role_cbiu",
      "type": "role",
      "label": "developed_during"
    },
    {
      "source": "PRJ-EMB-004",
      "target": "role_cbiu",
      "type": "role",
      "label": "developed_during"
    },
    {
      "source": "PRJ-EMB-005",
      "target": "role_cbiu",
      "type": "role",
      "label": "developed_during"
    },
    {
      "source": "PRJ-EMB-006",
      "target": "role_cbiu",
      "type": "role",
      "label": "developed_during"
    },
    {
      "source": "PRJ-ENG-001",
      "target": "role_cbiu",
      "type": "role",
      "label": "developed_during"
    },
    {
      "source": "PRJ-ENG-002",
      "target": "role_cbiu",
      "type": "role",
      "label": "developed_during"
    },
    {
      "source": "PRJ-ENG-003",
      "target": "role_cbiu",
      "type": "role",
      "label": "developed_during"
    },
    {
      "source": "PRJ-ML-001",
      "target": "role_redi",
      "type": "role",
      "label": "developed_during"
    },
    {
      "source": "PRJ-CLOUD-001",
      "target": "role_energy_cloud",
      "type": "role",
      "label": "developed_during"
    },
    {
      "source": "PRJ-CLOUD-002",
      "target": "role_energy_cloud",
      "type": "role",
      "label": "developed_during"
    },
    {
      "source": "PRJ-CLOUD-003",
      "target": "role_energy_cloud",
      "type": "role",
      "label": "developed_during"
    },
    {
      "source": "PRJ-DATA-001",
      "target": "role_energy_cloud",
      "type": "role",
      "label": "developed_during"
    },
    {
      "source": "PRJ-DATA-002",
      "target": "role_energy_cloud",
      "type": "role",
      "label": "developed_during"
    },
    {
      "source": "PRJ-DATA-003",
      "target": "role_energy_cloud",
      "type": "role",
      "label": "developed_during"
    },
    {
      "source": "PRJ-ML-002",
      "target": "role_energy_cloud",
      "type": "role",
      "label": "developed_during"
    },
    {
      "source": "PRJ-GENAI-004",
      "target": "role_energy_cloud",
      "type": "role",
      "label": "developed_during"
    },
    {
      "source": "PRJ-CLOUD-004",
      "target": "role_energy_it",
      "type": "role",
      "label": "developed_during"
    },
    {
      "source": "PRJ-GENAI-002",
      "target": "role_movisabio",
      "type": "role",
      "label": "developed_during"
    },
    {
      "source": "PRJ-GENAI-003",
      "target": "role_movisabio",
      "type": "role",
      "label": "developed_during"
    },
    {
      "source": "PRJ-EMB-001",
      "target": "tech_arduino",
      "type": "tech",
      "label": "implements"
    },
    {
      "source": "PRJ-EMB-002",
      "target": "tech_arduino",
      "type": "tech",
      "label": "implements"
    },
    {
      "source": "PRJ-EMB-003",
      "target": "tech_arduino",
      "type": "tech",
      "label": "implements"
    },
    {
      "source": "PRJ-EMB-004",
      "target": "tech_arduino",
      "type": "tech",
      "label": "implements"
    },
    {
      "source": "PRJ-EMB-005",
      "target": "tech_arduino",
      "type": "tech",
      "label": "implements"
    },
    {
      "source": "PRJ-EMB-006",
      "target": "tech_arduino",
      "type": "tech",
      "label": "implements"
    },
    {
      "source": "PRJ-ENG-002",
      "target": "tech_arduino",
      "type": "tech",
      "label": "implements"
    },
    {
      "source": "PRJ-CV-001",
      "target": "tech_carla",
      "type": "tech",
      "label": "implements"
    },
    {
      "source": "PRJ-CV-001",
      "target": "tech_opencv",
      "type": "tech",
      "label": "implements"
    },
    {
      "source": "PRJ-CV-001",
      "target": "tech_python",
      "type": "tech",
      "label": "implements"
    },
    {
      "source": "PRJ-CV-002",
      "target": "tech_opencv",
      "type": "tech",
      "label": "implements"
    },
    {
      "source": "PRJ-CV-002",
      "target": "tech_python",
      "type": "tech",
      "label": "implements"
    },
    {
      "source": "PRJ-CV-003",
      "target": "tech_carla",
      "type": "tech",
      "label": "implements"
    },
    {
      "source": "PRJ-CV-003",
      "target": "tech_opencv",
      "type": "tech",
      "label": "implements"
    },
    {
      "source": "PRJ-CV-003",
      "target": "tech_python",
      "type": "tech",
      "label": "implements"
    },
    {
      "source": "PRJ-CV-004",
      "target": "tech_opencv",
      "type": "tech",
      "label": "implements"
    },
    {
      "source": "PRJ-CV-004",
      "target": "tech_python",
      "type": "tech",
      "label": "implements"
    },
    {
      "source": "PRJ-ML-001",
      "target": "tech_docker",
      "type": "tech",
      "label": "implements"
    },
    {
      "source": "PRJ-ML-001",
      "target": "tech_fastapi",
      "type": "tech",
      "label": "implements"
    },
    {
      "source": "PRJ-ML-001",
      "target": "tech_python",
      "type": "tech",
      "label": "implements"
    },
    {
      "source": "PRJ-ML-001",
      "target": "tech_scikit",
      "type": "tech",
      "label": "implements"
    },
    {
      "source": "PRJ-ML-003",
      "target": "tech_python",
      "type": "tech",
      "label": "implements"
    },
    {
      "source": "PRJ-ML-003",
      "target": "tech_scikit",
      "type": "tech",
      "label": "implements"
    },
    {
      "source": "PRJ-GENAI-001",
      "target": "tech_fastapi",
      "type": "tech",
      "label": "implements"
    },
    {
      "source": "PRJ-GENAI-001",
      "target": "tech_pgvector",
      "type": "tech",
      "label": "implements"
    },
    {
      "source": "PRJ-GENAI-001",
      "target": "tech_python",
      "type": "tech",
      "label": "implements"
    },
    {
      "source": "PRJ-GENAI-001",
      "target": "tech_rag",
      "type": "tech",
      "label": "implements"
    },
    {
      "source": "PRJ-CLOUD-001",
      "target": "tech_azure",
      "type": "tech",
      "label": "implements"
    },
    {
      "source": "PRJ-CLOUD-001",
      "target": "tech_k8s",
      "type": "tech",
      "label": "implements"
    },
    {
      "source": "PRJ-CLOUD-001",
      "target": "tech_rag",
      "type": "tech",
      "label": "implements"
    },
    {
      "source": "PRJ-CLOUD-001",
      "target": "tech_terraform",
      "type": "tech",
      "label": "implements"
    },
    {
      "source": "PRJ-DATA-001",
      "target": "tech_azure",
      "type": "tech",
      "label": "implements"
    },
    {
      "source": "PRJ-DATA-001",
      "target": "tech_python",
      "type": "tech",
      "label": "implements"
    },
    {
      "source": "PRJ-DATA-001",
      "target": "tech_terraform",
      "type": "tech",
      "label": "implements"
    },
    {
      "source": "PRJ-DATA-002",
      "target": "tech_pgvector",
      "type": "tech",
      "label": "implements"
    },
    {
      "source": "PRJ-DATA-002",
      "target": "tech_python",
      "type": "tech",
      "label": "implements"
    },
    {
      "source": "PRJ-GENAI-004",
      "target": "tech_docker",
      "type": "tech",
      "label": "implements"
    },
    {
      "source": "PRJ-GENAI-004",
      "target": "tech_python",
      "type": "tech",
      "label": "implements"
    },
    {
      "source": "PRJ-DATA-003",
      "target": "tech_azure",
      "type": "tech",
      "label": "implements"
    },
    {
      "source": "PRJ-ML-002",
      "target": "tech_azure",
      "type": "tech",
      "label": "implements"
    },
    {
      "source": "PRJ-ML-002",
      "target": "tech_python",
      "type": "tech",
      "label": "implements"
    },
    {
      "source": "PRJ-ML-002",
      "target": "tech_scikit",
      "type": "tech",
      "label": "implements"
    },
    {
      "source": "PRJ-CLOUD-002",
      "target": "tech_pgvector",
      "type": "tech",
      "label": "implements"
    },
    {
      "source": "PRJ-CLOUD-003",
      "target": "tech_python",
      "type": "tech",
      "label": "implements"
    },
    {
      "source": "PRJ-GENAI-002",
      "target": "tech_docker",
      "type": "tech",
      "label": "implements"
    },
    {
      "source": "PRJ-GENAI-002",
      "target": "tech_pgvector",
      "type": "tech",
      "label": "implements"
    },
    {
      "source": "PRJ-GENAI-002",
      "target": "tech_python",
      "type": "tech",
      "label": "implements"
    },
    {
      "source": "PRJ-GENAI-003",
      "target": "tech_python",
      "type": "tech",
      "label": "implements"
    },
    {
      "source": "PRJ-GENAI-003",
      "target": "tech_sumo",
      "type": "tech",
      "label": "implements"
    }
  ]
};

  let initialized = false;
  let simulationRunning = false;
  let transform = { x: 0, y: 0, k: 1 };
  let isDraggingCanvas = false;
  let isDraggingNode = false;
  let activeDragNode = null;
  let dragStart = { x: 0, y: 0 };
  let selectedNode = null;
  let activeFilter = 'all';
  let searchQuery = '';
  let simulationTimer = null;

  // Viewport dimensions
  const WIDTH = 960;
  const HEIGHT = 620;
  const CENTER = { x: WIDTH / 2, y: HEIGHT / 2 };

  // Node & edge runtime maps
  const nodeMap = new Map();
  const adjacency = new Map();

  GRAPH_DATA.nodes.forEach((n, idx) => {
    // Initial deterministic positions arranged in concentric circles by category
    let angle = 0;
    let dist = 100;
    if (n.category === 'domain') {
      const dIdx = GRAPH_DATA.nodes.filter(x => x.category === 'domain').indexOf(n);
      angle = (dIdx / 9) * 2 * Math.PI - Math.PI / 2;
      dist = 180;
    } else if (n.category === 'role') {
      const rIdx = GRAPH_DATA.nodes.filter(x => x.category === 'role').indexOf(n);
      angle = (rIdx / 5) * 2 * Math.PI + Math.PI / 5;
      dist = 270;
    } else if (n.category === 'technology') {
      const tIdx = GRAPH_DATA.nodes.filter(x => x.category === 'technology').indexOf(n);
      angle = (tIdx / 14) * 2 * Math.PI;
      dist = 110;
    } else {
      // project
      const pIdx = GRAPH_DATA.nodes.filter(x => x.category === 'project').indexOf(n);
      angle = (pIdx / 27) * 2 * Math.PI + Math.PI / 7;
      dist = 230 + (pIdx % 3) * 30;
    }

    n.x = CENTER.x + Math.cos(angle) * dist + (Math.random() - 0.5) * 20;
    n.y = CENTER.y + Math.sin(angle) * dist + (Math.random() - 0.5) * 20;
    n.vx = 0;
    n.vy = 0;
    nodeMap.set(n.id, n);
    adjacency.set(n.id, new Set());
  });

  // Resolve edge source/target
  const resolvedEdges = GRAPH_DATA.edges.map(e => {
    const s = nodeMap.get(e.source);
    const t = nodeMap.get(e.target);
    if (s && t) {
      adjacency.get(e.source).add(e.target);
      adjacency.get(e.target).add(e.source);
    }
    return { ...e, sourceNode: s, targetNode: t };
  }).filter(e => e.sourceNode && e.targetNode);

  // DOM elements cache
  let container = null;
  let svg = null;
  let zoomGroup = null;
  let edgesGroup = null;
  let nodesGroup = null;
  let labelsGroup = null;
  let inspector = null;
  let accessibleTree = null;

  function init() {
    container = document.getElementById('archiveGraphView');
    if (!container) return;

    svg = document.getElementById('careerGraphSvg');
    zoomGroup = document.getElementById('graphZoomGroup');
    edgesGroup = document.getElementById('graphEdgesGroup');
    nodesGroup = document.getElementById('graphNodesGroup');
    labelsGroup = document.getElementById('graphLabelsGroup');
    inspector = document.getElementById('graphInspector');
    accessibleTree = document.getElementById('graphAccessibleTree');

    if (!svg || !zoomGroup) return;

    if (!initialized) {
      buildGraphDOM();
      setupEventListeners();
      buildAccessibleTree();
      initialized = true;
    }

    // Check reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      // Compute 100 ticks synchronously
      for (let i = 0; i < 100; i++) tickSimulation(0.05);
      renderPositions();
    } else {
      runSimulation();
    }
  }

  function buildGraphDOM() {
    edgesGroup.innerHTML = '';
    nodesGroup.innerHTML = '';
    labelsGroup.innerHTML = '';

    // 1. Build Edges
    resolvedEdges.forEach((e, idx) => {
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('class', `graph-edge edge-type-${e.type}`);
      line.setAttribute('data-source', e.source);
      line.setAttribute('data-target', e.target);
      line.setAttribute('id', `edge-${idx}`);
      edgesGroup.appendChild(line);
      e.domElement = line;
    });

    // 2. Build Nodes & Labels
    GRAPH_DATA.nodes.forEach(n => {
      const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      g.setAttribute('class', `graph-node-group node-cat-${n.category}`);
      g.setAttribute('data-id', n.id);
      g.setAttribute('tabindex', '0');
      g.setAttribute('role', 'button');
      g.setAttribute('aria-label', `${n.title} (${n.category}). Press Enter to inspect details.`);

      // Outer glow / halo circle
      const halo = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      halo.setAttribute('class', 'node-halo');
      halo.setAttribute('r', n.radius + 5);
      halo.setAttribute('fill', 'none');
      halo.setAttribute('stroke', n.color);

      // Core circle
      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('class', 'node-circle');
      circle.setAttribute('r', n.radius);
      circle.setAttribute('fill', '#070913');
      circle.setAttribute('stroke', n.color);
      circle.setAttribute('stroke-width', n.category === 'domain' ? '3' : '2');

      // Inner dot for domains/roles
      if (n.category === 'domain' || n.category === 'role') {
        const inner = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        inner.setAttribute('r', n.radius / 2.5);
        inner.setAttribute('fill', n.color);
        inner.setAttribute('opacity', '0.85');
        g.appendChild(inner);
      }

      g.appendChild(halo);
      g.appendChild(circle);
      nodesGroup.appendChild(g);
      n.domElement = g;

      // Label text
      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      text.setAttribute('class', `graph-label label-cat-${n.category}`);
      text.setAttribute('text-anchor', 'middle');
      text.setAttribute('dy', n.radius + 14);
      const displayTitle = n.shortTitle || (n.title.length > 22 ? n.title.slice(0, 20) + '…' : n.title);
      text.textContent = displayTitle;
      labelsGroup.appendChild(text);
      n.labelElement = text;
    });

    renderPositions();
  }

  // Physics simulation with convergence cooling
  function runSimulation() {
    if (simulationRunning) return;
    simulationRunning = true;
    let alpha = 1.0;
    const decay = 0.965;

    function step() {
      if (alpha < 0.005) {
        simulationRunning = false;
        return;
      }
      tickSimulation(alpha);
      renderPositions();
      alpha *= decay;
      requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  function tickSimulation(alpha) {
    const nodes = GRAPH_DATA.nodes;

    // 1. Repulsion (Coulomb force)
    for (let i = 0; i < nodes.length; i++) {
      const a = nodes[i];
      for (let j = i + 1; j < nodes.length; j++) {
        const b = nodes[j];
        let dx = b.x - a.x;
        let dy = b.y - a.y;
        let dist = Math.sqrt(dx * dx + dy * dy) || 1;
        if (dist < 260) {
          const force = (3500 / (dist * dist)) * alpha;
          const fx = (dx / dist) * force;
          const fy = (dy / dist) * force;
          if (a !== activeDragNode) { a.vx -= fx; a.vy -= fy; }
          if (b !== activeDragNode) { b.vx += fx; b.vy += fy; }
        }
      }
    }

    // 2. Attraction along edges (Hooke's spring force)
    resolvedEdges.forEach(e => {
      const a = e.sourceNode;
      const b = e.targetNode;
      let dx = b.x - a.x;
      let dy = b.y - a.y;
      let dist = Math.sqrt(dx * dx + dy * dy) || 1;
      let desiredDist = e.type === 'domain' ? 90 : (e.type === 'role' ? 120 : 100);
      let force = ((dist - desiredDist) * 0.035) * alpha;
      let fx = (dx / dist) * force;
      let fy = (dy / dist) * force;
      if (a !== activeDragNode) { a.vx += fx; a.vy += fy; }
      if (b !== activeDragNode) { b.vx -= fx; b.vy -= fy; }
    });

    // 3. Centering & boundary constraints
    nodes.forEach(n => {
      if (n === activeDragNode) return;
      n.vx += (CENTER.x - n.x) * 0.008 * alpha;
      n.vy += (CENTER.y - n.y) * 0.008 * alpha;

      n.vx *= 0.65;
      n.vy *= 0.65;

      n.x += n.vx;
      n.y += n.vy;

      // Keep inside bounds
      const pad = n.radius + 10;
      n.x = Math.max(pad, Math.min(WIDTH - pad, n.x));
      n.y = Math.max(pad, Math.min(HEIGHT - pad, n.y));
    });
  }

  function renderPositions() {
    resolvedEdges.forEach(e => {
      if (!e.domElement) return;
      e.domElement.setAttribute('x1', e.sourceNode.x);
      e.domElement.setAttribute('y1', e.sourceNode.y);
      e.domElement.setAttribute('x2', e.targetNode.x);
      e.domElement.setAttribute('y2', e.targetNode.y);
    });

    GRAPH_DATA.nodes.forEach(n => {
      if (!n.domElement) return;
      n.domElement.setAttribute('transform', `translate(${n.x}, ${n.y})`);
      if (n.labelElement) {
        n.labelElement.setAttribute('x', n.x);
        n.labelElement.setAttribute('y', n.y);
      }
    });
  }

  function setupEventListeners() {
    // 1. Mouse Dragging & Canvas Panning
    svg.addEventListener('mousedown', onPointerDown);
    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('mouseup', onPointerUp);

    // Touch support (two-finger pan, single-finger node drag)
    svg.addEventListener('touchstart', onTouchStart, { passive: false });
    window.addEventListener('touchmove', onTouchMove, { passive: false });
    window.addEventListener('touchend', onTouchEnd);

    // Zoom buttons
    const zoomInBtn = document.getElementById('graphZoomInBtn');
    const zoomOutBtn = document.getElementById('graphZoomOutBtn');
    const resetBtn = document.getElementById('graphResetBtn');
    if (zoomInBtn) zoomInBtn.addEventListener('click', () => applyZoom(1.2));
    if (zoomOutBtn) zoomOutBtn.addEventListener('click', () => applyZoom(0.8));
    if (resetBtn) resetBtn.addEventListener('click', resetView);

    // Filter pills
    const filterButtons = container.querySelectorAll('.graph-filter-btn');
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        setFilter(btn.dataset.type);
      });
    });

    // Search input
    const searchInput = document.getElementById('graphSearchInput');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.trim().toLowerCase();
        applyFilterAndSearch();
      });
    }

    // Node click & hover
    nodesGroup.addEventListener('click', (e) => {
      const group = e.target.closest('.graph-node-group');
      if (!group) return;
      const nodeId = group.getAttribute('data-id');
      const node = nodeMap.get(nodeId);
      if (node) selectNode(node);
    });

    nodesGroup.addEventListener('mouseover', (e) => {
      const group = e.target.closest('.graph-node-group');
      if (!group || activeDragNode) return;
      const nodeId = group.getAttribute('data-id');
      highlightNeighborhood(nodeId);
    });

    nodesGroup.addEventListener('mouseout', (e) => {
      if (activeDragNode) return;
      if (selectedNode) {
        highlightNeighborhood(selectedNode.id);
      } else {
        clearHighlights();
      }
    });

    // Keyboard support
    nodesGroup.addEventListener('keydown', (e) => {
      const group = e.target.closest('.graph-node-group');
      if (!group) return;
      const nodeId = group.getAttribute('data-id');
      const node = nodeMap.get(nodeId);
      if (!node) return;

      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        selectNode(node);
      } else if (e.key === 'Escape') {
        resetView();
      }
    });

    // Inspector close button
    const closeInspectorBtn = document.getElementById('closeInspectorBtn');
    if (closeInspectorBtn) {
      closeInspectorBtn.addEventListener('click', () => {
        closeInspector();
        clearHighlights();
      });
    }

    // Text Hierarchy Toggle
    const textToggleBtn = document.getElementById('graphTextToggleBtn');
    if (textToggleBtn && accessibleTree) {
      textToggleBtn.addEventListener('click', () => {
        const isHidden = accessibleTree.hidden;
        accessibleTree.hidden = !isHidden;
        textToggleBtn.textContent = isHidden ? 'Hide Text Hierarchy' : 'Show Text Hierarchy';
        textToggleBtn.setAttribute('aria-expanded', String(isHidden));
      });
    }
  }

  function onPointerDown(e) {
    const nodeGroup = e.target.closest('.graph-node-group');
    if (nodeGroup) {
      const nodeId = nodeGroup.getAttribute('data-id');
      activeDragNode = nodeMap.get(nodeId);
      isDraggingNode = true;
    } else {
      isDraggingCanvas = true;
      dragStart = { x: e.clientX - transform.x, y: e.clientY - transform.y };
      svg.style.cursor = 'grabbing';
    }
  }

  function onPointerMove(e) {
    if (isDraggingNode && activeDragNode) {
      const pt = getSvgPoint(e.clientX, e.clientY);
      activeDragNode.x = pt.x;
      activeDragNode.y = pt.y;
      renderPositions();
    } else if (isDraggingCanvas) {
      transform.x = e.clientX - dragStart.x;
      transform.y = e.clientY - dragStart.y;
      updateTransform();
    }
  }

  function onPointerUp() {
    if (isDraggingNode) {
      isDraggingNode = false;
      activeDragNode = null;
      runSimulation();
    }
    if (isDraggingCanvas) {
      isDraggingCanvas = false;
      svg.style.cursor = 'grab';
    }
  }

  function onTouchStart(e) {
    if (e.touches.length === 1) {
      const touch = e.touches[0];
      const target = document.elementFromPoint(touch.clientX, touch.clientY);
      const nodeGroup = target ? target.closest('.graph-node-group') : null;
      if (nodeGroup) {
        e.preventDefault();
        const nodeId = nodeGroup.getAttribute('data-id');
        activeDragNode = nodeMap.get(nodeId);
        isDraggingNode = true;
      }
    }
  }

  function onTouchMove(e) {
    if (isDraggingNode && activeDragNode && e.touches.length === 1) {
      e.preventDefault();
      const touch = e.touches[0];
      const pt = getSvgPoint(touch.clientX, touch.clientY);
      activeDragNode.x = pt.x;
      activeDragNode.y = pt.y;
      renderPositions();
    }
  }

  function onTouchEnd() {
    if (isDraggingNode) {
      isDraggingNode = false;
      activeDragNode = null;
      runSimulation();
    }
  }

  function getSvgPoint(clientX, clientY) {
    const rect = svg.getBoundingClientRect();
    const x = (clientX - rect.left - transform.x) / transform.k;
    const y = (clientY - rect.top - transform.y) / transform.k;
    return { x, y };
  }

  function applyZoom(scaleFactor) {
    transform.k = Math.max(0.4, Math.min(2.5, transform.k * scaleFactor));
    updateTransform();
  }

  function updateTransform() {
    if (zoomGroup) {
      zoomGroup.setAttribute('transform', `translate(${transform.x}, ${transform.y}) scale(${transform.k})`);
    }
  }

  function highlightNeighborhood(nodeId) {
    const neighbors = adjacency.get(nodeId) || new Set();

    GRAPH_DATA.nodes.forEach(n => {
      const isTarget = n.id === nodeId;
      const isNeighbor = neighbors.has(n.id);
      if (n.domElement) {
        n.domElement.classList.toggle('node-highlight', isTarget || isNeighbor);
        n.domElement.classList.toggle('node-dimmed', !isTarget && !isNeighbor);
      }
      if (n.labelElement) {
        n.labelElement.classList.toggle('label-highlight', isTarget || isNeighbor);
        n.labelElement.classList.toggle('label-dimmed', !isTarget && !isNeighbor);
      }
    });

    resolvedEdges.forEach(e => {
      const isIncident = e.source === nodeId || e.target === nodeId;
      if (e.domElement) {
        e.domElement.classList.toggle('edge-highlight', isIncident);
        e.domElement.classList.toggle('edge-dimmed', !isIncident);
      }
    });
  }

  function clearHighlights() {
    GRAPH_DATA.nodes.forEach(n => {
      if (n.domElement) {
        n.domElement.classList.remove('node-highlight', 'node-dimmed');
      }
      if (n.labelElement) {
        n.labelElement.classList.remove('label-highlight', 'label-dimmed');
      }
    });
    resolvedEdges.forEach(e => {
      if (e.domElement) {
        e.domElement.classList.remove('edge-highlight', 'edge-dimmed');
      }
    });
  }

  function selectNode(node) {
    selectedNode = node;
    highlightNeighborhood(node.id);
    openInspector(node);
  }

  function openInspector(node) {
    if (!inspector) return;
    inspector.hidden = false;

    const kicker = inspector.querySelector('.inspector-kicker');
    const title = inspector.querySelector('.inspector-title');
    const period = inspector.querySelector('.inspector-period');
    const desc = inspector.querySelector('.inspector-desc');
    const chipsWrap = inspector.querySelector('.inspector-chips');
    const actions = inspector.querySelector('.inspector-actions');

    const catLabels = {
      domain: 'ENGINEERING DOMAIN',
      role: 'CAREER MILESTONE',
      technology: 'CORE TECHNOLOGY',
      project: 'TECHNICAL IMPLEMENTATION'
    };

    if (kicker) kicker.textContent = `${catLabels[node.category] || node.category.toUpperCase()} · ${node.id.toUpperCase()}`;
    if (title) title.textContent = node.title;
    if (period) period.textContent = node.period || '';
    if (desc) desc.textContent = node.desc || node.contribution || '';

    // Connected entities chips
    if (chipsWrap) {
      chipsWrap.innerHTML = '';
      const neighborIds = Array.from(adjacency.get(node.id) || []);
      neighborIds.forEach(nId => {
        const neighbor = nodeMap.get(nId);
        if (!neighbor) return;
        const chip = document.createElement('button');
        chip.type = 'button';
        chip.className = `inspector-chip chip-${neighbor.category}`;
        chip.textContent = neighbor.shortTitle || neighbor.title;
        chip.title = `Jump to ${neighbor.title}`;
        chip.addEventListener('click', () => selectNode(neighbor));
        chipsWrap.appendChild(chip);
      });
    }

    // Actions
    if (actions) {
      actions.innerHTML = '';
      if (node.caseStudyUrl) {
        const csBtn = document.createElement('a');
        csBtn.className = 'button button-primary';
        csBtn.href = node.caseStudyUrl;
        csBtn.innerHTML = 'Read Deep Case Study <span aria-hidden="true">→</span>';
        actions.appendChild(csBtn);
      }
      if (node.repoUrl) {
        const repoBtn = document.createElement('a');
        repoBtn.className = 'repo-btn';
        repoBtn.href = node.repoUrl;
        repoBtn.target = '_blank';
        repoBtn.rel = 'noopener noreferrer';
        repoBtn.innerHTML = 'View Repository <span aria-hidden="true">↗</span>';
        actions.appendChild(repoBtn);
      }
    }
  }

  function closeInspector() {
    if (inspector) inspector.hidden = true;
    selectedNode = null;
  }

  function setFilter(filterType) {
    activeFilter = filterType;
    applyFilterAndSearch();
  }

  function applyFilterAndSearch() {
    GRAPH_DATA.nodes.forEach(n => {
      const matchesFilter = (activeFilter === 'all') ||
        (activeFilter === 'project' && n.category === 'project') ||
        (activeFilter === 'domain' && (n.category === 'domain' || n.category === 'role')) ||
        (activeFilter === 'tech' && n.category === 'technology');

      const matchesSearch = !searchQuery ||
        n.title.toLowerCase().includes(searchQuery) ||
        (n.desc && n.desc.toLowerCase().includes(searchQuery)) ||
        (n.technologies && n.technologies.some(t => t.toLowerCase().includes(searchQuery)));

      const visible = matchesFilter && matchesSearch;
      if (n.domElement) n.domElement.style.display = visible ? '' : 'none';
      if (n.labelElement) n.labelElement.style.display = visible ? '' : 'none';
    });

    resolvedEdges.forEach(e => {
      const srcVisible = e.sourceNode.domElement && e.sourceNode.domElement.style.display !== 'none';
      const tgtVisible = e.targetNode.domElement && e.targetNode.domElement.style.display !== 'none';
      if (e.domElement) e.domElement.style.display = (srcVisible && tgtVisible) ? '' : 'none';
    });
  }

  function resetView() {
    transform = { x: 0, y: 0, k: 1 };
    updateTransform();
    clearHighlights();
    closeInspector();
    activeFilter = 'all';
    searchQuery = '';
    const searchInput = document.getElementById('graphSearchInput');
    if (searchInput) searchInput.value = '';
    const filterButtons = container.querySelectorAll('.graph-filter-btn');
    filterButtons.forEach(b => b.classList.toggle('active', b.dataset.type === 'all'));
    applyFilterAndSearch();
    runSimulation();
  }

  function buildAccessibleTree() {
    if (!accessibleTree) return;
    accessibleTree.innerHTML = '';

    const heading = document.createElement('h3');
    heading.textContent = 'Structured Career & Project Knowledge Tree';
    accessibleTree.appendChild(heading);

    const intro = document.createElement('p');
    intro.textContent = 'This hierarchical tree lists all 9 verified categories, career milestone roles, and technical implementations with their connected technologies for screen readers and keyboard users.';
    accessibleTree.appendChild(intro);

    // Group by domains
    const domains = GRAPH_DATA.nodes.filter(n => n.category === 'domain');
    domains.forEach(d => {
      const details = document.createElement('details');
      details.className = 'accessible-domain-group';
      const summary = document.createElement('summary');
      summary.innerHTML = `<strong>${d.title}</strong> (${d.desc})`;
      details.appendChild(summary);

      const list = document.createElement('ul');
      const domainProjects = GRAPH_DATA.nodes.filter(n => n.category === 'project' && n.domain === d.domain);
      domainProjects.forEach(p => {
        const item = document.createElement('li');
        item.innerHTML = `<strong>${p.title}</strong> (${p.period}) — ${p.desc}`;
        if (p.caseStudyUrl) {
          item.innerHTML += ` · <a href="${p.caseStudyUrl}">Case Study</a>`;
        }
        if (p.repoUrl) {
          item.innerHTML += ` · <a href="${p.repoUrl}" target="_blank" rel="noopener noreferrer">Code</a>`;
        }
        list.appendChild(item);
      });

      details.appendChild(list);
      accessibleTree.appendChild(details);
    });
  }

  window.careerGraph = {
    init,
    reset: resetView,
    setFilter,
    selectNode: (id) => {
      const node = nodeMap.get(id);
      if (node) selectNode(node);
    }
  };
})();
