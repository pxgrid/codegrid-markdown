#!/usr/bin/env node
'use strict';
var CodeGridMarkdown = require('../lib');
var CGMDRenderer = new CodeGridMarkdown();
var fs   = require('fs');
var parseArgs = require('node:util').parseArgs;

var usage = 'Usage: cgmd <path/to/your/text.md> [options]\n\n' +
  'Options:\n' +
  '  -o, --out <path>   Output path\n' +
  '  -h, --help         Show help';

var args;
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

var inputPath  = args.positionals[0];
var outputPath = args.values.out || null;

var inputStr = '';
try {
  inputStr = fs.readFileSync(inputPath, { encoding: 'utf8' });
} catch(e) {
  inputStr = inputPath;
}
var htmlStr = CGMDRenderer.render(inputStr);

if (outputPath) {
  fs.writeFile(outputPath, htmlStr, { encoding: 'utf8' }, function(err) {
    if (err) { throw err; }
    console.log('%s created.', outputPath);
  });
} else {
  console.log(htmlStr);
}
