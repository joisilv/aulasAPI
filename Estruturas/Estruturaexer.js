let n = 1;

do { 
    if (n % 3 == 0 && n % 5 == 0){
      console.log(n);
    } 
    n++;
} while(n <= 1000);