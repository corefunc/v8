/**
 * @category Process
 * @name argvParse
 * @description Parses `process.argv` string.
 * @summary ```import { argvParse } from '@corefunc/v8/cli/argv-parse';```
 * @returns {Record<string, boolean | null | number | string | undefined>}
 * @since 0.2.4
 */
export function argvParse(): Record<string, boolean | null | number | string | undefined> {
  const args = new Object(null) as Record<string, boolean | null | number | string | undefined>;
  process.argv
    .slice(2)
    .filter((arg) => arg !== "--")
    .forEach((arg) => {
      if (!arg.includes("=")) {
        args[arg] = undefined;
        return;
      }
      const index = arg.indexOf("=");
      const key = arg.slice(0, index);
      const value = arg.slice(index + 1);
      args[key] = value;
      const check = value.toLowerCase().trim();
      switch (true) {
        case check === "false":
          args[key] = false;
          break;
        case check === "null":
          args[key] = null;
          break;
        case check === "true":
          args[key] = true;
          break;
        case check === "undefined":
          args[key] = undefined;
          break;
        case /\d/.test(check) && Number.isFinite(Number.parseFloat(check)):
          args[key] = Number.parseFloat(check);
          break;
      }
    });
  Object.keys(args).forEach((key) => {
    if (!key.startsWith("-")) {
      return;
    }
    if (key.startsWith("--")) {
      const cleanKey = Array.from(key).slice(2).join("");
      if (cleanKey in args) {
        return;
      }
      args[cleanKey] = args[key];
      delete args[key];
    } else if (key.startsWith("-")) {
      const cleanKey = Array.from(key).slice(1).join("");
      if (cleanKey in args) {
        return;
      }
      args[cleanKey] = args[key];
      delete args[key];
    }
  });
  return Object.keys(args)
    .sort((alpha, beta) => alpha.localeCompare(beta))
    .reduce((sorted, key) => {
      sorted[key] = args[key];
      return sorted;
    }, {});
}