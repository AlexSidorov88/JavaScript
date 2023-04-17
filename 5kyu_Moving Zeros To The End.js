function moveZeros(arr) {
   var arr2 = []
   var arr3 = []
      arr.forEach(element => {
       if (element != 0 || typeof element != 'number' )  arr2.push(element)
       else arr3.push(element)
       console.log(typeof element); 
      })
  console.log(arr2.concat(arr3)); 
 }

 moveZeros([false,1,0,1,2,0,1,3,"a"])
 //Write an algorithm that takes an array and moves all of the zeros to the end,
 // preserving the order of the other elements.