'use strict';
var util = require('util');

var template = '' +
  '<div class="CG2-livecode">' +
    '<header class="CG2-livecode__header">' +
      '<div class="CG2-livecode__label">%s</div>' +
      '<div class="CG2-livecode__nav">' +
        '<ul>' +
          '<li>' +
            '<a href="%s" target="_blank">' +
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
 * @param {HTMLDocument} doc
 *   document
 */
module.exports = function(doc) {
  var $Demo = [].slice.call(doc.getElementsByClassName('Demo'));

  $Demo.forEach(function(el) {
    var h1     = el.getElementsByTagName('h1')[0];
    var iframe = el.getElementsByTagName('iframe')[0];

    var title  = h1 ? h1.textContent : '';
    var iframeSrc = iframe.src || iframe.getAttribute('data-src');
    var content = iframe.outerHTML;

    var demo = doc.createElement('div');
    demo.innerHTML = util.format(template, title, iframeSrc, content);
    doc.body.replaceChild(demo.firstChild, el);
  });
};
