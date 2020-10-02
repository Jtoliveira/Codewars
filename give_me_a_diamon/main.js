/*
Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.
Task

You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.
Examples

A size 3 diamond:

 *
***
 *

...which would appear as a string of " *\n***\n *\n"

A size 5 diamond:

  *
 ***
*****
 ***
  *

...that is: " *\n ***\n*****\n ***\n *\n"
*/

function diamond(n){
  
    if(n < 0 || n % 2 === 0) return null;

    let result = Array(n)

    let spaces = n / 2

    let i;

    for(i = 0; i < n / 2; i++){

        let count = 1 + 2 * i

        result[i] = " ".repeat(spaces--) + "*".repeat(count) + "\n"
    }

    let spaces_1 = 1

    let count = n

    for( ; i < n; i++){

        result[i] = " ".repeat(spaces_1++) + "*".repeat(count - 2) + "\n"

        count -= 2
    }

    return result
}

console.log(diamond(3))