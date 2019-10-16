/*Faça um algoritmo que sortei cara (0) ou coroa (1) n vezes. E no fim mostre quantas vezes deu cara e quantas coroa.*/

/*16. Faça um algoritmo que sortei cara (0) ou coroa (1) n vezes.
E no fim mostre quantas vezes deu cara e quantas coroa.*/


function caraoucoroa(maxJogadas) {
    let cara = 0;
    let coroa = 1;

    for (let i = 0; i < maxJogadas; i++) {
        let moeda = Math.round(Math.random());
        if (moeda == 1) {
            cara++; 
        } else {
            coroa++ 
        }
    }
    console.log('Cara ' + cara);
    console.log('Coroa ' + coroa);
}
caraoucoroa(6);
