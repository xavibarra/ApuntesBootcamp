<script setup>
import NavBar from "./components/NavBar.vue";
import Ex2 from "./components/Ex2.vue";
import Ex3 from "./components/Ex3.vue";
import Ex4 from "./components/Ex4.vue";
import Ex5 from "./components/Ex5.vue";

</script>

<template>
  <section>  
    <NavBar/>
    <main>
      <Ex2/>
      <Ex3/>
      <Ex4/>
      <Ex5/>
    </main>
</section>

</template>

<style scoped>
section{
  text-align: center;
  margin-top: 2rem;
}

</style>
