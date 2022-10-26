import './bootstrap';
import { createApp } from 'vue'
import { markRaw } from 'vue'
import { createPinia } from 'pinia'
import router from './router/index.js'
import App from './App.vue'
import '../css/app.css'
import { plugin, defaultConfig } from '@formkit/vue'
// import '@formkit/themes/genesis'

/**VUEJS LOAD + PINIA **/

const pinia = createPinia()
const app = createApp(App)


pinia.use(({ store }) => {
    store.router = markRaw(router)
})
app.use(pinia)
app.use(router)
app.use(plugin, defaultConfig)
app.mount('#app')
