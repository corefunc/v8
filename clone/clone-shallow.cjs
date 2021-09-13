"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cloneShallow = void 0;
const clone_1 = require("./clone.cjs");
/**
 * @category V8
 * @name cloneShallow
 * @description Deep clone any object to plain object.
 * @summary ```import { clone } from '@corefunc/v8/clone/clone-shallow';```
 * @param {*} value Object to be deep cloned.
 * @returns {Object}
 * @throws {Error}
 * @since 0.1.0
 */
function cloneShallow(value) {
  return (0, clone_1.clone)(value, false);
}
exports.cloneShallow = cloneShallow;
