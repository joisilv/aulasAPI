/*14. Para calcular o fatorial de um número, você multiplica todos os números menores que ele até 1. Por exemplo, 10! = 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1. Faça um algoritmo que dado um número calcule o fatorial do mesmo*/

/*let numFatorial = 10;

for(let i = 1; i <= numFatorial; i++){
    result *= result ;
    

}*/

function fatorial(n) {
    if (n == 0) {
        return 1;
    }
    var result = n;
    while (n > 2) {
        result *= --n;
    }
    return result;
}
console.log(fatorial(10));

