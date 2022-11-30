<template>
    <h1>{{ birthPlace }}</h1>
  </template>
  
  <script setup>
  defineProps({
    birthPlace: {
      type: String,
      required: false,
      default: "Some Random place...",
    },
  });
  </script>