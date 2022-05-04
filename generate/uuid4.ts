import * as crypto from "crypto";

let randomUUID;

if ("randomUUID" in crypto) {
  randomUUID = crypto["randomUUID"];
} else {
  randomUUID = () => {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (text) => {
      const random = (Math.random() * 16) | 0,
        value = text === "x" ? random : (random & 0x3) | 0x8;
      return value.toString(16);
    });
  };
}

/**
 * @category Crypto
 * @name generateUuid4
 * @description Generates a random RFC 4122 version 4 UUID.
 * @summary ```import { generateUuid4 } from '@corefunc/v8/generate/uuid4';```
 * @returns {string} - Random RFC 4122 version 4 UUID.
 * @since 0.2.0
 */
export function generateUuid4(): string {
  return randomUUID();
}
