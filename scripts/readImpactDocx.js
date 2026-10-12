const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

// Read Impact Page.docx as zip
const docxPath = 'd:/ignite/Impact Page.docx';
const buffer = fs.readFileSync(docxPath);

// Locate document.xml inside zip format
// Local file header in zip has signature 0x04034b50 (PK\x03\x04)
let offset = 0;
let documentXml = null;

while (offset < buffer.length - 4) {
  if (buffer.readUInt32LE(offset) === 0x04034b50) {
    const compressionMethod = buffer.readUInt16LE(offset + 8);
    const compressedSize = buffer.readUInt32LE(offset + 18);
    const uncompressedSize = buffer.readUInt32LE(offset + 22);
    const fileNameLength = buffer.readUInt16LE(offset + 26);
    const extraFieldLength = buffer.readUInt16LE(offset + 28);
    const fileName = buffer.toString('utf8', offset + 30, offset + 30 + fileNameLength);
    const fileDataOffset = offset + 30 + fileNameLength + extraFieldLength;

    if (fileName === 'word/document.xml') {
      const compressedData = buffer.slice(fileDataOffset, fileDataOffset + compressedSize);
      if (compressionMethod === 8) {
        documentXml = zlib.inflateRawSync(compressedData).toString('utf8');
      } else {
        documentXml = compressedData.toString('utf8');
      }
      break;
    }
    offset = fileDataOffset + compressedSize;
  } else {
    offset++;
  }
}

if (!documentXml) {
  console.log('Could not find word/document.xml');
  process.exit(1);
}

// Convert XML to plain text
const text = documentXml
  .replace(/<\/w:p>/g, '\n\n')
  .replace(/<w:tab\/>/g, '\t')
  .replace(/<[^>]+>/g, '')
  .replace(/&amp;/g, '&')
  .replace(/&lt;/g, '<')
  .replace(/&gt;/g, '>')
  .replace(/&quot;/g, '"')
  .replace(/&apos;/g, "'")
  .trim();

fs.writeFileSync('d:/ignite/extracted_assets/impact_page_text.txt', text, 'utf8');
console.log('EXTRACTED_SUCCESSFULLY');
