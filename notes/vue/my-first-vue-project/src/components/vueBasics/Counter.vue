<template>
<section>
    <p>{{counterStore.count}}</p>
    <button @click="counterStore.increase">+</button>
    <button @click="counterStore.decrease">-</button>
</section>
</template>

<script setup>

import { ref } from 'vue';
import { useCounterStore } from '../stores/counter';

const counterStore = useCounterStore();


</script>

<style>

</style>