const fs = require('fs');
const content = fs.readFileSync('src/components/indiaMapData.ts', 'utf8');
const match = content.match(/"id":\s*"IN-JH"[^}]+"d":\s*"([^"]+)"/);

if (match) {
  const d = match[1];
  // Extract commands and numbers
  // Note that SVG paths use absolute or relative commands
  // Let's compute actual coordinates
  const tokens = d.match(/([a-df-z]|[-+]?[0-9]*\.?[0-9]+(?:e[-+]?[0-9]+)?)/gi);
  let curX = 0, curY = 0;
  let xs = [], ys = [];
  let cmd = '';

  for (let i = 0; i < tokens.length; i++) {
    const t = tokens[i];
    if (/^[a-z]$/i.test(t)) {
      cmd = t;
    } else {
      const val1 = Number(t);
      const val2 = Number(tokens[++i]);
      if (cmd === 'm') {
        curX += val1;
        curY += val2;
        xs.push(curX);
        ys.push(curY);
        cmd = 'l'; // subsequent pairs in relative m are relative l
      } else if (cmd === 'M') {
        curX = val1;
        curY = val2;
        xs.push(curX);
        ys.push(curY);
        cmd = 'L';
      } else if (cmd === 'l') {
        curX += val1;
        curY += val2;
        xs.push(curX);
        ys.push(curY);
      } else if (cmd === 'L') {
        curX = val1;
        curY = val2;
        xs.push(curX);
        ys.push(curY);
      }
    }
  }

  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);
  const midX = (minX + maxX) / 2;
  const midY = (minY + maxY) / 2;
  console.log({ minX, maxX, minY, maxY, midX, midY });
} else {
  console.log('No match for IN-JH');
}
