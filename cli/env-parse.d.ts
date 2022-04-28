/**
 * @category Process
 * @name envParse
 * @description Parses `process.env` string.
 * @summary ```import { envParse } from '@corefunc/v8/cli/env-parse';```
 * @param {Record<string, boolean | null | number | string | undefined>=} [defaults={}]
 * @param {boolean=} [shouldBeStrings=false]
 * @returns {Record<string, boolean | null | number | string | undefined>}
 * @since 0.2.5
 */
export declare function envParse(defaults?: Record<string, boolean | null | number | string | undefined>, shouldBeStrings?: boolean): Record<string, boolean | null | number | string | undefined>;
