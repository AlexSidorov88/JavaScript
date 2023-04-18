function likes(names) {
    
  if(names.length == 1) return console.log(names[0] + " likes this"); 
  if(names.length == 2) return console.log(names[0] + " and " + names[1] + " like this")
  if(names.length == 3) return console.log(names[0] + ", " + names[1] + " and " + names[2] + " like this")
  if(names.length > 3) return console.log(names[0] + ", " + names[1] + " and " + (names.length -2) + " others like this")
  else return console.log("no one likes this")
  
}




likes([])             //                   -->  "no one likes this"
likes(["Peter"] )       //                 -->  "Peter likes this"
likes(["Jacob", "Alex"])    //             -->  "Jacob and Alex like this"
likes(["Max", "John", "Mark"])    //       -->  "Max, John and Mark like this"
likes(["Alex", "Jacob", "Mark", "Max"]) //Alex, Jacob and 2* others like this"