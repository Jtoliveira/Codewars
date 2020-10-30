/*
Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. 

For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.
*/

function firstNonRepeatingLetter(s) {
    // Add your code here

    let charArray = s.split('') //array with the characters

    if(charArray.length === 1 ) return charArray[0]

    let result = ""

    let first = false;

    for(let i = 0; i < s.length; i++){

        let current = charArray[i];

        if( charArray.filter( index => {return index.toLowerCase() === current.toLowerCase() }).length === 1){
            if(!first){
                result = current;
                first = true;
            }
        }
        
    }

    return result 
}

console.log("final log: " + firstNonRepeatingLetter("sTreSS"))

/*
function firstNonRepeatingLetter(str){
  return str.split('').find(e => str.match(new RegExp(`${e}`, 'gi')).length === 1) || ''
}
*/