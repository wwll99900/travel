<template>
    <div>
        <!-- 头部图片 -->
        <div class="banner" @click='handleBannerClick'>
        <img class="banner-img" :src="bannerImg" alt="">
        <div class="banner-info">
            <div class="banner-tittle">{{this.sightName}}
            </div>
            <div class="banner-number">
                <span class="iconfont banner-icon">&#xe61e;</span>
                {{this.bannerImgs.length}}
            </div>
        </div>
      </div>


       <!-- 图片下面 引入common文件夹gallery子模块 属性传值父传子-->
       <!-- 用动画子组件包裹，产生动画效果 -->
       <fade-anomation>
       <common-gallary :imgs='bannerImgs' v-show='showGallary' @close='handleGallaryClose'></common-gallary>
       </fade-anomation>
    </div>
</template>



<script>
// 引入点击轮播子组件
import CommonGallary from 'common/gallary/Gallary'
// 引入动画子组件
import FadeAnimation from 'common/fade/Fade'
export default {
    name:'DetailBanner',
    props:{
        sightName:String,
        bannerImg:String,
        bannerImgs:Array
    },
    data(){
       return {
           'showGallary':false,
       }
    },
    methods:{
        handleBannerClick(){
            this.showGallary=true
        },
        handleGallaryClose(){
            this.showGallary=false
        }
    },
    components:{
        CommonGallary,
        FadeAnimation,
    }
}
</script>


<style scoped lang='stylus'>
  .banner
   position:relative
   overflow:hidden
   height:0
   padding-bottom:55%
   .banner-img
    width:100%
   .banner-info
    display:flex
    position:absolute
    left:0
    right:0
    bottom:0
    line-height:.6rem
    color:pink
    background-image:linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))
   .banner-tittle
    flex:1
    font-size:.32rem
    padding:0 .2rem
   .banner-number
    padding:0 .4rem
    height:.32rem
    line-height:.32rem
    border-radius:.2rem
    background-color:rgba(0,0,0,.8)
    font-size:.24rem
    margin-top:.14rem
    .banner-icon
     font-size:.24rem
</style>
