#!/usr/bin/env node
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const ALLOWED_COLORS = new Set([
  'white', 'black',
  'gray-50', 'gray-100', 'gray-200', 'gray-300', 'gray-400',
  'gray-500', 'gray-600', 'gray-700', 'gray-800', 'gray-900', 'gray-950',
  'transparent', 'current', 'inherit',
]);

const PREFIXES = ['bg', 'text', 'border', 'ring', 'outline', 'divide', 'placeholder', 'caret', 'accent', 'fill', 'stroke', 'from', 'via', 'to'];
const COLOR_UTILITY = new RegExp(
  `\\b(?:${PREFIXES.join('|')})-([a-z]+(?:-[0-9]{2,3})?)`,
  'g',
);

const errors = [];

function walk(dir) {
  for (const entry of readdirSync(dir)) {
    if (entry.startsWith('.') || entry === 'node_modules' || entry === 'dist') continue;
    const full = join(dir, entry);
    const st = statSync(full);
    if (st.isDirectory()) walk(full);
    else if (/\.(astro|css|html|js|ts|tsx|jsx)$/.test(entry)) check(full);
  }
}

function check(file) {
  const content = readFileSync(file, 'utf8');
  const lines = content.split('\n');
  lines.forEach((line, i) => {
    for (const match of line.matchAll(COLOR_UTILITY)) {
      const value = match[1];
      if (/^\[/.test(value)) continue;
      if (ALLOWED_COLORS.has(value)) continue;
      if (['current', 'inherit', 'transparent'].includes(value)) continue;
      if (/^(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl|left|right|center|justify)$/.test(value)) continue;
      if (/^(t|b|l|r|x|y|dashed|dotted|solid|double|none|collapse|separate|spacing)$/.test(value)) continue;
      errors.push({ file, line: i + 1, utility: match[0] });
    }
  });
}

walk('./src');

if (errors.length) {
  console.error('lofi-lint: color leakage detected. Lo-fi must remain greyscale.');
  for (const e of errors) {
    console.error(`  ${e.file}:${e.line}  ${e.utility}`);
  }
  process.exit(1);
} else {
  console.log('lofi-lint: clean — greyscale only.');
}
