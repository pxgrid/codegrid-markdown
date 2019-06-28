'use strict';
var util = require('util');

//  A: 見出し的キャプション + 画像 + 補足
var templateWithTitleAndMemo = '' +
  '<figure class="cgmd-Imgbox  -title-and-memo">' +
    '<div class="cgmd-Imgbox_Inner">' +
      '<figcaption class="cgmd-Imgbox_Header">%s</figcaption>' +
      '%s' +
      '<p class="cgmd-Imgbox_Caption">%s</p>' +
    '</div>' +
  '</figure>';

// B: 見出し的キャプション + 画像
var templateWithTitle = '' +
  '<figure class="cgmd-Imgbox  -title">' +
    '<div class="cgmd-Imgbox_Inner">' +
      '<figcaption class="cgmd-Imgbox_Header">%s</figcaption> ' +
      '%s' +
    '</div>' +
  '</figure>';

// C: 画像 + キャプション
var templateWithCaption = '' +
  '<figure class="cgmd-Imgbox  -caption">' +
    '<div class="cgmd-Imgbox_Inner">' +
      '%s' +
      '<figcaption class="cgmd-Imgbox_Caption">%s</figcaption> ' +
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
    var $el  = $(el);
    var $heading = $el.find('h1,h2,h3,h4,h5,h6');
    var $img = $el.find('img').first();
    var imgbox;
    var caption;
    var memo;
    /*
     * マークダウンのパターンは次の3通り
     * - A: 見出しがある
     *   - B: 補足がある
     * - C: 見出しがない
     */
    // A: 見出し的キャプション(hn)と画像（p>img）補足(p)がある場合
    if ($heading.length === 1 && $el.find('p').length === 2) {
      memo = $el.find('p').last().text();
      caption = $heading.text();
      imgbox = $(util.format(templateWithTitleAndMemo, caption, $img, memo));
      $el.replaceWith(imgbox);
    } else if ($heading.length === 1) {
      // B: 見出し的キャプション(hn) + 画像(p>img)がある場合
      caption = $heading.text();
      imgbox = $(util.format(templateWithTitle, caption, $img));
      $el.replaceWith(imgbox);
    } else {
      // C: 見出し的キャプション(hn)がない、画像とキャプションの場合
      caption = $el.find('p').last().text();
      imgbox = $(util.format(templateWithCaption, $img, caption));
      $el.replaceWith(imgbox);
    }
  });
};
