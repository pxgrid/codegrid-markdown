#!/usr/bin/env node
'use strict';
var CodeGridMarkdown = require('../lib');
var CGMDRenderer = new CodeGridMarkdown();
var fs   = require('fs');
var argv = require('yargs')
  .usage('Usage: $0 <path/to/your/text.md> [options]')
  .demand(1)
  .alias('o', 'out')
  .nargs('o', 1)
  .describe('o', 'Output path')
  .help('h')
  .alias('h', 'help')
  .argv;

var inputPath  = argv._[0];
var outputPath = argv.o || null;

var inputStr = fs.readFileSync(inputPath, { encoding: 'utf8' });
var htmlStr = CGMDRenderer.render(inputStr);

if (outputPath) {
  fs.writeFile(outputPath, htmlStr, { encoding: 'utf8' }, function(err) {
    if (err) { throw err; }
    console.log('%s created.', outputPath);
  });
} else {
  console.log(htmlStr);
}
