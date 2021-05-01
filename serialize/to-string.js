"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeToString = void 0;
const v8_1 = require("v8");
/**
 * @category V8
 * @name serializeToString
 * @description Serialize value to binary string.
 * @param {*} value Value to serialize.
 * @returns {string}
 * @since 0.0.1
 */
function serializeToString(value) {
    return v8_1.serialize(value).toString("binary");
}
exports.serializeToString = serializeToString;
