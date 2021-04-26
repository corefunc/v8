import { deserialize, serialize } from "v8";

export function clone(objectToClone, returnOriginalOnError) {
  if (returnOriginalOnError) {
    try {
      return deserialize(serialize(objectToClone));
    } catch (_error) {
      return objectToClone;
    }
  } else {
    return deserialize(serialize(objectToClone));
  }
}
