'use strict';

var marked       = require('marked');
var htmlPipeline = require('html-pipeline');
var jsdom        = require('jsdom');

var CodeGridMarkdown = module.exports = function() {};

var $document = null;
var codegridLangRe = /^lang-codegrid: ?(\w+)$/;

var renderer = {
  note: function(token) {

    var contentArr = token.content.split(/\n?\[\w+\]\n/);

    var title = contentArr[1].trim();
    var body  = marked(contentArr[2].trim());

    var div = $document.createElement('div');
    // TODO: テンプレから取りたい
    var html  = '<div class="Note">';
        html +=   '<div class="Note-title">' + title + '</div>';
        html +=   '<div class="Note-body">' + body + '</div>';
        html += '</div>';
    div.innerHTML = html;

    return div.firstChild;
  }
};


CodeGridMarkdown.prototype = {
  // Public
  render: render,

  // Private
  _isParseCandidate: _isParseCandidate,
  _getToken:         _getToken,
  // - Filters
  _customTagFilter: _customTagFilter
};


function render(str) {
  var that = this;
  return new Promise(function(resolve, reject) {
    try {
      var htmlStr = marked(str);
      jsdom.env(htmlStr, function (err, window) {
        if (err) { reject(err); }
        $document = window.document;
        var res = htmlPipeline($document)
                    .pipe(that._customTagFilter.bind(that))
                    .run($document.body);

        resolve(res.innerHTML);
      });
    } catch (e) { reject(e); }
  });
}

function _isParseCandidate(el) {
  if (el.nodeName !== 'PRE') {
    return false;
  }
  if (el.childNodes.length === 0) {
    return false;
  }
  if (el.firstChild.nodeName !== 'CODE') {
    return false;
  }
  if (codegridLangRe.exec(el.firstChild.className) === null) {
    return false;
  }

  return true;
}

function _getToken(el) {
  var type = codegridLangRe.exec(el.firstChild.className)[1];
  var content = el.firstChild.innerHTML;

  return {
    type:    type,
    content: content
  };
}

function _customTagFilter(el) {
  if (!this._isParseCandidate(el)) { return undefined; }
  var token = this._getToken(el);

  var type = token.type;
  if (type in renderer) {
    return renderer[type](token);
  }
}
