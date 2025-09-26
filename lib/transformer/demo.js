'use strict';
const util = require('util');

const template = '' +
  '<section class="CG2-livecode" %s>' +
    '<header class="CG2-livecode__header">' +
      '<div class="CG2-livecode__label">%s</div>' +
      '<div class="CG2-livecode__nav">' +
        '<ul>%s</ul>' +
      '</div>' +
    '</header>' +
    '<div class="CG2-livecode__body">%s</div>' +
  '</section>';

const sourceTemplate = '' +
  '<li>' +
    '<a href="%s">ソースコード</a>' +
  '</li>';

const newTabTemplate = '' +
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
    const $el     = $(el);
    const $h1     = $el.find('h1').first();
    const $a      = $el.find('a').first();
    const $iframe = $el.find('iframe').first();

    const srcUrl = $a.attr('href');
    const iframeSrc = $iframe.attr('src') || $iframe.attr('data-src');

    const defferedAttr = $iframe.attr('data-deferred') ? 'data-livecode-deferred' : '';
    const title  = $h1 ? $h1.text() : '';
    const innerUl = _getLi(srcUrl, iframeSrc);
    const content = $.html($iframe);

    const demo = $(util.format(template, defferedAttr, title, innerUl, content));
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
  const innerUl = [];

  if (srcUrl) {
    innerUl.push(util.format(sourceTemplate, srcUrl));
  }

  if (iframeSrc) {
    innerUl.push(util.format(newTabTemplate, iframeSrc));
  }

  return innerUl.join('');
}
