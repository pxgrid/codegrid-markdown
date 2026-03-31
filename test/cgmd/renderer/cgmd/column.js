import assert from 'node:assert';
import { describe, it } from 'node:test';
import MDRenderer from '../../../../lib/renderer/md.js';
import renderColumn from '../../../../lib/renderer/cgmd/column.js';

const renderer = new MDRenderer();

describe('CodeGridMarkdown - Renderer - cgmd', function() {


describe('#column', function() {
  it('レンダリングできること', function() {
    const res = renderColumn('foo', renderer);
    const expect = '<div class="Column">\n<p>foo</p>\n\n</div>\n';
    assert(res === expect);
  });
});
});
