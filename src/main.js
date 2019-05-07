/*
入口js
*/

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {Button} from 'mint-ui'
import './mock/mockServer' // 加载mockServer即可
import VueLazyload from 'vue-lazyload'
import loading from './common/imgs/loading.gif'
import './filters'

// 注册全局组件标签
Vue.component(Button.name, Button)
Vue.use(VueLazyload, { // 内部自定义一个指令lazy
  loading
})

new Vue({
  el: '#app',
  render: h => h(App),
  router, // 使用上vue-router
  store // 使用上vuex
})
