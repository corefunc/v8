"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.envParse = void 0;
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
function envParse(defaults = {}, shouldBeStrings = false) {
    const env = new Object(null);
    if (shouldBeStrings) {
        Object.keys(process.env).forEach((key) => {
            env[key] = process.env[key];
        });
    }
    else {
        Object.keys(process.env).forEach((key) => {
            const value = process.env[key];
            env[key] = value;
            const check = value.toLowerCase().trim();
            switch (true) {
                case check === "false":
                    env[key] = false;
                    break;
                case check === "null":
                    env[key] = null;
                    break;
                case check === "true":
                    env[key] = true;
                    break;
                case check === "undefined":
                    env[key] = undefined;
                    break;
                case /\d/.test(check) && Number.isFinite(Number.parseFloat(check)):
                    if (!check.includes(".") && !check.includes(",")) {
                        env[key] = Number.parseInt(check, 10);
                    }
                    if ((check.match(/[.]/g) || []).length < 2) {
                        env[key] = Number.parseFloat(check);
                    }
                    break;
            }
        });
    }
    if (defaults) {
        Object.keys(defaults).forEach((key) => {
            if (key in env) {
                return;
            }
            env[key] = defaults[key];
        });
    }
    return Object.keys(env)
        .sort((alpha, beta) => alpha.localeCompare(beta))
        .reduce((sorted, key) => {
        sorted[key] = env[key];
        return sorted;
    }, {});
}
exports.envParse = envParse;
