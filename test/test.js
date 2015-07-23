'use strict';
var assert = require('power-assert');

describe('サンプルテスト', function() {
  it('テスト項目: 1', function() {
    assert(1 + 1, 2);
  });
  it('テスト項目: 2', function() {
    assert.notDeepEqual({ a: 1 }, { a: 1, b: 2 });
  });
  it('テスト項目: 3', function() {
    var zero = 0, two = 2;
    var arr = [1, 2, 3];
    assert(arr.indexOf(zero) === two);
  });
});
