<template>
<section>
    <hr>
    <h1>CUSTOM EVENTS</h1>
    <child  @alertEmit="alertEmitChild"/>
</section>
</template>

<script setup>
import child from './eventschild.vue';
const alertEmitChild = () => {
    alert("Emit realiazado con exito")
};

</script>

<style>

</style>