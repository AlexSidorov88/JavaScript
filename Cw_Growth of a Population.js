function nbYear(p0, percent, aug, p) {
   let x  = percent / 100
   let y  = p0 + (p0 * x) + aug
   let year = 1
     
  while ((y / p) < 1) {  
   y = (y + y * x) + aug 
   year++;   
  }
    console.log(year); 
}

nbYear(1500000, 2.5, 10000, 2000000)
/*In a small town the population is p0 = 1000 at the beginning of a year.
 The population regularly increases by 2 percent per year and moreover 50 new
 inhabitants per year come to live in the town. How many years does the town 
 need to see its population greater or equal to p = 1200 inhabitants?*/
