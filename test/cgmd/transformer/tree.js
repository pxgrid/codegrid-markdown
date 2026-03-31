import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import Transformer from '../../../lib/transformer.js';

describe("CodeGridMarkdown - Transformer - Tree", function () {
  describe("#tree", function () {
    it("レンダリングされること: 中身のあるディレクトリ", function () {
      const res = Transformer.transform(
        '<div class="Tree"><h3>見出し</h3><ul><li>directory/<ul><li>file1.ext</li></ul></li><li>file2.ext</li></ul></div>'
      );
      const expect =
        '<div class="Tree"><h3>見出し</h3><ul><li class="directory"><details open="true"><summary>directory/</summary><ul><li data-file-type="ext" class="file">file1.ext</li></ul></details></li><li data-file-type="ext" class="file">file2.ext</li></ul></div>';
      assert.equal(res, expect);
    });

    it("レンダリングされること: 中身のないディレクトリ", function () {
      const res = Transformer.transform(
        '<div class="Tree"><h3>見出し</h3><ul><li>directory/<ul><li>file1.ext</li></ul></li><li>file2.ext</li><li>a-lot-of-files/</li></ul></div>'
      );
      const expect =
        '<div class="Tree"><h3>見出し</h3><ul><li class="directory"><details open="true"><summary>directory/</summary><ul><li data-file-type="ext" class="file">file1.ext</li></ul></details></li><li data-file-type="ext" class="file">file2.ext</li><li class="directory"><details><summary>a-lot-of-files/</summary><ul><li class="file">...</li></ul></details></li></ul></div>';
      assert.equal(res, expect);
    });
  });
});
