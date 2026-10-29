const fs = require('fs');
const content = fs.readFileSync('assets/js/services-data.js', 'utf8');

// evaluate inside sandbox
const vm = require('vm');
const sandbox = { window: {}, document: { readyState: 'loading', addEventListener: () => {} } };
vm.createContext(sandbox);

// replace immediate execution of initServicesSection to prevent DOM error
const codeWithoutInit = content.replace(/initServicesSection\(\);/g, '// initServicesSection();');
vm.runInContext(codeWithoutInit, sandbox);

// Let's extract SERVICES_DATA via function extraction or parsing
const startIdx = content.indexOf('const SERVICES_DATA = [');
const endIdx = content.indexOf('];\n\n    const catNamesDe = {');
if (startIdx !== -1 && endIdx !== -1) {
  const arrStr = content.substring(startIdx + 'const SERVICES_DATA = '.length, endIdx + 1);
  const data = eval(arrStr);
  console.log('Categories count:', data.length);
  const total = data.reduce((acc, c) => acc + c.services.length, 0);
  console.log('Total services count:', total);
  data.forEach(c => {
    console.log(`- ${c.categoryName} (${c.categoryId}): ${c.services.length} services`);
  });
} else {
  console.log('Could not find slice');
}
