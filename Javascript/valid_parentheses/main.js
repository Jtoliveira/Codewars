function validParentheses(parens){

    if( 0 >= parens.length || parens.length >= 100) return(false)

    var input = parens.split('');

    var i  = parens.length

    var result = 0;

   for(let i = 0; i < parens.length; i++){
        if(input[i] === "(") result++
        if(input[i] === ")") result--
        if(result < 0 ) return(false)
   }

   return (result == 0 ? true : false)

  }

  console.log(validParentheses("())"))