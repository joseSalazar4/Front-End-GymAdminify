import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './index.css'

axios.defaults.baseURL = 'http://37dfec397d45.ngrok.io/'

createApp(App).use(store).use(router,axios).mount('#app')


