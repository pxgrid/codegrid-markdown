#!/usr/bin/env node
'use strict';
const CodeGridMarkdown = require('../lib');
const CGMDRenderer = new CodeGridMarkdown();
const fs = require('node:fs');
const { parseArgs } = require('node:util');

const usage = 'Usage: cgmd <path/to/your/text.md> [options]\n\n' +
  'Options:\n' +
  '  -o, --out <path>   Output path\n' +
  '  -h, --help         Show help';

let args;
try {
  args = parseArgs({
    args: process.argv.slice(2),
    options: {
      out: { type: 'string', short: 'o' },
      help: { type: 'boolean', short: 'h' }
    },
    allowPositionals: true
  });
} catch (err) {
  console.error(err.message);
  console.error(usage);
  process.exit(1);
}

if (args.values.help) {
  console.log(usage);
  process.exit(0);
}

if (args.positionals.length === 0) {
  console.error('Provide a path to a markdown file or markdown text.');
  console.error(usage);
  process.exit(1);
}

const inputPath  = args.positionals[0];
const outputPath = args.values.out || null;

let inputStr = '';
try {
  inputStr = fs.readFileSync(inputPath, { encoding: 'utf8' });
} catch(e) {
  inputStr = inputPath;
}
const htmlStr = CGMDRenderer.render(inputStr);

if (outputPath) {
  fs.writeFile(outputPath, htmlStr, { encoding: 'utf8' }, (err) => {
    if (err) { throw err; }
    console.log('%s created.', outputPath);
  });
} else {
  console.log(htmlStr);
}
