// Declaração de variável, usando array

//let num = [5,8 ,4]


/*Javascript vai ler, vai perceber que não tem posição 3 e vai criar a posição. colocando o número 6 nela.*/

//num[3] = 6

/*Método interno, vai criar a posição 4 e acrescentar o número 7 nela*/

// num.push(7)

/* Vai mostrar o comprimento do array ou vetor, ele vai mostrar que possui 5 elementos nesse caso*/

// num.length


/* pega os elementos e coloca em ordem crescente*/

//num.sort()


/*Inicialização, teste lógico, incremento, for é uma estrutura de repetição, nesse trecho, utilizamos para percorrer os elementos de forma automática, comece no zero e enquanto a posição for menor que o tamanho do array, mostre o valor daquela posição e pule para a próxima*/

/*for(let pos= 0; pos<num.length;pos++){
    console.log(num[pos])
}*/

/*faz a mesma coisa que o trecho de cima*/

   /* for(let pos in valores) {
        console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
    } */

/*Método indexOf é usado para buscar um valor dentro de um array*/

/*
let pos = num.indexOf(4)
if(pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}
*/