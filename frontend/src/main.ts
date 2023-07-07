import {createApp} from 'vue'
import App from './App.vue'
import {createPinia} from "pinia"
import directives from "./directive/index"
import router from './router'

createApp(App)
    .use(directives)
    .use(createPinia())
    .use(router)
    .mount('#app')
