import fs from 'node:fs';
import CodeGridMarkdown from '../lib/index.js';

const CGMDRenderer = new CodeGridMarkdown({
  // options for marked
});
const str = fs.readFileSync(import.meta.dirname + '/cg.md', 'utf-8');

const htmlStr = CGMDRenderer.render(str);
console.log(htmlStr);
