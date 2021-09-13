"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateUuid4 = void 0;
const crypto = require("crypto");
/**
 * @category crypto
 * @name generateUuid4
 * @description Generates a random RFC 4122 version 4 UUID. The UUID is generated using a cryptographic pseudorandom number generator.
 * @summary ```import { generateUuid4 } from '@corefunc/v8/generate/uuid4';```
 * @param {boolean=} [disableEntropyCache=false] - By default, to improve performance, Node.js generates and caches enough random data to generate up to 128 random UUIDs. To generate a UUID without using the cache, set disableEntropyCache to true.
 * @returns {string} - Random RFC 4122 version 4 UUID.
 * @since 0.2.0
 */
function generateUuid4(disableEntropyCache = false) {
  if ("randomUUID" in crypto) {
    return crypto["randomUUID"]({ disableEntropyCache });
  }
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (text) => {
    const random = (Math.random() * 16) | 0,
      value = text === "x" ? random : (random & 0x3) | 0x8;
    return value.toString(16);
  });
}
exports.generateUuid4 = generateUuid4;
