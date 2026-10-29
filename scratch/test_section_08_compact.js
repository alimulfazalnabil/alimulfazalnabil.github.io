const fs = require('fs');
const path = require('path');
const vm = require('vm');

console.log("=== Testing Section 08 Compact Catalog Behavior ===");

// Load SERVICES_DATA
const servicesDataCode = fs.readFileSync(path.join(__dirname, '../assets/js/services-data.js'), 'utf8');

// Mock a lightweight DOM environment
class MockClassList {
  constructor() { this.classes = new Set(); }
  add(c) { this.classes.add(c); }
  remove(c) { this.classes.delete(c); }
  contains(c) { return this.classes.has(c); }
}

class MockElement {
  constructor(tag, id = '') {
    this.tagName = tag.toUpperCase();
    this.id = id;
    this.attributes = {};
    this.classList = new MockClassList();
    this.style = {};
    this._innerHTML = '';
    this._value = '';
    this.listeners = {};
    this.children = [];
  }

  get innerHTML() {
    return this._innerHTML;
  }

  set innerHTML(val) {
    this._innerHTML = val;
    this._parseChildren(val);
  }

  get value() {
    return this._value;
  }

  set value(val) {
    this._value = val;
  }

  get textContent() {
    return this._innerHTML.replace(/<[^>]*>/g, '').trim();
  }

  set textContent(val) {
    this._innerHTML = val;
  }

  setAttribute(name, val) {
    this.attributes[name] = String(val);
  }

  getAttribute(name) {
    return this.attributes[name] || null;
  }

  addEventListener(event, fn) {
    if (!this.listeners[event]) this.listeners[event] = [];
    this.listeners[event].push(fn);
  }

  dispatchEvent(event) {
    const list = this.listeners[event.type || event] || [];
    list.forEach(fn => fn(event));
  }

  _parseChildren(html) {
    // Basic extraction of data attributes and tags for testing queries
    this.children = [];
  }

  querySelectorAll(selector) {
    const results = [];
    // Simple regex search in innerHTML for simulated queries
    if (selector === '.svc-prompt-chip') {
      const matches = this._innerHTML.matchAll(/class="[^"]*svc-prompt-chip[^"]*"[^>]*data-cat="([^"]+)"/g);
      for (const m of matches) {
        const el = new MockElement('button');
        el.setAttribute('data-cat', m[1]);
        results.push(el);
      }
    } else if (selector === '.svc-prompt-tag-btn') {
      const matches = this._innerHTML.matchAll(/class="[^"]*svc-prompt-tag-btn[^"]*"[^>]*data-search="([^"]+)"/g);
      for (const m of matches) {
        const el = new MockElement('button');
        el.setAttribute('data-search', m[1]);
        results.push(el);
      }
    } else if (selector === '.svc-card') {
      const matches = this._innerHTML.matchAll(/<article[^>]*class="[^"]*svc-card[^"]*"[^>]*data-service-id="([^"]+)"/g);
      for (const m of matches) {
        const el = new MockElement('article');
        el.setAttribute('data-service-id', m[1]);
        results.push(el);
      }
    } else if (selector === '.svc-btn-estimate') {
      const matches = this._innerHTML.matchAll(/class="[^"]*svc-btn-estimate[^"]*"[^>]*data-service-title="([^"]+)"[^>]*data-service-type="([^"]+)"/g);
      for (const m of matches) {
        const el = new MockElement('button');
        el.setAttribute('data-service-title', m[1]);
        el.setAttribute('data-service-type', m[2]);
        results.push(el);
      }
    } else if (selector === '.svc-btn-proposal') {
      const matches = this._innerHTML.matchAll(/class="[^"]*svc-btn-proposal[^"]*"[^>]*data-service-title="([^"]+)"[^>]*data-service-type="([^"]+)"/g);
      for (const m of matches) {
        const el = new MockElement('button');
        el.setAttribute('data-service-title', m[1]);
        el.setAttribute('data-service-type', m[2]);
        results.push(el);
      }
    }
    return results;
  }

  querySelector(selector) {
    const list = this.querySelectorAll(selector);
    return list.length > 0 ? list[0] : null;
  }
}

