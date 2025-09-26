import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import MDRenderer from '../../../../lib/renderer/md.js';
import renderNote from '../../../../lib/renderer/cgmd/note.js';

const renderer = new MDRenderer();

describe('CodeGridMarkdown - Renderer - cgmd', function() {


describe('#note', function() {
  it('レンダリングできること', function() {
    const res = renderNote('foo', renderer);
    const expect = '<div class="Note">\n<p>foo</p>\n\n</div>\n';
    assert.equal(res, expect);
  });
});
});
