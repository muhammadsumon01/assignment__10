// Password Pattern

let password = "jjjjj djj#K   8";
let passwordPattern =/^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*\s]{6,16}$/;

console.log(passwordPattern.test(password) + "" + password.length );


/**
 * A strong password can contain upperCase & lowerCase letter, Number, Symbol, whitespace,
 */