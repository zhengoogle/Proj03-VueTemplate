// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store/single/store'
import router from './router/router'
import VueI18n from 'vue-i18n'
import axios from 'axios'
import VueAxios from 'vue-axios'
import DataCenter from './debug/plugin/DataCenter'
import App from './App'
import './../static/css/common.css'

Vue.config.productionTip = false

// Bus center
window.bus = new Vue()

Vue.use(VueI18n)
Vue.use(VueAxios, axios)
Vue.use(DataCenter)

const i18n = new VueI18n({
  locale: 'zh', // 语言标识
  messages: {
    'zh': require('./locales/zh'),
    'en': require('./locales/en')
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  store,
  router,
  components: {App},
  template: '<App/>'
})

// new Vue({
//   // el: '#app',
//   router
// }).$mount('#app')
