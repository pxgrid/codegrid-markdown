"use strict";
const assert = require("node:assert/strict");
const { describe, it } = require("node:test");
const MDRenderer = require("../../../../lib/renderer/md");
const renderTree = require("../../../../lib/renderer/cgmd/tree");
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
