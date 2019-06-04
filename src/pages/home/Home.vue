<template>
  <div>
    <!-- 没有city这个数据 -->
   <home-header></home-header>
   <home-swiper :list='swiperList'></home-swiper>
   <home-icons :list='iconList'></home-icons>
   <home-recommend :list='recommendList'></home-recommend>
   <home-weekend :list='weekendList'></home-weekend>
  </div>
</template>

<script>
// 引入各子组件，并挂载在模块，在模板里面引用
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
// 安装后，引入axios处理http请求
import axios from 'axios'
export default {
  name: 'home',
  data(){
    return{
      swiperList:[],
      iconList:[],
      recommendList:[],
      weekendList:[]
    }
  },
  components:{
      HomeHeader,
      HomeSwiper,
      HomeIcons,
      HomeRecommend,
      HomeWeekend
  },
  methods:{
    getHomeInfo(){
      // then传一个函数，参数就是传递过来的值，这里拆分成了两个，下面的res就是穿回来的值
       axios.get('/api/index.json').then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc(res){
       res=res.data
       console.log(res)
       if(res.ret && res.data){
         const data=res.data
        // 2.获取轮播图图片所有地址对象的数组
        this.swiperList=data.swiperList
        // 3.获取九宫格图片所有地址对象的数组
        this.iconList=data.iconList
        // 4.
        this.recommendList=data.recommendList
        // 5.
        this.weekendList=data.weekendList
       }
    }
  },
  mounted(){
    this.getHomeInfo()
  }
}
</script>

<style scoped>

</style>
