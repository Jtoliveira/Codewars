/*
A string is considered to be in title case if each word in the string is either (a) capitalised (that is,only the first letter of the word is in upper case) or 
(b) considered to be an exception and put entirely into lower case unless it is the first word, 
which is always capitalised.

Write a function that will convert a string into title case, given an optional list of exceptions (minor words). 
The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- 
it should behave in the same way even if the case of the minor word string is changed.

###Arguments (Haskell)

    First argument: space-delimited list of minor words that must always be lowercase except for the first word in the string.
    Second argument: the original string to be converted.

###Arguments (Other languages)

    First argument (required): the original string to be converted.
    Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.

###Example

titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'
*/

function titleCase(title, minorWords) {
    let title_array = title.split(" ")

    if(title_array.length === 1 && title_array.includes('')) return title //total despair
    
    if(minorWords === undefined){
        return title_array.map(word => word.toLowerCase()).map(word => word[0].toUpperCase() + word.substring(1, word.size)).join(' ')
    }else {
        let minor_array = minorWords.split(" ").map(word => word.toLowerCase())

        title_array = title_array.map(word => word.toLowerCase())

        for(let i = 0; i < title_array.length; i++){

            if( i === 0 || !minor_array.includes(title_array[i]))
                title_array[i] =title_array[i][0].toUpperCase() + title_array[i].substring(1, title_array[i].size)
            else
                title_array[i] = title_array[i]
        }
        return title_array.join(' ')
    }
}

console.log(titleCase('', ''))