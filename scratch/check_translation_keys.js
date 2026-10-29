const TRANSLATIONS = require('../assets/js/translations.js');

const enKeys = Object.keys(TRANSLATIONS.en).sort();
const deKeys = Object.keys(TRANSLATIONS.de).sort();

console.log(`Total EN keys: ${enKeys.length}`);
console.log(`Total DE keys: ${deKeys.length}`);

const missingInDe = enKeys.filter(k => !TRANSLATIONS.de.hasOwnProperty(k));
const missingInEn = deKeys.filter(k => !TRANSLATIONS.en.hasOwnProperty(k));

if (missingInDe.length > 0) {
  console.error("Missing in DE:", missingInDe);
}
if (missingInEn.length > 0) {
  console.error("Missing in EN:", missingInEn);
}

if (missingInDe.length === 0 && missingInEn.length === 0) {
  console.log("SUCCESS: 100% key parity between English and German dictionaries!");
} else {
  process.exit(1);
}
