<template>   
<section>
    <h1>Exercise 2</h1>
    <h2>{{2+2}}</h2>
    <p>{{ ex2part2() }}</p>
</section>
</template>

<script setup>
import { ref, computed } from "vue";
const ex2part2 = () => {
    return "String exercise 2 part 2";
};

</script>
<style scoped>
    h1{
        background: whitesmoke;
    }
</style>