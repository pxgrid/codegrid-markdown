import assert from 'node:assert';
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
    assert(res === expect);
  });
});

describe('#render (CJK punctuation)', function() {
  it('CJK約物の直後の closing ** が正しく認識されること', function() {
    const res = renderer.render('**foo（bar）**baz**qux**');
    assert(res.includes('<strong>foo（bar）</strong>'), 'CJK約物で閉じるboldが壊れている');
    assert(res.includes('<strong>qux</strong>'), '2つ目のboldが壊れている');
  });
});

describe('#render', function() {
  it('markedと同じ内容でふつうのMarkdownをレンダリングできること', function() {
    const res1    = renderer.render('- foo\n- bar');
    const expect1 = marked('- foo\n- bar');

    assert(res1 === expect1);

    const res2    = renderer.render('```\n.hoge {}\n```');
    const expect2 = marked('```\n.hoge {}\n```');

    assert(res2 === expect2);
  });
});
});
