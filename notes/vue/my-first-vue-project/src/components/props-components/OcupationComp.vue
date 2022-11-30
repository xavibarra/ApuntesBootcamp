<template>
    <h1>{{ ocupation }}</h1>
  </template>
  
  <script setup>
  defineProps({
      ocupation: {
      type: String,
      required: false,
      default: "Some Random place...",
    },
  });
  </script>