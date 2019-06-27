'use strict';
var util = require('util');

var templateWithCaption = '' +
  '<figure class="cgmd-Imgbox">' +
    '<div class="cgmd-Imgbox_Inner">' +
      '<div class="cgmd-Imgbox_Header">%s</div>' +
      '%s' +
      '<figcaption class="cgmd-Imgbox_Caption">%s</figcaption>' +
    '</div>' +
  '</figure>';

// 画像用の見出しと画像
var template = '' +
  '<figure class="cgmd-Imgbox">' +
    '<div class="cgmd-Imgbox_Inner">' +
      '<figcaption class="cgmd-Imgbox_Header">%s</figcaption> ' +
      '%s' +
    '</div>' +
  '</figure>';

/**
 * div.cgmd-Imgboxを整形する
 *
 * @param {HTMLDocument} $
 *   cheerio
 */
module.exports = function($) {
  $('.cgmd-ImgBox').each(function(idx, el) {
    var imgbox = '';
    var $el  = $(el);
    var $heading = $el.find('h1,h2,h3,h4,h5,h6').first();
    var title = $heading.text() || '';
    var $img = $el.find('img').first();
    var hasCaption = $el.find('p').length > 1;

    if (hasCaption) {
      var caption = hasCaption ? $el.find('p').first().text() : '';
      imgbox = $(util.format(templateWithCaption, $heading, $img, caption));
    } else {
      imgbox = $(util.format(template, title, $img));
    }

    $el.replaceWith(imgbox);
  });
};
