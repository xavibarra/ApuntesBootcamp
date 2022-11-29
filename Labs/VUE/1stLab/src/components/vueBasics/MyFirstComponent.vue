<!-- Aquí es donde clocaremos nuestro HTML -->
<template>
    <h1>{{xavi}}</h1>
    <h1>Nací en {{cityOfBirth}} y tengo {{age}} años</h1>

    <h2>Hola me llamo {{myInfo.name}} {{myInfo.secondName}} tengo {{myInfo.age}} nací el {{myInfo.dayOfBirth}}. Mis hobbies son {{myInfo.hobbies[0]}}, {{myInfo.hobbies[1]}} y {{myInfo.hobbies[2]}}. My comida favorita es {{favoriteFood}} y mi pelicula favorita es {{favoriteFilm}} la he visto {{timesSaw}} veces</h2>

    <button @click="helloWorld">Click me!</button>
    <!-- en lugar del click la versión larga es: v-on:click="helloWorld()" -->
</template>
<!-- Aquí es donde clocaremos nuestro JS -->
<script setup>
//si queremos trabajar con datos primitivos o no primitivos dentro de nuestro script con el composition API tenemos que activar nuestra reactividad. Esta reactividad por defecto se usan 2 tipos de metodos nativos al framework para poder trabajar de manera reactva
//un metodo se llama ref()
//un metodo se llama reactive()

//PASOS:
//Primero tenemos que importar estos metodos desde la libreria de vue

import { ref, reactive } from "vue";

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


const helloWorld = () =>{
    console.log("Hello world!");
}
</script>
<!-- Aquí es donde clocaremos nuestro CSS -->
<style></style>