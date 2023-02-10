import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "normalize.css"
import "./assets/css/index.css"
import pinia from "./stores/index"

createApp(App).use(router).use(pinia).mount('#app')
