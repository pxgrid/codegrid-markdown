import assert from 'node:assert';
import { describe, it } from 'node:test';
import CodeGridMarkdown from '../../lib/index.js';

describe('CodeGridMarkdown', function() {


describe('#constructor', function() {
  it('markedにオプションが渡せる', function() {
    const original = 'line1\nline2';
    const withBreaks = '<p>line1<br>line2</p>\n';
    const withoutBreaks = '<p>line1\nline2</p>\n';

    const cgmd = new CodeGridMarkdown({ breaks: true });
    assert(cgmd.render(original) === withBreaks);

    const cgmdDefault = new CodeGridMarkdown();
    assert(cgmdDefault.render(original) === withoutBreaks);
  });
});

describe('#render', function() {
  it('空文字投げてもエラーにならない', function() {
    const cgmd = new CodeGridMarkdown();
    assert.doesNotThrow(function() { cgmd.render(); });
    assert.doesNotThrow(function() { cgmd.render(''); });
  });
});
});
