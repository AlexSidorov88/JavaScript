function solution(str){ 
   arr = []   
   for (let i = 0; i < str.length; i++) {
   if (i % 2 == 0) arr.push(str[i].concat(str[i+1]))}      
    if (str.length % 2 == 0)  return arr;
    else arr.pop();arr.push(str[str.length - 1]+'_')
     return arr;      
}

solution("abcdef")//, ["ab", "cd", "ef"]
solution("abcdefg")//, ["ab", "cd", "ef", "g_"]

   //Second solution
function solution(s){
   return (s+"_").match(/.{2}/g)||[]
}
/* 


Complete the solution so that it splits the string into pairs of two characters. 
   If the string contains an odd number of characters then it should 
   replace the missing second character of the final pair with an underscore ('_').*/