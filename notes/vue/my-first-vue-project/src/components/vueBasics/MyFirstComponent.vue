<!-- Aquí es donde clocaremos nuestro HTML -->
<template>
    <p>My nombre es Xavi y me gusta programar</p>

    <!-- Usando text interpolation aka syntax de bigotes -->
    <h1>{{xavi}}</h1>
    <h1>Nací en {{cityOfBirth}}, Barcelona y tengo 23 años</h1>

    <h2>Hola me llamo {{myInfo.name}} {{myInfo.secondName}} tengo {{myInfo.age}} nací el {{myInfo.dayOfBirth}}. Mis hobbies son {{myInfo.hobbies[0]}}, {{myInfo.hobbies[1]}} y {{myInfo.hobbies[2]}}. My comida favorita es {{favoriteFood}} y mi pelicula favorita es {{favoriteFilm}} la he visto {{timesSaw}} veces</h2>
</template>
<!-- Aquí es donde clocaremos nuestro JS -->
<script setup>
//si queremos trabajar con datos primitivos o no primitivos dentro de nuestro script con el composition API tenemos que activar nuestra reactividad. Esta reactividad por defecto se usan 2 tipos de metodos nativos al framework para poder trabajar de manera reactva
//un metodo se llama ref()
//un metodo se llama reactive()

//PASOS:
//Primero tenemos que importar estos metodos desde la libreria de vue
import { ref, reactive } from "vue";

//Vamos a declara variables que contengan el metodo dentro para poder trabajar correctamente con los datos que sean reactivos
const xavi = "Mi nombre es XaviB y me gusta mucho programar"
const cityOfBirth = ref("Sitges");
const age = ref(23);
const truthyValue = ref(false);

const myInfo = reactive({
    name : "Xavi",
    secondName : "Barrachina",
    age : 23,
    hobbies:["escalada", "futbol", "viajar"],
    dayOfBirth: "20 de septiembre",
});

const favoriteFilm = ref("Saw 1");
const favoriteFood = ref("spaghetti carbonara");
const timesSaw = ref(7);


</script>
<!-- Aquí es donde clocaremos nuestro CSS -->
<style></style>