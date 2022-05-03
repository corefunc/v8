"use strict";
// @see https://github.com/joepie91/node-random-number-csprng#api
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateNumber = void 0;
const crypto = require("crypto");
function calculateParameters(range) {
    let bitsNeeded = 0;
    let bytesNeeded = 0;
    let mask = 1;
    while (range > 0) {
        if (bitsNeeded % 8 === 0) {
            bytesNeeded += 1;
        }
        bitsNeeded += 1;
        mask = (mask << 1) | 1;
        range = range >>> 1;
    }
    return { bytesNeeded, mask };
}
function secureRandomNumber(minimum, maximum) {
    if (!crypto || !("randomBytes" in crypto)) {
        throw new ReferenceError("No suitable random number generator available. Ensure that your runtime is linked against OpenSSL (or an equivalent) correctly.");
    }
    if (!Number.isInteger(minimum)) {
        throw new TypeError(`The minimum value must be an integer. [${minimum}] given.`);
    }
    if (!Number.isInteger(maximum)) {
        throw new TypeError(`The maximum value must be an integer. [${maximum}] given.`);
    }
    if (!(maximum > minimum)) {
        throw new RangeError(`The maximum value must be higher than the minimum value. [${minimum}] and [${maximum}] given.`);
    }
    if (minimum < Number.MIN_SAFE_INTEGER || minimum > Number.MAX_SAFE_INTEGER) {
        throw new RangeError(`The minimum value must be in-between MIN_SAFE_INTEGER and MAX_SAFE_INTEGER. [${minimum}] given.`);
    }
    if (maximum < Number.MIN_SAFE_INTEGER || maximum > Number.MAX_SAFE_INTEGER) {
        throw new RangeError(`The maximum value must be in-between MIN_SAFE_INTEGER and MAX_SAFE_INTEGER. [${maximum}] given.`);
    }
    let range = maximum - minimum;
    if (range < Number.MIN_SAFE_INTEGER || range > Number.MAX_SAFE_INTEGER) {
        throw new RangeError(`The range between the minimum and maximum value must be in-between MIN_SAFE_INTEGER and MAX_SAFE_INTEGER. [${minimum}] and [${maximum}] given.`);
    }
    let { bytesNeeded, mask } = calculateParameters(range);
    const randomBytes = crypto.randomBytes(bytesNeeded);
    let randomValue = 0;
    for (let index = 0; index < bytesNeeded; index += 1) {
        randomValue |= randomBytes[index] << (8 * index);
    }
    randomValue = randomValue & mask;
    if (randomValue <= range) {
        return minimum + randomValue;
    }
    else {
        return secureRandomNumber(minimum, maximum);
    }
}
/**
 * @category Crypto
 * @name generateNumber
 * @description Secure random number generator. Integers only.
 * @param {number} minimum - Minimum integer to generate.
 * @param {number} maximum - Maximum integer to generate.
 * @returns {Promise<number>} Secure random integer.
 * @since 0.2.0
 */
function generateNumber(minimum, maximum) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return secureRandomNumber(minimum, maximum);
        }
        catch (error) {
            // eslint-disable-next-line no-console
            console.warn(`[@corefunc/v8] Has to generate incorrect non-cryptographic random integer. ${error.message}`);
            const minimumInteger = Math.ceil(minimum);
            return Math.floor(Math.random() * (Math.floor(maximum) - minimumInteger + 1)) + minimumInteger;
        }
    });
}
exports.generateNumber = generateNumber;
