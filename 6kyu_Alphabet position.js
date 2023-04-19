function alphabetPosition(text) {
   let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
   let y = text.toLowerCase().split('').join('').split('')
   let map1 = y.map(x => alphabet.indexOf(x) + 1);   
    function isBigEnough(value) {
      return value > 0;
    }   
    return map1.filter(isBigEnough).join(' ')  
 }


 


 alphabetPosition("The sunset sets at twelve o' clock.")