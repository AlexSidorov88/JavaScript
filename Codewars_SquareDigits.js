function squareDigits(num){
   const arr = []
   var y = num.toString().split('')
   y.forEach(el => {
      el = (el * el).toString()
     arr.push(el)
      
   });
   console.log(Number(arr.join('')));
   
 }

 squareDigits(5678)