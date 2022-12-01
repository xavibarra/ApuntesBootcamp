<template>
<section>
    <h1>Exercise 3</h1>
    <p v-show="show">Hey!</p>
</section>
</template>

<script setup>
import { ref } from "vue";
const show = ref(true);
</script>
<style scoped>
    h1{
        background: whitesmoke;
    }
</style>