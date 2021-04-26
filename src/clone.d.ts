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
export function clone<Type extends object>(objectToClone: Type, returnOriginalOnError?: boolean): Type;