<template>
   <h1 v-if="display">I'm showing up beacuse our reactive data is true!</h1>
   <h1 v-else>I'm the option anytime our reactive data cannot be read as true</h1>

   <p v-if="lenguage==='HTML'">Today we are learing HTML</p>
   <p v-else-if="lenguage==='CSS'">Today we are learing CSS</p>
   <p v-else-if="lenguage==='JS'">Today we are learing JS</p>
   <p v-else>Today there's no class!</p>

    <div v-if="show">
        <h1>{{bio.name}}</h1>
        <p v-if="bio.age > 18">i am an adult!</p>
        <p v-else>I'm still a youg git! </p>

        <p v-if="bio.hasCodeBefore">This is not my first time at the javascript rodeo</p>
        <p v-else>I am still a newbie to code but I'm learning fast</p>
    </div>
    <p v-else>Not bio to show</p>
    <hr>
    <h1>Mis peliculas favoritas</h1>
    <ol>
        <li v-for="pelicula in movies">{{pelicula}}</li>
    </ol>
    <h1>Preferencias</h1>
    <ol>
        <li v-for="(value, key, index) in myFavorite" :key="index">{{key}}: {{value}}</li>
    </ol>
    <h1>Students</h1>
    <ul>
        <li v-for="(estudiante) in students">
          <div v-if="estudiante.age >= 18">
            <p>I can go for drinks with {{ estudiante.name }} after class!</p>
          </div>
          <div v-else>
            <p>
              {{ estudiante.name }} is still too young, they'll have to go home
              tonight
            </p>
          </div>
          <ul>
            <li v-for="lenguaje in estudiante.favoritesLenguages">
              {{ lenguaje }}
            </li>
          </ul>
        </li>
    </ul>
</template>

<script setup>
 import{ref, reactive} from "vue"


// Ejercicios Conditional Rendering

// Creamos la estructura básica de un componente de vue en la que vamos a mostrar el resultado de los ejercicios. Recordad importar el componente donde sea necesario para poder ver el avance de vuestros ejercicios.

// Ej.1: Creamos dos <h1> diferentes, uno que diga "I'm showing up beacuse our reactive data is true!" y el otro que diga "I'm the option anytime our reactive data cannot be read as true". Como vemos, los dos dependerán de una variable reactiva en vuestro script y, según si esta es true or false, enseñaréis uno u otro.
const display = ref(true)

// Ej.2: Creamos cuatro <p> tags. Los cuatro se renderizarán condicionalmente mirando a una misma variable que llamaremos "language". Esta variable podrá tener tres valores distintos: "HTML", "CSS" o "JS". En nuestro template deberemos leer dicha variable y enseñar un <p> u otro según su valor. Cada uno de los <p> tags a su vez contendrá el texto "Today we are learing" seguido del valor de la variable que imprimiréis en pantalla usando la moustache syntax. El último <p> tag se encargará de aparecer cuando el valor de "language" no sea ninguno de los tres mencionado anteriormente, y contendrá el texto "Today there's no class!".

const lenguage= ref('CSS')
// Ej.3***: Creamos una variable reactiva que contenga un objeto con vuestro nombre (string), vuestra edad (number) y una key hasCodedBefore (boolean) la cual será true or false dependiendo de si antes del bootcamp habíais picado código o no. Después creamos otra variable reactiva booleánica que podéis llamar show, por ejemplo. Según si show está en true or false, en vuestro template deberíais enseñar o no una pequeña biografía. Esta biografía, a su vez, constará primero de vuestro nombre como título. Después tendrá un <p> que se renderizará de manera condicional. En caso de que vuestra edad sea superior a 18 enseñaremos la frase "I am an adult! :)"; en caso contrario, enseñaremos "I'm still a minor :(". Finalmente, según si hasCodedBefore es true or false también renderizaréis "I am still a newbie to code but I'm learning fast" o "This is not my first time at the javascript rodeo".

const bio = reactive({
    name: "Xavi",
    age: 23,
    hasCodeBefore: true
});
const show = ref(true);

// Ejercicios Iterating Elements

// Creamos la estructura básica de un componente de vue en la que vamos a mostrar el resultado de los ejercicios. Recordad importar el componente donde sea necesario para poder ver el avance de vuestros ejercicios.

// Ej.1: Creamos una variable reactiva que contenga un array con vuestras cinco películas preferidas. En el template pondremos un título de My favorite Movies y después una <ol>. Dentro de la ordered list recorreremos el array de películas y crearemos un <li> para cada una que nos las printee en pantalla. A cada <li> le daremos el index del elemento en el array como key.
const movies = reactive(["Saw","La exorcista","La milla verde","Intocable","Fuga de Alcatraz"]);
// Ej.2:  Creamos una variable reactiva que contenga un objeto con cinco keys: favoriteFood, favoriteDrink, favoriteSport, favoriteCountry y favoriteArrayMethod. En el template vamos a recorrer el objeto para mostrar cada key y su valor en una unoredered list (en pantalla deberíamos ver algo como "favoriteFood: Sushi").
const myFavorite = reactive({
    favoriteFood:"Spaghetti",
    favoriteDrink:"Agua",
    favoriteSport:"Futbol",
    favoriteCountry:"Costa Rica",
    favoriteArrayMethod:"Push()"
})

// Ej.3***: Creamos una variable reactiva students que contenga un array con al menos tres objetos. Cada objeto representará uno de vuestros compañeros y tendrá las keys name (string), age(number) y favoriteLanguages(array de strings). Tendremos que recorrer el array en el template y para cada objeto printear el nombre de vuestro compañero. Según si su edad es mayor o menor a 18 printearemos "I can go for a few drinks with NAME after class" o "NAME is still too young, they'll have to go home tonight". Finalmente, loopeamos el array de sus lenguajes de programación favoritos dentro de una unordered list.
const students = reactive([
    { name: "Xavi", age: 23, favoritesLenguages: ["Català", "Castellano"] },
    { name: "Alex", age: 14, favoritesLenguages: ["English", "Castellano"] },
    { name: "Pablo", age: 28, favoritesLenguages: ["Valencià", "Castellano", "English"] }
]);


</script>

<style scoped></style>