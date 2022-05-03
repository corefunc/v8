// @see https://github.com/joepie91/node-random-number-csprng#api

import * as crypto from "crypto";

function calculateParameters(range) {
  let bitsNeeded = 0;
  let bytesNeeded = 0;
  let mask = 1;
  while (range > 0) {
    if (bitsNeeded % 8 === 0) {
      bytesNeeded += 1;
    }
    bitsNeeded += 1;
    mask = (mask << 1) | 1;
    range = range >>> 1;
  }
  return { bytesNeeded, mask };
}

function secureRandomNumber(minimum, maximum) {
  if (!crypto || !("randomBytes" in crypto)) {
    throw new ReferenceError(
      "No suitable random number generator available. Ensure that your runtime is linked against OpenSSL (or an equivalent) correctly.",
    );
  }
  if (!Number.isInteger(minimum)) {
    throw new TypeError(`The minimum value must be an integer. [${minimum}] given.`);
  }
  if (!Number.isInteger(maximum)) {
    throw new TypeError(`The maximum value must be an integer. [${maximum}] given.`);
  }
  if (!(maximum > minimum)) {
    throw new RangeError(
      `The maximum value must be higher than the minimum value. [${minimum}] and [${maximum}] given.`,
    );
  }
  if (minimum < Number.MIN_SAFE_INTEGER || minimum > Number.MAX_SAFE_INTEGER) {
    throw new RangeError(
      `The minimum value must be in-between MIN_SAFE_INTEGER and MAX_SAFE_INTEGER. [${minimum}] given.`,
    );
  }
  if (maximum < Number.MIN_SAFE_INTEGER || maximum > Number.MAX_SAFE_INTEGER) {
    throw new RangeError(
      `The maximum value must be in-between MIN_SAFE_INTEGER and MAX_SAFE_INTEGER. [${maximum}] given.`,
    );
  }
  let range = maximum - minimum;
  if (range < Number.MIN_SAFE_INTEGER || range > Number.MAX_SAFE_INTEGER) {
    throw new RangeError(
      `The range between the minimum and maximum value must be in-between MIN_SAFE_INTEGER and MAX_SAFE_INTEGER. [${minimum}] and [${maximum}] given.`,
    );
  }
  let { bytesNeeded, mask } = calculateParameters(range);
  const randomBytes = crypto.randomBytes(bytesNeeded);
  let randomValue = 0;
  for (let index = 0; index < bytesNeeded; index += 1) {
    randomValue |= randomBytes[index] << (8 * index);
  }
  randomValue = randomValue & mask;
  if (randomValue <= range) {
    return minimum + randomValue;
  } else {
    return secureRandomNumber(minimum, maximum);
  }
}

/**
 * @category Crypto
 * @name generateNumber
 * @description Secure random number generator. Integers only.
 * @param {number} minimum - Minimum integer to generate.
 * @param {number} maximum - Maximum integer to generate.
 * @returns {Promise<number>} Secure random integer.
 * @since 0.2.0
 */
export async function generateNumber(minimum, maximum) {
  try {
    return secureRandomNumber(minimum, maximum);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.warn(`[@corefunc/v8] Has to generate incorrect non-cryptographic random integer. ${error.message}`);
    const minimumInteger = Math.ceil(minimum);
    return Math.floor(Math.random() * (Math.floor(maximum) - minimumInteger + 1)) + minimumInteger;
  }
}
