'use strict';
var marked       = require('marked');
var codeRenderer = require('./code');

// ベースとなる状態
var renderer = new marked.Renderer();

// codeブロックを拡張してく
renderer.code = codeRenderer;

module.exports = renderer;
