// scripts/generate-exports.js
import fs from 'fs'
import path from 'path'

const uiDir = path.join(import.meta.dirname, '../src/components/ui');
const files = fs.readdirSync(uiDir)
  .filter(file => file.endsWith('.ts') || file.endsWith('.tsx'))
  .filter(file => file !== 'index.ts');

const exports = files
  .map(file => `export * from './components/ui/${file.replace(/\.tsx?$/, '')}'`)
  .join('\n');

fs.writeFileSync(path.join(import.meta.dirname, '../src/index.ts'), exports);