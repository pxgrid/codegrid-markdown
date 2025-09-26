import MD_Token from './tokenizer/token/md.js';
import CGMD_Token from './tokenizer/token/cgmd.js';

// mdレベルでの独自記法が増えたらココを増やす
const CGMD_START_RE = /^\[(note|column|imgbox|demo|tree)\]$/;   // [hoge]
const CGMD_END_RE   = /^\[\/(note|column|imgbox|demo|tree)\]$/; // [/hoge]
const LB_RE         = /[\n\r]/;


/**
 * Markdownな文字列を、文法別にトークン化する
 * いまのところ、以下2つの文法に対応。
 *
 *   - ふつうのMarkdown
 *   - CG flavored Markdown
 */
const Tokenizer = {
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
  const lines = str.split(LB_RE);
  let line;
  const tokens = [];

  // 空文字は無視します
  if (str.length === 0) { return tokens; }

  let isCGMD = null; // or note, column, imgbox, ...
  // 全ての行をなめる
  while ((line = lines.shift()) !== undefined) {
    // CGMDのスタート / エンドでフラグを打つ
    if (CGMD_START_RE.exec(line)) {
      // ネストしようとした
      if (isCGMD !== null)
        throw new Error(`[${isCGMD}] is still opened, nesting is not allowed!`);

      isCGMD = line.slice(1, -1);
      tokens.push(new CGMD_Token());
      tokens[tokens.length - 1].addBody(line);
      continue;
    }
    if (CGMD_END_RE.exec(line)) {
      // 異なる種類で閉じようとした
      if (isCGMD !== line.slice(2, -1))
        throw new Error(`[${isCGMD}] should not be closed by ${line}!`);

      isCGMD = null;
      tokens[tokens.length - 1].addBody(line);
      continue;
    }

    if (
      // ふつうのMDでありつつ
      isCGMD === null &&
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

  // 全行見終わってまだこのフラグが立ってるなら閉じ忘れ
  if (isCGMD !== null) {
    throw new Error(`Missing close tag for [${isCGMD}]!`);
  }

  return tokens;
}

export default Tokenizer;
