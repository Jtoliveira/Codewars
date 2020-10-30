/*
For building the encrypted string:
Take every 2nd char from the string, then the other chars, that are not every 2nd char, and concat them as new String.
Do this n times!

Examples:

"This is a test!", 1 -> "hsi  etTi sats!"
"This is a test!", 2 -> "hsi  etTi sats!" -> "s eT ashi tist!"

Write two methods:

function encrypt(text, n)
function decrypt(encryptedText, n)

For both methods:
If the input-string is null or empty return exactly this value!
If n is <= 0 then return the input text.

This kata is part of the Simple Encryption Series:
Simple Encryption #1 - Alternating Split
Simple Encryption #2 - Index-Difference
Simple Encryption #3 - Turn The Bits Around
Simple Encryption #4 - Qwerty

Have fun coding it and please don't forget to vote and rank this kata! :-)

*/

function encrypt(text, n) {

    console.log("text: " + text)

    if( text === null || text === undefined) return null;
    
    if(n <= 0) return text;

    n--;

    let input_array = text.split('')

    let result = [];

    let j  = 0;

    for(let i = 0; i < input_array.length; i++){//ugly but it works :D

        if ( (i+1) % 2 === 0  && !/!-@#$^_:,./.test(input_array[i])){ 
            result[j++] = input_array[i]

            input_array[i] = undefined
        }
    }

    let encrypted = result.join('') + input_array.join('')

    if(n => 1)
       return encrypt(encrypted, n)
    else
        return encrypted  
}

function decrypt(encryptedText, n) {

    console.log("text: " + encryptedText)

    if( encryptedText === null || encryptedText === undefined) return null;
    
    if(n <= 0) return encryptedText;

    n--;

    let input_array = encryptedText.split('')

    let result = Array(input_array.length)

    let subtracao = 1;

    let mid = Math.floor(input_array.length / 2)

    for(let i = 0; i < mid; i++){

        let index = i + subtracao

       result[index] = input_array[i]

       subtracao++
        
    }

    subtracao = mid;

    for(let i = mid; i < input_array.length; i++){

        let index = i - subtracao

       result[index] = input_array[i]

       subtracao--
    }

    let decrypted = result.join('')

    if(n => 1)
        return decrypt(decrypted, n)
    else
        return decrypted 
}

console.log(decrypt("hsi  etTi sats!", 1))

/*
This_is_a_test! (15)

h s i _ _ e t T i _ s a t s !
1 3 5 7 9 11 13 0 2 4 6 8 12 14 index original
0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 index atual 
1 2 3 4 5 6 7 7 6 5 4 3 2 1 0 subtracao 

index original = index atual + subtracao (primeira metade)
index original = index atual - subtracao (segunda metade)
*/