/**
 * ============================================================================
 * Media Showcase Data Module (media-data.js)
 * Authoritative source of truth for visual media assets, field captures,
 * technical demonstrations, and research presentations.
 * ============================================================================
 */

const MEDIA_ITEMS = [
  {
    id: "media-solar-tracking-lab",
    title: "Dual-Axis Solar Tracker & Microcontroller Engineering Lab",
    description: "Alimul Fazal Nabil calibrating an automated dual-axis solar tracking prototype with closed-loop light sensor feedback, servo motor actuation, and test telemetry in the university robotics and electronics laboratory.",
    category: "Engineering & Technical Demonstrations",
    mediaType: "image",
    src: "assets/images/solar-tracking-lab.jpg",
    thumbnail: "assets/images/solar-tracking-lab.jpg",
    alt: "Alimul Fazal Nabil working on dual-axis solar tracking prototype in robotics engineering lab",
    caption: "Alimul Fazal Nabil calibrating an automated dual-axis solar tracking prototype in the university robotics and embedded systems laboratory.",
    date: "2018–2020",
    relatedUrl: "portfolio.html#projectGrid",
    relatedLabel: "View Hardware Archive",
    originalUrl: "assets/images/solar-tracking-lab.jpg",
    featured: true
  },
  {
    id: "media-autonomous-path-planning",
    title: "Autonomous Obstacle Avoidance & Trajectory Path Planning",
    description: "Autonomous ground vehicle (UGV) executing real-time spatial path planning and dynamic obstacle avoidance across an indoor obstacle environment using multi-sensor fusion.",
    category: "AI & Computer Vision",
    mediaType: "image",
    src: "assets/images/autonomous-path-planning.jpg",
    thumbnail: "assets/images/autonomous-path-planning.jpg",
    alt: "Autonomous mobile robot navigating obstacle course with glowing trajectory path planning line",
    caption: "Real-time autonomous trajectory path planning and reactive obstacle avoidance navigation on a ground robotic vehicle.",
    date: "2021–2022",
    relatedUrl: "portfolio.html#projectGrid",
    relatedLabel: "Explore Robotics Project",
    originalUrl: "assets/images/autonomous-path-planning.jpg",
    featured: true
  },
  {
    id: "media-sensor-fusion-architecture",
    title: "Raspberry Pi + Sensor Fusion Perception Architecture",
    description: "Comprehensive perception schematic and system architecture bridging Raspberry Pi high-level vision computation with multi-directional ultrasonic sensor arrays and Arduino actuation.",
    category: "Robotics & Hardware",
    mediaType: "image",
    src: "assets/images/robot-sensor-fusion-architecture.jpg",
    thumbnail: "assets/images/robot-sensor-fusion-architecture.jpg",
    alt: "Architectural blueprint showing Raspberry Pi and sensor fusion architecture with ultrasonic sensing cones",
    caption: "Raspberry Pi + multi-sensor fusion architecture combining forward computer vision with panoramic ultrasonic telemetry.",
    date: "2021–2022",
    relatedUrl: "portfolio.html#projectGrid",
    relatedLabel: "View System Architecture",
    originalUrl: "assets/images/robot-sensor-fusion-architecture.jpg",
    featured: true
  },
  {
    id: "media-robot-hardware-prototype",
    title: "Autonomous Mobile Ground Robot Hardware Prototype",
    description: "Custom-fabricated mobile robot platform featuring multi-tiered acrylic chassis, Raspberry Pi compute board, Arduino Uno low-level controller, 4-array ultrasonic distance sensors, and illuminated LED headlights.",
    category: "Robotics & Hardware",
    mediaType: "image",
    src: "assets/images/autonomous-robot-hardware.jpg",
    thumbnail: "assets/images/autonomous-robot-hardware.jpg",
    alt: "High-angle view of custom autonomous robot prototype with illuminated LED headlights and multi-sensor array",
    caption: "Custom autonomous ground vehicle hardware build with Raspberry Pi, Arduino, multi-sonar array, and active headlight illumination.",
    date: "2021–2022",
    relatedUrl: "portfolio.html#projectGrid",
    relatedLabel: "View Hardware Specs",
    originalUrl: "assets/images/autonomous-robot-hardware.jpg",
    featured: true
  },
  {
    id: "media-quadcopter-drone",
    title: "Autonomous Quadcopter UAV Airframe & Avionics Testbed",
    description: "Multi-rotor quadcopter airframe assembly and flight avionics testbench, featuring high-thrust brushless motors, electronic speed controllers (ESCs), Pixhawk/ArduPilot interface, and laptop ground station telemetry.",
    category: "Drone Photography & Aerial Mapping",
    mediaType: "image",
    src: "assets/images/quadcopter-drone-testbench.jpg",
    thumbnail: "assets/images/quadcopter-drone-testbench.jpg",
    alt: "Autonomous multi-rotor quadcopter UAV airframe on laboratory testbench with laptop telemetry",
    caption: "Autonomous quadcopter airframe and avionics testbed under flight controller calibration and telemetry bench testing.",
    date: "2019–2020",
    relatedUrl: "portfolio.html#projectGrid",
    relatedLabel: "View Quadcopter Project",
    originalUrl: "assets/images/quadcopter-drone-testbench.jpg",
    featured: true
  },
  {
    id: "media-aeroguard-radar",
    title: "AeroGuard: Smart Obstacle Avoiding Robot with Radar Detection",
    description: "University laboratory exhibition of AeroGuard, an autonomous embedded ground vehicle utilizing servo-swept ultrasonic radar detection to identify, map, and navigate around aerial and ground obstacles in real time.",
    category: "Robotics & Hardware",
    mediaType: "image",
    src: "assets/images/aeroguard-radar-robot.jpg",
    thumbnail: "assets/images/aeroguard-radar-robot.jpg",
    alt: "AeroGuard smart obstacle-avoiding robot inside university exhibition display case",
    caption: "AeroGuard autonomous obstacle-avoidance robot on display in the academic robotics laboratory exhibit.",
    date: "2019–2021",
    relatedUrl: "portfolio.html#projectGrid",
    relatedLabel: "Explore Robotics Project",
    originalUrl: "assets/images/aeroguard-radar-robot.jpg",
    featured: true
  },
  {
    id: "media-six-wheel-rover",
    title: "6-Wheel Terrain Rover & Automated Fluid Dispensing System",
    description: "Custom-fabricated 6-wheel rocker-bogie terrain rover equipped with high-torque gear motors, DC liquid pump, servo-directed nozzle, and wireless telemetry for automated agricultural spraying and surface disinfection tasks.",
    category: "Robotics & Hardware",
    mediaType: "image",
    src: "assets/images/six-wheel-terrain-rover.jpg",
    thumbnail: "assets/images/six-wheel-terrain-rover.jpg",
    alt: "6-wheel rocker-bogie terrain rover robot with liquid tank, pump, and servo nozzle",
    caption: "Custom 6-wheel multi-terrain rover platform with fluid reservoir, electric pump, and directional nozzle.",
    date: "2020–2021",
    relatedUrl: "portfolio.html#projectGrid",
    relatedLabel: "Explore Rover Project",
    originalUrl: "assets/images/six-wheel-terrain-rover.jpg",
    featured: true
  },
  {
    id: "media-line-follower-robot",
    title: "Autonomous Line-Following Ground Robot & Track Optimization",
    description: "Microcontroller-driven autonomous line-tracking robot navigating high-contrast closed-loop floor circuits using an infrared reflectance sensor array and differential steering PID feedback control.",
    category: "Robotics & Hardware",
    mediaType: "image",
    src: "assets/images/line-follower-robot.jpg",
    thumbnail: "assets/images/line-follower-robot.jpg",
    alt: "Top-down view of autonomous line-following robot tracking high-contrast octagonal floor course",
    caption: "Autonomous line-follower robot executing closed-loop trajectory tracking along an octagonal floor course.",
    date: "2017–2018",
    relatedUrl: "portfolio.html#projectGrid",
    relatedLabel: "View Line Follower Project",
    originalUrl: "assets/images/line-follower-robot.jpg",
    featured: false
  },
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
    featured: false
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
// When files are placed in assets/media/, these can be uncommented to populate remaining categories!
const PENDING_MEDIA_SLOTS = [
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
