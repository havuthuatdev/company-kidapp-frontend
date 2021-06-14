import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import VueTelInput from 'vue-tel-input'
import 'vue-tel-input/dist/vue-tel-input.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faHeart, faStar, faEnvelope, faCalendarAlt, faChevronLeft, faCamera } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret, faHeart, faStar, faEnvelope, faCalendarAlt, faChevronLeft, faCamera)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(ElementUI, VueTelInput);

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
