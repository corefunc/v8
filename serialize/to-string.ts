import { serialize } from "v8";

/**
 * @category V8
 * @name serializeToString
 * @description Serialize value to binary string.
 * @param {*} value Value to serialize.
 * @returns {string}
 * @since 0.0.1
 */
export function serializeToString(value: any): string {
  return serialize(value).toString("binary");
}
