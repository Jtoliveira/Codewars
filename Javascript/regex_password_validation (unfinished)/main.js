/*
You need to write regex that will validate a password to make sure it meets the following criteria:

    At least six characters long
    contains a lowercase letter
    contains an uppercase letter
    contains a number

Valid passwords will only be alphanumeric characters.

*/

function validate(password) {
    return /^((?=.*\d)(?=.*[a-z])(?=.*[A-Z]){6,})/g.test(password);
}

console.log(validate("fjd3  IR9")) //doesn't clear this test