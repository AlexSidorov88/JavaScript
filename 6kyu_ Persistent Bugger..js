function persistence(num) {
   num = num.toString().split('')
  var result = num.reduce((a,b)=> a*b).toString().split('')  
  var x = 1
  if (num < 10) return 0;
  if (num.includes(0)) return 1;
  do { result = result.reduce((a,b)=> a*b).toString().split('');x++;   
  } while (result.length > 1); 
    return x;
                         
}

//Best solution
function persistence(num) {
   var times = 0;
   
   num = num.toString();
   
   while (num.length > 1) {
     times++;
     num = num.split('').map(Number).reduce((a, b) => a * b).toString();
   }
   
   return times;
}
 /* 
 Write a function, persistence, that takes in a positive parameter num and returns 
 its multiplicative persistence, which is the number of times you must multiply 
 the digits in num until you reach a single digit.*/
 
