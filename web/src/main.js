import Vue from 'vue'
import App from './App.vue'
import './assets/scss/style.scss'
import router from './router'

import 'vant/lib/index.css';
import '@vant/touch-emulator';
import {
  Popup,
  Lazyload,
  Swipe,
  SwipeItem,
  Sticky,
  Tab,
  Tabs
} from 'vant';

Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);
Vue.use(Popup);
Vue.use(Sticky);
Vue.use(Tab);
Vue.use(Tabs);


import VueAwesomeSwiper from 'vue-awesome-swiper'
// require swiper styles
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)
// Introduce font icon
import './assets/iconfont/iconfont.css'

// Introduce card component
import Card from './components/Card'
Vue.component('m-card', Card)

// Introduce ListCard component
import ListCard from './components/ListCard'
Vue.component('m-list-card', ListCard)

// Introduce mt-ListCard component
import MatchCard from './components/MatchCard'
Vue.component('mt-card', MatchCard)

// Introduce mt-ListCard component
import HeroGuideListCard from './components/HeroGuideListCard'
Vue.component('guide-list-card', HeroGuideListCard)

// Introduce axios
import axios from 'axios'
Vue.prototype.$http = axios.create({
  baseURL:'http://localhost:3000/web/api'
})


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
