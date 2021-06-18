import Vue from "vue";
import App from "./App.vue";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
// ngôn ngữ
import locale from 'element-ui/lib/locale/lang/en';
// router

// Vue.use(VueRouter)

Vue.use(ElementUI, { locale });

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUserSecret,
  faHeart,
  faStar,
  faEnvelope,
  faCalendarAlt,
  faChevronLeft,
  faCamera,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// import router from './router'

library.add(
  faUserSecret,
  faHeart,
  faStar,
  faEnvelope,
  faCalendarAlt,
  faChevronLeft,
  faCamera
);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  // router,
  render: (h) => h(App)
}).$mount("#app");
