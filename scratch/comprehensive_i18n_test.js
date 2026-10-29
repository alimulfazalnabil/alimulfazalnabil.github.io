const fs = require('fs');
const path = require('path');

// 1. Load translations.js
const translationsCode = fs.readFileSync(path.join(__dirname, '../assets/js/translations.js'), 'utf8');
const vm = require('vm');
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(translationsCode, sandbox);
const TRANSLATIONS = sandbox.window.TRANSLATIONS;

if (!TRANSLATIONS || !TRANSLATIONS.en || !TRANSLATIONS.de) {
  console.error("FAIL: Could not load TRANSLATIONS from translations.js");
  process.exit(1);
}

const enKeys = Object.keys(TRANSLATIONS.en);
const deKeys = Object.keys(TRANSLATIONS.de);

console.log(`[Translations Dictionary] EN keys: ${enKeys.length}, DE keys: ${deKeys.length}`);

// Parity check
const missingInDe = enKeys.filter(k => !deKeys.includes(k));
const missingInEn = deKeys.filter(k => !enKeys.includes(k));

if (missingInDe.length > 0) {
  console.error("FAIL: Keys missing in German:", missingInDe);
}
if (missingInEn.length > 0) {
  console.error("FAIL: Keys missing in English:", missingInEn);
}

if (missingInDe.length === 0 && missingInEn.length === 0) {
  console.log("PASS: 100% Key Parity between EN and DE dictionaries.");
}

// 2. Extract keys from index.html
function extractKeysFromHTML(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const keys = new Set();
  
  // match data-i18n="key"
  const i18nMatches = content.matchAll(/data-i18n="([^"]+)"/g);
  for (const m of i18nMatches) keys.add({ attr: 'data-i18n', key: m[1] });

  // match data-i18n-placeholder="key"
  const phMatches = content.matchAll(/data-i18n-placeholder="([^"]+)"/g);
  for (const m of phMatches) keys.add({ attr: 'data-i18n-placeholder', key: m[1] });

  // match data-i18n-title="key"
  const titleMatches = content.matchAll(/data-i18n-title="([^"]+)"/g);
  for (const m of titleMatches) keys.add({ attr: 'data-i18n-title', key: m[1] });

  // match data-i18n-aria="key"
  const ariaMatches = content.matchAll(/data-i18n-aria="([^"]+)"/g);
  for (const m of ariaMatches) keys.add({ attr: 'data-i18n-aria', key: m[1] });

  return Array.from(keys);
}

console.log("\n--- Checking index.html ---");
const indexKeys = extractKeysFromHTML(path.join(__dirname, '../index.html'));
console.log(`Found ${indexKeys.length} annotated i18n keys in index.html`);
let indexMissing = 0;
indexKeys.forEach(({ attr, key }) => {
  if (!TRANSLATIONS.en[key]) {
    console.error(`MISSING in EN: [${attr}] "${key}"`);
    indexMissing++;
  }
  if (!TRANSLATIONS.de[key]) {
    console.error(`MISSING in DE: [${attr}] "${key}"`);
    indexMissing++;
  }
});
if (indexMissing === 0) {
  console.log("PASS: All index.html keys exist in both EN and DE dictionaries!");
}

console.log("\n--- Checking portfolio.html ---");
const portKeys = extractKeysFromHTML(path.join(__dirname, '../portfolio.html'));
console.log(`Found ${portKeys.length} annotated i18n keys in portfolio.html`);
let portMissing = 0;
portKeys.forEach(({ attr, key }) => {
  if (!TRANSLATIONS.en[key]) {
    console.error(`MISSING in EN: [${attr}] "${key}"`);
    portMissing++;
  }
  if (!TRANSLATIONS.de[key]) {
    console.error(`MISSING in DE: [${attr}] "${key}"`);
    portMissing++;
  }
});
if (portMissing === 0) {
  console.log("PASS: All portfolio.html keys exist in both EN and DE dictionaries!");
}

// 3. Test AI Twin German Intent Detection
console.log("\n--- Testing AI Twin Intent Detection ---");
const aiTwinModule = require('../assets/js/ai-twin.js');
const germanQueries = [
  { q: "Vergleiche die Enterprise RAG-Plattform und das Herzrisiko-ML-Projekt", expected: "project_compare" },
  { q: "Analysiere deine Eignung für eine Rolle als AI Solutions Engineer", expected: "job_fit" },
  { q: "Was ist deine Erfahrung mit Azure Cloud & Terraform?", expected: "career_experience" },
  { q: "Welche professionellen Dienstleistungen und Softwarelösungen bietest du an?", expected: "services_offered" },
  { q: "Warum sollte man Alimul für ein AI Solutions Engineering-Projekt wählen?", expected: "why_hire" },
  { q: "Wie kann ich Alimul kontaktieren oder eine Projektanfrage stellen?", expected: "contact_availability" },
  { q: "Welche Projekte wurden mit FastAPI gebaut?", expected: "tech_search" },
  { q: "Erzähle mir von deinen Arbeiten zu Computer Vision & CARLA-Simulation", expected: "project_lookup" }
];

let intentFailures = 0;
germanQueries.forEach(({ q, expected }) => {
  const detected = aiTwinModule.detectIntent(q);
  if (detected === expected) {
    console.log(`  ✓ "${q.substring(0, 45)}..." -> ${detected}`);
  } else {
    console.error(`  ✗ "${q.substring(0, 45)}..." -> got "${detected}", expected "${expected}"`);
    intentFailures++;
  }
});

if (intentFailures === 0) {
  console.log("PASS: All German queries correctly classified by AI Twin intent engine!");
}

console.log("\n=================================");
if (missingInDe.length === 0 && missingInEn.length === 0 && indexMissing === 0 && portMissing === 0 && intentFailures === 0) {
  console.log("ALL VERIFICATION CHECKS PASSED PERFECTLY!");
} else {
  console.error("SOME CHECKS FAILED. See above for details.");
  process.exit(1);
}
