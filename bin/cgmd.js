#!/usr/bin/env node
'use strict';
var CodeGridMarkdown = require('../lib');
var CGMDRenderer = new CodeGridMarkdown();
var fs   = require('fs');
var yargs = require('yargs/yargs');
var argv = yargs(process.argv.slice(2))
  .usage('Usage: $0 <path/to/your/text.md> [options]')
  .demandCommand(1, 'Provide a path to a markdown file or markdown text')
  .alias('o', 'out')
  .nargs('o', 1)
  .describe('o', 'Output path')
  .help('h')
  .alias('h', 'help')
  .parse();

var inputPath  = argv._[0];
var outputPath = argv.o || null;

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