// Setup sandbox
const elements = {
  servicesCategorySelect: new MockElement('select', 'servicesCategorySelect'),
  servicesCardsGrid: new MockElement('div', 'servicesCardsGrid'),
  servicesSearchInput: new MockElement('input', 'servicesSearchInput'),
  servicesClearSearchBtn: new MockElement('button', 'servicesClearSearchBtn'),
  servicesCountBadge: new MockElement('span', 'servicesCountBadge'),
  servicesActiveHeader: new MockElement('div', 'servicesActiveHeader'),
  servicesResetViewBtn: new MockElement('button', 'servicesResetViewBtn'),
  resetServicesFilterBtn: new MockElement('button', 'resetServicesFilterBtn')
};

const docElement = new MockElement('html');
docElement.setAttribute('lang', 'en');

const windowListeners = {};
const mockWindow = {
  addEventListener: (evt, fn) => {
    if (!windowListeners[evt]) windowListeners[evt] = [];
    windowListeners[evt].push(fn);
  },
  dispatchEvent: (evt) => {
    (windowListeners[evt.type || evt] || []).forEach(fn => fn(evt));
  },
  budgetEstimator: {
    preselectService: (type, title) => {
      mockWindow.lastEstimated = { type, title };
    }
  },
  proposalGenerator: {
    prefillService: (type, title) => {
      mockWindow.lastProposed = { type, title };
    }
  }
};

const mockDocument = {
  documentElement: docElement,
  readyState: 'complete',
  getElementById: (id) => elements[id] || null,
  addEventListener: () => {}
};

const sandbox = {
  window: mockWindow,
  document: mockDocument,
  module: { exports: {} },
  setTimeout: setTimeout,
  clearTimeout: clearTimeout
};

vm.createContext(sandbox);
vm.runInContext(servicesDataCode, sandbox);

const SERVICES_DATA = sandbox.SERVICES_DATA || sandbox.module.exports.SERVICES_DATA;
const totalServices = SERVICES_DATA.reduce((acc, c) => acc + c.services.length, 0);

console.log(`[Verified Dataset] 9 Domains, total services: ${totalServices}`);
if (totalServices !== 95) {
  console.error(`FAIL: Expected 95 total services, found ${totalServices}`);
  process.exit(1);
}

// 1. Initial State Check
console.log("\n--- 1. Testing Initial State (Compact Default) ---");
const gridHTML = elements.servicesCardsGrid.innerHTML;
const isPromptCardPresent = gridHTML.includes('class="svc-prompt-card"');
const cardCountOnLoad = elements.servicesCardsGrid.querySelectorAll('.svc-card').length;

console.log(`Prompt card rendered: ${isPromptCardPresent}`);
console.log(`Service cards rendered on initial load: ${cardCountOnLoad}`);
console.log(`Badge text on load: "${elements.servicesCountBadge.textContent}"`);
console.log(`Active header display: "${elements.servicesActiveHeader.style.display}"`);

if (!isPromptCardPresent) {
  console.error("FAIL: Prompt card missing on initial load!");
  process.exit(1);
}
if (cardCountOnLoad !== 0) {
  console.error(`FAIL: Initial load must show 0 service cards, but found ${cardCountOnLoad}`);
  process.exit(1);
}
if (!elements.servicesCountBadge.textContent.includes("95 Services")) {
  console.error("FAIL: Count badge does not display total services on initial load");
  process.exit(1);
}
if (elements.servicesActiveHeader.style.display !== "none") {
  console.error("FAIL: Active header should be hidden on initial load");
  process.exit(1);
}
console.log("PASS: Initial compact state verified!");

// 2. Category Select Check
console.log("\n--- 2. Testing Category Selection ---");
elements.servicesCategorySelect.value = "web-dev";
elements.servicesCategorySelect.dispatchEvent({ type: 'change', target: { value: 'web-dev' } });

const webDevCards = elements.servicesCardsGrid.querySelectorAll('.svc-card');
console.log(`Cards rendered for 'web-dev': ${webDevCards.length} (Expected: 12)`);
console.log(`Active header display: "${elements.servicesActiveHeader.style.display}"`);
console.log(`Active header text: "${elements.servicesActiveHeader.textContent}"`);

