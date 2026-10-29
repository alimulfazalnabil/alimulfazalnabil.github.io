const fs = require('fs');
const path = require('path');
const vm = require('vm');

console.log("=== Testing Media Showcase with 4 New Images ===");

// 1. Check physical files on disk
const expectedFiles = [
  'assets/images/solar-tracking-lab.jpg',
  'assets/images/autonomous-path-planning.jpg',
  'assets/images/robot-sensor-fusion-architecture.jpg',
  'assets/images/autonomous-robot-hardware.jpg'
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
if (MEDIA_ITEMS.length !== 10) {
  console.error(`FAIL: Expected 10 media items, got ${MEDIA_ITEMS.length}`);
  process.exit(1);
}

// Check new items exist
const solar = MEDIA_ITEMS.find(m => m.id === 'media-solar-tracking-lab');
const pathPlanning = MEDIA_ITEMS.find(m => m.id === 'media-autonomous-path-planning');
const sensorFusion = MEDIA_ITEMS.find(m => m.id === 'media-sensor-fusion-architecture');
const robotHw = MEDIA_ITEMS.find(m => m.id === 'media-robot-hardware-prototype');

if (!solar || !pathPlanning || !sensorFusion || !robotHw) {
  console.error("FAIL: One or more new media items missing in MEDIA_ITEMS");
  process.exit(1);
}

console.log("  ✓ media-solar-tracking-lab:", solar.title, `[${solar.category}]`);
console.log("  ✓ media-autonomous-path-planning:", pathPlanning.title, `[${pathPlanning.category}]`);
console.log("  ✓ media-sensor-fusion-architecture:", sensorFusion.title, `[${sensorFusion.category}]`);
console.log("  ✓ media-robot-hardware-prototype:", robotHw.title, `[${robotHw.category}]`);

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
  "Presentations & Publications"
];

expectedCats.forEach(cat => {
  if (!categories.includes(cat)) {
    console.error(`FAIL: Expected category '${cat}' not found in active categories`);
    process.exit(1);
  }
});

console.log("\n=======================================================");
console.log("ALL MEDIA SHOWCASE INTEGRATION CHECKS PASSED PERFECTLY!");
console.log("=======================================================");
