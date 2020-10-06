/*
Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

    Your message is a string containing space separated words.
    You need to encrypt each word in the message using the following rules:
        The first letter needs to be converted to its ASCII code.
        The second letter needs to be switched with the last letter
    Keepin' it simple: There are no special characters in input.

Examples:

encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"
*/

var encryptThis = function(text) {
    let words = text.split(" ");

    return words.map(word => {
        let curr = word.split('')

        curr[1] = word[word.length-1]

        curr[curr.length - 1] = word[1]

        curr = curr.join('')

        return curr.charCodeAt(0) + curr.substring(1, curr.size)
    }).join(" ")
}

console.log(encryptThis("Hello"))