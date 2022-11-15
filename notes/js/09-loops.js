//FOR LOOP
//Imprimir una string 5 veces

for (let i = 0; i < 5; i++) {
    console.log("Imprimir 5 veces");
}

const cities = ["Barcelona", "Tokyo", "Berlin", "Helsinki"];
for (let i = 0; i < cities.length; i++) {
    console.log(`. ${cities[i]}`);
}

//while loop
const whileLoopArrayExample = ["Barcelona", "Tokyo", "Berlin", "Helsinki"];
let lengthOfWhileArrayExample = whileLoopArrayExample.length;
let count = 0;
while (lengthOfWhileArrayExample--) {
    console.log(whileLoopArrayExample[count]);
    count++;
}

// EJERCICIO - 001
// Dado un array, devuelve el tipo de dato que hay en cada una de sus posiciones.
const arrayEx = ["1", 3, false, "Hello"];
let arrayExercise = arrayEx.length;
let contador = 0;
while (arrayExercise--) {
    console.log(typeof(arrayEx[contador]));
    contador++;
}


// EJERCICIO - 002
// Creamos un array de strings con nombres de personajes famosos. Lo vamos a recorrer todo e imprimiremos la misma frase para cada uno (algo como "X is so famous, I love them.").

const famosos = ["Messi", "Ronaldo", "Mbappé", "Haaland", "Neymar"];
let arrayFamosos = famosos.length;
let j = 0;
while (arrayFamosos--) {
    console.log(`${famosos[j]} es un buen jugador de futbol`);
    j++;
}
