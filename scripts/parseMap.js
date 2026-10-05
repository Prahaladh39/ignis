const fs = require('fs');
const path = require('path');

const svgPath = path.join(__dirname, '../public/india.svg');
const svg = fs.readFileSync(svgPath, 'utf8');

// Match all path elements
const pathRegex = /<path\s+id="([^"]+)"\s+title="([^"]+)"\s+d="([^"]+)"/g;
let match;
const states = [];

while ((match = pathRegex.exec(svg)) !== null) {
  states.push({
    id: match[1],
    name: match[2],
    d: match[3]
  });
}

console.log('Total states parsed:', states.length);
states.forEach(s => {
  console.log(`${s.id}: ${s.name}`);
});

// Write to a tsx component or data file
fs.writeFileSync(
  path.join(__dirname, '../src/components/indiaMapData.ts'),
  `export interface StatePathData {
  id: string;
  name: string;
  d: string;
}

export const INDIA_MAP_VIEWBOX = "0 0 612 696";

export const INDIA_STATES_DATA: StatePathData[] = ${JSON.stringify(states, null, 2)};
`
);

console.log('Successfully written to src/components/indiaMapData.ts');
