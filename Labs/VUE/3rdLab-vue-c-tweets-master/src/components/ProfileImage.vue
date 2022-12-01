<template>
    <img
      :src="props.imagen"
      class="profile"
      alt="profile"
    />
</template>
<script setup>
const props = defineProps({
  imagen: String,
});
</script>