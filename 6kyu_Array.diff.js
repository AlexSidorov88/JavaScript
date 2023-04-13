function arrayDiff(a, b) {
   let arr= []
   
   for (let i = 0; i < a.length; i++) {
      if (!b.includes(a[i])) arr.push(a[i]);      
   }
   return arr;
}

arrayDiff([1,2],[1]) //[2]
arrayDiff([1,2,2,2,3],[2]) //[1,3]

// Your goal in this kata is to implement a difference function, 
// which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b keeping their order.
