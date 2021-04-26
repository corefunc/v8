"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clone = void 0;
const v8_1 = require("v8");
/**
 * @category V8
 * @name clone
 * @description Deep clone object. Note: don't use on objects containing Functions.
 * @param {Object} objectToClone Object to be deep cloned
 * @param {Boolean} [returnOriginalOnError=true]
 * @returns {Object}
 * @throws {Error}
 * @since 0.0.1
 */
function clone(objectToClone, returnOriginalOnError) {
    if (returnOriginalOnError) {
        try {
            return v8_1.deserialize(v8_1.serialize(objectToClone));
        }
        catch (_error) {
            return objectToClone;
        }
    }
    else {
        return v8_1.deserialize(v8_1.serialize(objectToClone));
    }
}
exports.clone = clone;
