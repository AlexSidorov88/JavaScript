function findUniq(arr) {
   var set = []
   arr.forEach(element => {   
      if (element != arr[0] && element != arr[arr.length-1]) console.log(element);             
   })
      set.push(arr[0],arr[arr.length-1])
      if (set[0] != arr[1] && set[0] != set[1])  console.log(arr[0])
      if (set[1] != arr[1] && set[0] != set[1])  console.log(arr[arr.length-1])   
     
 }
 // Best solution
   function findUniq(arr) {
   arr.sort((a,b)=>a-b);
   return arr[0]==arr[1]?arr.pop():arr[0]
}

findUniq([ 1, 0, 0 ])
findUniq([ 0, 1, 0 ])
findUniq([ 0, 1, 1 ])
findUniq([ 1, 1, 1, 2, 1, 1 ])
findUniq([ 1, 1, 2, 1, 1 ])
findUniq([ 3, 10, 3, 3, 3 ])
