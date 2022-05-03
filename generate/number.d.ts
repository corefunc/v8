/**
 * @category Crypto
 * @name generateNumber
 * @description Secure random number generator. Integers only.
 * @param {number} minimum - Minimum integer to generate.
 * @param {number} maximum - Maximum integer to generate.
 * @returns {Promise<number>} Secure random integer.
 * @since 0.2.0
 */
export declare function generateNumber(minimum: number, maximum: number): Promise<number>;
