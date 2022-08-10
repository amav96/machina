import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';
import './assets/main.css'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { icons } from './assets/icons/fontAwesome';
import ImgSvg from './components/ImgSvg.vue';
import Dropdown from './components/Dropdown.vue'
library.add(icons);

createApp(App)
    .component('ImgSvg', ImgSvg)
    .component('Dropdown', Dropdown)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(router)
    .use(store)
    .mount('#app');
