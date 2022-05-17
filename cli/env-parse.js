"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.envParse = void 0;
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
    Object.keys(defaults).forEach((key) => {
        if (key in env) {
            return;
        }
        env[key] = defaults[key];
    });
    return Object.keys(env)
        .sort((alpha, beta) => alpha.localeCompare(beta))
        .reduce((sorted, key) => {
        sorted[key] = env[key];
        return sorted;
    }, {});
}
exports.envParse = envParse;
