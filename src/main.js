import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';
import './assets/main.css'

import ImgSvg from './components/ImgSvg.vue';
import Dropdown from './components/Dropdown.vue'

createApp(App)
    .component('ImgSvg', ImgSvg)
    .component('Dropdown', Dropdown)
    .use(router)
    .use(store)
    .mount('#app');
