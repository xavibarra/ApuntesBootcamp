// COMANDO DE NODE PARA VER RESULTADOS:
// node movies.js

//const movies = require('./data');
import {movies} from './data.js';
//Iteracion 1
// funcion tipo flecha que aceptara un parametro
// porque el param va a ser el array de datos que queremos apuntar.
const getAllDirectors = (moviesArray) => {
  // Usamos el paramatero para iterar y crear un nuevo copia del array en base al metodo map y segmentamos por algo especifico dentro del map mediante una expresion que se encarga de llamar al director.
  const rawList = moviesArray.map((movie) => movie.director);
  // usamos la variable de arriba en conjunto con el metodo filter que le pasamos 2 parametros, uno para apuntar al nombre del director y el segundo es el numero de# del director en el array y comparamos en base a la primera instancia que aparece el nombre del director con las otras veces que aparece para poder filtrar
  const cleanList = rawList.filter(
    (director, numeroDePocisionDirectorEnElArray) =>
      rawList.indexOf(director) === numeroDePocisionDirectorEnElArray
  );
  // returnamos la variable que queremos usar :)
  return cleanList;
};
console.log('1. Clean list:');
console.table(getAllDirectors(movies));



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) { 
    const steven = moviesArray.filter((movie) => movie.director == "Steven Spielberg" && movie.genre.includes("Drama"));
    return steven;
}
console.log("Steven Spilberg drama movies:");
console.table(howManyMovies(movies));   


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
//VERSION 01:
function scoresAverage(moviesArray) {
    const scores = moviesArray.reduce((total, movie) =>{
        return (total += movie.score);
    }, 0);
    return (scores / moviesArray.length).toFixed(2);
}
console.log("Average:");
console.log(scoresAverage(movies));

//VERSIÓN 02:
const scoresAverage2=(moviesArray) => {
    //variable para guardar el valor de la suma
    let totalScores = 0;
    //mapeamos el array de movies para sacar todos los scores
    const scores = moviesArray.map((movie) => movie.score);
    //Buclear en base a cada score de cada peli y vamos a sumarle el score a la variable de totalScore por cada elemento del array
    for (let i = 0; i < scores.length; i++){
        totalScores = scores[i] + totalScores; //lo mismo que totalScores += scores [i];
    }
    const totalMovieScore = totalScores / moviesArray.length;
    return totalMovieScore.toFixed(2)
}
// console.log(scoresAverage2(movies))


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    //pelis que contengan el genero drama
    const drama = moviesArray.filter((movieDrama) => {
        return movieDrama.genre.includes("Drama");
    });
    //mapeamos la variable drama y sacamos todos los scores de cada peli que contenga drama
    const scores = drama.map((movie) => movie.score);
    //variable iniciada en 0, para sumer todos los scores
    let total = 0;
    scores.forEach((scores) => total += scores);
    return (total / drama.length).toFixed(2);
}
console.log("Average drama: ");
console.log(dramaMoviesScore(movies));

//VERSION 02
const dramaMoviesScoreReduce = (moviesArray) => {
    const drama = moviesArray.filter((moviesDrama) => {
        return moviesDrama.genre.includes("Drama");
    });
    const scores = drama.reduce((total, movie) => {
        return (total += movie.score);
    }, 0);
    const totalDrama = scores / drama.length;
    return totalDrama.toFixed(2);
}
// console.log("Average drama: ");
// console.log(dramaMoviesScoreReduce(movies));



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
//creamos copia array mediante map()
    const copyOfMovies = moviesArray.map((movie) => movie);
    //sortear y comparar con un metodo de strings localeCompare()
    copyOfMovies.sort((a, b) => {
        if (a.year > b.year) return a.year - b.year;
        if (a.year < b.year) return a.year - b.year;
        else return a.title.localeCompare(b.title)
    })
    return copyOfMovies
}
console.table(orderByYear(movies));


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    return moviesArray.map((movie) => movie.title).sort().slice(0, 20);
}
console.table(orderAlphabetically(movies))

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
