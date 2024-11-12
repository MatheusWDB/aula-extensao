var numeros = []; //array
var i = 0; //contador
var par = 0;
var impar = 0;

while (i < 5){
    numeros[i] = i;
    i++;
}

console.log(`Contador = ${i}`);
console.log(numeros);

for (i = 0; i < numeros.length; i++){
    if (numeros[i] % 2 == 0){
        par++;
        console.log(`O número: ${numeros[i]} é par.`)
    } else {
        impar++
        console.log(`O número: ${numeros[i]} é ímpar.`)
    }
}

console.log(`Foram ${par} números pares e ${impar} números ímpares`);
