/**
 * @category V8
 * @name deserializeFromString
 * @description Deserialize string to value.
 * @param {String} binaryString String to deserialize from.
 * @param {*=} toPrototype Prototype to be deserialized into.
 * @returns {*}
 * @since 0.0.1
 */
export function deserializeFromString<Type extends Object | typeof Object.prototype>(
  binaryString: string,
  toPrototype?: Type,
): Type;