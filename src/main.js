import Vue from 'vue'
import App from './App'
import router from './router'
// 1.1下载之后引入fastClick
import fastClick from 'fastclick'
Vue.config.productionTip = false
// 引入清除默认样式、一像素边框样式、字体文件样式
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
// 引入store文件夹下vuex处理的数据
import store from './store'
// 下载后引入轮播组件库和样式
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
// 1.2安装fastClick
fastClick.attach(document.body)
// 安装组件库
Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
