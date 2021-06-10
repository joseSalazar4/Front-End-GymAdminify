import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './index.css'

axios.defaults.baseURL = 'https://ef8fb643f907.ngrok.io/'

createApp(App).use(store).use(router,axios).mount('#app')


