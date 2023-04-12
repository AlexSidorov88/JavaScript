function reverseWords(str) {
  
   var x = str.split(" ")
   var arr = []

   for (var i = 0; i < x.length; i++){
      var y = x[i].split("").reverse().join("");
     arr.push(y)    
   }

  return arr.join(' ');
 
}
/*Complete the function that accepts a string parameter, 
   and reverses each word in the string. All spaces in the string should be retained.
   "This is an example!" ==> "sihT si na !elpmaxe"
   "double  spaces"      ==> "elbuod  secaps*/
   function reverseWords(str) {
      return str.split("").reverse().join("").split(" ").reverse().join(" ");
    }