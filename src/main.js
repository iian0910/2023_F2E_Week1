import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'wowjs/css/libs/animate.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
