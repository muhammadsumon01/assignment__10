// Email/Gmail Pattern

let email = "muhammadsumon.me@gmail.com";

let emailPattern = /(^[^._][a-z0-9\.]{3,28}[^\._])@[a-z0-9\-]{2,}(\.[a-z]{2,63})$/;

console.log(emailPattern.test(email));

//some correct gmail address - oos.sdj.d@iie.com , owe.we@ow.co, iw.w.rr@ke-re.lso
//some incorrect gmail address - .sdwe.@g.so , .weewwewe_@gmail.com

/**
 * Rulse For Gmail/email
 * 01. a username should 6–30 characters & username should not start and end with a dot sign or
 * periods (.)
 * 02. Usernames can contain letters (a-z), numbers (0-9), and periods (.)
 * 03. Usernames cannot contain an ampersand (&), equals sign (=), underscore (_), apostrophe ('),
 * dash (-), plus sign (+), comma (,), brackets (<,>), or more than one period (.) in a row
 * 04. Usernames can begin or end with non-alphanumeric characters except periods (.)
 * Reference Link - https://support.google.com/mail/answer/9211434?hl=en
 */






// Remove Whitespaces from string

let txt = "I love bangladesh. I  live in         Bangladesh";
let text = txt.replace(/ \s+/g, " ");

// console.log(text);


