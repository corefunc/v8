"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeFromString = void 0;
const v8_1 = require("v8");
function deserializeFromStringBasic(binaryString) {
  return v8_1.deserialize(Buffer.from(binaryString, "binary"));
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
function deserializeFromString(binaryString, toPrototype) {
  if (!toPrototype) {
    return deserializeFromStringBasic(binaryString);
  }
  let instance;
  if (toPrototype.constructor.name === "Function") {
    // @ts-ignore
    instance = Object.create(toPrototype.prototype);
  }
  else {
    instance = Object.create(toPrototype);
  }
  return Object.assign(instance, deserializeFromStringBasic(binaryString));
}
exports.deserializeFromString = deserializeFromString;
