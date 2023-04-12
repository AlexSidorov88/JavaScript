function domainName(url){

   url = url.replace('https://', '').replace('http://', '').replace('www.', '')

   return url.split('.')[0]; 

 }

 domainName("http://google.com")
 domainName("www.xakep.ru")
 // Write a function that when given a URL as a string, parses 
 // out just the domain name and returns it as a string.