if (webDevCards.length !== 12) {
  console.error(`FAIL: Expected 12 web-dev cards, found ${webDevCards.length}`);
  process.exit(1);
}
if (elements.servicesActiveHeader.style.display !== "flex") {
  console.error("FAIL: Active header must be displayed when category is selected");
  process.exit(1);
}
console.log("PASS: Category selection verified!");

// 3. 'All Services' Check
console.log("\n--- 3. Testing 'All Services' Selection ---");
elements.servicesCategorySelect.value = "all";
elements.servicesCategorySelect.dispatchEvent({ type: 'change', target: { value: 'all' } });

const allCards = elements.servicesCardsGrid.querySelectorAll('.svc-card');
console.log(`Cards rendered for 'all': ${allCards.length} (Expected: 95)`);
if (allCards.length !== 95) {
  console.error(`FAIL: Expected 95 cards when 'all' is selected, found ${allCards.length}`);
  process.exit(1);
}
console.log("PASS: 'All Services' view verified!");

// 4. Return to Default Compact View Check
console.log("\n--- 4. Testing Reset to Default Compact View ---");
elements.servicesCategorySelect.value = "";
elements.servicesCategorySelect.dispatchEvent({ type: 'change', target: { value: '' } });

const resetPromptPresent = elements.servicesCardsGrid.innerHTML.includes('class="svc-prompt-card"');
const resetCardsCount = elements.servicesCardsGrid.querySelectorAll('.svc-card').length;
console.log(`Prompt card restored: ${resetPromptPresent}`);
console.log(`Cards after reset: ${resetCardsCount} (Expected: 0)`);
if (!resetPromptPresent || resetCardsCount !== 0) {
  console.error("FAIL: Returning to empty selector did not restore compact view");
  process.exit(1);
}
console.log("PASS: Reset to compact view verified!");

// 5. Search Functionality Check
console.log("\n--- 5. Testing Search Functionality ---");
elements.servicesSearchInput.dispatchEvent({ type: 'input', target: { value: 'RAG' } });
const ragCards = elements.servicesCardsGrid.querySelectorAll('.svc-card');
console.log(`Matching services for 'RAG': ${ragCards.length}`);
console.log(`Clear button display: "${elements.servicesClearSearchBtn.style.display}"`);
if (ragCards.length === 0) {
  console.error("FAIL: Expected matching services for 'RAG'");
  process.exit(1);
}
if (elements.servicesClearSearchBtn.style.display !== "flex") {
  console.error("FAIL: Clear search button should be visible when search is active");
  process.exit(1);
}

// Clear Search button click
elements.servicesClearSearchBtn.dispatchEvent({ type: 'click' });
const postClearCardsCount = elements.servicesCardsGrid.querySelectorAll('.svc-card').length;
const postClearPromptPresent = elements.servicesCardsGrid.innerHTML.includes('class="svc-prompt-card"');
console.log(`Cards after clear search: ${postClearCardsCount}`);
console.log(`Prompt card restored after clear search: ${postClearPromptPresent}`);
if (!postClearPromptPresent || postClearCardsCount !== 0) {
  console.error("FAIL: Clearing search did not restore compact prompt view");
  process.exit(1);
}
console.log("PASS: Search and clear verified!");

// 6. German Language Switching Check
console.log("\n--- 6. Testing German Language Switching ---");
docElement.setAttribute('lang', 'de');
mockWindow.dispatchEvent({ type: 'portfolio-language-changed' });

const selectHTML = elements.servicesCategorySelect.innerHTML;
const dePromptCardHTML = elements.servicesCardsGrid.innerHTML;

const hasDeOption = selectHTML.includes('Kategorie auswählen') || selectHTML.includes('Webentwicklung');
const hasDePrompt = dePromptCardHTML.includes('Wählen Sie eine Kategorie');

console.log(`Select options translated to German: ${hasDeOption}`);
console.log(`Prompt card translated to German: ${hasDePrompt}`);

if (!hasDeOption) {
  console.error("FAIL: Category select options not translated to German!");
  process.exit(1);
}
if (!hasDePrompt) {
  console.error("FAIL: Prompt card not translated to German!");
  process.exit(1);
}
console.log("PASS: German language support verified!");

console.log("\n==========================================");
console.log("ALL SECTION 08 COMPACT CHECKS PASSED 100%!");
console.log("==========================================");
