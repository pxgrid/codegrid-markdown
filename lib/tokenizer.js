'use strict';

var CGMD_START_RE = /\[cg\:.*\]/;
var CGMD_END_RE   = /\[\/cg\]/;
var LB_RE         = /[\n\r]/;

var TOKEN_TYPES = {
  MD:   'md',
  CGMD: 'cgmd'
};

module.exports = {
  tokenize: tokenize,

  TOKEN_TYPES: TOKEN_TYPES
};


function tokenize(str) {
  var lines = str.split(LB_RE);
  var line;

  var tokens = [];

  var isCGMD = false;
  while ((line = lines.shift()) !== undefined) {
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

    if (isCGMD) {
      tokens[tokens.length - 1].body.push(line);
    }
    else {
      if (tokens.length === 0 || tokens[tokens.length - 1].type !== TOKEN_TYPES.MD) {
        tokens.push({
          type: TOKEN_TYPES.MD,
          body: []
        });
      }
      tokens[tokens.length - 1].body.push(line);
    }
  }

  return tokens;
}
