/**
 * Number Pattern
 */

let number = "8801927802930";
let pattern = /^(\+880|880|0)[0-9]{10}/;

console.log(pattern.test(number));

/**
 * Number can start with 0 or +880 or 880
 * Number Length must be 11
 */