/*let num1= 0;
let num2= 1;
let num3;
let numFinal = 100;
for(let i = 1; i <= numFinal; i++ ){

    num3 = num1 + num2
    num1 = num2
    num2 = num3

    console.log(num3);
}*/


/*function calcFibonacciSequence(qntNumbers){
    if (qntNumbers <= 0){
        return[];
    }else if(qntNumbers === 1){
        return[0];
    }else if(qntNumbers === 2){
        return[0, 1];
    }else{
        let fibonacciSeq = [0,1];
        let n1 = 0;
        let n2 = 1;
        
        for(let i=3; i <=qntNumbers; i++){

            let nextNumber = n1 + n2;
            n1 = n2;
            n2 = nextNumber;
            fibonacciSeq.push(nextNumber);

        }
        return fibonacciSeq;
    }
    
    console.log(calcFibonacciSequence(qntNumbers));
}*/


function calcFibonacciSequence(qtdNumbers) {
    if (qtdNumbers <= 0) {
        return [];
    } else if (qtdNumbers === 1) {
        return [0];
    } else if (qtdNumbers === 2) {
        return [0, 1]
    } else {
        let fibonacciSeq = [0,1];
        let n1 = 0;
        let n2 = 1;

        for(let i = 3; i <= qtdNumbers; i++){
            let nextNumber = n1 + n2;
            n1 = n2;
            n2 = nextNumber;
            fibonacciSeq.push(nextNumber);
        }
        
        return fibonacciSeq;
    }
    
}
console.log(calcFibonacciSequence(5));
     
    
