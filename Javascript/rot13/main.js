/*
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. 
ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. 
If there are numbers or special characters included in the string,
 they should be returned as they are.
  Only letters from the latin/english alphabet should be shifted, 
  like in the original Rot13 "implementation".

*/

function rot13(message){
    
    let letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    return message.split('').map(e => {

        let index = letters.indexOf(e.toLowerCase())

        console.log(index)

        if(!e.match(/[a-z]/i))
            return e
        else{
            if( index > 12){
                if(e === 'w' || e === 'v' )
                if(e.toUpperCase() === e)
                    return letters[index - 13].toUpperCase()
                else
                    return letters[index - 13]
            }else{
                if(e.toUpperCase() === e)
                    return letters[index + 13].toUpperCase()
                else
                    return letters[index + 13]
            }
        }
            
    }).join('')
  }

console.log(rot13("Codewars")) //Pbqrjnef