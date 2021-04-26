"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeFromString = void 0;
const v8_1 = require("v8");
function deserializeFromStringBasic(binaryString) {
    return v8_1.deserialize(Buffer.from(binaryString, "binary"));
}

function deserializeFromString(binaryString, toPrototype) {
    if (!toPrototype) {
        return deserializeFromStringBasic(binaryString);
    }
    let instance;
    if (toPrototype.constructor.name === "Function") {
        instance = Object.create(toPrototype.prototype);
    }
    else {
        instance = Object.create(toPrototype);
    }
    return Object.assign(instance, deserializeFromStringBasic(binaryString));
}
exports.deserializeFromString = deserializeFromString;
