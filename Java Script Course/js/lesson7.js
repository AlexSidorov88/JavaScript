/*function info(word) {
   console.log(word + "!");
}

function summ(a,b) {
   var result = a + b;
   info(result);
}

summ(10,12);*/
 function summa(arr) {
   var sum = 0;
   for(var x = 0; x < arr.length; x++) 
      sum += arr[x];
      console.log(sum);
   
 }

 var array = [6,8,11,44]

 summa(array);