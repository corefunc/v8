import { deserialize, serialize } from "v8";

/**
 * @category V8
 * @name clone
 * @description Deep clone object. Note: don't use on objects containing Functions.
 * @param {Object} objectToClone Object to be deep cloned
 * @param {Boolean} [returnOriginalOnError=true]
 * @returns {Object}
 * @throws {Error}
 * @since 0.0.1
 */
export function clone<Type extends object>(objectToClone: Type, returnOriginalOnError = true): Type {
  if (returnOriginalOnError) {
    try {
      return deserialize(serialize(objectToClone));
    } catch (_error) {
      return objectToClone;
    }
  } else {
    return deserialize(serialize(objectToClone));
  }
}
