import { clone } from "./clone.mjs";

/**
 * @category V8
 * @name cloneMarshalling
 * @description Deep clone object and sets the prototype. Note: don't use on objects containing Functions.
 * @summary ```import { clone } from '@corefunc/v8/clone/clone-marshalling';```
 * @param {*} value Object to be deep cloned.
 * @returns {Object}
 * @throws {Error}
 * @since 0.1.0
 */
export function cloneMarshalling(value) {
  return clone(value, true);
}
