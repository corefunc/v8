import { deserialize } from "v8";

function deserializeFromStringBasic(binaryString) {
  return deserialize(Buffer.from(binaryString, "binary"));
}

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
): Type {
  if (!toPrototype) {
    return deserializeFromStringBasic(binaryString);
  }
  let instance;
  if (toPrototype.constructor.name === "Function") {
    // @ts-ignore
    instance = Object.create(toPrototype.prototype);
  } else {
    instance = Object.create(toPrototype);
  }
  return Object.assign(instance, deserializeFromStringBasic(binaryString));
}
