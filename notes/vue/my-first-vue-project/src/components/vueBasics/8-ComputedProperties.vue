<template>
<section>
    <hr>
    <h1>List of movies</h1>
    <div v-for="(movie, index) in myWatchlist" :key="index">
        <h1>{{movie.title}}</h1>
        <p>{{movie.year}}</p>
        <ul>
            <li v-for="(striming, index) in movie.whereToWatch" :key="index">{{striming}}</li>
        </ul>
    </div>
    <h1>List of movies in Netflix</h1>
    <div v-for="(movie, index) in watchOnNetflix" :key="index">
        <h1>{{movie.title}}</h1>
        <p>{{movie.year}}</p>
        <ul>
            <li v-for="(striming, index) in movie.whereToWatch" :key="index">{{striming}}</li>
        </ul>
    </div>
</section>  
</template>

<script setup>
// CLASS EXCERCISE

import { ref, reactive, computed } from "vue";

// Creamos una variable reactiva myWatchlist que contenga un array de objetos. Cada objeto representa una serie o película que queráis ver en el futuro, y debería contar con las keys title (string), year (number) y whereToWatch (array de Strings). En el browser deberíais printear, para cada uno de los obejtos, un <h1> con el title, un <h2> con el year y una unordered list para los servicios de streaming (Netflix, HBO, etc.). Después deberíamos tener una variable computada watchOnNetflix que filtre el array de myWatchlist según si la key whereToWatch incluye la string "Netflix". En el template también deberíamos renderizar watchOnNetflix con un título para separar las dos listas.
const myWatchlist = reactive([
    { title: "Sin novedad al frente", year: 2022, whereToWatch: ["Netflix", "Prime video"] },
    { title: "Nadie", year: 2021, whereToWatch: ["Apple tv"] },
    { title: "Dejame salir", year: 2017, whereToWatch: ["Netflix","Apple tv"] },
    { title: "Pulp fiction", year: 1994, whereToWatch: ["Movistar","Rakuten TV"] },
    { title: "Nosotros", year: 2019, whereToWatch: ["Netflix", "Prime video"] },
    { title: "Intocable", year: 2011, whereToWatch: ["Prime video","Netflix","HBO max"] }
]);

const watchOnNetflix = computed(() => {
    return myWatchlist.filter((movieInNetflix) => movieInNetflix.whereToWatch.includes("Netflix"));
});
//si no usamos reactive y usamos ref, habria que cambiar la ultima línea  a :return myWatchlist.value.filter((movieInNetflix) => movieInNetflix.whereToWatch.includes("Netflix"));
</script>

<style>
h1{
    font-weight: bold;
}
</style>