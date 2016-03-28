'use strict';

module.exports = {
  inherits: inherits,
  captureAllRe: captureAllRe
};

/**
 * Nodeのビルトインのutil.inheritsだと、
 * ctorのprototypeが全部置き換えられてしまうので・・・
 *
 * @param {object} ctor
 * @param {object} superCtor
 *
 */
function inherits(ctor, superCtor) {
  ctor.super_ = superCtor;
  Object.setPrototypeOf(ctor.prototype, superCtor.prototype);
}

/**
 * RegExp.execを、複数回実行した結果を返す
 *
 * @param {string} reStr
 *   正規表現
 * @param {string} str
 *   実行対象の文字列
 * @return {array}
 *   キャプチャの結果
 *
 */
function captureAllRe(reStr, str) {
  var re = new RegExp(reStr, 'g');
  var res, cap = [];
  while ((res = re.exec(str)) !== null) {
    cap.push(res[1]);
  }

  return cap;
}
