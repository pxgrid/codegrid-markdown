import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import MDRenderer from '../../../../lib/renderer/md.js';
import renderImgbox from '../../../../lib/renderer/cgmd/imgbox.js';

const renderer = new MDRenderer();

describe('CodeGridMarkdown - Renderer - cgmd', function() {


describe('#imgbox', function() {
  it('レンダリングできること', function() {
    const res = renderImgbox('foo', renderer);
    const expect = '<figure class="ImgBox">\n<p>foo</p>\n\n</figure>\n';
    assert.equal(res, expect);
  });
});
});
