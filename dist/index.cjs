'use strict';

const vue = require('vue');

// @__NO_SIDE_EFFECTS__
function refDefault(source, defaultValue) {
  return vue.computed({
    get() {
      return source.value ?? defaultValue;
    },
    set(value) {
      source.value = value;
    }
  });
}

exports.refDefault = refDefault;
