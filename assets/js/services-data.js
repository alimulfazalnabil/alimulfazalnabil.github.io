/**
 * Professional Services Catalog Data & Interactive Filter Engine
 * Contains 9 comprehensive domains, 85+ specific services, key deliverables,
 * typical use cases, technologies, and action dispatchers for the Estimator and Proposal Generator.
 */
(() => {
  const SERVICES_DATA = [
    {
      categoryId: "web-dev",
      categoryName: "Web Development",
      categoryIcon: "🌐",
      categoryDesc: "Production-grade, high-performance web applications, portals, and responsive websites.",
      services: [
        {
          id: "web-fullstack",
          title: "Full-Stack Web Application Development",
          type: "Implementation",
          description: "End-to-end web applications with modern frontend architectures, secure REST/GraphQL APIs, relational or document databases, and scalable cloud hosting.",
          deliverables: ["Responsive frontend UI", "Modular backend API", "Database schema & migrations", "Automated deployment setup"],
          useCases: ["Custom business platforms", "SaaS MVPs", "Client portal systems"],
          tech: ["Python / FastAPI / Django", "TypeScript", "React / Vue / Vanilla ES6", "PostgreSQL", "Docker"],
          estimatorType: "Full-stack web application"
        },
        {
          id: "web-corporate",
          title: "Business & Corporate Websites",
          type: "Implementation",
          description: "High-conversion corporate websites engineered for optimal page load speed, SEO performance, brand authority, and seamless lead acquisition.",
          deliverables: ["Custom responsive design", "SEO meta architecture", "Contact/inquiry funnels", "Fast static/SSR build"],
          useCases: ["Corporate headquarters", "Consulting firms", "B2B service providers"],
          tech: ["HTML5/CSS3", "Vanilla JS", "Tailwind/Modern CSS", "Static Site Generators", "Cloudflare"],
          estimatorType: "Business website"
        },
        {
          id: "web-portfolio",
          title: "Portfolio & Personal Branding Platforms",
          type: "Implementation",
          description: "Bespoke digital portfolios and personal branding hubs with interactive case studies, knowledge graphs, and proof-of-work showcases.",
          deliverables: ["Custom narrative design", "Project inventory filter", "Interactive twin/graph modules", "Accessible mobile layout"],
          useCases: ["Engineers & researchers", "Executives & consultants", "Creative professionals"],
          tech: ["HTML5", "CSS Grid/Flexbox", "Vanilla JS", "GitHub Pages", "Custom SVG"],
          estimatorType: "Business website"
        },
        {
          id: "web-ecommerce",
          title: "E-Commerce & Digital Storefronts",
          type: "Implementation",
          description: "Secure digital storefronts with structured product catalogs, shopping carts, automated checkout flows, inventory tracking, and payment gateways.",
          deliverables: ["Product catalog & search", "Cart & checkout flow", "Payment gateway integration (Stripe/SSLCommerz)", "Order management dashboard"],
          useCases: ["Direct-to-consumer retail", "Digital product sales", "Specialty merchandise stores"],
          tech: ["Node.js / Python", "PostgreSQL / SQLite", "Stripe API", "Redis", "Tailwind CSS"],
          estimatorType: "E-commerce or marketplace"
        },
        {
          id: "web-marketplace",
          title: "Multi-Sided Marketplace Platforms",
          type: "Implementation",
          description: "Complex multi-vendor platforms connecting buyers and sellers with commission routing, vendor stores, and escrow or payout logic.",
          deliverables: ["Buyer & seller account portals", "Vendor product management", "Escrow & payout routing", "Admin commission console"],
          useCases: ["Services marketplaces", "B2B wholesale trading", "Rental & equipment exchanges"],
          tech: ["FastAPI", "React / Next.js", "PostgreSQL", "Redis", "Stripe Connect"],
          estimatorType: "E-commerce or marketplace"
        },
        {
          id: "web-fundraising",
          title: "Fundraising & Donation Platforms",
          type: "Implementation",
          description: "Transparent fundraising portals with tier-based donations, recurring pledge handling, campaign progress tracking, and donor receipts.",
          deliverables: ["Campaign landing pages", "Recurring donation engine", "Automated tax/donor receipts", "Real-time funding progress meters"],
          useCases: ["Non-profits & NGOs", "Community initiatives", "Institutional endowments"],
          tech: ["Python / Node.js", "PostgreSQL", "Stripe / PayPal", "Chart.js"],
          estimatorType: "Business website"
        },
        {
          id: "web-booking",
          title: "Booking & Appointment Scheduling Systems",
          type: "Implementation",
          description: "Interactive calendar booking workflows with real-time slot availability, time-zone normalization, automated email/SMS reminders, and calendar syncing.",
          deliverables: ["Time-slot picker widget", "Google/Outlook calendar sync", "Notification dispatchers", "Admin schedule console"],
          useCases: ["Consulting practices", "Healthcare clinics", "Training & workshop providers"],
          tech: ["FastAPI", "PostgreSQL", "Google Calendar API", "Twilio / SendGrid"],
          estimatorType: "Custom software"
        },
        {
          id: "web-dashboards",
          title: "Custom Dashboards & Internal Admin Consoles",
          type: "Implementation",
          description: "Data-dense operational dashboards and role-based admin portals for visualizing real-time metrics, executing CRUD operations, and exporting reports.",
          deliverables: ["Interactive charting widgets", "Role-based access tables", "CSV/PDF report exporters", "Real-time telemetry streams"],
          useCases: ["Operations oversight", "Fleet monitoring", "Executive KPI tracking"],
          tech: ["React / Vue / Vanilla JS", "FastAPI / Node.js", "PostgreSQL", "ApexCharts / Chart.js"],
          estimatorType: "Full-stack web application"
        },
        {
          id: "web-pwa",
          title: "Progressive Web Apps (PWAs)",
          type: "Implementation",
          description: "Installable web applications with offline asset caching, service workers, background sync, and native-like mobile user experiences.",
          deliverables: ["Service worker caching layer", "Web App Manifest", "Offline data sync", "Lighthouse PWA compliance"],
          useCases: ["Field operations tools", "Mobile retail catalogs", "Offline inspection forms"],
          tech: ["Vanilla JS / Workbox", "IndexedDB", "CacheStorage API", "HTML5"],
          estimatorType: "Full-stack web application"
        },
        {
          id: "web-modernize",
          title: "Website Modernization & Performance Redesign",
          type: "Implementation",
          description: "Refactoring legacy, slow, or monolithic websites into modern, ultra-responsive, mobile-first architectures with top-tier Core Web Vitals scores.",
          deliverables: ["CSS/JS payload optimization", "Responsive layout overhaul", "Accessibility (a11y) remediation", "Core Web Vitals tuning"],
          useCases: ["Legacy corporate portals", "High-traffic sites with slow LCP", "Non-responsive sites"],
          tech: ["Modern CSS", "Vanilla JavaScript", "Lighthouse", "Web Vitals API"],
          estimatorType: "Business website"
        },
        {
          id: "web-integrations",
          title: "API Development & Third-Party Integrations",
          type: "Implementation",
          description: "Custom REST and webhook integrations connecting your web platforms with CRM, ERP, payment, messaging, and cloud APIs.",
          deliverables: ["OpenAPI / Swagger specifications", "Webhook listener endpoints", "Rate-limiting & retry queues", "Unit & integration tests"],
          useCases: ["HubSpot/Salesforce syncing", "Custom payment webhooks", "Logistics tracking integration"],
          tech: ["FastAPI", "Python AsyncIO", "Redis", "Celery", "PostgreSQL"],
          estimatorType: "Custom software"
        },
        {
          id: "web-maintenance",
          title: "Website Maintenance & Technical SLA Support",
          type: "Maintenance",
          description: "Continuous health monitoring, security patch application, SSL certificate renewal, uptime verification, and content maintenance.",
          deliverables: ["Monthly dependency updates", "Uptime monitoring alerts", "Daily automated backups", "Emergency break-fix support"],
          useCases: ["Production business websites", "Mission-critical client portals"],
          tech: ["Azure Monitor", "GitHub Actions", "Uptime Kuma", "Linux bash"],
          estimatorType: "Business website"
        }
      ]
    },
    {
      categoryId: "business-software",
      categoryName: "Business Management Software",
      categoryIcon: "📊",
      categoryDesc: "Tailored operational software streamlining inventory, billing, resource management, and administrative control.",
      services: [
        {
          id: "biz-pos",
          title: "Point of Sale (POS) Systems",
          type: "Implementation",
          description: "Fast, responsive retail and service checkout interfaces with receipt printing, barcode scanning, shift registers, and daily closing reports.",
          deliverables: ["Cashier touch-optimized UI", "Receipt layout generator", "Cash drawer / scanner hooks", "Daily sales audit report"],
          useCases: ["Retail storefronts", "Cafes and quick-service food", "Specialty equipment shops"],
          tech: ["FastAPI / Python", "Electron / Web UI", "SQLite / PostgreSQL", "ESC/POS printer protocols"],
          estimatorType: "POS or inventory management system"
        },
        {
          id: "biz-inventory",
          title: "Inventory & Stock Management Software",
          type: "Implementation",
          description: "Multi-warehouse stock tracking systems with low-stock threshold alerts, SKU barcoding, batch expiration management, and supplier PO tracking.",
          deliverables: ["SKU catalog & stock ledger", "Low-stock automated alerts", "Transfer & adjustment logs", "Supplier purchase order flows"],
          useCases: ["Manufacturing warehouses", "E-commerce distributors", "Industrial spare parts depots"],
          tech: ["PostgreSQL", "FastAPI", "Redis Cache", "Docker", "Tailwind CSS"],
          estimatorType: "POS or inventory management system"
        },
        {
          id: "biz-billing",
          title: "Billing & Invoicing Automation Software",
          type: "Implementation",
          description: "Automated recurring billing, customized PDF invoice generation, payment reconciliation, aging accounts receivable tracking, and tax handling.",
          deliverables: ["PDF invoice generator", "Recurring billing scheduler", "Payment status tracker", "Tax / VAT compliance breakdown"],
          useCases: ["Professional service agencies", "Wholesale distributors", "SaaS subscription providers"],
          tech: ["Python", "WeasyPrint / ReportLab", "PostgreSQL", "FastAPI", "Stripe API"],
          estimatorType: "POS or inventory management system"
        },
        {
          id: "biz-crm",
          title: "Customer Relationship Management (CRM) Systems",
          type: "Implementation",
          description: "Customized sales pipeline tracking, customer communication history, automated follow-up reminders, and deal probability forecasting.",
          deliverables: ["Kanban deal pipeline", "Contact & lead directory", "Interaction log & notes", "Sales performance analytics"],
          useCases: ["B2B sales teams", "Real estate consultancies", "Corporate advisory firms"],
          tech: ["Python / FastAPI", "PostgreSQL", "React / Vanilla JS", "Docker"],
          estimatorType: "CRM or ERP application"
        },
        {
          id: "biz-erp",
          title: "Modular Enterprise Resource Planning (ERP)",
          type: "Implementation",
          description: "Integrated modules connecting procurement, finance, operations, and human resources into a unified, audit-compliant data repository.",
          deliverables: ["Multi-department modules", "Unified master data schema", "Audit-trail logging", "Custom financial balance views"],
          useCases: ["Growing medium enterprises", "Industrial fabricators", "Supply-chain operators"],
          tech: ["PostgreSQL", "FastAPI / Django", "Redis", "Docker", "Azure Cloud"],
          estimatorType: "CRM or ERP application"
        },
        {
          id: "biz-attendance",
          title: "Employee, Payroll & Attendance Systems",
          type: "Implementation",
          description: "Biometric and digital attendance tracking, shift scheduling, leave approval hierarchies, overtime calculation, and payroll breakdown.",
          deliverables: ["Attendance logging portal", "Shift schedule calendar", "Leave request workflows", "Payroll export summary"],
          useCases: ["Corporate offices", "Educational institutes", "Field operations teams"],
          tech: ["Python", "PostgreSQL", "REST APIs", "FastAPI", "HTML5"],
          estimatorType: "CRM or ERP application"
        },
        {
          id: "biz-education",
          title: "School, University & Training Management Systems",
          type: "Implementation",
          description: "Student enrollment, course curriculum scheduling, assignment submission, grading portals, and tuition fee billing tracking.",
          deliverables: ["Student / teacher portals", "Course syllabus organizer", "Gradebook module", "Fee collection tracking"],
          useCases: ["Private academies", "Vocational training centers", "Higher education departments"],
          tech: ["Python", "FastAPI", "PostgreSQL", "Docker", "Tailwind CSS"],
          estimatorType: "CRM or ERP application"
        },
        {
          id: "biz-subscription",
          title: "Membership & Subscription Management",
          type: "Implementation",
          description: "Automated recurring subscriber tiers, member portal access, digital membership cards, expiration tracking, and self-service renewals.",
          deliverables: ["Tier gating engine", "Subscriber management console", "Automated renewal emails", "Self-service billing portal"],
          useCases: ["Professional associations", "Gyms & fitness clubs", "Digital media publications"],
          tech: ["Python", "Stripe Billing", "PostgreSQL", "FastAPI"],
          estimatorType: "CRM or ERP application"
        },
        {
          id: "biz-analytics",
          title: "Reporting & Business Analytics Dashboards",
          type: "Implementation",
          description: "Consolidated operational intelligence dashboards visualizing gross margins, revenue projections, operational bottlenecks, and customer cohorts.",
          deliverables: ["Executive KPI board", "Cohort retention tables", "Interactive filter controls", "Automated weekly email summaries"],
          useCases: ["Executive leadership", "Operations managers", "Board reporting"],
          tech: ["PostgreSQL", "FastAPI", "Chart.js / ApexCharts", "Pandas", "Redis"],
          estimatorType: "Data engineering and analytics"
        },
        {
          id: "biz-rbac",
          title: "Role-Based Administration & Security Controls",
          type: "Implementation",
          description: "Granular permissions management, multi-tenant role assignments, multi-factor authentication, and tamper-evident audit logging.",
          deliverables: ["RBAC permission matrix", "Audit log viewer", "MFA (TOTP) enforcement", "Session management engine"],
          useCases: ["Enterprise software", "Regulated data environments", "Multi-tier organizations"],
          tech: ["FastAPI", "JWT / OAuth2", "PostgreSQL", "Redis"],
          estimatorType: "Custom software"
        }
      ]
    },
    {
      categoryId: "custom-software",
      categoryName: "Custom Software Development",
      categoryIcon: "💻",
      categoryDesc: "Engineered-to-order software solutions tailored strictly to unique organizational workflows.",
      services: [
        {
          id: "custom-bizapp",
          title: "Custom Business Applications",
          type: "Implementation",
          description: "Purpose-built software designed around your specific operating model, removing the constraints and recurring licensing fees of off-the-shelf software.",
          deliverables: ["Tailored application architecture", "Dedicated relational database", "Custom role workflows", "User documentation"],
          useCases: ["Unique business workflows", "Proprietary service delivery", "High-volume processing"],
          tech: ["Python 3.12+", "FastAPI", "PostgreSQL", "Docker", "Azure"],
          estimatorType: "Custom software"
        },
        {
          id: "custom-workflow",
          title: "Workflow & Operations Management Software",
          type: "Implementation",
          description: "Digital transformation of paper or spreadsheet processes into multi-step approval workflows with audit trails and automated alerts.",
          deliverables: ["State-machine workflow engine", "Approval routing queues", "Audit trail tracking", "Email/Slack status triggers"],
          useCases: ["Procurement approvals", "Quality assurance handoffs", "Field ticket processing"],
          tech: ["Python", "FastAPI", "PostgreSQL", "Celery / Redis"],
          estimatorType: "Custom software"
        },
        {
          id: "custom-internal",
          title: "Internal Operations & Company Tools",
          type: "Implementation",
          description: "High-leverage internal tools that automate engineering tasks, synchronize disparate databases, and empower support teams.",
          deliverables: ["Support admin portal", "Bulk data manipulation tools", "Internal utility scripts", "Automated reconciliation"],
          useCases: ["Customer support teams", "Data verification squads", "Operations dispatchers"],
          tech: ["Python", "FastAPI", "PostgreSQL", "Tailwind CSS"],
          estimatorType: "Custom software"
        },
        {
          id: "custom-dbapps",
          title: "Database-Driven Business Applications",
          type: "Implementation",
          description: "Robust relational database systems engineered for ACID compliance, sub-second complex queries, and multi-tenant data isolation.",
          deliverables: ["Normalized relational schema", "Optimized index strategy", "Stored procedures & views", "Backup & recovery plan"],
          useCases: ["Asset management", "High-volume transaction tracking", "Compliance archives"],
          tech: ["PostgreSQL", "SQL Server", "SQLite", "Python", "SQLAlchemy"],
          estimatorType: "Custom software"
        },
        {
          id: "custom-restapi",
          title: "REST & High-Performance API Development",
          type: "Implementation",
          description: "Asynchronous, typed microservice APIs built with FastAPI, adhering strictly to OpenAPI 3.1 standards with connection pooling and caching.",
          deliverables: ["OpenAPI documentation UI", "Token authentication", "Rate-limiting middleware", "Automated Pytest suite"],
          useCases: ["Backend for mobile apps", "Microservice federation", "Partner integration APIs"],
          tech: ["FastAPI", "Pydantic", "Python AsyncIO", "Redis", "Docker"],
          estimatorType: "Custom software"
        },
        {
          id: "custom-auth",
          title: "Authentication & Authorization Systems",
          type: "Implementation",
          description: "Zero-trust identity systems featuring OAuth2/OIDC, JWT token rotations, password hashing, SSO integration, and RBAC.",
          deliverables: ["JWT auth microservice", "Password hashing (Argon2/Bcrypt)", "SSO / Social login hooks", "Session revocation store"],
          useCases: ["SaaS platforms", "Enterprise intranets", "Multi-client portals"],
          tech: ["FastAPI", "OAuth2 / OIDC", "Redis", "PostgreSQL"],
          estimatorType: "Custom software"
        },
        {
          id: "custom-docauto",
          title: "Document & PDF Report Automation",
          type: "Implementation",
          description: "Automated generation of pixel-perfect legal contracts, technical certificates, financial summaries, and bulk PDF mailouts.",
          deliverables: ["HTML-to-PDF template pipeline", "Dynamic asset injection", "Bulk generation queues", "Document archival storage"],
          useCases: ["Contract generation", "Official certificates", "Automated billing statements"],
          tech: ["Python", "WeasyPrint / Jinja2", "ReportLab", "Azure Blob"],
          estimatorType: "Workflow automation"
        },
        {
          id: "custom-migration",
          title: "Data Migration & Legacy System Integration",
          type: "Implementation",
          description: "Safe extraction, transformation, deduplication, and migration of legacy datasets into modern relational databases with zero data loss.",
          deliverables: ["Schema mapping specification", "ETL migration scripts", "Data reconciliation verification", "Rollback snapshot strategy"],
          useCases: ["Upgrading legacy ERP/CRM", "Merging business databases", "Cloud database migration"],
          tech: ["Python", "Pandas", "PostgreSQL", "SQLAlchemy", "Bash"],
          estimatorType: "Data engineering and analytics"
        },
        {
          id: "custom-modernize",
          title: "Legacy Software Modernization & Refactoring",
          type: "Implementation",
          description: "Auditing, refactoring, and containerizing outdated codebases to eliminate tech debt, improve execution speed, and enhance security.",
          deliverables: ["Architecture audit report", "Refactored modular codebase", "Dockerized deployment pipeline", "Automated regression tests"],
          useCases: ["Monolithic legacy code", "Unmaintained internal apps", "Performance bottleneck fixes"],
          tech: ["Python", "FastAPI", "Docker", "Git", "PostgreSQL"],
          estimatorType: "Custom software"
        },
        {
          id: "custom-mvp",
          title: "Software Prototypes & Rapid MVPs",
          type: "Prototype",
          description: "Accelerated development of functional, testable minimum viable products to validate market demand, demo to investors, or test hypotheses.",
          deliverables: ["Functional core MVP", "Interactive demo deployment", "User feedback capture points", "Production roadmap RFC"],
          useCases: ["Startup founders", "Innovation lab experiments", "Pre-seed funding demos"],
          tech: ["FastAPI", "PostgreSQL / SQLite", "HTML5/Modern CSS", "Docker"],
          estimatorType: "Custom software"
        }
      ]
    },
    {
      categoryId: "ai-ml",
      categoryName: "Artificial Intelligence & Machine Learning",
      categoryIcon: "🧠",
      categoryDesc: "Production-grade GenAI, Enterprise RAG, LLM agent orchestration, and applied machine learning models.",
      services: [
        {
          id: "ai-agents",
          title: "Autonomous AI Agent Development",
          type: "Implementation",
          description: "State-machine agentic workflows capable of multi-step reasoning, external tool execution, structured output parsing, and deterministic guardrails.",
          deliverables: ["Deterministic tool execution harness", "Multi-agent orchestration state", "Structured JSON output schema", "Hallucination evaluation tests"],
          useCases: ["Automated customer triage", "Financial data analysis agents", "Research automation"],
          tech: ["Python", "LangChain / LlamaIndex", "FastAPI", "OpenAI / Claude API", "Pydantic"],
          estimatorType: "AI chatbot or agent"
        },
        {
          id: "ai-assistants",
          title: "AI-Powered Website & Customer Assistants",
          type: "Implementation",
          description: "Intelligent conversational chat interfaces embedded directly into websites, answering inquiries using company documentation with zero hallucinations.",
          deliverables: ["Embeddable chat widget", "Knowledge base grounding engine", "Human escalation triggers", "Conversation analytics dashboard"],
          useCases: ["Lead capture assistants", "E-commerce pre-sale guidance", "24/7 technical support"],
          tech: ["Vanilla JS Widget", "FastAPI", "PostgreSQL / pgvector", "Hugging Face"],
          estimatorType: "AI chatbot or agent"
        },
        {
          id: "ai-rag",
          title: "Enterprise Retrieval-Augmented Generation (RAG)",
          type: "Implementation",
          description: "Production knowledge retrieval platforms fusing dense embeddings (pgvector) with sparse lexical search (BM25) via Reciprocal Rank Fusion (RRF) and attribution checks.",
          deliverables: ["Document ingestion & chunking pipeline", "Hybrid vector search index", "RRF rank fusion & cross-encoder", "Citation verification guardrails"],
          useCases: ["Internal knowledge bases", "Technical policy search", "Regulatory legal search"],
          tech: ["Python", "FastAPI", "PostgreSQL / pgvector", "sentence-transformers", "Docker"],
          estimatorType: "RAG or knowledge platform"
        },
        {
          id: "ai-kbchat",
          title: "Knowledge-Base Chatbots for Teams",
          type: "Implementation",
          description: "Private, enterprise-grounded conversational assistants indexed over internal PDF manuals, SOP documents, and Confluence wikis.",
          deliverables: ["Document upload & indexing UI", "Tenant-isolated vector collections", "Source attribution citations", "Role-based access permissions"],
          useCases: ["HR policy queries", "Standard Operating Procedure search", "Employee onboarding bots"],
          tech: ["FastAPI", "pgvector", "BM25", "Docker", "Azure"],
          estimatorType: "RAG or knowledge platform"
        },
        {
          id: "ai-docqa",
          title: "Document Search & Question-Answering Systems",
          type: "Implementation",
          description: "Semantic search engines extracting targeted answers, numerical data, and summary tables from multi-thousand-page technical catalogs.",
          deliverables: ["OCR & layout extraction pipeline", "Semantic vector search engine", "Direct snippet citation viewer", "Batch document queries"],
          useCases: ["Engineering schematics QA", "Clinical research document search", "Financial earnings report search"],
          tech: ["Python", "Tesseract / LayoutParser", "FastAPI", "pgvector"],
          estimatorType: "RAG or knowledge platform"
        },
        {
          id: "ai-llm-integ",
          title: "Large Language Model (LLM) Integrations",
          type: "Implementation",
          description: "Seamlessly connecting commercial and open-weights LLMs (OpenAI, Claude, Llama 3, Mistral) into existing enterprise backends with caching and token budget caps.",
          deliverables: ["LLM gateway microservice", "Prompt template management", "Redis token cache", "Cost & latency monitoring"],
          useCases: ["Automated text synthesis", "Email reply drafting", "Data summarization"],
          tech: ["FastAPI", "LiteLLM / OpenAI SDK", "Redis", "Prometheus"],
          estimatorType: "AI chatbot or agent"
        },
        {
          id: "ai-ml-pred",
          title: "Applied Machine Learning Prediction Systems",
          type: "Implementation",
          description: "Supervised and unsupervised ML models solving classification, risk scoring, churn prediction, and regression problems in production.",
          deliverables: ["EDA & data preprocessing pipeline", "Trained Scikit-learn/XGBoost model", "SHAP explainability reports", "Dockerized FastAPI inference API"],
          useCases: ["Clinical risk scoring", "Customer churn prediction", "Credit risk modeling"],
          tech: ["Python", "Scikit-Learn", "XGBoost", "FastAPI", "SHAP", "Docker"],
          estimatorType: "Machine-learning solution"
        },
        {
          id: "ai-forecasting",
          title: "Data Analysis & Time-Series Forecasting",
          type: "Implementation",
          description: "Statistical modeling and time-series forecasting predicting sales demand, inventory depletion rates, energy usage, and traffic volume trends.",
          deliverables: ["Time-series model (ARIMA/Prophet)", "Feature engineering pipeline", "Confidence interval forecasts", "Automated weekly projections"],
          useCases: ["Inventory demand forecasting", "Utility load prediction", "Retail sales projections"],
          tech: ["Python", "Statsmodels", "Prophet", "Pandas", "Matplotlib"],
          estimatorType: "Machine-learning solution"
        },
        {
          id: "ai-cv-perception",
          title: "Computer Vision & Object Detection Systems",
          type: "Implementation",
          description: "Perception pipelines utilizing OpenCV and YOLO for real-time video stream inspection, bounding-box tracking, defect identification, and counting.",
          deliverables: ["Trained YOLOv8/v10 detector", "Real-time video frame pipeline", "Object counter & telemetry log", "Annotation & test suite"],
          useCases: ["Factory defect inspection", "Retail foot-traffic counting", "Roadway vehicle detection"],
          tech: ["Python", "OpenCV", "PyTorch / YOLO", "NumPy", "CUDA"],
          estimatorType: "IoT or computer vision prototype"
        },
        {
          id: "ai-ocr",
          title: "Image Processing & Document OCR Workflows",
          type: "Implementation",
          description: "Automated ingestion and character recognition pipeline converting scanned receipts, bills of lading, and identity documents into structured JSON.",
          deliverables: ["Adaptive image binarization", "OCR text extraction pipeline", "RegEx / LLM entity extraction", "Export to PostgreSQL / CSV"],
          useCases: ["Invoice digitization", "Paper form automation", "Identity document parsing"],
          tech: ["Python", "Tesseract OCR", "OpenCV", "Pydantic"],
          estimatorType: "Workflow automation"
        },
        {
          id: "ai-recommender",
          title: "Recommendation & Matching Engines",
          type: "Implementation",
          description: "Collaborative and content-based recommendation systems suggesting relevant items, articles, or services based on user behavioral embeddings.",
          deliverables: ["Embedding similarity matrix", "Candidate generation pipeline", "Real-time ranking microservice", "Offline evaluation metrics"],
          useCases: ["E-commerce product suggestions", "Content publishing recommendations", "Matching portals"],
          tech: ["Python", "Scikit-Learn", "pgvector", "FastAPI"],
          estimatorType: "Machine-learning solution"
        },
        {
          id: "ai-decision",
          title: "AI-Powered Decision Support & Reporting",
          type: "Implementation",
          description: "Combining predictive ML models with explainability layers (SHAP) to assist human decision-makers with quantified risk ratings.",
          deliverables: ["Decision scorecard UI", "SHAP feature attribution view", "Confidence scoring indicator", "Audit export log"],
          useCases: ["Healthcare clinical reviews", "Loan underwriter support", "Operational triage"],
          tech: ["Python", "FastAPI", "SHAP", "ApexCharts", "PostgreSQL"],
          estimatorType: "Machine-learning solution"
        }
      ]
    },
    {
      categoryId: "automation",
      categoryName: "Automation & Productivity",
      categoryIcon: "⚡",
      categoryDesc: "Eliminating manual, repetitive business processes through robust Python scripting, API integrations, and workflow bots.",
      services: [
        {
          id: "auto-bpa",
          title: "Business Process Automation (BPA)",
          type: "Implementation",
          description: "Mapping end-to-end human administrative bottlenecks and replacing them with resilient, unattended automation workflows.",
          deliverables: ["Process mapping specification", "Automated execution engine", "Error alert webhook", "Monthly time-saved audit"],
          useCases: ["Cross-departmental approvals", "Customer onboarding flows", "Order fulfillment automation"],
          tech: ["Python", "Celery", "Redis", "REST APIs", "Docker"],
          estimatorType: "Workflow automation"
        },
        {
          id: "auto-python",
          title: "Custom Python Automation Scripts",
          type: "Implementation",
          description: "Tailored CLI scripts and background daemons automating file conversions, data sanitization, FTP synchronization, and batch computations.",
          deliverables: ["Tested Python 3.12 script", "Configurable environment file", "Cron/Task Scheduler setup", "Execution log rotating system"],
          useCases: ["Batch file renaming/sorting", "Data parsing & cleanup", "Daily database backups"],
          tech: ["Python", "Bash", "Cron", "PowerShell"],
          estimatorType: "Workflow automation"
        },
        {
          id: "auto-webdata",
          title: "Web & Data Workflow Automation",
          type: "Implementation",
          description: "Automated browser interaction, headless data collection, and multi-step web scraping pipelines adhering strictly to rate limits.",
          deliverables: ["Headless browser bot", "Structured data parser", "Proxy & rate-limit handler", "Automated CSV/DB export"],
          useCases: ["Competitor price monitoring", "Public regulatory tracking", "Market research collection"],
          tech: ["Python", "Playwright", "BeautifulSoup", "Pandas"],
          estimatorType: "Workflow automation"
        },
        {
          id: "auto-sheets",
          title: "Spreadsheet & Document Automation",
          type: "Implementation",
          description: "Automated pipelines synchronizing Google Sheets, Excel workbooks, and relational databases with automated formula calculations and summaries.",
          deliverables: ["Automated Excel/Sheets sync", "Formula error validation", "Formatted PDF report generation", "Scheduled dispatch"],
          useCases: ["Financial reconciliation", "Daily sales summaries", "Inventory count consolidation"],
          tech: ["Python", "OpenPyXL", "Google Sheets API", "Pandas"],
          estimatorType: "Workflow automation"
        },
        {
          id: "auto-email",
          title: "Email & Notification Workflows",
          type: "Implementation",
          description: "Trigger-based transactional email, SMS, and Slack/Teams notification pipelines with template rendering and deliverability tracking.",
          deliverables: ["Email/SMS notification engine", "HTML template library", "Unsubscribe & bounce handler", "Slack/Teams alert bot"],
          useCases: ["Order milestone alerts", "System outage warnings", "Lead notification alerts"],
          tech: ["Python", "SendGrid / Mailgun", "Twilio API", "Slack Webhooks"],
          estimatorType: "Workflow automation"
        },
        {
          id: "auto-pipelines",
          title: "Data Collection & Transformation Pipelines",
          type: "Implementation",
          description: "Scheduled pipelines ingesting raw telemetry, JSON streams, and CSV dumps, performing schema validation, and loading into data stores.",
          deliverables: ["Extract-Transform-Load script", "Schema validation (Pydantic)", "Failed-row dead letter queue", "Performance metrics"],
          useCases: ["IoT sensor aggregation", "Multi-branch store sync", "Partner feed ingestion"],
          tech: ["Python", "Pandas", "PostgreSQL", "Docker"],
          estimatorType: "Data engineering and analytics"
        },
        {
          id: "auto-reports",
          title: "Scheduled Automated Business Reporting",
          type: "Implementation",
          description: "Automated reporting daemon compiling weekly and monthly operational KPIs into polished PDF digests delivered directly to executive inboxes.",
          deliverables: ["Report template design", "Data aggregation queries", "Automated scheduler", "Email attachment dispatcher"],
          useCases: ["Weekly sales digest", "Monthly infrastructure health", "Executive board reports"],
          tech: ["Python", "WeasyPrint", "PostgreSQL", "SendGrid"],
          estimatorType: "Workflow automation"
        },
        {
          id: "auto-api-integ",
          title: "API-Based Multi-SaaS Integrations",
          type: "Implementation",
          description: "Connecting disparate third-party cloud tools (Stripe, HubSpot, QuickBooks, Google Drive) with bi-directional synchronization.",
          deliverables: ["Sync integration service", "Conflict resolution rules", "Retry and backoff logic", "Sync status health dashboard"],
          useCases: ["Accounting & CRM alignment", "E-commerce & ERP sync", "Form submissions to cloud storage"],
          tech: ["FastAPI", "Python", "OAuth2", "Redis"],
          estimatorType: "Workflow automation"
        },
        {
          id: "auto-cicd",
          title: "CI/CD Pipeline Configuration",
          type: "Implementation",
          description: "Automating software build, lint, test, and release cycles using GitHub Actions to achieve zero-touch, zero-downtime deployments.",
          deliverables: ["GitHub Actions workflow YAMLs", "Automated test execution gates", "Docker build & push pipeline", "Staging/Production deploy gates"],
          useCases: ["Web app automated deploys", "Docker microservice release", "Automated code quality checks"],
          tech: ["GitHub Actions", "Docker", "Linux", "Pytest", "TFLint"],
          estimatorType: "Cloud and DevOps"
        },
        {
          id: "auto-iac",
          title: "Infrastructure Automation with Terraform",
          type: "Implementation",
          description: "Codifying cloud infrastructure into declarative, version-controlled Terraform modules to ensure zero configuration drift.",
          deliverables: ["Modular Terraform definitions", "Remote state locking configuration", "Speculative plan CI/CD checks", "Infrastructure diagram"],
          useCases: ["Azure cloud setup", "Kubernetes cluster provisioning", "Disaster recovery replica"],
          tech: ["Terraform", "Microsoft Azure", "GitHub Actions", "Azure Blob"],
          estimatorType: "Cloud and DevOps"
        },
        {
          id: "auto-monitoring",
          title: "Monitoring & Alerting Automation",
          type: "Implementation",
          description: "Continuous health probes, latency thresholds, and automated alert routing ensuring engineering teams are notified before outages impact users.",
          deliverables: ["Health check endpoints", "Uptime monitor configuration", "Telegram/Slack alert channels", "Runbook documentation"],
          useCases: ["Production API monitoring", "Database connection pool alerts", "Disk capacity warnings"],
          tech: ["Prometheus", "Uptime Kuma", "Slack Webhooks", "Python"],
          estimatorType: "Cloud and DevOps"
        }
      ]
    },
    {
      categoryId: "cloud-devops",
      categoryName: "Cloud, DevOps & IT Infrastructure",
      categoryIcon: "☁️",
      categoryDesc: "Architecting, securing, and maintaining scalable Microsoft Azure cloud topologies, Docker containers, and CI/CD pipelines.",
      services: [
        {
          id: "cloud-arch",
          title: "Cloud Architecture Design & Deployment",
          type: "Consulting",
          description: "Designing fault-tolerant, scalable, and secure cloud topologies on Microsoft Azure adhering to the Well-Architected Framework.",
          deliverables: ["Architecture RFC document", "Network topology diagram", "Cost estimation projection", "Turnkey cloud deployment"],
          useCases: ["Migrating to Azure", "Greenfield SaaS infrastructure", "High-availability architectures"],
          tech: ["Microsoft Azure", "Terraform", "Azure Virtual Networks", "AKS"],
          estimatorType: "Cloud and DevOps"
        },
        {
          id: "cloud-server",
          title: "Linux & Windows Server Administration",
          type: "Implementation",
          description: "System hardening, kernel tuning, SSH access lockdown, automated patching, storage volume management, and service orchestration.",
          deliverables: ["Hardened OS configuration", "UFW/Firewall ruleset", "Automated security updates", "System performance baseline"],
          useCases: ["Production VPS hosting", "Enterprise database servers", "Internal company servers"],
          tech: ["Ubuntu Linux", "Debian", "Windows Server", "Bash", "Systemd"],
          estimatorType: "Cloud and DevOps"
        },
        {
          id: "cloud-docker",
          title: "Docker Containerization & Multi-Stage Builds",
          type: "Implementation",
          description: "Packaging applications into lean, immutable, multi-stage Docker containers (< 250MB) running with non-root security profiles.",
          deliverables: ["Optimized Dockerfile", "Docker Compose local stack", "Container vulnerability audit", "Container registry push pipeline"],
          useCases: ["Microservice packaging", "Local development standardization", "Production deployment"],
          tech: ["Docker", "Docker Compose", "Alpine Linux", "Azure Container Registry"],
          estimatorType: "Cloud and DevOps"
        },
        {
          id: "cloud-cicd-impl",
          title: "Automated CI/CD Pipeline Implementation",
          type: "Implementation",
          description: "Building production delivery pipelines that run linters, security scanners, unit test suites, and zero-downtime container rollouts.",
          deliverables: ["Multi-branch CI/CD workflow", "Automated secret management", "Artifact build & publish", "Automated rollback on failure"],
          useCases: ["Continuous software delivery", "Multi-developer teams", "Fast release cycles"],
          tech: ["GitHub Actions", "Docker", "Azure Web Apps", "Bash"],
          estimatorType: "Cloud and DevOps"
        },
        {
          id: "cloud-ghactions",
          title: "GitHub Actions Workflow Engineering",
          type: "Implementation",
          description: "Custom GitHub Actions workflows for matrix testing, dependency caching, automated release tag publishing, and issue triaging.",
          deliverables: ["Optimized action runners", "Build cache configurations", "Release changelog generator", "Security dependency alerts"],
          useCases: ["Open-source repositories", "Private engineering codebases", "Automated documentation builds"],
          tech: ["GitHub Actions", "YAML", "Git", "Node / Python"],
          estimatorType: "Cloud and DevOps"
        },
        {
          id: "cloud-terraform",
          title: "Infrastructure as Code (IaC) with Terraform",
          type: "Implementation",
          description: "Zero-drift modular Terraform provisioning covering Azure VNets, AKS clusters, Azure Key Vault secrets, and encrypted storage accounts.",
          deliverables: ["Reusable Terraform modules", "Remote backend with state locks", "Security static analysis (tfsec)", "Speculative plan checks"],
          useCases: ["Repeatable staging/prod setups", "Disaster recovery cloning", "Audit compliance"],
          tech: ["Terraform", "Azure Resource Manager", "tfsec", "tflint"],
          estimatorType: "Cloud and DevOps"
        },
        {
          id: "cloud-cost",
          title: "Cloud Cost & Resource Optimization",
          type: "Consulting",
          description: "Auditing cloud expenditure to eliminate idle VMs, right-size compute allocations, optimize storage tiers, and slash monthly cloud bills.",
          deliverables: ["Cloud spending audit report", "Right-sizing recommendations", "Auto-shutdown scripts", "Implemented cost savings plan"],
          useCases: ["High monthly Azure/AWS bills", "Over-provisioned development stacks", "Budget containment"],
          tech: ["Azure Cost Management", "Terraform", "Linux", "Grafana"],
          estimatorType: "Cloud and DevOps"
        },
        {
          id: "cloud-logging",
          title: "Application Monitoring & Centralized Logging",
          type: "Implementation",
          description: "Instrumenting application telemetry with Prometheus, structured JSON logging, Grafana visualization boards, and proactive alert thresholds.",
          deliverables: ["Prometheus metrics endpoint", "Grafana dashboard boards", "Structured log shipping", "Threshold alert routing"],
          useCases: ["Production microservices", "High-volume web APIs", "SLA compliance"],
          tech: ["Prometheus", "Grafana", "Azure Monitor", "Python"],
          estimatorType: "Cloud and DevOps"
        },
        {
          id: "cloud-backup",
          title: "Backup, Snapshot & Disaster Recovery Planning",
          type: "Implementation",
          description: "Implementing automated geo-redundant database backups, point-in-time snapshot recovery, and disaster recovery simulation tests.",
          deliverables: ["Automated backup scheduler", "Encrypted offsite replication", "Disaster recovery runbook", "Recovery time (RTO/RPO) test"],
          useCases: ["Database resilience", "Ransomware protection", "Compliance requirements"],
          tech: ["Azure Backup", "PostgreSQL pg_dump", "Bash", "Cron"],
          estimatorType: "Cloud and DevOps"
        },
        {
          id: "cloud-troubleshoot",
          title: "Network & Infrastructure Troubleshooting",
          type: "Consulting",
          description: "Rapid root-cause analysis (RCA) and remediation for DNS propagation failures, SSL errors, memory leaks, high CPU usage, and network bottlenecks.",
          deliverables: ["Root cause incident report (RCA)", "Implemented infrastructure fix", "Remediation verification", "Preventative runbook update"],
          useCases: ["Server downtime emergencies", "Network connectivity drops", "Application crashes"],
          tech: ["Linux diagnostics", "Wireshark", "Systemd", "Azure Network Watcher"],
          estimatorType: "Cloud and DevOps"
        },
        {
          id: "cloud-migration",
          title: "Deployment Migration & Configuration",
          type: "Implementation",
          description: "Zero-downtime migration of web applications and databases between cloud providers (e.g. Render, Heroku, VPS to Azure).",
          deliverables: ["Migration execution plan", "DNS cutover strategy", "Database sync & verification", "Post-migration smoke testing"],
          useCases: ["Leaving expensive PaaS", "Consolidating cloud vendors", "Moving to dedicated infrastructure"],
          tech: ["Docker", "Microsoft Azure", "PostgreSQL", "Cloudflare"],
          estimatorType: "Cloud and DevOps"
        },
        {
          id: "cloud-handover",
          title: "Technical Documentation & Operational Handover",
          type: "Consulting",
          description: "Clear, comprehensive runbooks, architecture diagrams, deployment guides, and team walkthroughs ensuring smooth operational transition.",
          deliverables: ["Architecture documentation", "Operations & runbook guide", "Deployment manual", "Team handover session"],
          useCases: ["Completing client contracts", "Internal staff training", "Audit handoffs"],
          tech: ["Markdown", "Mermaid.js", "Draw.io", "Git"],
          estimatorType: "Cloud and DevOps"
        }
      ]
    },
    {
      categoryId: "data-engineering",
      categoryName: "Data Engineering & Analytics",
      categoryIcon: "📈",
      categoryDesc: "Building scalable ETL/ELT data pipelines, relational data warehouses, and interactive business intelligence dashboards.",
      services: [
        {
          id: "data-etl",
          title: "ETL / ELT Pipeline Development",
          type: "Implementation",
          description: "Automated pipelines extracting disparate operational data, cleaning and transforming it, and loading into analytical data stores.",
          deliverables: ["Multi-source extractors", "Data transformation layer", "Incremental loading engine", "Pipeline failure notifications"],
          useCases: ["Consolidating sales feeds", "Analytics aggregation", "Third-party data warehousing"],
          tech: ["Python", "Pandas", "PostgreSQL", "FastAPI", "SQL"],
          estimatorType: "Data engineering and analytics"
        },
        {
          id: "data-clean",
          title: "Data Cleaning, Imputation & Transformation",
          type: "Implementation",
          description: "Standardizing messy customer records, handling missing values, deduplicating records, and formatting unstructured dates and coordinates.",
          deliverables: ["Automated cleaning script", "Validation ruleset", "Deduplication report", "Sanitized target dataset"],
          useCases: ["Pre-analytics data preparation", "CRM contact hygiene", "ML training dataset prep"],
          tech: ["Python", "Pandas", "NumPy", "RegEx"],
          estimatorType: "Data engineering and analytics"
        },
        {
          id: "data-dbdesign",
          title: "Database Design & Performance Optimization",
          type: "Consulting",
          description: "Engineering normalized 3NF schemas, designing performant indexes (B-tree, GIN, HNSW), and optimizing slow SQL joins.",
          deliverables: ["Entity-Relationship (ER) diagram", "Optimized schema migration DDL", "EXPLAIN ANALYZE query audit", "Index tuning benchmark"],
          useCases: ["Slow database queries", "High-concurrency systems", "New database schema design"],
          tech: ["PostgreSQL", "pgvector", "SQL", "SQLAlchemy"],
          estimatorType: "Data engineering and analytics"
        },
        {
          id: "data-warehouse",
          title: "Data Warehouse Implementation",
          type: "Implementation",
          description: "Star-schema and snowflake dimensional modeling organizing historical business transactions for rapid BI and ad-hoc SQL querying.",
          deliverables: ["Dimensional data model", "Fact & dimension tables", "Automated refresh scheduler", "SQL view collection"],
          useCases: ["Historical reporting", "Multi-system analytics", "Business intelligence"],
          tech: ["PostgreSQL", "SQL", "Python", "Docker"],
          estimatorType: "Data engineering and analytics"
        },
        {
          id: "data-lake",
          title: "Data Lake Architecture & Ingestion",
          type: "Implementation",
          description: "Organizing raw structured and semi-structured file lakes (JSON, CSV, Parquet) with versioning and access control.",
          deliverables: ["Storage bucket structure", "Partitioning strategy (year/month/day)", "Parquet conversion script", "Access control IAM setup"],
          useCases: ["IoT raw telemetry archiving", "Machine learning feature stores", "Compliance file retention"],
          tech: ["Azure Blob Storage", "Python", "Parquet", "PyArrow"],
          estimatorType: "Data engineering and analytics"
        },
        {
          id: "data-bi",
          title: "Business Intelligence (BI) Dashboards",
          type: "Implementation",
          description: "Interactive visual analytical dashboards connecting live to your database, presenting real-time business health and key operational ratios.",
          deliverables: ["Live KPI metric widgets", "Interactive drill-down filters", "Automated data refresh", "Role-gated dashboard access"],
          useCases: ["Executive dashboards", "Sales target tracking", "Operations bottleneck views"],
          tech: ["ApexCharts", "Chart.js", "FastAPI", "PostgreSQL"],
          estimatorType: "Data engineering and analytics"
        },
        {
          id: "data-vis",
          title: "Custom Data Visualization & Geospatial Mapping",
          type: "Implementation",
          description: "Visualizing complex multi-dimensional and geospatial datasets with interactive heatmaps, scatter plots, and network graphs.",
          deliverables: ["Interactive web map/chart", "GeoJSON data pipeline", "Clustering & filtering controls", "Exportable high-res graphs"],
          useCases: ["Urban traffic flow visualization", "Territorial sales maps", "Supply-chain route maps"],
          tech: ["PostGIS", "GeoPandas", "Leaflet.js", "D3.js", "Python"],
          estimatorType: "Data engineering and analytics"
        },
        {
          id: "data-sql",
          title: "Advanced SQL Analytics & Financial Models",
          type: "Implementation",
          description: "Writing complex analytical SQL queries utilizing window functions, Common Table Expressions (CTEs), and cohort analysis.",
          deliverables: ["Complex analytical SQL queries", "Reusable database views", "Cohort retention tables", "Performance benchmark"],
          useCases: ["Customer lifetime value calculation", "Financial ledger audits", "Product sales cohorts"],
          tech: ["PostgreSQL", "SQL", "Python"],
          estimatorType: "Data engineering and analytics"
        },
        {
          id: "data-batch",
          title: "Stream & Batch Processing Prototypes",
          type: "Prototype",
          description: "Building proof-of-concept pipelines processing high-frequency sensor readings and transactional streams with queue buffering.",
          deliverables: ["Streaming prototype harness", "Queue consumer (Redis/Celery)", "Batch aggregator script", "Throughput evaluation benchmark"],
          useCases: ["Telemetry aggregation", "Real-time activity logs", "High-frequency transaction queues"],
          tech: ["Python AsyncIO", "Redis Streams", "Docker"],
          estimatorType: "Data engineering and analytics"
        },
        {
          id: "data-quality",
          title: "Data Quality & Automated Auditing",
          type: "Implementation",
          description: "Automated assertion testing and data profiling verifying schema conformance, null constraints, and value distribution anomalies.",
          deliverables: ["Data quality test suite", "Anomaly detection alerts", "Audit summary log", "Dead-letter quarantine logic"],
          useCases: ["Mission-critical reporting", "Financial ledger verification", "ETL pipeline validation"],
          tech: ["Python", "Pydantic", "Pytest", "PostgreSQL"],
          estimatorType: "Data engineering and analytics"
        }
      ]
    },
    {
      categoryId: "iot-robotics",
      categoryName: "IoT, Robotics & Computer Vision",
      categoryIcon: "🤖",
      categoryDesc: "Embedded hardware programming, telemetry dashboards, computer vision pipelines, and autonomous vehicle simulation.",
      services: [
        {
          id: "iot-embedded",
          title: "Arduino & Raspberry Pi Embedded Prototypes",
          type: "Prototype",
          description: "Designing functional hardware prototypes utilizing microcontroller boards, GPIO sensor interfaces, and actuator controls.",
          deliverables: ["Firmware source code", "Schematic wiring diagram", "Component bill of materials (BOM)", "Hardware bench test video/log"],
          useCases: ["Smart automation prototypes", "Field telemetry loggers", "Academic & thesis hardware"],
          tech: ["C/C++", "Arduino", "Raspberry Pi", "MicroPython", "GPIO"],
          estimatorType: "IoT or computer vision prototype"
        },
        {
          id: "iot-sensor",
          title: "Industrial Sensor Integration & Calibration",
          type: "Implementation",
          description: "Interfacing analog and digital sensors (temperature, pressure, current, vibration, ultrasonic, GPS) with signal conditioning.",
          deliverables: ["Sensor calibration routines", "Noise filtering (Kalman / moving average)", "Serial/I2C/SPI interface code", "Sensor test report"],
          useCases: ["Machine vibration monitoring", "Environmental monitoring stations", "Vehicle telemetry"],
          tech: ["I2C / SPI / UART", "C++", "Python", "Kalman Filters"],
          estimatorType: "IoT or computer vision prototype"
        },
        {
          id: "iot-dashboards",
          title: "IoT Monitoring & Telemetry Dashboards",
          type: "Implementation",
          description: "Real-time web dashboards visualizing live sensor readings, threshold status indicators, and historical telemetry trends.",
          deliverables: ["Live sensor stream UI", "Threshold alarm indicators", "Historical telemetry chart", "REST / MQTT ingestion endpoint"],
          useCases: ["Remote substation monitoring", "Smart agriculture tracking", "Industrial machine status"],
          tech: ["FastAPI", "MQTT / WebSockets", "PostgreSQL / SQLite", "Chart.js"],
          estimatorType: "IoT or computer vision prototype"
        },
        {
          id: "iot-firmware",
          title: "Embedded Systems C/C++ Programming",
          type: "Implementation",
          description: "Low-level embedded C/C++ programming with interrupt service routines, timer management, and memory-constrained execution.",
          deliverables: ["Optimized embedded C/C++ firmware", "Hardware timer routines", "Interrupt handlers", "Memory footprint analysis"],
          useCases: ["Custom microcontrollers", "Autonomous vehicle controllers", "Wearable devices"],
          tech: ["C", "C++", "AVR / ARM", "FreeRTOS basics"],
          estimatorType: "IoT or computer vision prototype"
        },
        {
          id: "iot-cv-proto",
          title: "Computer Vision Perception Prototypes",
          type: "Prototype",
          description: "Real-time optical perception prototypes performing lane boundary estimation, vehicle detection, and obstacle distance calculation.",
          deliverables: ["OpenCV perception pipeline", "Inverse perspective transform module", "Processed video demonstration", "Frame rate & latency metrics"],
          useCases: ["Autonomous vehicle lane detection", "Forward collision warning", "Driver monitoring systems"],
          tech: ["Python", "OpenCV", "NumPy", "Matplotlib"],
          estimatorType: "IoT or computer vision prototype"
        },
        {
          id: "iot-robotics-sw",
          title: "Robotics Software & Navigation Prototypes",
          type: "Prototype",
          description: "Mobile robot trajectory planning, obstacle avoidance algorithms, differential drive kinematics, and sensor fusion prototypes.",
          deliverables: ["Kinematics & navigation script", "Obstacle avoidance state machine", "Simulation test log", "Hardware integration guide"],
          useCases: ["Autonomous warehouse rovers", "Line-follower robotics", "Inspection rovers"],
          tech: ["Python", "C++", "ROS 2 basics", "Kinematics"],
          estimatorType: "IoT or computer vision prototype"
        },
        {
          id: "iot-uav-concept",
          title: "UAV & Drone Software Architecture Concepts",
          type: "Consulting",
          description: "System architecture and algorithm design for unmanned aerial vehicle flight telemetry, GPS waypoint routing, and fail-safe protocols.",
          deliverables: ["Flight telemetry architecture RFC", "Fail-safe communication protocol", "Waypoint routing algorithms", "Payload feasibility study"],
          useCases: ["Autonomous drone inspection", "Aerial mapping platforms", "Emergency response drones"],
          tech: ["Python", "MAVLink basics", "GPS Telemetry", "Simulation"],
          estimatorType: "IoT or computer vision prototype"
        },
        {
          id: "iot-integration",
          title: "Hardware-Software System Integration",
          type: "Implementation",
          description: "Bridging physical electronic hardware, microcontrollers, and serial communications with modern cloud web APIs and databases.",
          deliverables: ["Serial-to-cloud bridge daemon", "Hardware handshake protocol", "Local buffer on disconnect", "System integration verification"],
          useCases: ["Substation SCADA bridges", "Custom hardware testing rigs", "Laboratory automation"],
          tech: ["Python", "PySerial", "FastAPI", "PostgreSQL", "Docker"],
          estimatorType: "IoT or computer vision prototype"
        },
        {
          id: "iot-simulation",
          title: "Simulation & Technical Proof-of-Concept",
          type: "Prototype",
          description: "High-fidelity virtual simulation testing using CARLA and SUMO to validate vehicle navigation and traffic signal coordination.",
          deliverables: ["Simulation environment configuration", "Scenario test suite", "Telemetry extraction scripts", "Evaluation report with graphs"],
          useCases: ["Autonomous driving validation", "City traffic signal optimization", "Algorithm bench testing"],
          tech: ["CARLA Simulator", "SUMO / TraCI", "Python", "GeoPandas"],
          estimatorType: "IoT or computer vision prototype"
        }
      ]
    },
    {
      categoryId: "consulting",
      categoryName: "Technical Consulting & Support",
      categoryIcon: "🤝",
      categoryDesc: "Independent architectural reviews, AI feasibility audits, technology selection, and engineering roadmaps.",
      services: [
        {
          id: "cons-arch",
          title: "Software & Cloud Architecture Consulting",
          type: "Consulting",
          description: "Comprehensive architectural assessment of your proposed or existing system to ensure high scalability, reliability, and security.",
          deliverables: ["Architecture Assessment Document", "C4 component diagram", "Bottleneck mitigation plan", "1-on-1 strategy session"],
          useCases: ["Pre-seed architecture planning", "Scaling preparation", "Cloud migration scoping"],
          tech: ["System Architecture", "Microsoft Azure", "FastAPI", "PostgreSQL"],
          estimatorType: "Other / custom project"
        },
        {
          id: "cons-techstack",
          title: "Technology Selection & Feasibility Analysis",
          type: "Consulting",
          description: "Objective, unbiased evaluation of programming languages, frameworks, vector databases, and cloud services to fit your budget and team skills.",
          deliverables: ["Tech Stack Tradeoff Matrix", "Cost vs Performance comparison", "Feasibility report", "Final recommendation RFC"],
          useCases: ["Choosing vector DBs (pgvector vs Pinecone)", "Framework selection", "Cloud vendor evaluation"],
          tech: ["Technical Research", "Benchmark Audits", "Cost Analysis"],
          estimatorType: "Other / custom project"
        },
        {
          id: "cons-codereview",
          title: "Code Review & Technical Security Audits",
          type: "Consulting",
          description: "In-depth code quality inspection covering OWASP Top 10 vulnerabilities, SQL injection risks, performance bottlenecks, and test coverage.",
          deliverables: ["Line-by-line audit report", "Vulnerability severity scorecard", "Remediation pull request/diffs", "Best practice guidelines"],
          useCases: ["Pre-launch security sanity checks", "Due-diligence for acquisitions", "Eliminating technical debt"],
          tech: ["Python", "Security Linters", "Pytest", "Bandit", "Git"],
          estimatorType: "Other / custom project"
        },
        {
          id: "cons-perf",
          title: "Website & API Performance Reviews",
          type: "Consulting",
          description: "Pinpointing backend database query slowdowns, frontend render-blocking assets, and network latency to achieve sub-second response times.",
          deliverables: ["Performance benchmark report", "Database query optimization plan", "Frontend asset optimization plan", "Before/after speed comparison"],
          useCases: ["Slow API endpoints", "Poor Google Lighthouse scores", "High p95/p99 latency"],
          tech: ["Lighthouse", "EXPLAIN ANALYZE", "cProfile", "Prometheus"],
          estimatorType: "Other / custom project"
        },
        {
          id: "cons-deploy",
          title: "Deployment & Infrastructure Troubleshooting",
          type: "Consulting",
          description: "Emergency and on-demand triage for failing deployments, container crashes, DNS routing issues, and production downtime incidents.",
          deliverables: ["Emergency incident resolution", "Root cause report (RCA)", "Restored production service", "Preventative monitoring setup"],
          useCases: ["Broken release deployments", "SSL/TLS misconfigurations", "Out-of-memory container crashes"],
          tech: ["Docker", "Linux", "Azure Monitor", "Bash"],
          estimatorType: "Cloud and DevOps"
        },
        {
          id: "cons-ai-feasibility",
          title: "AI Implementation Feasibility Studies",
          type: "Consulting",
          description: "Practical assessment of whether your business problem genuinely benefits from GenAI/LLMs, estimating token costs and hallucination risks.",
          deliverables: ["AI Feasibility Manifesto", "Token cost & SLA model", "Risk & hallucination assessment", "No-AI vs AI architecture trade-off"],
          useCases: ["Companies evaluating GenAI adoption", "Board proposal validation", "RAG ROI assessment"],
          tech: ["GenAI Analysis", "RAG Modeling", "Cost Estimation"],
          estimatorType: "AI chatbot or agent"
        },
        {
          id: "cons-docs",
          title: "Technical Writing & API Documentation",
          type: "Consulting",
          description: "Authoring clear, developer-friendly API references, architecture decision records (ADRs), system runbooks, and client user guides.",
          deliverables: ["OpenAPI / Swagger specifications", "System Architecture & ADR log", "Operations & Deployment Runbook", "End-user guide"],
          useCases: ["SaaS API documentation", "Handover to internal teams", "Developer portal publishing"],
          tech: ["Markdown", "OpenAPI", "Mermaid.js", "Git"],
          estimatorType: "Other / custom project"
        },
        {
          id: "cons-training",
          title: "Technical Training & Knowledge Transfer",
          type: "Consulting",
          description: "Interactive technical workshops and 1-on-1 team mentoring on Python engineering best practices, RAG architectures, and cloud DevOps.",
          deliverables: ["Tailored training syllabus", "Live interactive sessions", "Hands-on code exercise repository", "Recorded session archive"],
          useCases: ["Upskilling junior developers", "Team onboarding to RAG", "ReDI School community workshops"],
          tech: ["Python", "FastAPI", "Git", "Docker"],
          estimatorType: "Other / custom project"
        },
        {
          id: "cons-roadmap",
          title: "Project Scoping & Technical Roadmaps",
          type: "Consulting",
          description: "Translating ambiguous product concepts into sprint-by-sprint development roadmaps with work breakdown structures (WBS) and milestone gates.",
          deliverables: ["Work Breakdown Structure (WBS)", "Sprint-by-sprint timeline", "Risk register & dependencies", "Resource allocation plan"],
          useCases: ["Project discovery phase", "Investor readiness", "Team sprint planning"],
          tech: ["Agile Scoping", "RFC authoring", "Milestone Planning"],
          estimatorType: "Other / custom project"
        }
      ]
    }
  ];

  // Expose catalog to window
  if (typeof window !== "undefined") {
    window.SERVICES_DATA = SERVICES_DATA;
  }

  function initServicesSection() {
    const categorySelect = document.getElementById("servicesCategorySelect");
    const categoryTabsContainer = document.getElementById("servicesCategoryTabs");
    const cardsGridContainer = document.getElementById("servicesCardsGrid");
    const searchInput = document.getElementById("servicesSearchInput");
    const clearSearchBtn = document.getElementById("servicesClearSearchBtn");
    const countBadge = document.getElementById("servicesCountBadge");
    const activeHeader = document.getElementById("servicesActiveHeader");

    if (!cardsGridContainer) return;

    // activeCategory: "" means default compact view (unselected)
    // "all" means explicitly show all 87 services
    // or specific category ID ("web-dev", "ai-ml", etc.)
    let activeCategory = "";
    let searchQuery = "";

    const catNamesDe = {
      "web-dev": "Webentwicklung",
      "business-software": "Unternehmenssoftware",
      "business-mgmt": "Unternehmenssoftware",
      "custom-software": "Individuelle Software",
      "ai-ml": "KI & Machine Learning",
      "automation": "Automatisierung & Workflows",
      "cloud-devops": "Cloud, DevOps & Infrastruktur",
      "data-engineering": "Data Engineering & Analytics",
      "data-eng": "Data Engineering & Analytics",
      "iot-robotics": "IoT, Robotik & Computer Vision",
      "consulting": "Technische Beratung & Support",
      "tech-consulting": "Technische Beratung & Support"
    };

    function getTotalServiceCount() {
      return SERVICES_DATA.reduce((acc, cat) => acc + cat.services.length, 0);
    }

    function populateCategorySelect() {
      if (!categorySelect) return;
      const isDe = (document.documentElement.getAttribute("lang") || "en").toLowerCase().startsWith("de");
      const totalCount = getTotalServiceCount();

      const placeholderText = isDe ? `Kategorie auswählen (${totalCount} Services)...` : `Select a Category (${totalCount} services)...`;
      const allText = isDe ? `⚡ Alle Services (${totalCount})` : `⚡ All Services (${totalCount})`;

      let optionsHtml = `
        <option value="" ${activeCategory === "" ? "selected" : ""}>${placeholderText}</option>
        <option value="all" ${activeCategory === "all" ? "selected" : ""}>${allText}</option>
      `;

      SERVICES_DATA.forEach((cat) => {
        const name = (isDe && catNamesDe[cat.categoryId]) ? catNamesDe[cat.categoryId] : cat.categoryName;
        const isSelected = activeCategory === cat.categoryId;
        optionsHtml += `
          <option value="${cat.categoryId}" ${isSelected ? "selected" : ""}>${cat.categoryIcon} ${name} (${cat.services.length})</option>
        `;
      });

      categorySelect.innerHTML = optionsHtml;
      categorySelect.value = activeCategory;
    }

    // Render fallback tabs if container exists
    function renderCategoryTabs() {
      if (!categoryTabsContainer) return;
      const isDe = (document.documentElement.getAttribute("lang") || "en").toLowerCase().startsWith("de");
      const allText = isDe ? "Alle Services" : "All Services";
      const isAllActive = activeCategory === "all";

      const allBtn = `
        <button class="svc-tab-btn ${isAllActive ? 'active' : ''}" data-cat="all" role="tab" aria-selected="${isAllActive}">
          <span>⚡ ${allText}</span>
          <span class="svc-tab-count">${getTotalServiceCount()}</span>
        </button>
      `;

      const categoryButtons = SERVICES_DATA.map((cat) => {
        const name = (isDe && catNamesDe[cat.categoryId]) ? catNamesDe[cat.categoryId] : cat.categoryName;
        const isActive = activeCategory === cat.categoryId;
        return `
          <button class="svc-tab-btn ${isActive ? 'active' : ''}" data-cat="${cat.categoryId}" role="tab" aria-selected="${isActive}">
            <span>${cat.categoryIcon} ${name}</span>
            <span class="svc-tab-count">${cat.services.length}</span>
          </button>
        `;
      }).join("");

      categoryTabsContainer.innerHTML = allBtn + categoryButtons;
    }

    function renderActiveHeader(filteredCount) {
      if (!activeHeader) return;
      const isDe = (document.documentElement.getAttribute("lang") || "en").toLowerCase().startsWith("de");

      // Hide active header if in default compact view and no search active
      if (activeCategory === "" && !searchQuery) {
        activeHeader.style.display = "none";
        activeHeader.innerHTML = "";
        return;
      }

      activeHeader.style.display = "flex";

      let titleHtml = "";
      if (searchQuery) {
        if (activeCategory && activeCategory !== "all") {
          const activeCatObj = SERVICES_DATA.find((c) => c.categoryId === activeCategory);
          const catName = activeCatObj ? ((isDe && catNamesDe[activeCatObj.categoryId]) ? catNamesDe[activeCatObj.categoryId] : activeCatObj.categoryName) : activeCategory;
          const icon = activeCatObj ? activeCatObj.categoryIcon : "📁";
          titleHtml = `
            <span class="svc-active-name">${icon} ${escapeHTML(catName)}</span>
            <span style="color:var(--text-muted);font-size:13px;">+ "${escapeHTML(searchQuery)}"</span>
            <span class="svc-active-count-tag">${filteredCount} ${isDe ? "Treffer" : "matches"}</span>
          `;
        } else {
          titleHtml = `
            <span class="svc-active-name">🔍 "${escapeHTML(searchQuery)}"</span>
            <span class="svc-active-count-tag">${filteredCount} ${isDe ? "Treffer" : "matches"}</span>
          `;
        }
      } else if (activeCategory === "all") {
        titleHtml = `
          <span class="svc-active-name">⚡ ${isDe ? "Alle Services" : "All Services"}</span>
          <span class="svc-active-count-tag">${filteredCount} ${isDe ? "verfügbar" : "available"}</span>
        `;
      } else {
        const activeCatObj = SERVICES_DATA.find((c) => c.categoryId === activeCategory);
        const catName = activeCatObj ? ((isDe && catNamesDe[activeCatObj.categoryId]) ? catNamesDe[activeCatObj.categoryId] : activeCatObj.categoryName) : activeCategory;
        const icon = activeCatObj ? activeCatObj.categoryIcon : "📁";
        titleHtml = `
          <span class="svc-active-name">${icon} ${escapeHTML(catName)}</span>
          <span class="svc-active-count-tag">${filteredCount} ${isDe ? "Services" : "services"}</span>
        `;
      }

      activeHeader.innerHTML = `
        <div class="svc-active-title-group">
          ${titleHtml}
        </div>
        <button type="button" class="svc-active-reset-btn" id="servicesResetViewBtn">
          ${isDe ? "✕ Zurück zur Übersicht" : "✕ Back to overview"}
        </button>
      `;

      const resetViewBtn = document.getElementById("servicesResetViewBtn");
      if (resetViewBtn) {
        resetViewBtn.addEventListener("click", () => {
          activeCategory = "";
          searchQuery = "";
          if (searchInput) searchInput.value = "";
          if (clearSearchBtn) clearSearchBtn.style.display = "none";
          populateCategorySelect();
          renderCards();
        });
      }
    }

    function renderCards() {
      const isDe = (document.documentElement.getAttribute("lang") || "en").toLowerCase().startsWith("de");
      const totalCount = getTotalServiceCount();

      // 1. DEFAULT COMPACT VIEW: No category chosen and no search query
      if (activeCategory === "" && !searchQuery) {
        if (countBadge) {
          countBadge.textContent = isDe ? `${totalCount} Services in 9 Fachbereichen` : `${totalCount} Services across 9 Domains`;
        }
        renderActiveHeader(0);

        cardsGridContainer.innerHTML = `
          <div class="svc-prompt-card">
            <div class="svc-prompt-icon-wrap" aria-hidden="true">🧭</div>
            <p class="svc-prompt-eyebrow">${isDe ? "DIENSTLEISTUNGSKATALOG ERKUNDEN" : "EXPLORE SERVICES CATALOG"}</p>
            <h3 class="svc-prompt-title">${isDe ? "Wählen Sie eine Kategorie oder suchen Sie, um Services anzuzeigen" : "Select a Category or Search to Explore Services"}</h3>
            <p class="svc-prompt-desc">
              ${isDe
                ? `Erkunden Sie ${totalCount} spezialisierte produktionsreife Dienstleistungen in 9 Fachbereichen. Wählen Sie oben eine Kategorie aus dem Dropdown, klicken Sie unten auf einen Bereich oder suchen Sie nach Technologien und Leistungen.`
                : `Browse ${totalCount} specialized production-grade engineering services across 9 technical domains. Select a domain from the dropdown above, pick a category below, or search for any technology or deliverable.`}
            </p>

            <div class="svc-prompt-quick-wrap">
              <p class="svc-prompt-quick-title">${isDe ? "Nach Fachbereich erkunden:" : "Explore by Domain:"}</p>
              <div class="svc-prompt-chips-grid">
                ${SERVICES_DATA.map((cat) => {
                  const name = (isDe && catNamesDe[cat.categoryId]) ? catNamesDe[cat.categoryId] : cat.categoryName;
                  return `
                    <button type="button" class="svc-prompt-chip" data-cat="${cat.categoryId}">
                      <span>${cat.categoryIcon} ${escapeHTML(name)}</span>
                      <span class="svc-prompt-chip-count">${cat.services.length}</span>
                    </button>
                  `;
                }).join("")}
              </div>

              <div class="svc-prompt-search-tags">
                <span style="font-family:'DM Mono',monospace;font-size:11px;color:var(--text-subtle);text-transform:uppercase;margin-right:4px;">
                  ${isDe ? "Beliebte Suchen:" : "Popular searches:"}
                </span>
                ${["RAG", "Azure", "POS", "FastAPI", "Docker", "Computer Vision", "ERP", "IoT"].map((tag) => `
                  <button type="button" class="svc-prompt-tag-btn" data-search="${tag}">${tag}</button>
                `).join("")}
              </div>
            </div>
          </div>
        `;

        // Wire click handlers for prompt chips
        cardsGridContainer.querySelectorAll(".svc-prompt-chip").forEach((chip) => {
          chip.addEventListener("click", () => {
            const cat = chip.getAttribute("data-cat");
            if (cat) {
              activeCategory = cat;
              populateCategorySelect();
              renderCards();
            }
          });
        });

        // Wire click handlers for search tag suggestions
        cardsGridContainer.querySelectorAll(".svc-prompt-tag-btn").forEach((tagBtn) => {
          tagBtn.addEventListener("click", () => {
            const q = tagBtn.getAttribute("data-search");
            if (q) {
              searchQuery = q;
              if (searchInput) searchInput.value = q;
              if (clearSearchBtn) clearSearchBtn.style.display = "flex";
              renderCards();
            }
          });
        });

        return;
      }

      // 2. FILTERED VIEW: Either a category is active, or a search query is typed
      let filtered = [];

      SERVICES_DATA.forEach((cat) => {
        // If searching and category is not explicitly constrained to a single category (i.e. activeCategory is "" or "all"), search everywhere.
        // If activeCategory is set to a specific category, filter within that category.
        const shouldIncludeCategory =
          activeCategory === "all" ||
          (activeCategory === "" && searchQuery !== "") ||
          activeCategory === cat.categoryId;

        if (shouldIncludeCategory) {
          cat.services.forEach((svc) => {
            if (!searchQuery) {
              filtered.push({
                ...svc,
                categoryName: (isDe && catNamesDe[cat.categoryId]) ? catNamesDe[cat.categoryId] : cat.categoryName,
                categoryIcon: cat.categoryIcon
              });
            } else {
              const q = searchQuery.toLowerCase();
              const match =
                svc.title.toLowerCase().includes(q) ||
                svc.description.toLowerCase().includes(q) ||
                svc.deliverables.some((d) => d.toLowerCase().includes(q)) ||
                svc.useCases.some((u) => u.toLowerCase().includes(q)) ||
                svc.tech.some((t) => t.toLowerCase().includes(q)) ||
                cat.categoryName.toLowerCase().includes(q) ||
                (catNamesDe[cat.categoryId] && catNamesDe[cat.categoryId].toLowerCase().includes(q));

              if (match) {
                filtered.push({
                  ...svc,
                  categoryName: (isDe && catNamesDe[cat.categoryId]) ? catNamesDe[cat.categoryId] : cat.categoryName,
                  categoryIcon: cat.categoryIcon
                });
              }
            }
          });
        }
      });

      // Update badge count
      if (countBadge) {
        if (searchQuery) {
          countBadge.textContent = isDe
            ? `${filtered.length} Services gefunden für "${searchQuery}"`
            : `${filtered.length} Services Matching "${searchQuery}"`;
        } else if (activeCategory === "all") {
          countBadge.textContent = isDe
            ? `${filtered.length} Services verfügbar`
            : `${filtered.length} Services Available`;
        } else {
          const activeCatObj = SERVICES_DATA.find((c) => c.categoryId === activeCategory);
          const catName = activeCatObj
            ? ((isDe && catNamesDe[activeCatObj.categoryId]) ? catNamesDe[activeCatObj.categoryId] : activeCatObj.categoryName)
            : "";
          countBadge.textContent = isDe
            ? `${filtered.length} Services in ${catName}`
            : `${filtered.length} Services in ${catName}`;
        }
      }

      renderActiveHeader(filtered.length);

      // Handle Empty State
      if (filtered.length === 0) {
        cardsGridContainer.innerHTML = `
          <div class="svc-empty-state" style="grid-column: 1 / -1;">
            <span class="empty-icon">🔍</span>
            <h4>${isDe ? "Keine passenden Services gefunden" : "No matching services found"}</h4>
            <p>${isDe ? 'Versuchen Sie es mit Begriffen wie "RAG", "Azure", "POS", "API" oder "Docker", oder setzen Sie den Filter zurück.' : 'Try searching for terms like "RAG", "Azure", "POS", "API", or "Docker", or reset your category filter.'}</p>
            <button type="button" class="button button-secondary" id="resetServicesFilterBtn">${isDe ? "Filter & Suche zurücksetzen" : "Reset Filter & Search"}</button>
          </div>
        `;
        const resetBtn = document.getElementById("resetServicesFilterBtn");
        if (resetBtn) {
          resetBtn.addEventListener("click", () => {
            activeCategory = "";
            searchQuery = "";
            if (searchInput) searchInput.value = "";
            if (clearSearchBtn) clearSearchBtn.style.display = "none";
            populateCategorySelect();
            renderCards();
          });
        }
        return;
      }

      // Render Cards
      cardsGridContainer.innerHTML = filtered.map((svc) => {
        const typeBadgeClass =
          svc.type === "Implementation" ? "badge-impl" :
          svc.type === "Consulting" ? "badge-consult" :
          svc.type === "Prototype" ? "badge-proto" : "badge-maint";

        return `
          <article class="svc-card" data-service-id="${svc.id}" id="svc-${svc.id}">
            <div class="svc-card-top">
              <span class="svc-category-tag">${svc.categoryIcon} ${escapeHTML(svc.categoryName)}</span>
              <span class="svc-type-pill ${typeBadgeClass}">${svc.type}</span>
            </div>

            <h3 class="svc-card-title">${escapeHTML(svc.title)}</h3>
            <p class="svc-card-desc">${escapeHTML(svc.description)}</p>

            <div class="svc-deliverables-block">
              <span class="svc-sub-label">${isDe ? "WICHTIGSTE LEISTUNGEN" : "KEY DELIVERABLES"}</span>
              <ul class="svc-deliverables-list">
                ${svc.deliverables.map((d) => `<li><span class="svc-check">✓</span> <span>${escapeHTML(d)}</span></li>`).join("")}
              </ul>
            </div>

            <div class="svc-meta-block">
              <span class="svc-sub-label">${isDe ? "TYPISCHE ANWENDUNGSFÄLLE" : "TYPICAL USE CASES"}</span>
              <div class="svc-chips">
                ${svc.useCases.map((u) => `<span class="svc-chip">${escapeHTML(u)}</span>`).join("")}
              </div>
            </div>

            <div class="svc-meta-block" style="margin-bottom:20px;">
              <span class="svc-sub-label">${isDe ? "TECH-STACK" : "TECH STACK"}</span>
              <div class="svc-chips">
                ${svc.tech.map((t) => `<span class="svc-tech-tag">${escapeHTML(t)}</span>`).join("")}
              </div>
            </div>

            <div class="svc-card-actions">
              <button type="button" class="svc-action-btn svc-btn-estimate" data-service-title="${escapeHTML(svc.title)}" data-service-type="${escapeHTML(svc.estimatorType)}">
                ${isDe ? "Budget kalkulieren ↗" : "Estimate Budget ↗"}
              </button>
              <button type="button" class="svc-action-btn svc-btn-proposal" data-service-title="${escapeHTML(svc.title)}" data-service-type="${escapeHTML(svc.estimatorType)}">
                ${isDe ? "Angebot anfordern →" : "Request Proposal →"}
              </button>
            </div>
          </article>
        `;
      }).join("");

      // Wire action buttons
      wireServiceCardActions();
    }

    function wireServiceCardActions() {
      // Estimate Budget buttons: scrolls to estimator and pre-selects project type
      cardsGridContainer.querySelectorAll(".svc-btn-estimate").forEach((btn) => {
        btn.addEventListener("click", () => {
          const type = btn.getAttribute("data-service-type");
          const title = btn.getAttribute("data-service-title");
          if (window.budgetEstimator && typeof window.budgetEstimator.preselectService === "function") {
            window.budgetEstimator.preselectService(type, title);
          }
          const estimatorEl = document.getElementById("estimator");
          if (estimatorEl) {
            estimatorEl.scrollIntoView({ behavior: "smooth" });
          }
        });
      });

      // Request Proposal buttons: scrolls to proposal generator and pre-fills service
      cardsGridContainer.querySelectorAll(".svc-btn-proposal").forEach((btn) => {
        btn.addEventListener("click", () => {
          const type = btn.getAttribute("data-service-type");
          const title = btn.getAttribute("data-service-title");
          if (window.proposalGenerator && typeof window.proposalGenerator.prefillService === "function") {
            window.proposalGenerator.prefillService(type, title);
          }
          const proposalEl = document.getElementById("proposal-generator");
          if (proposalEl) {
            proposalEl.scrollIntoView({ behavior: "smooth" });
          }
        });
      });
    }

    if (categorySelect) {
      categorySelect.addEventListener("change", (e) => {
        activeCategory = e.target.value;
        renderCards();
      });
    }

    if (categoryTabsContainer) {
      categoryTabsContainer.addEventListener("click", (e) => {
        const btn = e.target.closest(".svc-tab-btn");
        if (!btn) return;
        const cat = btn.getAttribute("data-cat");
        if (!cat) return;
        activeCategory = cat;
        populateCategorySelect();
        renderCards();
      });
    }

    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        searchQuery = (e.target.value || "").trim();
        if (clearSearchBtn) {
          clearSearchBtn.style.display = searchQuery.length > 0 ? "flex" : "none";
        }
        renderCards();
      });
    }

    if (clearSearchBtn) {
      clearSearchBtn.addEventListener("click", () => {
        searchQuery = "";
        if (searchInput) searchInput.value = "";
        clearSearchBtn.style.display = "none";
        renderCards();
      });
    }

    populateCategorySelect();
    renderCategoryTabs();
    renderCards();

    // Re-render when language changes
    window.addEventListener("portfolio-language-changed", () => {
      populateCategorySelect();
      renderCategoryTabs();
      renderCards();
    });
  }

  function escapeHTML(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  if (typeof window !== "undefined") {
    window.escapeHTML = escapeHTML;
  }

  if (typeof module !== "undefined" && module.exports) {
    module.exports = { SERVICES_DATA };
  }

  if (typeof document !== "undefined") {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", initServicesSection);
    } else {
      initServicesSection();
    }
  }
})();
