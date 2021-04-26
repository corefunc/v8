import { deserialize } from "v8";

function deserializeFromStringBasic(binaryString) {
  return deserialize(Buffer.from(binaryString, "binary"));
}

export function deserializeFromString(binaryString, toPrototype) {
  if (!toPrototype) {
    return deserializeFromStringBasic(binaryString);
  }
  let instance;
  if (toPrototype.constructor.name === "Function") {
    instance = Object.create(toPrototype.prototype);
  } else {
    instance = Object.create(toPrototype);
  }
  return Object.assign(instance, deserializeFromStringBasic(binaryString));
}
