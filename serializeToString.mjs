import { serialize } from "v8";

export function serializeToString(value) {
  return serialize(value).toString("binary");
}
