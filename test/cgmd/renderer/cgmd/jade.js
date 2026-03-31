import assert from 'node:assert';
import { describe, it } from 'node:test';
import renderJade from '../../../../lib/renderer/cgmd/jade.js';

describe('CodeGridMarkdown - Renderer - cgmd', function() {


describe('#jade', function() {
  it('レンダリングできること', function() {
    const res = renderJade('.foo foo');
    const expect = '<div class="foo">foo</div>';
    assert(res === expect);
  });
});
});
