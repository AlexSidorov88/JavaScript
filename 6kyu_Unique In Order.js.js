var uniqueInOrder=function(iterable){
  var arr2 = []
  for (let index = 0; index < iterable.length; index++) {
   const element = iterable[index];
      if(element != iterable[index+1]) arr2.push(element)
  }
  console.log(arr2);
 }

uniqueInOrder('AAAABBBCCDAABBB') //== ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')       //  == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])// == [1,2,3]

//Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same 
//value next to each other and preserving the original order of elements.