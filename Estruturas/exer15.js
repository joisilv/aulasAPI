/*Faça uma função que receba uma quantidade x e retorne um array com x números randomicos.*/

/*15. Faça uma função que receba uma quantidade x e retorne um array com x números randomicos.*/
function numerosrandomicos(numrandom) {
   let arr = [];
   for (let i = 0; i < numrandom; i++) {
       arr.push(Math.floor((Math.random() * 1000) + 1));        
   }
   return arr;
}

console.log(numerosrandomicos(5))