/*
Given a string, return a new string that has transformed based on the input:

    Change case of every character, ie. lower case to upper case, upper case to lower case.
    Reverse the order of words from the input.

Note: You will have to handle multiple spaces, and leading/trailing spaces.

For example:

"Example Input" ==> "iNPUT eXAMPLE"

You may assume the input only contain English alphabet and spaces.

*/

function stringTransformer(str) {
   return str
   .split(' ') //array of words
   .reverse() //reverse the order of the words
   .join(' ') //remake the string with the right spaces
   .split('') //split by letter for case reversing
   .map(element => element == element.toUpperCase() ? element.toLowerCase() : element.toUpperCase()) //case reversing
   .join('') //join the array of letters for the result
  }

console.log(stringTransformer('You Know When  THAT  Hotline Bling'))