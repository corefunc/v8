import { deserialize } from "v8";

/**
 * @param {string} [binaryString]
 * @returns {*}
 */
function deserializeFromStringBasic(binaryString: string): any {
  return deserialize(Buffer.from(binaryString, "binary"));
}

/**
 * @category V8
 * @name deserializeFromString
 * @description Deserialize string to object value.
 * @param {string} [binaryString] String to deserialize from.
 * @param {*=} toPrototype Prototype to be deserialized into.
 * @returns {*}
 * @since 0.0.1
 */
export function deserializeFromString<ObjectType extends Record<string, any> | typeof Object.prototype>(
  binaryString: string,
  toPrototype?: ObjectType,
): ObjectType {
  if (!toPrototype) {
    return deserializeFromStringBasic(binaryString) as ObjectType;
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
