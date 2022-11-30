<template>
    <h1>{{ currentlocation }}</h1>
  </template>
  
  <script setup>
  defineProps({
    currentlocation: {
      type: String,
      required: false,
      default: "Some Random ocupation...",
    },
  });
  </script>