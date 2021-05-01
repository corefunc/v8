import { clone } from "./clone.mjs";

/**
 * @category V8
 * @name cloneShallow
 * @description Deep clone any object to plain object.
 * @summary ```import { clone } from '@corefunc/v8/clone/clone-shallow';```
 * @param {*} value Object to be deep cloned.
 * @returns {Object}
 * @throws {Error}
 * @since 0.1.0
 */
export function cloneShallow(value) {
  return clone(value, false);
}
