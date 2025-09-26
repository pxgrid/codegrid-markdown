import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import Tokenizer from '../../lib/tokenizer.js';
import Renderer from '../../lib/renderer.js';

describe('CodeGridMarkdown - Renderer', function() {


describe('#render', function() {
  const renderer = new Renderer();

  it('cgmdトークン', function() {
    const md   = '[note]\n# h1\n[/note]';
    const html = '' +
      '<div class="Note">\n' +
        '<h1>h1</h1>\n' +
      '\n</div>\n';
    const token = Tokenizer.tokenize(md)[0];
    assert.equal(renderer.render(token), html);
  });

  it('mdトークン', function() {
    const md   = '# h1';
    const html = '' +
      '<h1>h1</h1>\n';
    const token = Tokenizer.tokenize(md)[0];
    assert.equal(renderer.render(token), html);
  });
});
});
