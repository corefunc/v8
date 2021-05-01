"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cloneMarshalling = void 0;
const clone_1 = require("./clone.cjs");
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
function cloneMarshalling(value) {
  return clone_1.clone(value, true);
}
exports.cloneMarshalling = cloneMarshalling;
