function findShort(s){
   var x = s.split(' ')
       arr = []

   for (let i = 0; i < x.length; i++) { arr.push(x[i].length) }                       
    return Math.min(...arr);

}

findShort("bitcoin take over the world maybe who knows perhaps")
findShort("Let's travel abroad shall we")

/*Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.*/