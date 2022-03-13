/**
 * Zip Code Pattern
 */


let zipCode = "2849";

//For Bangladesh
let zipPattern = /^[0-9]{4}$/;

//For Pakistan
// let zipPattern = /^[0-9]{5}$/;

console.log(zipPattern.test(zipCode));

