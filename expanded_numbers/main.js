/*
Write Number in Expanded Form

You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'

NOTE: All numbers will be whole numbers greater than 0.
*/

function expandedForm(num) {
    // Your code here

    let num_array = num.toString().split('');

    let length = num_array.length - 1

    for(let i = 0; i < num_array.length; i++){
        num_array[i] =  num_array[i] * Math.pow(10, length-- )
    }

    return num_array.join(" + ").replace(/ \+ 0 \+ /g, " + ").replace(/ \+ 0/g,"") //you gotta prepend the special characters in the string with the \ to escape them

}

console.log(expandedForm(9000000))