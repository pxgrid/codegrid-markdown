import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import MDRenderer from '../../../../lib/renderer/md.js';
import renderDemo from '../../../../lib/renderer/cgmd/demo.js';

const renderer = new MDRenderer();

describe('CodeGridMarkdown - Renderer - cgmd', function() {


describe('#demo', function() {
  it('レンダリングできること', function() {
    const res = renderDemo('<iframe src="http://example.com" data-deferred></iframe>', renderer);
    const expect = '<div class="Demo">\n<iframe src="http://example.com" data-deferred></iframe>\n</div>\n';
    assert.equal(res, expect);
  });
});
});
