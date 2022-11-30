<template>
    <section>
        <!-- EJEMPLO 1 NO SIRVE CON LOS NUEVOS IMPORTS -->
    <!-- <h1>MY BIO</h1>
    <h4>{{name}}</h4>
    <h4>{{age}}</h4>
    <h4>{{ocupation}}</h4>
    <h4>{{birthPlace}}</h4>
    <h2>{{currentLocation}}</h2> -->

    <hr>
    <NameComp :name="name" />
    <AgeComp :age=age />
    <OcupationComp :ocupation="ocupation" />
    <BirthPlaceComp :birthPlace="birthPlace" />
    <CurrentLocationComp :currentlocation="currentlocation" />
    
    </section>


</template>

<script setup>
import { ref, reactive } from "vue";
import NameComp from "../props-components/NameComp.vue";
import AgeComp from "../props-components/agecomp.vue";
import OcupationComp from "../props-components/OcupationComp.vue";
import BirthPlaceComp from "../props-components/BirthPlaceComp.vue";
import CurrentLocationComp from "../props-components/CurrentLocationComp.vue";
defineProps({
    name: {
        type: String,
        required: false,
        default: "some random name"
    },
    age: {
        type: Number,
        required: false,
        default: 0
    },
     ocupation: {
         type: String,
         required: false,
         
     },
     birthPlace: {
         type: String,
         required: false,
         default: "some random place"
    },
    currentlocation: {
        type: String,
        required: false,
       

    }  
});

</script>

<style>

</style>