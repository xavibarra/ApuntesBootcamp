<template>
    <section>
      <h1>{{ age }}</h1>
    </section>
  </template>
  
  <script setup>
  defineProps({
    age: {
      type: Number,
      required: false,
      default:0
    },
  });
  </script>