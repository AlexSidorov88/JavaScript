function sumDigPow(a, b) {
   let found = [];
   for(let i = a; i <= b; i++){
     if(i === i.toString().split('').reduce((a,n,i)=> a + n ** (i + 1), 0)){
       found.push(i);
     }
   }
   return found;
 }