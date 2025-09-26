import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import MDRenderer from '../../../../lib/renderer/md.js';
import renderTree from '../../../../lib/renderer/cgmd/tree.js';

const renderer = new MDRenderer();

describe("CodeGridMarkdown - Renderer - cgmd", function () {
  describe("#tree", function () {
    it("レンダリングできること", function () {
      const res = renderTree("foo", renderer);
      const expect = '<div class="Tree">\n<p>foo</p>\n\n</div>\n';
      assert.equal(res, expect);
    });
  });
});
