function getMiddle(s)
{
   var even = s.length / 2
   var odd = s.length / 2 | 0
  
   if (s.length % 2 == 0) return s[even - 1] + s[even];
   else return s[odd];
     
}
getMiddle("midsdle")
getMiddle("a")

/*You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. 
  If the word's length is even, return the middle 2 characters.*/

