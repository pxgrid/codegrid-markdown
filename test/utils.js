'use strict';
var assert = require('power-assert');
var utils = require('../lib/utils');

describe('utils', function() {


describe('#inherits', function() {
  function C() {}
  C.prototype.foo = function() { return 'foo'; };
  function S() {}
  S.prototype.bar = function() { return 'bar'; };
  utils.inherits(C, S);
  var c = new C();

  it('ちゃんと継承できてること', function() {
    assert.equal(c.bar(), 'bar');
  });
  it('子のprototypeが残ってること', function() {
    assert.equal(c.foo(), 'foo');
  });
});

describe('#captureAllRe', function() {
  it('パースできること', function() {
    var reStr = '(?:\:([a-z]+))';
    var str   = '[cg:foo:bar:baz]';
    var res = utils.captureAllRe(reStr, str);

    assert.equal(res[0], 'foo');
    assert.equal(res[1], 'bar');
    assert.equal(res[2], 'baz');
  });

  it('パースできない場合は空配列', function() {
    var reStr = '(?:\:([a-z]+))';
    var str   = '[cg;foo;bar;baz]';
    var res = utils.captureAllRe(reStr, str);

    assert.deepEqual(res, []);
  });

  it('パースできない場合は空配列', function() {
    var reStr = 'foo';
    var str   = 'hogehogehoge';
    var res = utils.captureAllRe(reStr, str);

    assert.deepEqual(res, []);
  });
});


});
