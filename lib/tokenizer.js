'use strict';

var CGMD_START_RE = /\[cg\:.*\]/;
var CGMD_END_RE   = /\[\/cg\]/;
var LB_RE         = /[\n\r]/;

var TOKEN_TYPES = {
  MD:   'md',
  CGMD: 'cgmd'
};

/**
 * Markdownな文字列を、markedで処理する部分とそうでない部分にトークン化する
 *
 * @param {string} str
 *   マークダウンであろう文字列
 *
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
      tokens.push({
        type: TOKEN_TYPES.CGMD,
        body: []
      });
      tokens[tokens.length - 1].body.push(line);
      continue;
    }
    if (CGMD_END_RE.exec(line.trim())) {
      isCGMD = false;
      tokens[tokens.length - 1].body.push(line);
      continue;
    }

    if (
      // ふつうのMDでありつつ
      isCGMD === false &&
      (
        // 最初か
        tokens.length === 0 ||
        // さっきまでCGMDを処理していたなら
        tokens[tokens.length - 1].type !== TOKEN_TYPES.MD
      )
    ) {
      // 新しい区分にしてから
      tokens.push({
        type: TOKEN_TYPES.MD,
        body: []
      });
    }

    // 中身を入れる
    tokens[tokens.length - 1].body.push(line);
  }

  return tokens;
}

module.exports = {
  tokenize: tokenize,

  TOKEN_TYPES: TOKEN_TYPES
};
