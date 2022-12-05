<script setup>
import { ref } from "vue";
import HelloWorld from './components/HelloWorld.vue';
import MyFirstComponentVue from './components/vueBasics/MyFirstComponent.vue';

import TextDirectiveVue from './components/vueBasics/2-TextDirective.vue';
import HtmlDirection from './components/vueBasics/3-HtmlDirection.vue';
import props from './components/vueBasics/props.vue';
import ComputedProperties from './components/vueBasics/8-ComputedProperties.vue';
import Formulario from './components/vueBasics/9-form.vue'
import Watchers from "./components/vueBasics/watchers/watchers.vue";
import events from "./components/vueBasics/events/events.vue";
const myNumber = ref(23);

</script>

<template>
<section>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" /> -->

    <div class="wrapper">
      <HelloWorld msg="My name is Xavi!" />
    </div>
  </header>

  <main>
    <MyFirstComponentVue/>
    <TextDirectiveVue/>
    <HtmlDirection/>
    
      <!-- <props
        name="Xavi"
        age="23"
        ocupation="Student"
        birthPlace="Barcelona"
        currentLocation="sitges"
      /> -->
    <props 
    name="Xavi"
    :age=myNumber
    ocupation="student"
    birthPlace="Barcelona"
    currentlocation="Sitges"
    />
    <ComputedProperties/>
    <Formulario/>
    <Watchers/>
    <events/>
  </main>
</section>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
