<template>
<button @click="$emit('alertEmit')">EMIT</button>
</template>

<script setup>
const emit = defineEmits(["alertEmit"]);
</script>

<style>

</style>