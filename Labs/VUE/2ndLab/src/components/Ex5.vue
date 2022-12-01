<template>
<section>
    <h1>Exercise 5</h1>
    <div :class="color ? 'is-red': 'is-orange'">
        <p>Hey! I'm changing color </p>
        <button @click="changeColor">Click me to change color</button>

    </div>
</section>
</template>

<script setup>
import { ref } from "vue";
     const color = ref(false);
     const changeColor = () => {
         color.value = !color.value;
    };
</script>
<style scoped>
    h1{
        background: whitesmoke;
    }
    .is-red{
        background: red;
    }
    .is-orange{
        background: orange;
    }
</style>