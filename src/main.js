import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';
import './assets/main.css'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { icons } from './assets/icons/fontAwesome';
library.add(icons);

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(router)
    .use(store)
    .mount('#app');
