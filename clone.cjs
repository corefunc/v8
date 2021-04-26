"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clone = void 0;
const v8_1 = require("v8");

function clone(objectToClone, returnOriginalOnError = true) {
  if (returnOriginalOnError) {
    try {
      return v8_1.deserialize(v8_1.serialize(objectToClone));
    } catch (_error) {
      return objectToClone;
    }
  } else {
    return v8_1.deserialize(v8_1.serialize(objectToClone));
  }
}
exports.clone = clone;
