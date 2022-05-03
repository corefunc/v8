/**
 * @category Generate
 * @name generateTimeStamp
 * @description Generates timestamp.
 * @summary ```import { generateTimeStamp } from '@corefunc/v8/generate/time-stamp';```
 * @param {number=} [start=0]
 * @param {number=} [end=31]
 * @returns {string}
 * @since 0.2.6
 */
export function generateTimeStamp(start: number = 0, end: number = 31): string {
  return `${new Date().toISOString().replace(/[-:.TZ]/g, "")}${process.hrtime.bigint()}`.substring(start, end);
}
