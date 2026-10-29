const fs = require('fs');
const path = require('path');

console.log("=== Testing Media Showcase with 8 Images & 14 Total Items ===");

// 1. Check physical files on disk
const expectedFiles = [
  'assets/images/solar-tracking-lab.jpg',
  'assets/images/autonomous-path-planning.jpg',
  'assets/images/robot-sensor-fusion-architecture.jpg',
  'assets/images/autonomous-robot-hardware.jpg',
  'assets/images/quadcopter-drone-testbench.jpg',
  'assets/images/aeroguard-radar-robot.jpg',
  'assets/images/six-wheel-terrain-rover.jpg',
  'assets/images/line-follower-robot.jpg'
];

expectedFiles.forEach(f => {
  const p = path.join(__dirname, '../', f);
  if (!fs.existsSync(p)) {
    console.error(`FAIL: File does not exist: ${f}`);
    process.exit(1);
  }
  const stat = fs.statSync(p);
  console.log(`  ✓ Found ${f} (${stat.size} bytes)`);
});

// 2. Load media-data.js
const { MEDIA_ITEMS } = require('../assets/js/media-data.js');

console.log(`\nTotal MEDIA_ITEMS: ${MEDIA_ITEMS.length}`);
if (MEDIA_ITEMS.length !== 14) {
  console.error(`FAIL: Expected 14 media items, got ${MEDIA_ITEMS.length}`);
  process.exit(1);
}

// Check items exist
const checkIds = [
  'media-solar-tracking-lab',
  'media-autonomous-path-planning',
  'media-sensor-fusion-architecture',
  'media-robot-hardware-prototype',
  'media-quadcopter-drone',
  'media-aeroguard-radar',
  'media-six-wheel-rover',
  'media-line-follower-robot'
];

checkIds.forEach(id => {
  const item = MEDIA_ITEMS.find(m => m.id === id);
  if (!item) {
    console.error(`FAIL: Missing media item '${id}'`);
    process.exit(1);
  }
  console.log(`  ✓ ${id}: "${item.title}" [${item.category}]`);
});

// 3. Check categories
const categories = ["All Media"];
MEDIA_ITEMS.forEach(m => {
  if (m.category && !categories.includes(m.category)) categories.push(m.category);
});

console.log("\nActive Categories generated:");
categories.forEach(c => console.log(`  - ${c}`));

const expectedCats = [
  "All Media",
  "Engineering & Technical Demonstrations",
  "AI & Computer Vision",
  "Robotics & Hardware",
  "Drone Photography & Aerial Mapping",
  "Presentations & Publications"
];

expectedCats.forEach(cat => {
  if (!categories.includes(cat)) {
    console.error(`FAIL: Expected category '${cat}' not found in active categories`);
    process.exit(1);
  }
});

// 4. Verify i18n translation mapping for all active categories
const TRANSLATIONS = require('../assets/js/translations.js');
const CAT_I18N_MAP = {
  "All Media": "mediaCatAll",
  "Drone Photography & Aerial Mapping": "mediaCatDrone",
  "Travel & Exploration": "mediaCatTravel",
  "Robotics & Hardware": "mediaCatRobotics",
  "AI & Computer Vision": "mediaCatVision",
  "Engineering & Technical Demonstrations": "mediaCatDemos",
  "Presentations & Publications": "mediaCatPubs"
};

console.log("\nChecking i18n translation keys for all active categories:");
['en', 'de'].forEach(lang => {
  const dict = TRANSLATIONS[lang];
  categories.forEach(cat => {
    const key = CAT_I18N_MAP[cat];
    if (!key || !dict[key]) {
      console.error(`FAIL: Missing translation key '${key}' for category '${cat}' in lang '${lang}'`);
      process.exit(1);
    }
    console.log(`  ✓ [${lang.toUpperCase()}] ${cat} -> "${dict[key]}"`);
  });
});

console.log("\n=======================================================");
console.log("ALL MEDIA SHOWCASE INTEGRATION CHECKS PASSED PERFECTLY!");
console.log("=======================================================");
