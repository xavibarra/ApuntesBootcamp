import { createApp } from 'vue'

import { createPinia } from "pinia";

import App from './App.vue'

import './assets/main.css'

const app = createApp(App);

// After the app is created we incorporate Pinia to it
app.use(createPinia());

app.mount("#app");
