export type BufferEncoding =
  | "ascii"
  | "base64"
  | "base64url"
  | "binary"
  | "hex"
  | "latin1"
  | "ucs-2"
  | "ucs2"
  | "utf-8"
  | "utf16le"
  | "utf8";

/**
 * @category Buffer
 * @name base64Decode
 * @description Decodes to a string according to the specified character encoding in encoding.
 * @summary ```import { base64Decode } from '@corefunc/v8/base64/decode';```
 * @param {string} [base64Text] Base64 encoded string.
 * @param {string=} [encoding="utf8"] The character encoding to use.
 * @param {number=} [start=0] The byte offset to start decoding at.
 * @param {number=} [end=base64Text.length] The byte offset to stop decoding at (not inclusive).
 * @returns {string} Decoded string.
 * @since 0.1.1
 */
export function base64Decode(base64Text: string, encoding?: BufferEncoding, start?: number, end?: number): string {
  return Buffer.from(base64Text, "base64").toString(encoding, start, end);
}
