import { computed } from 'vue';

// @__NO_SIDE_EFFECTS__
function refDefault(source, defaultValue) {
  return computed({
    get() {
      return source.value ?? defaultValue;
    },
    set(value) {
      source.value = value;
    }
  });
}

export { refDefault };
