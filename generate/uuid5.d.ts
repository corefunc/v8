export declare enum NAMESPACE {
    DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
    OID = "6ba7b812-9dad-11d1-80b4-00c04fd430c8",
    URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8",
    X500 = "6ba7b814-9dad-11d1-80b4-00c04fd430c8"
}
/**
 * @category Crypto
 * @name generateUuid5
 * @description Generates a RFC 4122 version 5 UUID.
 * @summary ```import { generateUuid5 } from '@corefunc/v8/generate/uuid5';```
 * @param {any} name
 * @param {string} [namespace=NAMESPACE.OID] Namespace for generator.
 * @returns {string} - RFC 4122 version 5 UUID.
 * @since 0.2.3
 */
export declare function generateUuid5(name: any, namespace?: string): string;
