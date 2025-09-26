import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import CGMD_Token from '../../../lib/tokenizer/token/cgmd.js';
import MDRenderer from '../../../lib/renderer/md.js';
import CGMDRenderer from '../../../lib/renderer/cgmd.js';

const renderer = new CGMDRenderer(new MDRenderer());

describe('CodeGridMarkdown - Renderer - cgmd', function() {


describe('#renderToken', function() {
  const token = new CGMD_Token();
  token.addBody('[note]');
  token.addBody('b');
  token.addBody('[/note]');

  it('CGMD_Tokenをレンダリングできること', function() {
    const res = renderer.renderToken(token);
    const expect = '<div class="Note">\n<p>b</p>\n\n</div>\n';
    assert.equal(res, expect);
  });
});
});
