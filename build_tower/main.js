/*
Build Tower

Build Tower by the following given argument:
number of floors (integer and always greater than 0).

Tower block is represented as *

    Python: return a list;
    JavaScript: returns an Array;
    C#: returns a string[];
    PHP: returns an array;
    C++: returns a vector<string>;
    Haskell: returns a [String];
    Ruby: returns an Array;
    Lua: returns a Table;

Have fun!
*/

function towerBuilder(nFloors) {
    // build here

    let result = Array(nFloors)

    for(let i = 0 ; i < nFloors; i++){

        let count = 1 + 2 * i

        let spaces = (1 + 2 * nFloors) - (1 + 2 * i)

        if(i === nFloors - 1)
            result[i] = '*'.repeat(count)
        else
            result[i] = ' '.repeat(spaces/2) + '*'.repeat(count) + ' '.repeat(spaces/2)

    }
    

    return result
}

console.log(towerBuilder(4))