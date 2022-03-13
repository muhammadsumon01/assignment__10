// Username Pattern

let username = "muhammadsumon_";
let usernamePattern = /^[a-z0-9_]{6,20}$/;

console.log(usernamePattern.test(username));


/**
 * Username can contain (a-z), _, Numbers and should be 6-20 Characters
 */