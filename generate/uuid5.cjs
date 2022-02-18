"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateUuid5 = exports.NAMESPACE = void 0;
const crypto = require("crypto");
/**
 * @param {any} value
 * @returns {boolean}
 */
function checkIsPrimitive(value) {
    return (typeof value !== "object" && typeof value !== "function") || value === null;
}
/**
 * @param {Record<string, any>} objectLike
 * @param {boolean=} [isDeep=true]
 * @returns {Record<string, any>}
 */
function objectKeysSort(objectLike, isDeep = true) {
    if (!objectLike || typeof objectLike !== "object" || Array.isArray(objectLike)) {
        return objectLike;
    }
    const keys = Object.keys(objectLike).sort((alpha, beta) => alpha.localeCompare(beta));
    if (!keys.length) {
        return objectLike;
    }
    return keys.reduce((sorted, key) => {
        if (isDeep && objectLike[key] && typeof objectLike[key] === "object" && !Array.isArray(objectLike[key])) {
            sorted[key] = objectKeysSort(objectLike[key], isDeep);
        }
        else {
            sorted[key] = objectLike[key];
        }
        return sorted;
    }, Object.create(Object.getPrototypeOf(objectLike)));
}
/**
 * @param {string} hash
 * @param {string} version
 * @returns {string}
 */
function hashToVersion(hash, version = "5") {
    return (hash.substring(0, 8) +
        "-" +
        hash.substring(8, 12) +
        "-" +
        (version + hash.substring(13, 16)) +
        "-" +
        ((Number.parseInt(hash.substring(16, 18), 16) | 0x80) & 0xbf).toString(16) +
        hash.substring(18, 20) +
        "-" +
        hash.substring(20, 32));
}
var NAMESPACE;
(function (NAMESPACE) {
    NAMESPACE["DNS"] = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
    NAMESPACE["OID"] = "6ba7b812-9dad-11d1-80b4-00c04fd430c8";
    NAMESPACE["URL"] = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
    NAMESPACE["X500"] = "6ba7b814-9dad-11d1-80b4-00c04fd430c8";
})(NAMESPACE = exports.NAMESPACE || (exports.NAMESPACE = {}));
/**
 * @category crypto
 * @name generateUuid5
 * @description Generates a RFC 4122 version 5 UUID.
 * @summary ```import { generateUuid5 } from '@corefunc/v8/generate/uuid5';```
 * @param {any} name
 * @param {string} [namespace=NAMESPACE.OID] Namespace for generator.
 * @returns {string} - RFC 4122 version 5 UUID.
 * @since 0.2.2
 */
function generateUuid5(name, namespace = NAMESPACE.OID) {
    let nameAsString;
    if (typeof name === "string") {
        nameAsString = name;
    }
    else {
        if (checkIsPrimitive(name)) {
            nameAsString = JSON.stringify(name);
        }
        else {
            nameAsString = JSON.stringify(objectKeysSort(JSON.parse(JSON.stringify(name))));
        }
    }
    const hexNm = namespace.replace(/[{}-]/g, "");
    const bytesNm = Buffer.from(hexNm, "hex");
    const bytesName = Buffer.from(nameAsString, "utf8");
    const hash = crypto.createHash("sha1").update(bytesNm).update(bytesName).digest("hex");
    return hashToVersion(hash);
}
exports.generateUuid5 = generateUuid5;
