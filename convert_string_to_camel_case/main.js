/*
Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
*/

function toCamelCase(str){

    if(str == null) return('')

    let substrings = str.split(/[-_]+/) //[]+ equals "more than one separator"

    let result = substrings[0]

    for(let i = 1; i < substrings.length; i++){

        if(substrings[i][0] == substrings[i][0].toLowerCase()) //se a primeira letra for minuscula
            result += substrings[i][0].toUpperCase() + substrings[i].slice(1)
        else
            result += substrings[i]
    }

    console.log(result)

    return result

}

console.log(toCamelCase("A-B-C"))