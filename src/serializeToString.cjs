"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeToString = void 0;
const v8_1 = require("v8");
function serializeToString(value) {
  return v8_1.serialize(value).toString("binary");
}
exports.serializeToString = serializeToString;
