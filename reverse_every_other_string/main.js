/*
Reverse every other word in a given string, then return the string.
Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. 
Punctuation marks should be treated as if they are a part of the word in this kata.
*/

function reverse(str){
    let string_array = str.trim().split(' ') //trim for trailing spaces

    let rev = false;

    for(let i = 0; i < string_array.length; i++ ){
        if(rev){
            string_array[i] = string_array[i].split('').reverse().join('')
        }

        rev = !rev
    }

    return string_array.join(' ')
  }

console.log(reverse("Reverse this string, please!"))