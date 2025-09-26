'use strict';

const buildDemoSection = (deferredAttr, title, innerUl, content) => {
  const attrSuffix = deferredAttr ? ` ${deferredAttr}` : '';
  return `<section class="CG2-livecode"${attrSuffix}><header class="CG2-livecode__header"><div class="CG2-livecode__label">${title}</div><div class="CG2-livecode__nav"><ul>${innerUl}</ul></div></header><div class="CG2-livecode__body">${content}</div></section>`;
};

const buildSourceItem = (srcUrl) => `<li><a href="${srcUrl}">ソースコード</a></li>`;
const buildNewTabItem = (iframeSrc) => `<li><a href="${iframeSrc}">新規タブで開く</a></li>`;

/**
 * div.Demoを整形する
 *
 * @param {HTMLDocument} $
 *   cheerio
 */
module.exports = function($) {
  $('.Demo').each((idx, el) => {
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

    const demo = $(buildDemoSection(defferedAttr, title, innerUl, content));
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
    innerUl.push(buildSourceItem(srcUrl));
  }

  if (iframeSrc) {
    innerUl.push(buildNewTabItem(iframeSrc));
  }

  return innerUl.join('');
}
