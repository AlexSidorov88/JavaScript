function generateHashtag (str) {   
   if (str.length == 0) return false; 
    var arr = str.split(" ");
   for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
   var str2 = arr.join("");  
}
   if (str2.length >= 140 ||str2.length == 0) return false;
   else return ('#' + str2); 
}

generateHashtag('')
generateHashtag(" Hello there thanks for trying my Kata Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
generateHashtag(" Hello there thanks for trying")
/*The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false*/



//Outptut: I Have Learned Something New Today