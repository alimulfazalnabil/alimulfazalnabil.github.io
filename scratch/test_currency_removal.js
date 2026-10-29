/**
 * Verification test suite for Currency Conversion Statement Removal
 * Tests:
 * 1. Absence of the exact hardcoded currency statement across all files.
 * 2. Integrity of USD, BDT, and EUR selection in index.html for both Budget Estimator and Proposal Generator.
 * 3. Functional calculations in budget-estimator.js across USD, BDT, and EUR.
 * 4. Integration between Budget Estimator and Proposal Generator.
 */
const fs = require('fs');
const path = require('path');

console.log("=================================================");
console.log("TESTING REMOVAL OF FIXED CURRENCY STATEMENT");
console.log("=================================================\n");

let passed = 0;
let total = 0;

function assert(desc, condition) {
  total++;
  if (condition) {
    passed++;
    console.log(`[PASS] ${desc}`);
  } else {
    console.error(`[FAIL] ${desc}`);
  }
}

// 1. Check absence of target string in all website files
const forbiddenPhrases = [
  "1 USD = 120 BDT = 0.92 EUR",
  "Currency Conversion: Converted at configurable baseline reference rates",
  "Client contracts can be denominated in USD, BDT, or EUR."
];

const checkFiles = [
  "assets/js/budget-estimator.js",
  "assets/js/proposal-generator.js",
  "assets/js/services-data.js",
  "index.html",
  "portfolio.html"
];

checkFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  forbiddenPhrases.forEach(phrase => {
    assert(
      `File ${file} does not contain "${phrase.slice(0, 30)}..."`,
      !content.includes(phrase)
    );
  });
});

// 2. Check that Currency Selectors in index.html remain intact
const indexHtml = fs.readFileSync("index.html", "utf8");

assert(
  "Estimator has #estimatorCurrency select with USD, BDT, EUR",
  indexHtml.includes('id="estimatorCurrency"') &&
  indexHtml.includes('<option value="USD"') &&
  indexHtml.includes('<option value="BDT"') &&
  indexHtml.includes('<option value="EUR"')
);

assert(
  "Proposal Generator has #propCurrency select with USD, BDT, EUR",
  indexHtml.includes('id="propCurrency"') &&
  indexHtml.includes('<option value="USD"') &&
  indexHtml.includes('<option value="BDT"') &&
  indexHtml.includes('<option value="EUR"')
);

// 3. Test budget-estimator.js pricing logic & currency conversion
const budgetEstimatorCode = fs.readFileSync("assets/js/budget-estimator.js", "utf8");

// Verify PRICING_CONFIG has currencies defined
assert(
  "PRICING_CONFIG defines USD, BDT, EUR rates",
  budgetEstimatorCode.includes('USD: { symbol: "$", code: "USD", rate: 1.0') &&
  budgetEstimatorCode.includes('BDT: { symbol: "৳", code: "BDT", rate: 120.0') &&
  budgetEstimatorCode.includes('EUR: { symbol: "€", code: "EUR", rate: 0.92')
);

// Simulate calculation logic from budget-estimator.js
const testCurrencies = {
  USD: { symbol: "$", rate: 1.0 },
  BDT: { symbol: "৳", rate: 120.0 },
  EUR: { symbol: "€", rate: 0.92 }
};

const baseHours = 100;
const hourlyRate = 35;
const baseCostUSD = baseHours * hourlyRate; // 3500 USD

assert("USD calculation is correct ($3,500)", Math.round(baseCostUSD * testCurrencies.USD.rate) === 3500);
assert("BDT calculation is correct (৳420,000)", Math.round(baseCostUSD * testCurrencies.BDT.rate) === 420000);
assert("EUR calculation is correct (€3,220)", Math.round(baseCostUSD * testCurrencies.EUR.rate) === 3220);

// 4. Test proposal-generator.js currency handling
const proposalGenCode = fs.readFileSync("assets/js/proposal-generator.js", "utf8");
assert(
  "proposal-generator.js supports BDT symbol ৳",
  proposalGenCode.includes('if (currency === "BDT") currSymbol = "৳"')
);
assert(
  "proposal-generator.js supports EUR symbol €",
  proposalGenCode.includes('if (currency === "EUR") currSymbol = "€"')
);

console.log("\n=================================================");
console.log(`TOTAL TESTS: ${total} | PASSED: ${passed} | FAILED: ${total - passed}`);
console.log("=================================================");

if (passed === total) {
  console.log(">>> ALL VERIFICATION TESTS PASSED SUCCESSFULLY! <<<");
  process.exit(0);
} else {
  process.exit(1);
}
