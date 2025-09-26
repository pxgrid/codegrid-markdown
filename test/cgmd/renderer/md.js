import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { marked } from 'marked';
import MD_Token from '../../../lib/tokenizer/token/md.js';
import MDRenderer from '../../../lib/renderer/md.js';

const renderer = new MDRenderer();

describe('CodeGridMarkdown - Renderer - md', function() {


describe('#renderToken', function() {
  const token = new MD_Token();
  token.addBody('a');
  token.addBody('b');
  token.addBody('c');

  it('MD_Tokenをレンダリングできること', function() {
    const res = renderer.renderToken(token);
    const expect = '<p>a\nb\nc</p>\n';
    assert.equal(res, expect);
  });
});

describe('#render', function() {
  it('markedと同じ内容でふつうのMarkdownをレンダリングできること', function() {
    const res1    = renderer.render('- foo\n- bar');
    const expect1 = marked('- foo\n- bar');

    assert.equal(res1, expect1);

    const res2    = renderer.render('```\n.hoge {}\n```');
    const expect2 = marked('```\n.hoge {}\n```');

    assert.equal(res2, expect2);
  });
});
});
