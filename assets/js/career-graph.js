/**
 * Career & Engineering Knowledge Graph (Vanilla SVG + Force Simulation)
 * Author: Alimul Fazal Nabil — AI Solutions Engineer
 * Zero external dependencies. Fully responsive, accessible, and high-performance.
 */
(() => {
  const GRAPH_DATA = {
  "nodes": [
    {
      "id": "dom_genai",
      "title": "Generative AI & RAG",
      "category": "domain",
      "domain": "genai",
      "color": "#a855f7",
      "radius": 24,
      "desc": "Enterprise RAG architectures, multi-tenant hybrid retrieval, LLM agents, and semantic intelligence."
    },
    {
      "id": "dom_vision",
      "title": "Computer Vision & Perception",
      "category": "domain",
      "domain": "vision",
      "color": "#38bdf8",
      "radius": 24,
      "desc": "Roadway edge perception, CARLA vehicle simulation, YOLO object tracking, and image analytics."
    },
    {
      "id": "dom_ml",
      "title": "Machine Learning & Analytics",
      "category": "domain",
      "domain": "ml",
      "color": "#10b981",
      "radius": 24,
      "desc": "Supervised classification, predictive modeling, FastAPI inference services, and MLOps gates."
    },
    {
      "id": "dom_cloud",
      "title": "Cloud Systems & DevOps",
      "category": "domain",
      "domain": "cloud",
      "color": "#3b82f6",
      "radius": 24,
      "desc": "Microsoft Azure cloud architectures, Terraform Infrastructure as Code, Kubernetes, and CI/CD."
    },
    {
      "id": "dom_data",
      "title": "Data Engineering & Pipelines",
      "category": "domain",
      "domain": "data",
      "color": "#f59e0b",
      "radius": 24,
      "desc": "PostgreSQL, PostGIS geospatial processing, industrial telemetry pipelines, and scalable ETL."
    },
    {
      "id": "dom_embedded",
      "title": "Robotics & Embedded IoT",
      "category": "domain",
      "domain": "embedded",
      "color": "#14b8a6",
      "radius": 24,
      "desc": "Microcontrollers (Arduino), servo kinematics, robotics feedback loops, and IoT telemetry."
    },
    {
      "id": "dom_research",
      "title": "Research & Engineering Design",
      "category": "domain",
      "domain": "research",
      "color": "#ec4899",
      "radius": 24,
      "desc": "Peer-reviewed scientific publications, IoT systems, CAD modeling, and empirical benchmarking."
    },
    {
      "id": "role_redi",
      "title": "ReDI School \u00b7 AI & ML Instructor",
      "shortTitle": "ReDI School",
      "category": "role",
      "color": "#f43f5e",
      "radius": 18,
      "desc": "March 2026 \u2013 Present \u00b7 Berlin / Remote. Teaches applied machine learning, scikit-learn, and hands-on Python AI workflows."
    },
    {
      "id": "role_movisabio",
      "title": "MoviSabio \u00b7 CTO & Co-Founder",
      "shortTitle": "MoviSabio",
      "category": "role",
      "color": "#06b6d4",
      "radius": 18,
      "desc": "January 2026 \u2013 Present. Directs technical architecture and geospatial data strategy for intelligent traffic signal coordination."
    },
    {
      "id": "role_energy_cloud",
      "title": "Energy Crown \u00b7 Infrastructure & Cloud Systems Engineer",
      "shortTitle": "Energy Crown (Cloud)",
      "category": "role",
      "color": "#6366f1",
      "radius": 18,
      "desc": "July 2023 \u2013 Present. Operates Microsoft Azure infrastructure, Terraform IaC, automated CI/CD pipelines, and telemetry."
    },
    {
      "id": "role_energy_it",
      "title": "Energy Crown \u00b7 IT Support Engineer",
      "shortTitle": "Energy Crown (IT)",
      "category": "role",
      "color": "#8b5cf6",
      "radius": 18,
      "desc": "January 2019 \u2013 June 2023. Managed enterprise LAN/WAN networking, server administration, and foundational hardware diagnostics."
    },
    {
      "id": "role_cbiu",
      "title": "CBIU \u00b7 Graduate Student Researcher",
      "shortTitle": "CBIU Research",
      "category": "role",
      "color": "#eab308",
      "radius": 18,
      "desc": "January 2022 \u2013 December 2022. Applied research in IoT architectures and embedded systems resulting in 2 peer-reviewed journal papers."
    },
    {
      "id": "tech_python",
      "title": "Python 3.12+",
      "category": "technology",
      "color": "#e0e7ff",
      "radius": 14,
      "desc": "Core engineering language for AI systems, APIs, machine learning, and automation."
    },
    {
      "id": "tech_fastapi",
      "title": "FastAPI",
      "category": "technology",
      "color": "#5eead4",
      "radius": 13,
      "desc": "High-throughput asynchronous REST API framework for RAG and ML inference endpoints."
    },
    {
      "id": "tech_pgvector",
      "title": "PostgreSQL & pgvector",
      "category": "technology",
      "color": "#93c5fd",
      "radius": 14,
      "desc": "Relational vector database for HNSW dense embeddings, structured metadata, and PostGIS spatial indexing."
    },
    {
      "id": "tech_rag",
      "title": "RAG & Hybrid Search",
      "category": "technology",
      "color": "#c084fc",
      "radius": 14,
      "desc": "Sparse BM25 + dense vector retrieval, Reciprocal Rank Fusion, and cross-encoder reranking."
    },
    {
      "id": "tech_azure",
      "title": "Microsoft Azure",
      "category": "technology",
      "color": "#60a5fa",
      "radius": 14,
      "desc": "Enterprise cloud platform: Azure Kubernetes Service (AKS), Key Vault, Virtual Networks, and Blob Storage."
    },
    {
      "id": "tech_terraform",
      "title": "Terraform (IaC)",
      "category": "technology",
      "color": "#a78bfa",
      "radius": 13,
      "desc": "Modular Infrastructure as Code for automated cloud provisioning and state management."
    },
    {
      "id": "tech_docker",
      "title": "Docker & Containers",
      "category": "technology",
      "color": "#38bdf8",
      "radius": 13,
      "desc": "Multi-stage container builds, microservices isolation, and reproducible deployments."
    },
    {
      "id": "tech_k8s",
      "title": "Kubernetes (AKS)",
      "category": "technology",
      "color": "#818cf8",
      "radius": 13,
      "desc": "Container orchestration, ingress controllers, pod scaling, and cloud-native deployments."
    },
    {
      "id": "tech_opencv",
      "title": "OpenCV",
      "category": "technology",
      "color": "#fdba74",
      "radius": 14,
      "desc": "Computer vision library for roadway edge detection, frame preprocessing, and YOLO object tracking."
    },
    {
      "id": "tech_carla",
      "title": "CARLA Simulator",
      "category": "technology",
      "color": "#f472b6",
      "radius": 13,
      "desc": "Unreal Engine-based autonomous driving simulation platform for camera sensor streaming and driverless testing."
    },
    {
      "id": "tech_sumo",
      "title": "SUMO / TraCI",
      "category": "technology",
      "color": "#fbbf24",
      "radius": 13,
      "desc": "Microscopic urban traffic simulation tool for dynamic traffic signal coordination."
    },
    {
      "id": "tech_ros",
      "title": "ROS 2",
      "category": "technology",
      "color": "#2dd4bf",
      "radius": 13,
      "desc": "Robot Operating System for autonomous mobile robot navigation nodes and sensor topics."
    },
    {
      "id": "tech_scikit",
      "title": "scikit-learn",
      "category": "technology",
      "color": "#4ade80",
      "radius": 13,
      "desc": "Machine learning algorithms, classification ensembles, calibration curves, and feature pipelines."
    },
    {
      "id": "tech_arduino",
      "title": "Embedded C / Arduino",
      "category": "technology",
      "color": "#34d399",
      "radius": 13,
      "desc": "Microcontroller firmware, PWM servo actuation, ultrasonic ranging, and sensor telemetry."
    },
    {
      "id": "PRJ-EMB-001",
      "title": "Solar-Powered Electric Vehicle with Multi-Sensor Accident Detection",
      "category": "project",
      "domain": "embedded",
      "status": "prototype",
      "period": "July 2021 \u2013 November 2021 \u00b7 PRJ-EMB-001",
      "desc": "Electric micro-mobility platforms require autonomous hazard identification and rapid accident alerting to protect operators in transit while maximizing solar energy utilization.",
      "contribution": "Conceptualized system architecture; authored Arduino Mega 2560 embedded C/C++ firmware; integrated ultrasonic proximity ranging, infrared hazard sensors, and 3-axis accelerometer collision trigger thresholds; wired solar PV charge controller.",
      "technologies": [
        "Arduino Mega 2560",
        "Embedded C/C++",
        "Ultrasonic Sensors",
        "Infrared Sensors",
        "3-Axis Accelerometer",
        "Solar PV Controller"
      ],
      "caseStudyUrl": null,
      "repoUrl": null,
      "links": [],
      "color": "#14b8a6",
      "radius": 11
    },
    {
      "id": "PRJ-EMB-002",
      "title": "Servo-Motor Robotic Arm (4-Axis Articulated Manipulator)",
      "category": "project",
      "domain": "embedded",
      "status": "prototype",
      "period": "2018 \u2013 2019 \u00b7 PRJ-EMB-002",
      "desc": "Precision multi-degree-of-freedom robotic positioning and manipulation at low cost using accessible microcontroller architectures and serial communications.",
      "contribution": "Assembled 4-axis mechanical linkage; programmed PWM servo motion trajectories and angular boundaries in Arduino C++; implemented serial command handling for wireless Bluetooth (HC-05) control.",
      "technologies": [
        "Arduino",
        "Servo Motors (SG90/MG995)",
        "HC-05 Bluetooth Module",
        "PWM Control",
        "Embedded C++"
      ],
      "caseStudyUrl": null,
      "repoUrl": "https://github.com/alimulfazalnabil/Bluetooth-Controlled-Robotic-Arm",
      "links": [
        {
          "text": "View Code \u2197",
          "href": "https://github.com/alimulfazalnabil/Bluetooth-Controlled-Robotic-Arm"
        }
      ],
      "color": "#14b8a6",
      "radius": 11
    },
    {
      "id": "PRJ-EMB-003",
      "title": "Dual-Axis Solar-Tracking Photovoltaic Optimization System",
      "category": "project",
      "domain": "embedded",
      "status": "prototype",
      "period": "2018 \u2013 2019 \u00b7 PRJ-EMB-003",
      "desc": "Fixed photovoltaic panels lose up to 30% solar irradiance efficiency due to oblique sun incident angles throughout daily diurnal cycles.",
      "contribution": "Constructed dual-axis differential light sensing module using orthogonal pairs of light-dependent resistors (LDRs); coded comparative analog threshold logic to actuate elevation and azimuth servo motors.",
      "technologies": [
        "LDR Sensors",
        "Servo Motors",
        "Microcontroller (Arduino)",
        "Analog Comparator Logic",
        "Embedded C"
      ],
      "caseStudyUrl": null,
      "repoUrl": null,
      "links": [],
      "color": "#14b8a6",
      "radius": 11
    },
    {
      "id": "PRJ-EMB-004",
      "title": "Autonomous Line-Follower Ground Robot",
      "category": "project",
      "domain": "embedded",
      "status": "prototype",
      "period": "2017 \u2013 2018 \u00b7 PRJ-EMB-004",
      "desc": "Autonomous automated guided vehicles (AGVs) in industrial warehouses require robust, low-latency trajectory tracking along high-contrast floor paths.",
      "contribution": "Designed mobile chassis; integrated multi-channel infrared reflectance array; implemented differential steering feedback algorithms in embedded C/C++ on Arduino Mega 2560.",
      "technologies": [
        "Arduino Mega 2560",
        "Infrared Sensor Array",
        "L298N Motor Driver",
        "DC Gear Motors",
        "Embedded C/C++"
      ],
      "caseStudyUrl": null,
      "repoUrl": "https://github.com/alimulfazalnabil/Robotics-projects",
      "links": [
        {
          "text": "View Code \u2197",
          "href": "https://github.com/alimulfazalnabil/Robotics-projects"
        }
      ],
      "color": "#14b8a6",
      "radius": 11
    },
    {
      "id": "PRJ-EMB-005",
      "title": "IoT-Based Digital Information & Notice Board System",
      "category": "project",
      "domain": "embedded",
      "status": "research",
      "period": "2021 \u2013 November 2022 \u00b7 PRJ-EMB-005",
      "desc": "Manual notice distribution in institutional and commercial facilities is slow, paper-dependent, and prone to delayed dissemination of critical alerts.",
      "contribution": "Lead author and developer; designed Wi-Fi-enabled embedded controller with ESP8266 and Arduino; programmed web API interface and MQTT message subscriber to broadcast remote notices to dynamic display boards.",
      "technologies": [
        "ESP8266",
        "Arduino",
        "MQTT",
        "HTTP REST API",
        "Embedded C++",
        "HTML/CSS Web Portal"
      ],
      "caseStudyUrl": null,
      "repoUrl": null,
      "links": [],
      "color": "#14b8a6",
      "radius": 11
    },
    {
      "id": "PRJ-EMB-006",
      "title": "Robotics Foundations & Autonomous Rover Modules Monorepo",
      "category": "project",
      "domain": "embedded",
      "status": "learning",
      "period": "2017 \u2013 2023 \u00b7 PRJ-EMB-006",
      "desc": "Systematic collection of embedded hardware interfaces and autonomous robotics control patterns for education and experimentation.",
      "contribution": "Implemented and organized modular C++ firmware examples for ultrasonic distance ranging, motor drivers, Bluetooth teleoperation, obstacle avoidance, and GPS waypoint processing.",
      "technologies": [
        "C++",
        "Arduino",
        "Ultrasonic Sensors",
        "Bluetooth Modules",
        "Motor Shields",
        "GPS Telemetry"
      ],
      "caseStudyUrl": null,
      "repoUrl": "https://github.com/alimulfazalnabil/Robotics-projects",
      "links": [
        {
          "text": "View Code \u2197",
          "href": "https://github.com/alimulfazalnabil/Robotics-projects"
        }
      ],
      "color": "#14b8a6",
      "radius": 11
    },
    {
      "id": "PRJ-CV-001",
      "title": "Autonomous Lane Detection Pipeline & CARLA Bridge",
      "category": "project",
      "domain": "vision",
      "status": "prototype",
      "period": "2023 \u2013 2024 \u00b7 PRJ-CV-001",
      "desc": "Autonomous vehicles require fast, deterministic lane-boundary recognition under changing illumination and perspective distortions without heavy deep-learning compute dependencies.",
      "contribution": "Authored complete Python OpenCV pipeline: Gaussian blur filtering, Canny edge detection, dynamic polygonal ROI masking, Hough Transform line extraction, lane-boundary clustering, moving-average temporal smoothing, unit test harness with synthetic images, and CARLA simulation adapter.",
      "technologies": [
        "Python 3",
        "OpenCV",
        "NumPy",
        "Matplotlib",
        "Hough Transform",
        "CARLA Simulator API"
      ],
      "caseStudyUrl": "case-studies/autonomous-lane-detection.html",
      "repoUrl": "https://github.com/alimulfazalnabil/Autonomous-Lane-Detection",
      "links": [
        {
          "text": "Read Case Study \u2192",
          "href": "case-studies/autonomous-lane-detection.html"
        },
        {
          "text": "View Code \u2197",
          "href": "https://github.com/alimulfazalnabil/Autonomous-Lane-Detection"
        }
      ],
      "color": "#38bdf8",
      "radius": 11
    },
    {
      "id": "PRJ-CV-002",
      "title": "Vehicle and Pedestrian Visual Detection System",
      "category": "project",
      "domain": "vision",
      "status": "learning",
      "period": "2023 \u2013 2025 \u00b7 PRJ-CV-002",
      "desc": "Real-time multi-class object localization in urban traffic environments for intelligent transportation and pedestrian safety.",
      "contribution": "Explored YOLO-based object detection pipelines on dashcam and traffic video streams; analyzed bounding box confidence thresholds and class inference latency.",
      "technologies": [
        "Python",
        "YOLO (Ultralytics YOLOv8 / Darknet)",
        "OpenCV",
        "NumPy"
      ],
      "caseStudyUrl": null,
      "repoUrl": "https://github.com/alimulfazalnabil/Computer-Vision-Projects",
      "links": [
        {
          "text": "View Code \u2197",
          "href": "https://github.com/alimulfazalnabil/Computer-Vision-Projects"
        }
      ],
      "color": "#38bdf8",
      "radius": 11
    },
    {
      "id": "PRJ-CV-003",
      "title": "Autonomous Driving Virtual Simulation in CARLA",
      "category": "project",
      "domain": "vision",
      "status": "simulation",
      "period": "2023 \u2013 2024 \u00b7 PRJ-CV-003",
      "desc": "Physical vehicle road testing of perception and trajectory algorithms carries high financial cost and safety hazards.",
      "contribution": "Configured CARLA 3D simulator environment; implemented Python client scripts to interface vehicle sensor actors (RGB camera, telemetry) and stream frames into lane-detection routines.",
      "technologies": [
        "CARLA Simulator",
        "Python",
        "Unreal Engine Backend",
        "NumPy",
        "OpenCV"
      ],
      "caseStudyUrl": null,
      "repoUrl": "https://github.com/alimulfazalnabil/Autonomous-Lane-Detection",
      "links": [
        {
          "text": "View Code \u2197",
          "href": "https://github.com/alimulfazalnabil/Autonomous-Lane-Detection"
        }
      ],
      "color": "#38bdf8",
      "radius": 11
    },
    {
      "id": "PRJ-CV-004",
      "title": "Computer Vision Exploration Hub & Deep Learning Architectures",
      "category": "project",
      "domain": "vision",
      "status": "learning",
      "period": "2022 \u2013 2024 \u00b7 PRJ-CV-004",
      "desc": "Benchmarking diverse computer vision paradigms (transfer learning, object tracking, semantic segmentation, generative adversarial networks).",
      "contribution": "Curated, experimented with, and adapted deep computer vision architectures across transfer learning, YOLOv8/DeepSORT tracking concepts, CycleGAN style transfer, and visual question answering.",
      "technologies": [
        "Python",
        "PyTorch",
        "TensorFlow",
        "OpenCV",
        "torchvision",
        "Albumentations",
        "Jupyter"
      ],
      "caseStudyUrl": null,
      "repoUrl": "https://github.com/alimulfazalnabil/Computer-Vision-Projects",
      "links": [
        {
          "text": "View Code \u2197",
          "href": "https://github.com/alimulfazalnabil/Computer-Vision-Projects"
        }
      ],
      "color": "#38bdf8",
      "radius": 11
    },
    {
      "id": "PRJ-ML-001",
      "title": "Heart Disease Clinical Risk Prediction Platform",
      "category": "project",
      "domain": "ml",
      "status": "prototype",
      "period": "2023 \u2013 2024 \u00b7 PRJ-ML-001",
      "desc": "Early risk assessment for cardiovascular disease using multi-parametric clinical indicators to assist triage.",
      "contribution": "Engineered scikit-learn classification pipeline with stratified cross-validation and feature standardization; developed FastAPI microservice with Pydantic input validation, prediction history logging (SQLite/PostgreSQL), Docker containerization, and GitHub Actions CI workflow.",
      "technologies": [
        "Python 3",
        "scikit-learn",
        "FastAPI",
        "Pydantic",
        "Pandas",
        "NumPy",
        "SQLite/PostgreSQL",
        "Docker",
        "pytest",
        "GitHub Actions"
      ],
      "caseStudyUrl": "case-studies/heart-disease-prediction.html",
      "repoUrl": "https://github.com/alimulfazalnabil/heart-disease-prediction",
      "links": [
        {
          "text": "Read Case Study \u2192",
          "href": "case-studies/heart-disease-prediction.html"
        },
        {
          "text": "View Code \u2197",
          "href": "https://github.com/alimulfazalnabil/heart-disease-prediction"
        }
      ],
      "color": "#10b981",
      "radius": 11
    },
    {
      "id": "PRJ-ML-002",
      "title": "Predictive Maintenance & Equipment Anomaly Forecasting",
      "category": "project",
      "domain": "ml",
      "status": "simulation",
      "period": "2024 \u2013 2025 \u00b7 PRJ-ML-002",
      "desc": "Industrial rotating machinery breakdowns cause sudden operational halts that could be mitigated via vibration anomaly forecasting.",
      "contribution": "Explored machine learning feature engineering on simulated time-series vibration data (FFT spectral features, RMS, kurtosis); evaluated anomaly detection and classification models.",
      "technologies": [
        "Python",
        "scikit-learn",
        "SciPy (FFT)",
        "Pandas",
        "Simulated Vibration Data",
        "Azure IoT Edge Concept"
      ],
      "caseStudyUrl": null,
      "repoUrl": null,
      "links": [],
      "color": "#10b981",
      "radius": 11
    },
    {
      "id": "PRJ-ML-003",
      "title": "Applied Data Science & Machine Learning Explorations (Falcon 9 / Stock Forecasting)",
      "category": "project",
      "domain": "ml",
      "status": "learning",
      "period": "2022 \u2013 2023 \u00b7 PRJ-ML-003",
      "desc": "Applied machine learning and exploratory analytics across aerospace recovery economics and financial time-series forecasting.",
      "contribution": "Data wrangling, exploratory data analysis (EDA), feature engineering, classification modeling (Logistic Regression, SVM, Decision Trees), and interactive Plotly/Dash visualization.",
      "technologies": [
        "Python",
        "Pandas",
        "NumPy",
        "scikit-learn",
        "Matplotlib",
        "Seaborn",
        "Folium",
        "Plotly/Dash"
      ],
      "caseStudyUrl": null,
      "repoUrl": "https://github.com/alimulfazalnabil/Python-Projects",
      "links": [
        {
          "text": "View Code \u2197",
          "href": "https://github.com/alimulfazalnabil/Python-Projects"
        }
      ],
      "color": "#10b981",
      "radius": 11
    },
    {
      "id": "PRJ-DATA-001",
      "title": "Azure Enterprise Data & AI Analytics Foundation",
      "category": "project",
      "domain": "data",
      "status": "prototype",
      "period": "2024 \u2013 2025 \u00b7 PRJ-DATA-001",
      "desc": "Scalable cloud data lakehouse architecture for ingesting, transforming, and querying enterprise data with repeatable infrastructure-as-code.",
      "contribution": "Authored Terraform modules for Azure Data Lake Storage Gen2, Azure Data Factory, and Azure Synapse Analytics workspace; created Python data ingestion scripts and simulated time-series pipelines; integrated GitHub Actions CI/CD validation.",
      "technologies": [
        "Terraform (HCL)",
        "Azure Data Factory",
        "Azure Data Lake Storage Gen2",
        "Azure Synapse Analytics",
        "Python",
        "GitHub Actions",
        "Azure Monitor"
      ],
      "caseStudyUrl": null,
      "repoUrl": "https://github.com/alimulfazalnabil/azure-data-ai-analytics",
      "links": [
        {
          "text": "View Code \u2197",
          "href": "https://github.com/alimulfazalnabil/azure-data-ai-analytics"
        }
      ],
      "color": "#f59e0b",
      "radius": 11
    },
    {
      "id": "PRJ-DATA-002",
      "title": "Data Engineering Pipelines & Distributed Processing Monorepo",
      "category": "project",
      "domain": "data",
      "status": "learning",
      "period": "2023 \u2013 2025 \u00b7 PRJ-DATA-002",
      "desc": "Modular reference patterns for distributed transformations, streaming message ingestion, and data warehousing.",
      "contribution": "Implemented practical data engineering pipelines: Spark/PySpark transformations, Kafka/Avro streaming consumers, S3/Redshift integration, PostgreSQL ETL with Pandas/SQLAlchemy, and Airflow DAG concepts.",
      "technologies": [
        "Python",
        "Apache Spark",
        "PySpark",
        "Apache Kafka",
        "Apache Airflow",
        "PostgreSQL",
        "AWS S3/Redshift",
        "Docker"
      ],
      "caseStudyUrl": null,
      "repoUrl": "https://github.com/alimulfazalnabil/Data-Engineering-Projects",
      "links": [
        {
          "text": "View Code \u2197",
          "href": "https://github.com/alimulfazalnabil/Data-Engineering-Projects"
        }
      ],
      "color": "#f59e0b",
      "radius": 11
    },
    {
      "id": "PRJ-DATA-003",
      "title": "Digital-Twin Concept for Industrial Energy Management",
      "category": "project",
      "domain": "data",
      "status": "simulation",
      "period": "2025 \u00b7 PRJ-DATA-003",
      "desc": "Commercial building HVAC and power distribution systems suffer from fragmented monitoring and inability to simulate energy optimization interventions.",
      "contribution": "Researched and authored architectural concept for digital representation of energy distribution using Azure Digital Twins, DTDL asset models, and PLC telemetry mapping.",
      "technologies": [
        "Azure Digital Twins Concept",
        "DTDL",
        "PLC/Network Architecture",
        "Azure Event Hubs"
      ],
      "caseStudyUrl": null,
      "repoUrl": null,
      "links": [],
      "color": "#f59e0b",
      "radius": 11
    },
    {
      "id": "PRJ-CLOUD-001",
      "title": "Azure Terraform Infrastructure CI/CD Foundation",
      "category": "project",
      "domain": "cloud",
      "status": "prototype",
      "period": "2024 \u2013 2025 \u00b7 PRJ-CLOUD-001",
      "desc": "Manual cloud resource provisioning creates configuration drift, compliance gaps, and unrepeatable deployment environments.",
      "contribution": "Authored modular Terraform configurations for core Azure infrastructure (VNet, Subnets, NSGs, Key Vault, App Services, Storage Accounts); created multi-stage GitHub Actions CI/CD pipeline executing terraform fmt, tflint, terraform validate, and automated plan generation.",
      "technologies": [
        "Terraform (HCL)",
        "Azure Resource Manager (ARM)",
        "GitHub Actions",
        "Azure Key Vault",
        "Bash"
      ],
      "caseStudyUrl": "case-studies/azure-terraform-cicd.html",
      "repoUrl": "https://github.com/alimulfazalnabil/azure-terraform-cicd-foundation",
      "links": [
        {
          "text": "Read Case Study \u2192",
          "href": "case-studies/azure-terraform-cicd.html"
        },
        {
          "text": "View Code \u2197",
          "href": "https://github.com/alimulfazalnabil/azure-terraform-cicd-foundation"
        }
      ],
      "color": "#3b82f6",
      "radius": 11
    },
    {
      "id": "PRJ-CLOUD-002",
      "title": "Enterprise Web Portal for PGCB Engineers (Power Grid Company of Bangladesh)",
      "category": "project",
      "domain": "cloud",
      "status": "deployed",
      "period": "2023 \u2013 2024 \u00b7 PRJ-CLOUD-002",
      "desc": "Managing membership, professional records, notifications, and administrative workflows for technical staff across nationwide grid zones.",
      "contribution": "Designed and developed full-stack web application with role-based access control (RBAC), member registry, executive committee directories, notice publication, PostgreSQL schema, Docker containerization, and cloud deployment to Render.",
      "technologies": [
        "Python",
        "PostgreSQL (PLpgSQL)",
        "HTML5/CSS3",
        "JavaScript",
        "Docker",
        "Render PaaS"
      ],
      "caseStudyUrl": null,
      "repoUrl": "https://github.com/alimulfazalnabil/pgcb-org-portal",
      "links": [
        {
          "text": "View Code \u2197",
          "href": "https://github.com/alimulfazalnabil/pgcb-org-portal"
        },
        {
          "text": "Live Portal \u2197",
          "href": "https://pgcb-org-portal.onrender.com/"
        }
      ],
      "color": "#3b82f6",
      "radius": 11
    },
    {
      "id": "PRJ-CLOUD-003",
      "title": "Enterprise Automation, Scraping & Workflow Tooling Suite",
      "category": "project",
      "domain": "cloud",
      "status": "learning",
      "period": "2023 \u2013 2025 \u00b7 PRJ-CLOUD-003",
      "desc": "Repetitive administrative operations, manual report generation, and distributed web data collection consume excessive engineering hours.",
      "contribution": "Developed collection of Python and Shell automation utilities for automated file system management, scheduled web scrapers (BeautifulSoup/Selenium), PDF/Excel report generators, and API health monitors.",
      "technologies": [
        "Python",
        "Shell / Bash",
        "PowerShell",
        "BeautifulSoup",
        "Selenium",
        "Requests"
      ],
      "caseStudyUrl": null,
      "repoUrl": "https://github.com/alimulfazalnabil/Automation-Projects",
      "links": [
        {
          "text": "View Code \u2197",
          "href": "https://github.com/alimulfazalnabil/Automation-Projects"
        }
      ],
      "color": "#3b82f6",
      "radius": 11
    },
    {
      "id": "PRJ-CLOUD-004",
      "title": "Custom High-Performance Compute Workstations & Edge Hardware Engineering",
      "category": "project",
      "domain": "cloud",
      "status": "production",
      "period": "2016 \u2013 Present (10+ Years Practice) \u00b7 PRJ-CLOUD-004",
      "desc": "Commercial desktop PCs throttle and experience hardware memory/VRM failures under continuous deep-learning training and simulation loads.",
      "contribution": "Engineered custom computing workstations and edge inference rigs: component selection (NVIDIA RTX GPUs, AMD Ryzen/Intel Xeon, 64-128GB RAM, NVMe RAID), thermal management (custom liquid cooling, thermal paste), BIOS/UEFI optimization (XMP profiling, PCIe lane bifurcation, VT-x virtualization), PSU load/UPS power quality calculation, and industrial edge integration (NVIDIA Jetson AGX Xavier, Jetson Nano, fanless IPCs, PoE+ networking).",
      "technologies": [
        "NVIDIA RTX / CUDA",
        "NVIDIA Jetson AGX Xavier / Nano",
        "Custom Liquid Cooling",
        "BIOS/UEFI Firmware Tuning",
        "PCIe Bifurcation",
        "NVMe RAID",
        "Industrial IPCs"
      ],
      "caseStudyUrl": null,
      "repoUrl": null,
      "links": [],
      "color": "#3b82f6",
      "radius": 11
    },
    {
      "id": "PRJ-GENAI-001",
      "title": "Enterprise RAG Knowledge Intelligence Platform",
      "category": "project",
      "domain": "genai",
      "status": "prototype",
      "period": "2024 \u2013 2025 \u00b7 PRJ-GENAI-001",
      "desc": "Enterprise LLM applications suffer from hallucinations, lack authoritative corporate document citations, and risk unauthorized cross-department data exposure.",
      "contribution": "Architected end-to-end production-grade Retrieval-Augmented Generation (RAG) platform: hybrid search combining dense semantic embeddings and sparse lexical BM25 merged via Reciprocal Rank Fusion (RRF); cross-encoder reranking; PostgreSQL pgvector storage with metadata tenant filtering; FastAPI backend with streaming responses, conversation history, audit logging, Docker containerization, and automated integration test suite.",
      "technologies": [
        "Python 3",
        "FastAPI",
        "PostgreSQL",
        "pgvector",
        "BM25",
        "Reciprocal Rank Fusion (RRF)",
        "Cross-Encoder Reranker",
        "OpenAI API",
        "Docker",
        "pytest"
      ],
      "caseStudyUrl": "case-studies/enterprise-rag-platform.html",
      "repoUrl": "https://github.com/alimulfazalnabil/LLM-enterprise-rag-knowledge-platform",
      "links": [
        {
          "text": "Read Case Study \u2192",
          "href": "case-studies/enterprise-rag-platform.html"
        },
        {
          "text": "View Code \u2197",
          "href": "https://github.com/alimulfazalnabil/LLM-enterprise-rag-knowledge-platform"
        }
      ],
      "color": "#a855f7",
      "radius": 11
    },
    {
      "id": "PRJ-GENAI-002",
      "title": "MoviSabio \u2014 Intelligent Territorial Management & Traffic Optimization Platform",
      "category": "project",
      "domain": "genai",
      "status": "in-development",
      "period": "2025 \u2013 2026 \u00b7 PRJ-GENAI-002",
      "desc": "Urban arterial congestion causes massive economic losses and excess vehicle emissions due to rigid, uncoordinated traffic signal timings.",
      "contribution": "Co-founder / Technical Architect: authored technical architecture and MVP roadmaps; designed multi-agent optimization combining MAXBAND arterial green-wave coordination with Deep Q-Networks (DQN) and LSTM traffic flow forecasting; prepared simulation pipeline with SUMO and TraCI using BDD100K urban video datasets.",
      "technologies": [
        "Python",
        "Reinforcement Learning (DQN)",
        "MAXBAND Algorithm",
        "SUMO (Simulation of Urban MObility)",
        "TraCI",
        "PyTorch",
        "BDD100K Dataset",
        "Cloud Architecture"
      ],
      "caseStudyUrl": null,
      "repoUrl": null,
      "links": [
        {
          "text": "Live Portal \u2197",
          "href": "https://www.movisabio.com/"
        }
      ],
      "color": "#a855f7",
      "radius": 11
    },
    {
      "id": "PRJ-GENAI-003",
      "title": "Doctor's Co-Pilot AI (Clinical Transcription & Intelligence Assistant)",
      "category": "project",
      "domain": "genai",
      "status": "in-development",
      "period": "July 2026 \u2013 Present \u00b7 PRJ-GENAI-003",
      "desc": "Clinicians spend excessive time manually documenting patient consultations and typing EHR notes, contributing to physician burnout.",
      "contribution": "Designed backend microservice architecture: created FastAPI service with health endpoints, Dockerfile, and CORS middleware; integrated Azure Cognitive Services Speech-to-Text for ambient conversation capture; engineered prompt pipeline with OpenAI/Azure OpenAI and Azure AI Text Analytics for clinical SOAP notes; authored Terraform infrastructure-as-code and GitHub Actions workflows.",
      "technologies": [
        "Python",
        "FastAPI",
        "Docker",
        "Azure Cognitive Services (Speech)",
        "Azure AI Text Analytics",
        "OpenAI API",
        "Pydantic",
        "Terraform",
        "GitHub Actions"
      ],
      "caseStudyUrl": null,
      "repoUrl": null,
      "links": [],
      "color": "#a855f7",
      "radius": 11
    },
    {
      "id": "PRJ-GENAI-004",
      "title": "AI-Assisted Operational Log Analysis & Incident Triage Pipeline",
      "category": "project",
      "domain": "genai",
      "status": "prototype",
      "period": "2024 \u2013 2025 \u00b7 PRJ-GENAI-004",
      "desc": "Incident responders are overwhelmed by noisy, unstructured log streams during critical production system outages.",
      "contribution": "Prototyped intelligent log anomaly summarization pipeline using LangChain, OpenAI embeddings, and Flask/Docker serving, filtering high-severity stack traces and recommending targeted remediation actions.",
      "technologies": [
        "Python",
        "Flask",
        "LangChain",
        "OpenAI API",
        "Docker",
        "AWS ECS Concepts"
      ],
      "caseStudyUrl": null,
      "repoUrl": null,
      "links": [],
      "color": "#a855f7",
      "radius": 11
    },
    {
      "id": "PRJ-ENG-001",
      "title": "SPAROO \u2014 Online Shopping and Dynamic Auctioning Web Architecture",
      "category": "project",
      "domain": "research",
      "status": "research",
      "period": "2021 \u2013 November 2022 \u00b7 PRJ-ENG-001",
      "desc": "Standard e-commerce engines lack integrated, synchronized real-time bidding mechanisms for peer-to-peer auction items alongside traditional retail transactions.",
      "contribution": "Lead author and developer; designed relational database schema for real-time bid increments, user transaction ledgers, product catalog indexing, and session security.",
      "technologies": [
        "Web Technologies (PHP/Python/JavaScript)",
        "MySQL/PostgreSQL",
        "Apache",
        "Bootstrap",
        "HTML5/CSS3"
      ],
      "caseStudyUrl": null,
      "repoUrl": null,
      "links": [],
      "color": "#ec4899",
      "radius": 11
    },
    {
      "id": "PRJ-ENG-002",
      "title": "Autonomous Quadcopter Aerial Concept with ArduPilot & Pixhawk",
      "category": "project",
      "domain": "research",
      "status": "prototype",
      "period": "2019 \u2013 2020 \u00b7 PRJ-ENG-002",
      "desc": "Autonomous aerial survey and remote telemetry gathering in unstructured outdoor environments.",
      "contribution": "Conceptualized UAV airframe layout; configured ArduPilot flight stack parameters; integrated Pixhawk flight controller, GPS, IMU, and 433MHz telemetry transceiver.",
      "technologies": [
        "ArduPilot",
        "Pixhawk Flight Controller",
        "GPS",
        "IMU",
        "Telemetry Radio",
        "Mission Planner"
      ],
      "caseStudyUrl": null,
      "repoUrl": null,
      "links": [],
      "color": "#ec4899",
      "radius": 11
    },
    {
      "id": "PRJ-ENG-003",
      "title": "Industrial & Architectural 2D/3D CAD Design Portfolio",
      "category": "project",
      "domain": "research",
      "status": "research",
      "period": "2017 \u2013 2022 \u00b7 PRJ-ENG-003",
      "desc": "Precise dimensional drafting, mechanical component modeling, and architectural planning for engineering systems.",
      "contribution": "Created over 15 project-based 2D and 3D CAD drawings including mechanical parts, robotic chassis layouts, structural foundations, and electrical wiring schematics.",
      "technologies": [
        "Autodesk AutoCAD",
        "2D Drafting",
        "3D Solid Modeling",
        "Orthographic Projections",
        "Dimensioning"
      ],
      "caseStudyUrl": null,
      "repoUrl": null,
      "links": [],
      "color": "#ec4899",
      "radius": 11
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
      "source": "PRJ-EMB-001",
      "target": "role_cbiu",
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
      "target": "dom_embedded",
      "type": "domain",
      "label": "categorized_by"
    },
    {
      "source": "PRJ-EMB-002",
      "target": "tech_arduino",
      "type": "tech",
      "label": "implements"
    },
    {
      "source": "PRJ-EMB-003",
      "target": "dom_embedded",
      "type": "domain",
      "label": "categorized_by"
    },
    {
      "source": "PRJ-EMB-003",
      "target": "tech_arduino",
      "type": "tech",
      "label": "implements"
    },
    {
      "source": "PRJ-EMB-004",
      "target": "dom_embedded",
      "type": "domain",
      "label": "categorized_by"
    },
    {
      "source": "PRJ-EMB-004",
      "target": "role_energy_it",
      "type": "role",
      "label": "developed_during"
    },
    {
      "source": "PRJ-EMB-004",
      "target": "tech_arduino",
      "type": "tech",
      "label": "implements"
    },
    {
      "source": "PRJ-EMB-005",
      "target": "dom_embedded",
      "type": "domain",
      "label": "categorized_by"
    },
    {
      "source": "PRJ-EMB-005",
      "target": "tech_arduino",
      "type": "tech",
      "label": "implements"
    },
    {
      "source": "PRJ-EMB-006",
      "target": "dom_embedded",
      "type": "domain",
      "label": "categorized_by"
    },
    {
      "source": "PRJ-EMB-006",
      "target": "tech_arduino",
      "type": "tech",
      "label": "implements"
    },
    {
      "source": "PRJ-CV-001",
      "target": "dom_vision",
      "type": "domain",
      "label": "categorized_by"
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
      "source": "PRJ-CV-001",
      "target": "tech_rag",
      "type": "tech",
      "label": "implements"
    },
    {
      "source": "PRJ-CV-002",
      "target": "dom_vision",
      "type": "domain",
      "label": "categorized_by"
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
      "target": "dom_vision",
      "type": "domain",
      "label": "categorized_by"
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
      "target": "dom_vision",
      "type": "domain",
      "label": "categorized_by"
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
      "source": "PRJ-CV-004",
      "target": "tech_ros",
      "type": "tech",
      "label": "implements"
    },
    {
      "source": "PRJ-ML-001",
      "target": "dom_ml",
      "type": "domain",
      "label": "categorized_by"
    },
    {
      "source": "PRJ-ML-001",
      "target": "role_redi",
      "type": "role",
      "label": "developed_during"
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
      "target": "tech_pgvector",
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
      "source": "PRJ-ML-002",
      "target": "dom_ml",
      "type": "domain",
      "label": "categorized_by"
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
      "source": "PRJ-ML-003",
      "target": "dom_ml",
      "type": "domain",
      "label": "categorized_by"
    },
    {
      "source": "PRJ-ML-003",
      "target": "tech_python",
      "type": "tech",
      "label": "implements"
    },
    {
      "source": "PRJ-ML-003",
      "target": "tech_ros",
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
      "source": "PRJ-DATA-001",
      "target": "dom_data",
      "type": "domain",
      "label": "categorized_by"
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
      "target": "tech_rag",
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
      "target": "dom_data",
      "type": "domain",
      "label": "categorized_by"
    },
    {
      "source": "PRJ-DATA-002",
      "target": "role_energy_cloud",
      "type": "role",
      "label": "developed_during"
    },
    {
      "source": "PRJ-DATA-002",
      "target": "tech_docker",
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
      "source": "PRJ-DATA-003",
      "target": "dom_data",
      "type": "domain",
      "label": "categorized_by"
    },
    {
      "source": "PRJ-DATA-003",
      "target": "role_movisabio",
      "type": "role",
      "label": "developed_during"
    },
    {
      "source": "PRJ-DATA-003",
      "target": "tech_azure",
      "type": "tech",
      "label": "implements"
    },
    {
      "source": "PRJ-DATA-003",
      "target": "tech_rag",
      "type": "tech",
      "label": "implements"
    },
    {
      "source": "PRJ-CLOUD-001",
      "target": "dom_cloud",
      "type": "domain",
      "label": "categorized_by"
    },
    {
      "source": "PRJ-CLOUD-001",
      "target": "role_energy_cloud",
      "type": "role",
      "label": "developed_during"
    },
    {
      "source": "PRJ-CLOUD-001",
      "target": "tech_azure",
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
      "source": "PRJ-CLOUD-002",
      "target": "dom_cloud",
      "type": "domain",
      "label": "categorized_by"
    },
    {
      "source": "PRJ-CLOUD-002",
      "target": "role_energy_cloud",
      "type": "role",
      "label": "developed_during"
    },
    {
      "source": "PRJ-CLOUD-002",
      "target": "tech_docker",
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
      "source": "PRJ-CLOUD-002",
      "target": "tech_python",
      "type": "tech",
      "label": "implements"
    },
    {
      "source": "PRJ-CLOUD-002",
      "target": "tech_ros",
      "type": "tech",
      "label": "implements"
    },
    {
      "source": "PRJ-CLOUD-003",
      "target": "dom_cloud",
      "type": "domain",
      "label": "categorized_by"
    },
    {
      "source": "PRJ-CLOUD-003",
      "target": "tech_python",
      "type": "tech",
      "label": "implements"
    },
    {
      "source": "PRJ-CLOUD-004",
      "target": "dom_cloud",
      "type": "domain",
      "label": "categorized_by"
    },
    {
      "source": "PRJ-GENAI-001",
      "target": "dom_genai",
      "type": "domain",
      "label": "categorized_by"
    },
    {
      "source": "PRJ-GENAI-001",
      "target": "tech_docker",
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
      "source": "PRJ-GENAI-002",
      "target": "dom_genai",
      "type": "domain",
      "label": "categorized_by"
    },
    {
      "source": "PRJ-GENAI-002",
      "target": "role_movisabio",
      "type": "role",
      "label": "developed_during"
    },
    {
      "source": "PRJ-GENAI-002",
      "target": "tech_python",
      "type": "tech",
      "label": "implements"
    },
    {
      "source": "PRJ-GENAI-002",
      "target": "tech_sumo",
      "type": "tech",
      "label": "implements"
    },
    {
      "source": "PRJ-GENAI-003",
      "target": "dom_genai",
      "type": "domain",
      "label": "categorized_by"
    },
    {
      "source": "PRJ-GENAI-003",
      "target": "tech_azure",
      "type": "tech",
      "label": "implements"
    },
    {
      "source": "PRJ-GENAI-003",
      "target": "tech_docker",
      "type": "tech",
      "label": "implements"
    },
    {
      "source": "PRJ-GENAI-003",
      "target": "tech_fastapi",
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
      "source": "PRJ-GENAI-004",
      "target": "dom_genai",
      "type": "domain",
      "label": "categorized_by"
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
      "source": "PRJ-ENG-001",
      "target": "dom_research",
      "type": "domain",
      "label": "categorized_by"
    },
    {
      "source": "PRJ-ENG-001",
      "target": "tech_pgvector",
      "type": "tech",
      "label": "implements"
    },
    {
      "source": "PRJ-ENG-001",
      "target": "tech_python",
      "type": "tech",
      "label": "implements"
    },
    {
      "source": "PRJ-ENG-002",
      "target": "dom_research",
      "type": "domain",
      "label": "categorized_by"
    },
    {
      "source": "PRJ-ENG-003",
      "target": "dom_research",
      "type": "domain",
      "label": "categorized_by"
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
      angle = (dIdx / 7) * 2 * Math.PI - Math.PI / 2;
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
    intro.textContent = 'This hierarchical tree lists all 7 verified domains, career milestone roles, and technical implementations with their connected technologies for screen readers and keyboard users.';
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
