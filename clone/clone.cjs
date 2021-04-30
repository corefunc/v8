"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clone = void 0;
const v8_1 = require("v8");
/**
 * @category V8
 * @name clone
 * @description Deep clone object. Note: don't use on objects containing Functions.
 * @param {*} value Object to be deep cloned.
 * @returns {Object}
 * @throws {Error}
 * @since 0.0.1
 */
function clone(value) {
  if (value === null || typeof value !== "object") {
    return value;
  }
  switch (true) {
    case Array.isArray(value): {
      try {
        return v8_1.deserialize(v8_1.serialize(value));
      }
      catch (_error) {
        return value.map((value) => clone(value));
      }
    }
    case value instanceof Date: {
      const clonedDate = new Date();
      clonedDate.setTime(value.getTime());
      return clonedDate;
    }
    case value instanceof Map: {
      const clonedMap = new Map();
      value.forEach((value, key) => clonedMap.set(key, clone(value)));
      return clonedMap;
    }
    case value instanceof Set: {
      return new Set(Array.from(value.values()).map((value) => clone(value)));
    }
    case value instanceof Error: {
      const errorOriginal = value;
      // const errorCloned = Object.assign(Object.create(errorOriginal), { message: errorOriginal.message });
      const errorCloned = Object.create(Object.getPrototypeOf(value));
      if (errorOriginal.stack) {
        errorCloned.stack = errorOriginal.stack;
      }
      // @ts-ignore
      if (errorOriginal.code) {
        // @ts-ignore
        errorCloned.code = errorOriginal.code;
      }
      // @ts-ignore
      if (errorOriginal.errno) {
        // @ts-ignore
        errorCloned.errno = errorOriginal.errno;
      }
      // @ts-ignore
      if (errorOriginal.syscall) {
        // @ts-ignore
        errorCloned.syscall = errorOriginal.syscall;
      }
      errorCloned.message = errorOriginal.message;
      return errorCloned;
    }
    default:
      try {
        return Object.assign(Object.create(value), v8_1.deserialize(v8_1.serialize(value)));
      }
      catch (_error) {
        return Object.assign(Object.create(value), value);
      }
  }
}
exports.clone = clone;
