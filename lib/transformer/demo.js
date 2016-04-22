'use strict';
var util = require('util');

var template = '' +
  '<div class="CG2-livecode" %s>' +
    '<header class="CG2-livecode__header">' +
      '<div class="CG2-livecode__label">%s</div>' +
      '<div class="CG2-livecode__nav">' +
        '<ul>%s</ul>' +
      '</div>' +
    '</header>' +
    '<div class="CG2-livecode__body">%s</div>' +
  '</div>';

var sourceTemplate = '' +
  '<li>' +
    '<a href="%s">ソースコード</a>' +
  '</li>';

var newTabTemplate = '' +
  '<li>' +
    '<a href="%s">新規タブで開く</a>' +
  '</li>';

/**
 * div.Demoを整形する
 *
 * @param {HTMLDocument} $
 *   cheerio
 */
module.exports = function($) {
  $('.Demo').each(function(idx, el) {
    var $el     = $(el);
    var $h1     = $el.find('h1').first();
    var $a      = $el.find('a').first();
    var $iframe = $el.find('iframe').first();

    var srcUrl = $a.attr('href');
    var iframeSrc = $iframe.attr('src') || $iframe.attr('data-src');

    var defferedAttr = $iframe.attr('data-deferred') ? 'data-livecode-deferred' : '';
    var title  = $h1 ? $h1.text() : '';
    var innerUl = _getLi(srcUrl, iframeSrc);
    var content = $.html($iframe);

    var demo = $(util.format(template, defferedAttr, title, innerUl, content));
    $el.replaceWith(demo);
  });
};

/**
 * ツールボタンたちのulの中身を返す
 *
 * @param {string} srcUrl
 *   ソースコードのURL
 * @param {string} iframeSrc
 *   iframeのURL
 *
 */
function _getLi(srcUrl, iframeSrc) {
  var innerUl = [];

  if (srcUrl) {
    innerUl.push(util.format(sourceTemplate, srcUrl));
  }

  if (iframeSrc) {
    innerUl.push(util.format(newTabTemplate, iframeSrc));
  }

  return innerUl.join('\n');
}
