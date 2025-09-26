"use strict";
var assert = require("node:assert/strict");
var { describe, it } = require("node:test");
var MDRenderer = require("../../../../lib/renderer/md");
var renderTree = require("../../../../lib/renderer/cgmd/tree");
var renderer = new MDRenderer();

describe("CodeGridMarkdown - Renderer - cgmd", function () {
  describe("#tree", function () {
    it("レンダリングできること", function () {
      var res = renderTree("foo", renderer);
      var expect = '<div class="Tree">\n<p>foo</p>\n\n</div>\n';
      assert.equal(res, expect);
    });
  });
});
