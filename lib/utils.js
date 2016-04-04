'use strict';

module.exports = {
  inherits: inherits
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
