<template>
<section>
    <hr/>
  <h1>EJERCICIO WATCHERS</h1>
  <h1>{{question}}</h1>
  <input type="text" v-model="answer" maxlength="3"/>
  <p v-if="jsonResponse">{{jsonResponse}}</p>
  <p v-if="jsonUserResponse">{{jsonUserResponse}}</p>
  <img v-if="jsonImage" v-bind:src="jsonImage" alt="some random gif">
</section>
</template>

<script setup>
import { ref, reactive, watch } from "vue";
import jsonwatch from "../watchers.json";

const question = ref("Te gusta la pizza?");
const answer = ref("");
const jsonResponse = ref("");
const jsonImage = ref("");
const jsonUserResponse = ref("");

watch(answer, async (newAnswer) => {
    if (answer.value.toLocaleLowerCase() === "yes") {
        jsonResponse.value = jsonwatch[0].response + ",te ecanta la pizza";
        jsonImage.value = jsonwatch[0].image;
        jsonUserResponse.value = jsonwatch[0].userResponse;
     }  
    // toLocaleLoweCase 
    else if (answer.value.toLocaleLowerCase() === "no") { 
        jsonResponse.value = jsonwatch[1].response + ",te da asco la pizza";
        jsonImage.value = jsonwatch[1].image;
        jsonUserResponse.value = jsonwatch[1].userResponse;
    }
    else { 
        jsonResponse.value = jsonwatch[2].response + "respuesta invalida";
        jsonImage.value = jsonwatch[2].image;
        jsonUserResponse.value = jsonwatch[2].userResponse;
    }
    
});
</script>

<style scoped>

</style>