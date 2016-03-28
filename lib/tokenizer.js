'use strict';
var MD_Token = require('./tokenizer/token/md');
var CGMD_Token = require('./tokenizer/token/cgmd');

var CGMD_START_RE = /\[cg\:.*\]/;
var CGMD_END_RE   = /\[\/cg\]/;
var LB_RE         = /[\n\r]/;


/**
 * Markdownな文字列を、文法別にトークン化する
 * いまのところ、以下2つの文法に対応。
 *
 *   - ふつうのMarkdown
 *   - CG flavored Markdown
 */
var Tokenizer = {
  tokenize: tokenize
};

/**
 * トークン化する
 *
 * @param {string} str
 *   マークダウンであろう文字列
 * @return {array}
 *   トークンの配列
 */
function tokenize(str) {
  var lines = str.split(LB_RE);
  var line;

  var tokens = [];

  var isCGMD = false;
  // 全ての行をなめる
  while ((line = lines.shift()) !== undefined) {
    // CGMDのスタート / エンドでフラグを打つ
    if (CGMD_START_RE.exec(line.trim())) {
      isCGMD = true;
      tokens.push(new CGMD_Token());
      tokens[tokens.length - 1].addBody(line);
      continue;
    }
    if (CGMD_END_RE.exec(line.trim())) {
      isCGMD = false;
      tokens[tokens.length - 1].addBody(line);
      continue;
    }

    if (
      // ふつうのMDでありつつ
      isCGMD === false &&
      (
        // 最初か
        tokens.length === 0 ||
        // さっきまでCGMDを処理していたなら
        tokens[tokens.length - 1].isTypeCGMD()
      )
    ) {
      // 新しい区分にしてから
      tokens.push(new MD_Token());
    }

    // 中身を入れる
    tokens[tokens.length - 1].addBody(line);
  }

  return tokens;
}

module.exports = Tokenizer;
