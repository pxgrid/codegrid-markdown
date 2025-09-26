'use strict';
const assert = require('node:assert/strict');
const { describe, it } = require('node:test');
const utils = require('../lib/utils');

describe('utils', function() {


describe('#inherits', function() {
  function C() {}
  C.prototype.foo = function() { return 'foo'; };
  function S() {}
  S.prototype.bar = function() { return 'bar'; };
  utils.inherits(C, S);
  const c = new C();

  it('ちゃんと継承できてること', function() {
    assert.equal(c.bar(), 'bar');
  });
  it('子のprototypeが残ってること', function() {
    assert.equal(c.foo(), 'foo');
  });
});


});
