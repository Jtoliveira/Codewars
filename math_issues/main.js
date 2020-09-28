/*
Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? We can assure, that only non-negative numbers are passed as arguments. So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.

Here is a list of functions, we need:

    Math.round()
    Math.ceil()
    Math.floor()
*/
Math.round = function(number) {

    let integer_array = number.toPrecision(2).split('.')

    if(parseInt(integer_array[1]) < 50 || integer_array[1] === undefined ) 
        return parseInt(integer_array[0])
    else
        return parseInt(integer_array[0] + 1)              
};
  
Math.ceil = function(number) {

    if(number === null) return 0;

    let integer_array = number.toString().split('.')

    if(integer_array.length === 1 ) return parseInt(integer_array[0])

    if(parseInt(integer_array[0]) < 0)
        return parseInt(integer_array[0])
    else
        return parseInt(integer_array[0]) + 1
};
  
Math.floor = function(number) {
    if(number === null) return 0;

    let integer_array = number.toString().split('.')

    if(integer_array.length === 1 ) return parseInt(integer_array[0])

    if(parseInt(integer_array[0]) >= 0)
        return parseInt(integer_array[0])
    else
        return parseInt(integer_array[0] + 1)
};

  console.log(Math.ceil(31.000000001))