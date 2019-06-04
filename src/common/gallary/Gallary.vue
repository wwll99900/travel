// 被detail下面的banner.vue调用，点击头部出现的轮播图
<template>
    <div class="container" @click='handleGallaryClick'>
      <div class="wrapper">
      <swiper :options='swiperOptions'>
        <swiper-slide v-for='(item,index) of imgs' :key='index'>
          <img class="gallary-img" :src="item" />
        </swiper-slide>
         <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>


<script>
export default {
    name:'CommonGallary',
    props:{
       imgs:{
           type:Array,
           default(){
               return []
           }
       }
    },
    methods:{
        handleGallaryClick(){
            this.$emit('close')
        }
    },
    data(){
        return{
            swiperOptions:{
                pagination:'.swiper-pagination',
                //分页器：分式
                paginationType:'fraction',
                // 利用传过来的值，下面两个值必须设置，解决轮播问题
                observeParents:true,
                observer:true
            }
        }
    }
}
</script>


<style scoped lang='stylus'>
//container的overflow属性被swiper-container继承，取消overflow:hidden,如果设置代表同时设置两个标签 
 .container >>> .swiper-container
  overflow:inherit
// 设置绝对定位会覆盖之前头部，在Banner里面
 .container
  display:flex
  flex-direction:column
  justify-content:center
  z-index:99
  position:fixed
  top:0
  bottom:0
  left:0
  right:0
  background:#000
//   父级元素设置子元素垂直居中
  .wrapper
   height:0
   width:100%
   padding-bottom:100%
   .gallary-img
    width:100%
   .swiper-pagination
    color:#fff
    bottom:-1rem
</style>
