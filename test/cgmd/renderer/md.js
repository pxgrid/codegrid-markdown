'use strict';
var assert     = require('power-assert');
var { marked } = require('marked');
var MD_Token   = require('../../../lib/tokenizer/token/md');
var MDRenderer = require('../../../lib/renderer/md');
var renderer = new MDRenderer();

describe('CodeGridMarkdown - Renderer - md', function() {


describe('#renderToken', function() {
  var token = new MD_Token();
  token.addBody('a');
  token.addBody('b');
  token.addBody('c');

  it('MD_Tokenをレンダリングできること', function() {
    var res = renderer.renderToken(token);
    var expect = '<p>a\nb\nc</p>\n';
    assert.equal(res, expect);
  });
});

describe('#render', function() {
  it('markedと同じ内容でふつうのMarkdownをレンダリングできること', function() {
    var res1    = renderer.render('- foo\n- bar');
    var expect1 = marked('- foo\n- bar');

    assert.equal(res1, expect1);

    var res2    = renderer.render('```\n.hoge {}\n```');
    var expect2 = marked('```\n.hoge {}\n```');

    assert.equal(res2, expect2);
  });
});


});
