/**
 * ============================================================================
 * Media Showcase Data Module (media-data.js)
 * Authoritative source of truth for visual media assets, field captures,
 * technical demonstrations, and research presentations.
 * ============================================================================
 */

const MEDIA_ITEMS = [
  {
    id: "media-eng-field",
    title: "Engineering Leadership & Applied AI Solutions",
    description: "Alimul Fazal Nabil leading enterprise AI architecture, retrieval systems, and intelligent multi-agent orchestration across production and cloud environments.",
    category: "Engineering & Technical Demonstrations",
    mediaType: "image",
    src: "assets/images/profile.jpg",
    thumbnail: "assets/images/profile.jpg",
    alt: "Alimul Fazal Nabil professional engineering portrait and technical solutions lead",
    caption: "Alimul Fazal Nabil leading AI solutions, systems architecture, and engineering initiatives.",
    date: "2024–2026",
    relatedUrl: "#about",
    relatedLabel: "About Engineering Journey",
    originalUrl: "assets/images/profile.jpg",
    featured: true
  },
  {
    id: "media-cv-lane",
    title: "Autonomous Lane Perception & CARLA Simulator Bridge",
    description: "Deterministic roadway perception pipeline combining Canny edge extraction, dynamic ROI masking, Hough lines, and CARLA simulation testing for autonomous vehicle research.",
    category: "AI & Computer Vision",
    mediaType: "external",
    src: "assets/images/profile.jpg",
    thumbnail: "assets/images/profile.jpg",
    alt: "Autonomous lane detection pipeline and CARLA simulation roadway perception demo",
    caption: "Deterministic roadway vision pipeline combining Canny edge extraction, dynamic ROI masking, and CARLA synthetic testing.",
    date: "2023–2024",
    relatedUrl: "case-studies/autonomous-lane-detection.html",
    relatedLabel: "View Technical Case Study",
    originalUrl: "https://github.com/alimulfazalnabil/Autonomous-Lane-Detection",
    featured: false
  },
  {
    id: "media-robotics-arm",
    title: "4-Axis Articulated Servo Manipulator & Wireless Controller",
    description: "Multi-degree-of-freedom articulated robotic arm with PWM servo motion trajectories, kinematics control, and HC-05 serial telemetry for precision manipulation.",
    category: "Robotics & Hardware",
    mediaType: "external",
    src: "assets/images/profile.jpg",
    thumbnail: "assets/images/profile.jpg",
    alt: "4-axis articulated robotic arm hardware prototype controlled via Bluetooth",
    caption: "Multi-degree-of-freedom articulated robotic arm with PWM servo motion trajectories and HC-05 serial telemetry.",
    date: "2018–2019",
    relatedUrl: "https://github.com/alimulfazalnabil/Bluetooth-Controlled-Robotic-Arm",
    relatedLabel: "View GitHub Repository",
    originalUrl: "https://github.com/alimulfazalnabil/Bluetooth-Controlled-Robotic-Arm",
    featured: false
  },
  {
    id: "media-pub-iot",
    title: "IoT-Based Digital Notice Board Architecture (IRJMETS)",
    description: "Peer-reviewed research publication on microcontroller-driven IoT architectures published in the International Research Journal of Modernization in Engineering Technology and Science.",
    category: "Presentations & Publications",
    mediaType: "presentation",
    src: "https://www.irjmets.com/uploadedfiles/paper/issue_11_november_2022/31134/final/fin_irjmets1668848416.pdf",
    thumbnail: "assets/images/profile.jpg",
    alt: "Peer-reviewed publication on IoT-based digital architecture published in IRJMETS",
    caption: "Peer-reviewed research paper on microcontroller-driven IoT architectures published in IRJMETS (Nov 2022).",
    date: "November 2022",
    relatedUrl: "portfolio.html#projectGrid",
    relatedLabel: "View in Portfolio Archive",
    originalUrl: "https://www.irjmets.com/uploadedfiles/paper/issue_11_november_2022/31134/final/fin_irjmets1668848416.pdf",
    featured: false
  },
  {
    id: "media-pub-sparoo",
    title: "Online Auction & E-Commerce Distributed Platform (SPAROO)",
    description: "Peer-reviewed research paper detailing distributed transactional architecture for web auction systems published in the International Research Journal of Engineering and Technology.",
    category: "Presentations & Publications",
    mediaType: "presentation",
    src: "https://www.irjet.net/archives/V9/i11/IRJET-V9I1123.pdf",
    thumbnail: "assets/images/profile.jpg",
    alt: "Peer-reviewed engineering research paper on SPAROO distributed auction architecture published in IRJET",
    caption: "Research paper detailing distributed transactional architecture for web auction systems in IRJET (Nov 2022).",
    date: "November 2022",
    relatedUrl: "portfolio.html#projectGrid",
    relatedLabel: "View in Portfolio Archive",
    originalUrl: "https://www.irjet.net/archives/V9/i11/IRJET-V9I1123.pdf",
    featured: false
  },
  {
    id: "media-credentials-dossier",
    title: "Authoritative Engineering Dossier & Professional Credentials",
    description: "Comprehensive engineering dossier including BSc in Computer Engineering, verified professional certifications, peer-reviewed publications, and technical instructional milestones.",
    category: "Presentations & Publications",
    mediaType: "presentation",
    src: "Profile.pdf",
    thumbnail: "assets/images/profile.jpg",
    alt: "Alimul Fazal Nabil technical engineering credentials, education, and career documentation",
    caption: "Full engineering credentials, academic degree documentation, and certified technical milestones.",
    date: "2016–2026",
    relatedUrl: "Profile.pdf",
    relatedLabel: "Download Resume Dossier (PDF)",
    originalUrl: "Profile.pdf",
    featured: false
  }
];

// Pre-configured slots for user-supplied visual assets
// When files are placed in assets/media/, these can be uncommented to populate Drone Photography & Travel categories!
const PENDING_MEDIA_SLOTS = [
  {
    id: "media-drone-survey",
    title: "Aerial Photogrammetry & Orthomosaic Surveying Flight",
    category: "Drone Photography & Aerial Mapping",
    description: "High-resolution aerial multispectral mapping and autonomous GPS waypoint survey flight path.",
    pendingAssetPrompt: "Place aerial capture JPG in assets/media/drone-mapping.jpg"
  },
  {
    id: "media-travel-exploration",
    title: "Geographical Explorations & Field Work Logistics",
    category: "Travel & Exploration",
    description: "Field expedition documentation, ruggedized terrain inspections, and natural landscape captures.",
    pendingAssetPrompt: "Place travel photo in assets/media/travel-exploration.jpg"
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { MEDIA_ITEMS, PENDING_MEDIA_SLOTS };
}
