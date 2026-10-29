/**
 * AI Twin Client-Side Assistant Console
 * Grounded conversational interface running 100% locally in the visitor's browser.
 * Powered by a 4-Layer Deterministic Retrieval Engine:
 *   Layer 1: Intent Detection
 *   Layer 2: Entity & Alias Extraction
 *   Layer 3: TF-IDF & Multi-Factor Retrieval & Ranking
 *   Layer 4: Grounded Composition with Status Taxonomy & Citations
 * 
 * Zero external AI APIs, zero telemetry, zero server-side latency.
 */
(() => {
  // Reference knowledge base (loaded from ai-twin-knowledge.js or required in Node)
  const KB = (typeof window !== "undefined" && window.AI_TWIN_KNOWLEDGE)
    ? window.AI_TWIN_KNOWLEDGE
    : (typeof require !== "undefined" ? require("./ai-twin-knowledge.js") : null);

  // DOM Elements
  let chatBody = null;
  let chatInput = null;
  let sendBtn = null;
  let clearBtn = null;
  let infoBtn = null;
  let infoPanel = null;
  let starterChips = [];
  let isResponding = false;

  // Inverted search index for token overlap & TF-IDF
  let tokenIndex = {};
  let docFrequencies = {};
  let totalDocs = 0;

  // Stop words for lightweight tokenization
  const STOP_WORDS = new Set([
    "a", "about", "above", "after", "again", "against", "all", "am", "an", "and", "any", "are",
    "aren't", "as", "at", "be", "because", "been", "before", "being", "below", "between", "both",
    "but", "by", "can", "can't", "cannot", "could", "did", "do", "does", "doing", "don't", "down",
    "during", "each", "few", "for", "from", "further", "had", "has", "have", "having", "he", "her",
    "here", "hers", "herself", "him", "himself", "his", "how", "i", "if", "in", "into", "is", "isn't",
    "it", "it's", "its", "itself", "let's", "me", "more", "most", "my", "myself", "no", "nor", "not",
    "of", "off", "on", "once", "only", "or", "other", "ought", "our", "ours", "ourselves", "out",
    "over", "own", "same", "she", "should", "so", "some", "such", "than", "that", "the", "their",
    "theirs", "them", "themselves", "then", "there", "these", "they", "this", "those", "through",
    "to", "too", "under", "until", "up", "very", "was", "we", "were", "what", "when", "where",
    "which", "while", "who", "whom", "why", "with", "would", "you", "your", "yours", "yourself",
    "yourselves", "tell", "show", "give", "please", "know", "built", "built-in", "work", "worked"
  ]);

  /**
   * Pre-build inverted index once during startup (< 5ms)
   */
  function buildSearchIndex() {
    if (!KB || !KB.projects) return;
    tokenIndex = {};
    docFrequencies = {};
    totalDocs = KB.projects.length;

    KB.projects.forEach((prj) => {
      const content = [
        prj.id,
        prj.title,
        prj.domain,
        prj.summary,
        prj.status,
        ...(prj.technologies || []),
        prj.architecture ? (prj.architecture.implemented + " " + prj.architecture.design) : ""
      ].join(" ").toLowerCase();

      const tokens = tokenize(content);
      const uniqueTokens = new Set(tokens);

      uniqueTokens.forEach((token) => {
        docFrequencies[token] = (docFrequencies[token] || 0) + 1;
        if (!tokenIndex[token]) tokenIndex[token] = [];
        tokenIndex[token].push(prj.id);
      });
    });
  }

  /**
   * Tokenize and normalize query text
   */
  function tokenize(text) {
    if (!text) return [];
    return text
      .toLowerCase()
      .replace(/[^\w\s-]/g, " ")
      .split(/\s+/)
      .filter((t) => t.length > 1 && !STOP_WORDS.has(t));
  }

  // =========================================================================
  // Layer 1: Intent Detection
  // =========================================================================
  function detectIntent(rawQuery) {
    const q = rawQuery.toLowerCase().trim();

    // 0. Explicit Unsupported / Out-of-Scope Domains
    if (
      /\b(astronaut|nasa|iss|space\s*station|blockchain|web3|crypto|cryptocurrency|solidity|smart\s*contracts?|sourdough|baking|recipe|cooking|weather\s+today|capital\s+of|quantum\s*cryptography)\b/i.test(q)
    ) {
      return "unsupported_fallback";
    }

    // 1. Comparison Intent
    if (
      /\b(compare|comparison|difference\s+between|versus|\bvs\b|how\s+does.*compare)\b/i.test(q)
    ) {
      return "project_compare";
    }

    // 2. Job-Fit / Resume Suitability Intent
    if (
      /\b(job\s+description|fit\s+for|role\s+fit|analyze\s+(my|your)?\s*fit|hiring\s+for|candidate\s+for|match\s+for|requirements:|qualifications|suitability|job\s+fit)\b/i.test(q) ||
      (q.length > 120 && /\b(responsibilities|requirements|skills|experience\s+with|must\s+have)\b/i.test(q))
    ) {
      return "job_fit";
    }

    // 3. Specific Project Lookup (by ID or exact title keyword)
    if (
      /\b(prj-[a-z]+-\d{3})\b/i.test(q) ||
      /\b(movisabio|doctor['’]?s\s+co-?pilot|sparoo|ardupilot|carla|cleveland|uci\s+heart)\b/i.test(q)
    ) {
      return "project_lookup";
    }

    // 4. Architecture / System Design Deep-Dive
    if (
      /\b(architecture|system\s+design|how\s+does.*work|how\s+is.*implemented|pipeline\s+design|technical\s+breakdown|hallucination\s+controls?)\b/i.test(q)
    ) {
      return "architecture_summary";
    }

    // 5. Tech Search ("Which projects use X", "Projects with FastAPI", etc.)
    if (
      /\b(which\s+projects?|show\s+me\s+projects?|projects?\s+using|projects?\s+with|built\s+with|technologies?\s+used)\b/i.test(q)
    ) {
      return "tech_search";
    }

    // 6. Career, Education & Organizations
    if (
      /\b(career|experience|background|history|redi\s*school|energy\s*crown|pgcb|cbiu|cox['’]?s\s*bazar|education|degree|university|publications?|papers?|irjmets|irjet)\b/i.test(q)
    ) {
      return "career_experience";
    }

    // 7. Services & Commercial Offerings
    if (
      /\b(services?|what\s+(can\s+you|do\s+you)\s+offer|software\s+development|consulting|contract|freelance|pricing|budget|build\s+for\s+me)\b/i.test(q)
    ) {
      return "services_offered";
    }

    // 8. Why Hire / Value Proposition
    if (
      /\b(why\s+hire|why\s+alimul|strengths?|value\s+proposition|what\s+makes\s+you\s+strong|why\s+should\s+we)\b/i.test(q)
    ) {
      return "why_hire";
    }

    // 9. Contact & Availability
    if (
      /\b(contact|email|available|availability|hire|relocat\w*|full[- ]time|remote|salary|interview|reach\s+out|inquiry|hire\s+you)\b/i.test(q)
    ) {
      return "contact_availability";
    }

    // 10. High-level Domain Overview (GenAI, Vision, Cloud, Robotics, Hardware, Data)
    if (
      /\b(genai|rag|computer\s*vision|autonomous|robotics?|embedded|cloud|devops|azure|terraform|hardware|workstations?|data\s*engineering)\b/i.test(q)
    ) {
      return "category_overview";
    }

    return "general_search";
  }

  // =========================================================================
  // Layer 2: Entity & Alias Extraction
  // =========================================================================
  function extractEntities(query) {
    const q = query.toLowerCase();
    const entities = {
      projectIds: [],
      matchedProjects: [],
      technologies: [],
      careerOrgs: [],
      domains: [],
      serviceDomains: []
    };

    if (!KB) return entities;

    // A. Project IDs
    const idMatches = query.match(/PRJ-[A-Z]+-\d{3}/gi);
    if (idMatches) {
      idMatches.forEach((id) => {
        const canonicalId = id.toUpperCase();
        if (!entities.projectIds.includes(canonicalId)) {
          entities.projectIds.push(canonicalId);
        }
      });
    }

    // B. Projects by Title / Alias
    (KB.projects || []).forEach((p) => {
      const titleLower = p.title.toLowerCase();
      if (q.includes(p.id.toLowerCase()) || q.includes(titleLower)) {
        entities.matchedProjects.push(p);
      } else {
        // Specific aliases
        if (p.id === "PRJ-GENAI-001" && (q.includes("enterprise rag") || q.includes("rag platform"))) {
          entities.matchedProjects.push(p);
        } else if (p.id === "PRJ-GENAI-002" && q.includes("movisabio")) {
          entities.matchedProjects.push(p);
        } else if (p.id === "PRJ-GENAI-003" && (q.includes("doctor") || q.includes("co-pilot"))) {
          entities.matchedProjects.push(p);
        } else if (p.id === "PRJ-CV-001" && (q.includes("lane detection") || q.includes("roadway perception"))) {
          entities.matchedProjects.push(p);
        } else if (p.id === "PRJ-ML-001" && (q.includes("heart disease") || q.includes("clinical risk"))) {
          entities.matchedProjects.push(p);
        } else if (p.id === "PRJ-CLOUD-001" && (q.includes("azure terraform") || q.includes("terraform cicd"))) {
          entities.matchedProjects.push(p);
        } else if (p.id === "PRJ-CLOUD-002" && q.includes("pgcb")) {
          entities.matchedProjects.push(p);
        } else if (p.id === "PRJ-CLOUD-004" && (q.includes("custom pc") || q.includes("workstation"))) {
          entities.matchedProjects.push(p);
        } else if (p.id === "PRJ-EMB-001" && (q.includes("solar vehicle") || q.includes("solar electric vehicle"))) {
          entities.matchedProjects.push(p);
        } else if (p.id === "PRJ-EMB-002" && q.includes("robotic arm")) {
          entities.matchedProjects.push(p);
        } else if (p.id === "PRJ-EMB-004" && q.includes("line follower")) {
          entities.matchedProjects.push(p);
        } else if (p.id === "PRJ-EMB-005" && q.includes("digital notice board")) {
          entities.matchedProjects.push(p);
        } else if (p.id === "PRJ-ENG-001" && q.includes("sparoo")) {
          entities.matchedProjects.push(p);
        } else if (p.id === "PRJ-ENG-002" && q.includes("ardupilot")) {
          entities.matchedProjects.push(p);
        } else if (p.id === "PRJ-ENG-003" && (q.includes("autocad") || q.includes("cad portfolio"))) {
          entities.matchedProjects.push(p);
        }
      }
    });

    // C. Technologies (via Aliases)
    (KB.technologies || []).forEach((tech) => {
      const hasMatch = tech.aliases.some((alias) => {
        const regex = new RegExp(`\\b${escapeRegex(alias)}\\b`, "i");
        return regex.test(q);
      });
      if (hasMatch && !entities.technologies.some((t) => t.id === tech.id)) {
        entities.technologies.push(tech);
      }
    });

    // D. Career Organizations
    (KB.career || []).forEach((org) => {
      const orgName = org.organization.toLowerCase();
      if (q.includes(orgName) || (orgName.includes("redi") && q.includes("redi"))) {
        entities.careerOrgs.push(org);
      }
    });

    // E. Services
    (KB.services || []).forEach((srv) => {
      const titleLower = srv.title.toLowerCase();
      if (q.includes(titleLower) || srv.domains.some((d) => q.includes(d.toLowerCase()))) {
        entities.serviceDomains.push(srv);
      }
    });

    return entities;
  }

  // =========================================================================
  // Layer 3: Retrieval and Ranking
  // =========================================================================
  function rankProjects(query, entities) {
    if (!KB || !KB.projects) return [];

    const tokens = tokenize(query);
    const scored = KB.projects.map((project) => {
      let score = 0;
      const reasons = [];

      // 1. Direct Project ID match (+100)
      if (entities.projectIds.includes(project.id)) {
        score += 100;
        reasons.push("exact_id_match");
      }

      // 2. Direct Matched Project by title/alias (+60)
      if (entities.matchedProjects.some((p) => p.id === project.id)) {
        score += 60;
        reasons.push("matched_title_alias");
      }

      // 3. Matched Technology overlap (+25 per tech)
      entities.technologies.forEach((tech) => {
        if (tech.projects.includes(project.id)) {
          score += 25;
          reasons.push(`tech_${tech.id}`);
        }
      });

      // 4. Token TF-IDF score
      let tfIdfScore = 0;
      tokens.forEach((token) => {
        if (tokenIndex[token] && tokenIndex[token].includes(project.id)) {
          const df = docFrequencies[token] || 1;
          const idf = Math.log(1 + (totalDocs / df));
          tfIdfScore += idf * 4;
        }
      });
      score += tfIdfScore;

      // 5. Evidence Bonus (+5 if verified repository or case study exists)
      if (project.repoUrl || project.caseStudyUrl) {
        score += 5;
      }

      return {
        project,
        score,
        reasons
      };
    });

    // Filter to positive scores and sort descending
    return scored
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score);
  }

  // =========================================================================
  // Layer 4: Grounded Answer Composition
  // =========================================================================
  function composeResponse(query) {
    const trimmed = (query || "").trim();
    if (!trimmed) {
      return {
        text: "Please enter a question or click one of the suggested prompts below to explore Alimul's 27 verified engineering projects, technical background, and service offerings.",
        followUps: [
          "What have you built with Generative AI & Enterprise RAG?",
          "What is your experience with Azure Cloud & Terraform?",
          "Explore all 27 projects by domain"
        ]
      };
    }

    const intent = detectIntent(trimmed);
    const entities = extractEntities(trimmed);
    const rankedResults = rankProjects(trimmed, entities);

    switch (intent) {
      case "project_compare":
        return composeComparisonResponse(trimmed, entities, rankedResults);

      case "job_fit":
        return composeJobFitResponse(trimmed, entities);

      case "project_lookup":
      case "architecture_summary":
        return composeProjectDetailResponse(rankedResults, entities, trimmed);

      case "tech_search":
        return composeTechSearchResponse(rankedResults, entities, trimmed);

      case "career_experience":
        return composeCareerResponse(entities, trimmed);

      case "services_offered":
        return composeServicesResponse(entities, trimmed);

      case "why_hire":
        return composeWhyHireResponse();

      case "contact_availability":
        return composeContactResponse();

      case "category_overview":
        return composeCategoryOverview(trimmed, rankedResults);

      default:
        if (rankedResults.length > 0 && rankedResults[0].score >= 15) {
          return composeGeneralRankedResponse(rankedResults, trimmed);
        }
        return composeGroundedFallback(trimmed);
    }
  }

  // --- Composition Handlers ---

  function composeComparisonResponse(query, entities, ranked) {
    let p1 = null;
    let p2 = null;

    if (entities.matchedProjects.length >= 2) {
      p1 = entities.matchedProjects[0];
      p2 = entities.matchedProjects[1];
    } else if (ranked.length >= 2) {
      p1 = ranked[0].project;
      p2 = ranked[1].project;
    } else {
      return {
        text: `### Project Comparison\n\nTo compare two specific initiatives, please mention their titles or IDs (for example: *"Compare the Enterprise RAG platform and Heart Disease ML project"* or *"Compare PRJ-GENAI-001 and PRJ-CLOUD-001"*).\n\nHere are two flagship production prototypes you can compare right away:\n- **PRJ-GENAI-001** (Enterprise RAG Knowledge Platform)\n- **PRJ-ML-001** (Heart Disease Clinical Risk Prediction)`,
        followUps: [
          "Compare Enterprise RAG and Heart Disease ML",
          "Compare Autonomous Lane Detection and CARLA Simulation",
          "Compare Azure Terraform CI/CD and PGCB Web Portal"
        ]
      };
    }

    const statusBadge = (s) => `\`${s}\``;

    const markdown = [
      `### Technical Comparison: ${p1.title} vs. ${p2.title}\n`,
      `Here is a structured comparison based strictly on documented engineering records:\n`,
      `| Comparison Dimension | **${p1.title}** (\`${p1.id}\`) | **${p2.title}** (\`${p2.id}\`) |`,
      `| :--- | :--- | :--- |`,
      `| **Domain** | ${p1.domain} | ${p2.domain} |`,
      `| **Development Period** | ${p1.period} | ${p2.period} |`,
      `| **Status Taxonomy** | ${statusBadge(p1.status)} | ${statusBadge(p2.status)} |`,
      `| **Primary Problem** | ${p1.summary.split(".")[0]}. | ${p2.summary.split(".")[0]}. |`,
      `| **Core Stack** | ${p1.technologies.slice(0, 4).join(", ")} | ${p2.technologies.slice(0, 4).join(", ")} |`,
      `| **Verified Evidence** | ${p1.repoUrl ? `[GitHub Repository](${p1.repoUrl})` : "Documentation records"} | ${p2.repoUrl ? `[GitHub Repository](${p2.repoUrl})` : "Documentation records"} |`,
      `| **Known Limitations** | ${p1.limitations} | ${p2.limitations} |\n`,
      `**Architectural Contrast:**`,
      `- **${p1.id}**: ${p1.architecture ? p1.architecture.implemented : p1.summary}`,
      `- **${p2.id}**: ${p2.architecture ? p2.architecture.implemented : p2.summary}\n`,
      `Both projects demonstrate modular software design, containerization, and documented evaluation boundaries.`
    ].join("\n");

    return {
      text: markdown,
      followUps: [
        `Explore technical architecture of ${p1.id}`,
        `Explore technical architecture of ${p2.id}`,
        "Analyze Alimul's fit for an AI Solutions Engineer role"
      ]
    };
  }

  function composeJobFitResponse(query, entities) {
    const qLower = query.toLowerCase();

    // Key skill areas to inspect against verified documentation
    const SKILL_CHECKLIST = [
      { name: "Python (AsyncIO, FastAPI)", key: "python", projects: ["PRJ-GENAI-001", "PRJ-ML-001"], status: "Direct Match" },
      { name: "Generative AI & Enterprise RAG", key: "rag", projects: ["PRJ-GENAI-001", "PRJ-GENAI-002"], status: "Direct Match" },
      { name: "Vector Search (pgvector, BM25, RRF)", key: "pgvector", projects: ["PRJ-GENAI-001"], status: "Direct Match" },
      { name: "Machine Learning (scikit-learn, XGBoost, SHAP)", key: "scikit", projects: ["PRJ-ML-001"], status: "Direct Match" },
      { name: "Microsoft Azure Cloud Platform", key: "azure", projects: ["PRJ-CLOUD-001", "PRJ-DATA-001"], status: "Direct Match" },
      { name: "Terraform Infrastructure as Code", key: "terraform", projects: ["PRJ-CLOUD-001"], status: "Direct Match" },
      { name: "Containerization (Docker)", key: "docker", projects: ["PRJ-GENAI-001", "PRJ-ML-001"], status: "Direct Match" },
      { name: "Computer Vision & Perception (OpenCV, YOLO)", key: "opencv", projects: ["PRJ-CV-001", "PRJ-CV-002"], status: "Direct Match" },
      { name: "Embedded Systems & C/C++", key: "embedded", projects: ["PRJ-EMB-001", "PRJ-EMB-004"], status: "Direct Match" },
      { name: "Distributed Data Pipelines (PySpark, Kafka)", key: "spark", projects: ["PRJ-DATA-002"], status: "Supporting Experience" },
      { name: "Relational Databases & SQL (PostgreSQL)", key: "sql", projects: ["PRJ-GENAI-001", "PRJ-CLOUD-002"], status: "Direct Match" }
    ];

    const matchedSkills = [];
    const supportingSkills = [];
    const gapsOrUnconfirmed = [];

    SKILL_CHECKLIST.forEach((item) => {
      if (qLower.includes(item.key) || entities.technologies.some((t) => t.id.includes(item.key))) {
        if (item.status === "Direct Match") {
          matchedSkills.push(item);
        } else {
          supportingSkills.push(item);
        }
      }
    });

    // Common skills visitors might search for that are NOT in the core verified inventory
    const POTENTIAL_GAPS = ["kubernetes administration (cka)", "aws certified", "gcp professional", "rust", "go / golang", "swift", "react native", "solidity / web3"];
    POTENTIAL_GAPS.forEach((gap) => {
      if (qLower.includes(gap)) {
        gapsOrUnconfirmed.push(gap.toUpperCase());
      }
    });

    const markdown = [
      `### Grounded Role & Job-Fit Suitability Analysis\n`,
      `Based strictly on Alimul's **27 verified projects**, professional cloud experience at **Energy Crown**, and instruction at **ReDI School Berlin**:\n`,
      `#### 1. Documented Strong Competency Matches`,
      matchedSkills.length > 0
        ? matchedSkills.map((m) => `- **${m.name}**: Supported by verified projects \`${m.projects.join("`, `")}\`.`).join("\n")
        : `- **Generative AI, RAG & LLM Systems**: Production-grade microservices with hybrid retrieval (\`PRJ-GENAI-001\`).\n- **Python & FastAPI**: Asynchronous API backends with containerization (\`PRJ-GENAI-001\`, \`PRJ-ML-001\`).\n- **Cloud Infrastructure (Azure & Terraform)**: Zero-drift IaC with automated CI/CD (\`PRJ-CLOUD-001\`).\n- **Applied Machine Learning & MLOps**: End-to-end models with SHAP explainability and Docker packaging (\`PRJ-ML-001\`).`,
      `\n#### 2. Systems Grounding & Differentiating Advantages`,
      `- **Dual Electrical & Software Foundation**: B.Sc. in Electrical and Electronic Engineering provides deep understanding of compute constraints, thermal limits, and hardware-software interop.`,
      `- **Technical Articulation & Mentorship**: Proven pedagogy as a volunteer Python Instructor at ReDI School of Digital Integration Berlin.`,
      `- **Strict Zero-Hallucination Discipline**: Prioritizes measurable retrieval metrics (Recall@k, latency SLAs) over ungrounded claims.\n`,
      gapsOrUnconfirmed.length > 0
        ? `#### 3. Identified Gaps or Needs Confirmation\n` +
          gapsOrUnconfirmed.map((g) => `- **${g}**: Not currently documented in Alimul's verified project inventory. May require direct interview clarification.`).join("\n") + "\n"
        : `#### 3. Honest Scope Boundaries\n- Commercial projects are distinguished from academic prototypes and learning exercises.\n- No unverified enterprise certifications or multi-tenant production SLAs are fabricated.\n`,
      `#### 4. Verified Target Roles`,
      `Alimul is well-suited for: **AI Solutions Engineer**, **GenAI Systems Engineer**, **MLOps / AI Platform Engineer**, and **Cloud Solutions Architect**.`
    ].join("\n");

    return {
      text: markdown,
      followUps: [
        "What have you built with Generative AI & Enterprise RAG?",
        "What is your experience with Azure Cloud & Terraform?",
        "How can I contact Alimul for an interview?"
      ]
    };
  }

  function composeProjectDetailResponse(ranked, entities, query) {
    if (!ranked || ranked.length === 0) {
      return composeGroundedFallback(query);
    }

    const top = ranked[0].project;
    const relatedLinks = [];
    if (top.caseStudyUrl) {
      relatedLinks.push(`[Read Architectural Case Study →](${top.caseStudyUrl})`);
    }
    if (top.repoUrl) {
      relatedLinks.push(`[View GitHub Repository ↗](${top.repoUrl})`);
    }
    if (top.liveUrl) {
      relatedLinks.push(`[Visit Live System ↗](${top.liveUrl})`);
    }

    const markdown = [
      `### Project: ${top.title} (\`${top.id}\`)\n`,
      `**Domain:** ${top.domain}  `,
      `**Period:** ${top.period}  `,
      `**Status:** \`${top.status}\`  \n`,
      `**Summary:**  \n${top.summary}\n`,
      `**Confirmed Technologies:**  \n${top.technologies.map((t) => `\`${t}\``).join(", ")}\n`,
      top.architecture
        ? `**Technical Architecture:**  \n- **Implemented:** ${top.architecture.implemented}\n- **Design Strategy:** ${top.architecture.design}\n- **Verification Notes:** ${top.architecture.notes}\n`
        : "",
      `**Evidence & Status:**  \n${top.evidence}\n`,
      `> **Scope & Evidence Limitation:** ${top.limitations}\n`,
      relatedLinks.length > 0 ? relatedLinks.join(" &nbsp;|&nbsp; ") : ""
    ].join("\n");

    return {
      text: markdown,
      followUps: [
        top.relatedProjects && top.relatedProjects.length > 0
          ? `Tell me about related project ${top.relatedProjects[0]}`
          : "What are your core AI & Machine Learning skills?",
        "Compare this with another technical project",
        "Explore full 27-project archive"
      ]
    };
  }

  function composeTechSearchResponse(ranked, entities, query) {
    const matchedTechs = entities.technologies;

    if (matchedTechs.length === 0 && entities.projectIds.length === 0 && entities.matchedProjects.length === 0) {
      return composeGroundedFallback(query);
    }

    const techName = matchedTechs.length > 0 ? matchedTechs.map((t) => t.name).join(" and ") : "the requested technologies";

    if (!ranked || ranked.length === 0) {
      return composeGroundedFallback(query);
    }

    const topProjects = ranked.slice(0, 4);

    const markdown = [
      `### Verified Projects Using ${techName}\n`,
      `Found **${ranked.length} documented projects** in Alimul's verified inventory utilizing these technologies:\n`,
      ...topProjects.map((item, idx) => {
        const p = item.project;
        const link = p.caseStudyUrl ? `[Case Study](${p.caseStudyUrl})` : (p.repoUrl ? `[GitHub](${p.repoUrl})` : "");
        return `${idx + 1}. **${p.title}** (\`${p.id}\` · \`${p.status}\`)\n   - ${p.summary.split(".")[0]}.\n   - **Stack:** ${p.technologies.slice(0, 5).join(", ")}${link ? ` · ${link}` : ""}`;
      }),
      ranked.length > 4 ? `\n*...and ${ranked.length - 4} additional projects in the archive.*` : "",
      `\nExplore the complete portfolio filtered by domain at [Full Portfolio Archive](portfolio.html).`
    ].join("\n");

    return {
      text: markdown,
      followUps: [
        `Tell me more about ${topProjects[0].project.id}`,
        "Analyze Alimul's fit for an AI Solutions Engineer role",
        "What services do you offer with this stack?"
      ]
    };
  }

  function composeCareerResponse(entities, query) {
    const qLower = query.toLowerCase();

    // If query asks for experience as/in/with a specific role/topic, verify it is in knowledge base
    if (/\bexperience\s+(as|in|with)\b/i.test(qLower)) {
      const isKnown = entities.careerOrgs.length > 0 || entities.technologies.length > 0 || entities.matchedProjects.length > 0 ||
        /\b(software|cloud|azure|python|instructor|teaching|engineering|ai|solutions|systems|robotics|hardware)\b/i.test(qLower);
      if (!isKnown) {
        return composeGroundedFallback(query);
      }
    }

    // Check if query is about education or publications
    if (qLower.includes("education") || qLower.includes("degree") || qLower.includes("cbiu") || qLower.includes("university")) {
      const edu = KB.identity.education[0];
      return {
        text: `### Academic Education & Research\n\n- **Degree:** ${edu.degree}\n- **Institution:** ${edu.institution}\n- **Period:** ${edu.period}\n- **Core Engineering Focus:** ${edu.focus}\n- **Capstone Initiative:** Solar Electric Vehicle with Multi-Sensor Collision Alert (\`PRJ-EMB-001\`).\n\nAlimul also authored two peer-reviewed academic papers published in international journals in November 2022.`,
        followUps: [
          "Tell me about your peer-reviewed publications",
          "What have you built in Robotics & Embedded Systems?",
          "Why choose Alimul as an AI Solutions Engineer?"
        ]
      };
    }

    if (qLower.includes("publication") || qLower.includes("paper") || qLower.includes("irjmets") || qLower.includes("irjet")) {
      return {
        text: `### Peer-Reviewed Publications\n\nAlimul has authored two peer-reviewed engineering research publications:\n\n1. **"Development of IoT-Based Digital Notice Board"**\n   - **Journal:** *International Research Journal of Modernization in Engineering Technology and Science (IRJMETS)*\n   - **Published:** November 2022 (Volume 04, Issue 11)\n   - **Associated Project:** \`PRJ-EMB-005\`\n\n2. **"Implementation of E-Commerce Auction Web Application SPAROO"**\n   - **Journal:** *International Research Journal of Engineering and Technology (IRJET)*\n   - **Published:** November 2022 (Volume 09, Issue 11)\n   - **Associated Project:** \`PRJ-ENG-001\`\n\nBoth papers validate hands-on experimental research in microcontroller communications and web transactional architectures.`,
        followUps: [
          "Tell me about PRJ-EMB-005 (Digital Notice Board)",
          "Tell me about PRJ-ENG-001 (SPAROO Web App)",
          "What is your professional work experience?"
        ]
      };
    }

    // Default: Career Experience
    const markdown = [
      `### Professional Experience & Career Milestones\n`,
      `Alimul's professional background combines cloud engineering, full-stack software development, and community technical mentorship:\n`,
      ...(KB.career || []).map((exp) => {
        return `#### ${exp.role} — **${exp.organization}**\n*${exp.location} · ${exp.period}*\n${exp.description}\n` +
          exp.highlights.map((h) => `- ${h}`).join("\n");
      }),
      `\n**Languages:**\n` +
      KB.identity.languages.map((l) => `- **${l.language}:** ${l.proficiency}`).join("\n")
    ].join("\n");

    return {
      text: markdown,
      followUps: [
        "Tell me about your role at ReDI School Berlin",
        "What did you build at Energy Crown?",
        "Are you available for full-time roles?"
      ]
    };
  }

  function composeServicesResponse(entities, query) {
    const matchedSrv = entities.serviceDomains;

    if (matchedSrv.length > 0) {
      const srv = matchedSrv[0];
      return {
        text: `### Professional Service: ${srv.title}\n\n**Overview:** ${srv.description}\n\n**Key Deliverables:**\n${srv.deliverables.map((d) => `- ${d}`).join("\n")}\n\nYou can also calculate expected costs and timelines for this service in the [Project Budget Estimator](index.html#estimator) or generate a 21-part formal technical scope in the [AI Proposal Generator](index.html#proposal-generator).`,
        followUps: [
          "What other services do you offer?",
          "How can I submit a project inquiry?",
          "What is your experience with Enterprise RAG?"
        ]
      };
    }

    const markdown = [
      `### Professional Engineering Services\n`,
      `Alimul provides high-impact engineering solutions across **9 comprehensive domains**:\n`,
      (KB.services || []).map((s, i) => `${i + 1}. **${s.title}**: ${s.description.split(".")[0]}.`).join("\n"),
      `\n**Interactive Planning Tools on Site:**`,
      `- **[Section 08: Services Catalog](index.html#services)** — Full breakdown of all 95 service capabilities.`,
      `- **[Budget Estimator](index.html#estimator)** — Instant cost and timeline calculator in USD, EUR, and BDT.`,
      `- **[AI Proposal Generator](index.html#proposal-generator)** — Generate formal, customized technical project proposals.`
    ].join("\n");

    return {
      text: markdown,
      followUps: [
        "What AI & Automation solutions do you provide?",
        "What Cloud & DevOps services do you offer?",
        "How do I submit a project proposal?"
      ]
    };
  }

  function composeWhyHireResponse() {
    const markdown = [
      `### Why Choose Alimul as an AI Solutions Engineer?\n`,
      `Alimul bridges the gap between **theoretical AI models and bulletproof production infrastructure** through four grounded engineering advantages:\n`,
      `1. **True Systems Engineering Grounding**\n   7+ years of electrical engineering diagnostics, circuit design, and hardware assembly combined with modern cloud and AI architectures. He understands compute limits, memory bandwidth, GPU bottlenecks, and network topologies.`,
      `2. **Full-Lifecycle Implementation Capability**\n   Capable of owning the entire AI delivery lifecycle: Problem Scoping & SLA contracts → High-performance Vector Ingestion → Hybrid RAG Retrieval (pgvector + BM25) → Infrastructure as Code (Terraform) → Containerized MLOps & CI/CD deployment.`,
      `3. **Technical Pedagogy & Team Collaboration**\n   Volunteer Python Instructor at ReDI School of Digital Integration Berlin, mentoring aspiring developers and communicating complex distributed architectures with extreme clarity to cross-functional stakeholders.`,
      `4. **Disciplined Hallucination & Cost Control**\n   Focuses strictly on measurable engineering outcomes: sub-second latency SLAs, claim-level attribution verification, deterministic evaluation gates, and cloud cost ceilings.`
    ].join("\n\n");

    return {
      text: markdown,
      followUps: [
        "What have you built with Generative AI & Enterprise RAG?",
        "What is your experience with Azure Cloud & Terraform?",
        "Are you currently available for hiring?"
      ]
    };
  }

  function composeContactResponse() {
    const c = KB.contact;
    const markdown = [
      `### Availability & Contact Information\n`,
      `**Current Status:** \`${c.availability}\`\n`,
      `**Target Roles:**`,
      `- AI Solutions Engineer`,
      `- GenAI Systems Engineer`,
      `- MLOps / AI Platform Engineer`,
      `- Cloud Solutions Architect\n`,
      `**Work Arrangements:**`,
      `- Full-time Onsite (Berlin, Germany)`,
      `- Hybrid (Germany / Europe)`,
      `- Remote (Worldwide)\n`,
      `**Direct Contact Channels:**`,
      `- **Email:** [${c.email}](mailto:${c.email})`,
      `- **LinkedIn:** [linkedin.com/in/alimul-fazal-nabil](${c.linkedin})`,
      `- **GitHub:** [github.com/alimulfazalnabil](${c.github})`,
      `- **LeetCode:** [leetcode.com/u/alimul_nabil](${c.leetcode})\n`,
      `You can also scroll down to the **[Interactive Contact Form](#contact)** to send a direct message with pre-filled intent!`
    ].join("\n");

    return {
      text: markdown,
      followUps: [
        "Analyze your fit for an AI Solutions Engineer role",
        "What are your flagship technical projects?",
        "Why Alimul for an AI Solutions Engineering project?"
      ]
    };
  }

  function composeCategoryOverview(query, ranked) {
    const q = query.toLowerCase();
    let categoryName = "Engineering Projects";
    let filterDomain = "";

    if (q.includes("genai") || q.includes("rag") || q.includes("llm")) {
      categoryName = "Generative AI, RAG & Intelligent Applications";
      filterDomain = "genai";
    } else if (q.includes("vision") || q.includes("carla") || q.includes("cv") || q.includes("perception")) {
      categoryName = "Computer Vision and Autonomous Systems";
      filterDomain = "vision";
    } else if (q.includes("azure") || q.includes("terraform") || q.includes("cloud") || q.includes("devops")) {
      categoryName = "Cloud Computing and Data Engineering";
      filterDomain = "cloud-data";
    } else if (q.includes("robotics") || q.includes("embedded") || q.includes("arduino")) {
      categoryName = "Robotics and Embedded Systems";
      filterDomain = "embedded";
    } else if (q.includes("hardware") || q.includes("workstation") || q.includes("pc")) {
      categoryName = "Hardware Engineering and System Integration";
      filterDomain = "hardware";
    } else if (q.includes("data")) {
      categoryName = "Data Engineering & Analytics";
      filterDomain = "cloud-data";
    }

    const filtered = (KB.projects || []).filter((p) => {
      if (filterDomain === "genai") return p.domainKey === "genai";
      if (filterDomain === "vision") return p.domainKey === "vision";
      if (filterDomain === "cloud-data") return p.domainKey === "cloud-data" || p.domainKey === "automation";
      if (filterDomain === "embedded") return p.domainKey === "embedded";
      if (filterDomain === "hardware") return p.domainKey === "hardware";
      return true;
    });

    const markdown = [
      `### Domain Overview: ${categoryName}\n`,
      `Alimul has engineered **${filtered.length} documented projects** in this domain:\n`,
      ...filtered.map((p, idx) => {
        const link = p.caseStudyUrl ? `[Case Study](${p.caseStudyUrl})` : (p.repoUrl ? `[GitHub](${p.repoUrl})` : "");
        return `${idx + 1}. **${p.title}** (\`${p.id}\` · \`${p.status}\`)\n   - ${p.summary.split(".")[0]}.\n   - **Stack:** ${p.technologies.slice(0, 4).join(", ")}${link ? ` · ${link}` : ""}`;
      }),
      `\nExplore all 27 projects in the [Full Portfolio Archive](portfolio.html).`
    ].join("\n");

    return {
      text: markdown,
      followUps: [
        filtered.length > 0 ? `Tell me more about ${filtered[0].id}` : "What are your core technologies?",
        "Compare two technical projects in this domain",
        "Analyze fit for an AI Solutions Engineer role"
      ]
    };
  }

  function composeGeneralRankedResponse(ranked, query) {
    const top = ranked.slice(0, 3);
    const markdown = [
      `### Relevant Engineering Results for "${escapeHTML(query)}"\n`,
      `Matched **${ranked.length} verified records** in Alimul's knowledge base:\n`,
      ...top.map((item, idx) => {
        const p = item.project;
        const link = p.caseStudyUrl ? `[Read Case Study](${p.caseStudyUrl})` : (p.repoUrl ? `[View Repository](${p.repoUrl})` : "");
        return `#### ${idx + 1}. ${p.title} (\`${p.id}\`)\n- **Status:** \`${p.status}\` · **Domain:** ${p.domain}\n- **Summary:** ${p.summary}\n- **Stack:** ${p.technologies.slice(0, 5).join(", ")}${link ? `\n- **Evidence:** ${link}` : ""}`;
      }),
      `\nFor deep dives across all 27 projects, visit the [Full Project Archive](portfolio.html) or the [Interactive Knowledge Graph](portfolio.html?view=graph).`
    ].join("\n\n");

    return {
      text: markdown,
      followUps: [
        `Tell me more about ${top[0].project.id}`,
        "Compare my technical projects",
        "Analyze Alimul's fit for an AI Solutions Engineer role"
      ]
    };
  }

  function composeGroundedFallback(query) {
    return {
      text: `I couldn't find enough verified information in my current knowledge base to answer that reliably. You can explore the relevant projects or contact Alimul for clarification.\n\nHere are verified resources you can explore:\n- **[Full Engineering Portfolio (27 Projects)](portfolio.html):** Complete archive categorized across 9 engineering domains.\n- **[Interactive Career Knowledge Graph](portfolio.html?view=graph):** Visual map of all systems, projects, and technologies.\n- **[Architectural Case Studies](case-studies/enterprise-rag-platform.html):** Deep dives into Enterprise RAG, Autonomous Perception, Clinical Risk ML, and Azure Terraform CI/CD.\n- **[Contact Alimul Directly](#contact):** Reach out via email or LinkedIn for project questions.`,
      followUps: [
        "What have you built with Generative AI & Enterprise RAG?",
        "What is your experience with Azure Cloud & Terraform?",
        "How can I contact Alimul for an inquiry?"
      ]
    };
  }

  // =========================================================================
  // Safe Markdown-Like Text Formatter
  // =========================================================================
  function renderSafeMarkdown(markdownText) {
    if (!markdownText) return "";

    // 1. Split into lines
    const rawLines = markdownText.split("\n");
    let html = "";
    let inList = false;
    let listType = "ul";
    let inTable = false;
    let tableRows = [];

    const closeListIfNeeded = () => {
      if (inList) {
        html += `</${listType}>`;
        inList = false;
      }
    };

    const flushTableIfNeeded = () => {
      if (inTable && tableRows.length > 0) {
        let tableHtml = '<div class="ai-table-wrap"><table class="ai-compare-table">';
        tableRows.forEach((row, idx) => {
          const isHeader = idx === 0;
          const tag = isHeader ? "th" : "td";
          const cells = row.split("|").filter((c, i, arr) => i > 0 && i < arr.length - 1);
          tableHtml += "<tr>";
          cells.forEach((cell) => {
            tableHtml += `<${tag}>${formatInline(cell.trim())}</${tag}>`;
          });
          tableHtml += "</tr>";
        });
        tableHtml += "</table></div>";
        html += tableHtml;
        inTable = false;
        tableRows = [];
      }
    };

    rawLines.forEach((line) => {
      const trimmed = line.trim();

      // Table row
      if (trimmed.startsWith("|") && trimmed.endsWith("|")) {
        closeListIfNeeded();
        if (/^\|(\s*:?-+:?\s*\|)+$/.test(trimmed)) {
          // Table separator row, ignore
          return;
        }
        inTable = true;
        tableRows.push(trimmed);
        return;
      } else {
        flushTableIfNeeded();
      }

      // Empty line
      if (!trimmed) {
        closeListIfNeeded();
        return;
      }

      // Blockquote
      if (trimmed.startsWith("> ")) {
        closeListIfNeeded();
        html += `<blockquote>${formatInline(trimmed.substring(2))}</blockquote>`;
        return;
      }

      // Headings
      if (trimmed.startsWith("### ")) {
        closeListIfNeeded();
        html += `<h4>${formatInline(trimmed.substring(4))}</h4>`;
        return;
      }
      if (trimmed.startsWith("#### ")) {
        closeListIfNeeded();
        html += `<h5>${formatInline(trimmed.substring(5))}</h5>`;
        return;
      }

      // Unordered list item
      if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
        if (!inList || listType !== "ul") {
          closeListIfNeeded();
          html += "<ul>";
          inList = true;
          listType = "ul";
        }
        html += `<li>${formatInline(trimmed.substring(2))}</li>`;
        return;
      }

      // Ordered list item
      const numMatch = trimmed.match(/^(\d+)\.\s+(.*)/);
      if (numMatch) {
        if (!inList || listType !== "ol") {
          closeListIfNeeded();
          html += "<ol>";
          inList = true;
          listType = "ol";
        }
        html += `<li>${formatInline(numMatch[2])}</li>`;
        return;
      }

      // Standard paragraph
      closeListIfNeeded();
      html += `<p>${formatInline(trimmed)}</p>`;
    });

    closeListIfNeeded();
    flushTableIfNeeded();

    return html;
  }

  /**
   * Format inline bold, code, and validated links
   */
  function formatInline(str) {
    if (!str) return "";

    // Escape raw HTML first
    let s = escapeHTML(str);

    // Inline code: `code`
    s = s.replace(/`([^`]+)`/g, "<code>$1</code>");

    // Bold: **text**
    s = s.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");

    // Italic: *text*
    s = s.replace(/\*([^*]+)\*/g, "<em>$1</em>");

    // Links: [text](url) - strictly allow http, https, relative, or anchor
    s = s.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, text, url) => {
      const cleanUrl = url.trim();
      const isSafe = /^https?:\/\//i.test(cleanUrl) || cleanUrl.startsWith("#") || cleanUrl.startsWith("mailto:") || /^[a-zA-Z0-9_\-\.\/]+(\.html)?([?#].*)?$/.test(cleanUrl);
      if (!isSafe) {
        return escapeHTML(text);
      }
      const isExternal = /^https?:\/\//i.test(cleanUrl);
      const targetAttr = isExternal ? ' target="_blank" rel="noopener noreferrer"' : "";
      return `<a href="${cleanUrl}" class="ai-twin-link"${targetAttr}>${text}</a>`;
    });

    return s;
  }

  function escapeHTML(str) {
    if (typeof document !== "undefined") {
      const div = document.createElement("div");
      div.textContent = str;
      return div.innerHTML;
    }
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  // =========================================================================
  // UI Controller & DOM Event Handlers
  // =========================================================================
  function initAITwin() {
    chatBody = document.getElementById("aiTwinBody");
    chatInput = document.getElementById("aiTwinInput");
    sendBtn = document.getElementById("aiTwinSendBtn");
    clearBtn = document.getElementById("aiTwinClearBtn");
    infoBtn = document.getElementById("aiTwinInfoBtn");
    infoPanel = document.getElementById("aiTwinInfoPanel");
    starterChips = Array.from(document.querySelectorAll(".ai-twin-chip"));

    if (!chatBody || !chatInput || !sendBtn) return;

    // Build the inverted search index on load
    buildSearchIndex();

    // Send button click
    sendBtn.addEventListener("click", () => {
      handleUserSubmit();
    });

    // Enter key submits (Shift+Enter allows multiline input)
    chatInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleUserSubmit();
      }
    });

    // Handle suggestion starter chips
    starterChips.forEach((chip) => {
      chip.addEventListener("click", () => {
        const query = chip.getAttribute("data-query") || chip.textContent.trim().replace(/^[^\w]+/, "").trim();
        chatInput.value = query;
        handleUserSubmit();
      });
    });

    // Clear chat button
    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        chatBody.innerHTML = `
          <div class="ai-msg ai-msg-bot">
            <div class="ai-avatar">⚡</div>
            <div class="ai-bubble">
              <p>Conversation cleared. I am Alimul's <strong>AI Twin</strong>, running locally in your browser. Grounded strictly in his 27 verified projects, engineering background, and tech stack.</p>
              <p style="font-size:13px; color:var(--text-subtle); margin-top:6px;">Ask a technical question or click any suggestion chip to begin!</p>
            </div>
          </div>
        `;
      });
    }

    // Info panel toggle
    if (infoBtn && infoPanel) {
      infoBtn.addEventListener("click", () => {
        const isHidden = infoPanel.classList.toggle("is-hidden");
        infoBtn.setAttribute("aria-expanded", !isHidden);
      });
    }

    // Delegate copy response button and dynamic follow-up clicks
    chatBody.addEventListener("click", (e) => {
      // Copy Response Button
      const copyBtn = e.target.closest(".ai-copy-btn");
      if (copyBtn) {
        const bubble = copyBtn.closest(".ai-bubble");
        if (bubble) {
          const rawText = bubble.getAttribute("data-raw-response") || bubble.innerText;
          navigator.clipboard.writeText(rawText).then(() => {
            const originalText = copyBtn.innerHTML;
            copyBtn.innerHTML = "✓ Copied!";
            copyBtn.classList.add("copied");
            setTimeout(() => {
              copyBtn.innerHTML = originalText;
              copyBtn.classList.remove("copied");
            }, 2000);
          }).catch(() => {
            copyBtn.textContent = "Error copying";
          });
        }
        return;
      }

      // Dynamic Follow-up Chip
      const followUpChip = e.target.closest(".ai-followup-chip");
      if (followUpChip) {
        const query = followUpChip.getAttribute("data-query") || followUpChip.textContent.trim();
        chatInput.value = query;
        handleUserSubmit();
      }
    });
  }

  function handleUserSubmit() {
    if (isResponding) return;
    const text = (chatInput.value || "").trim();
    if (!text) return;

    // Append user message bubble
    appendMessage("user", escapeHTML(text), text);
    chatInput.value = "";
    isResponding = true;
    sendBtn.disabled = true;

    // Show calculation typing indicator
    const typingIndicator = showTypingIndicator();

    // Deterministic Layered Retrieval (< 5ms computation)
    const startTime = performance.now();
    const result = composeResponse(text);
    const computeTime = Math.round(performance.now() - startTime);

    // Brief realistic calculation delay for UI polish (240ms)
    setTimeout(() => {
      typingIndicator.remove();
      appendBotResponse(result, computeTime);
      isResponding = false;
      sendBtn.disabled = false;
      chatInput.focus();
    }, 240);
  }

  function appendMessage(sender, htmlContent, rawText = "") {
    const msgDiv = document.createElement("div");
    msgDiv.className = `ai-msg ai-msg-${sender}`;

    const avatar = document.createElement("div");
    avatar.className = "ai-avatar";
    avatar.textContent = sender === "user" ? "👤" : "⚡";

    const bubble = document.createElement("div");
    bubble.className = "ai-bubble";
    if (rawText) {
      bubble.setAttribute("data-raw-response", rawText);
    }
    bubble.innerHTML = htmlContent;

    msgDiv.appendChild(avatar);
    msgDiv.appendChild(bubble);

    chatBody.appendChild(msgDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  function appendBotResponse(result, computeTime) {
    const msgDiv = document.createElement("div");
    msgDiv.className = "ai-msg ai-msg-bot";

    const avatar = document.createElement("div");
    avatar.className = "ai-avatar";
    avatar.textContent = "⚡";

    const bubble = document.createElement("div");
    bubble.className = "ai-bubble";
    bubble.setAttribute("data-raw-response", result.text);

    // Response body rendered with safe markdown
    const contentDiv = document.createElement("div");
    contentDiv.className = "ai-response-content";
    contentDiv.innerHTML = renderSafeMarkdown(result.text);
    bubble.appendChild(contentDiv);

    // Response Action Bar (Copy Button + Retrieval Metadata)
    const footerBar = document.createElement("div");
    footerBar.className = "ai-response-footer";
    footerBar.innerHTML = `
      <span class="ai-retrieval-stat">⚡ Local deterministic retrieval · ${computeTime}ms</span>
      <button type="button" class="ai-copy-btn" title="Copy response to clipboard">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
        Copy Response
      </button>
    `;
    bubble.appendChild(footerBar);

    // Dynamic Follow-Up Chips
    if (result.followUps && result.followUps.length > 0) {
      const followUpContainer = document.createElement("div");
      followUpContainer.className = "ai-followup-chips";
      followUpContainer.innerHTML = `
        <span class="ai-followup-label">Suggested follow-ups:</span>
        <div class="ai-followup-list">
          ${result.followUps.map((q) => `<button type="button" class="ai-followup-chip" data-query="${escapeHTML(q)}">${escapeHTML(q)} →</button>`).join("")}
        </div>
      `;
      bubble.appendChild(followUpContainer);
    }

    msgDiv.appendChild(avatar);
    msgDiv.appendChild(bubble);

    chatBody.appendChild(msgDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  function showTypingIndicator() {
    const typingDiv = document.createElement("div");
    typingDiv.className = "ai-msg ai-msg-bot ai-typing-indicator";
    typingDiv.innerHTML = `
      <div class="ai-avatar">⚡</div>
      <div class="ai-bubble">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </div>
    `;
    chatBody.appendChild(typingDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
    return typingDiv;
  }

  // Export engine for test runner in Node.js
  if (typeof module !== "undefined" && module.exports) {
    buildSearchIndex();
    module.exports = {
      detectIntent,
      extractEntities,
      rankProjects,
      composeResponse,
      renderSafeMarkdown,
      buildSearchIndex,
      KB
    };
  }

  // Initialize in browser
  if (typeof document !== "undefined") {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", initAITwin);
    } else {
      initAITwin();
    }
  }
})();
