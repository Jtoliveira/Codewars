/*
Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.
*/

function List(names){
    //your code here

    let total = names.length

   if(total == 0) return('') 

   let result = '';

   for(let i = 0; i < total; i++){

    if(i === total -2 ){ 
      result += names[i].name + " & " 
    }else if( i === total -1 ){ 
      result += names[i].name
    }else{
      result += names[i].name + ", ";
    }
  }

   return result;

}

  var list = [{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]

  console.log(List(list))