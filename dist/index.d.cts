import { Ref } from 'vue';

/**
 * Apply default value to a ref.
 *
 * @__NO_SIDE_EFFECTS__
 */
declare function refDefault<T>(source: Ref<T | undefined | null>, defaultValue: T): Ref<T>;

export { refDefault };
