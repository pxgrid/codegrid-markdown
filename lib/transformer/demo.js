'use strict';
var util = require('util');

var template = '' +
  '<div class="CG2-livecode" %s>' +
    '<header class="CG2-livecode__header">' +
      '<div class="CG2-livecode__label">%s</div>' +
      '<div class="CG2-livecode__nav">' +
        '<ul>' +
          '<li>' +
            '<a href="%s">' +
              '<span class="CG2-icon-tool"></span> 新規タブで開く' +
            '</a>' +
          '</li>' +
        '</ul>' +
      '</div>' +
    '</header>' +
    '<div class="CG2-livecode__body">%s</div>' +
  '</div>';

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
    var $iframe = $el.find('iframe').first();

    var defferedAttr = $iframe.attr('data-deferred') ? 'data-livecode-deferred' : '';
    var title  = $h1 ? $h1.text() : '';
    var iframeSrc = $iframe.attr('src') || $iframe.attr('data-src');
    var content = $.html($iframe);

    var demo = $(util.format(template, defferedAttr, title, iframeSrc, content));
    $el.replaceWith(demo);
  });
};
