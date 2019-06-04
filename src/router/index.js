import Vue from 'vue'
import Router from 'vue-router'
// 引入自定义模块
import home from '@/pages/home/Home.vue'
import City from '@/pages/city/City.vue'
import Detail from '@/pages/detail/Detail.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      // 查看详情页，动态路由，后面穿的参数赋值给id属性
      path: '/detail/:id',
      name: 'Detail',
      component:Detail
    }
  ],
  // 解决跳转之后滚动问题
  scrollBehavior(to,from,savedPosition){
    return {x:0,y:0}
  }
})
