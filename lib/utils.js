'use strict';

module.exports = {
  captureAllRe: captureAllRe
};

function captureAllRe(reStr, str) {
  var re = new RegExp(reStr, 'g');
  var res, cap = [];
  while ((res = re.exec(str)) !== null) {
    cap.push(res[1]);
  }

  return cap;
}
