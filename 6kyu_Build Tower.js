function towerBuilder(nFloors) {
  var arr = [];
   var star = "*" 
  for (let i = 0; i < nFloors; i++) {
   
   arr.push(star.padStart(nFloors + i).padEnd(nFloors + nFloors -1)) 
   star = "*" + star + "*" 
  }
 return arr;   
 }
 towerBuilder(3)

/*Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]*/