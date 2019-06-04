<template>
  <div class="icons">
    <swiper :options="swiperOption">
       <!-- 第一个v-for决定有多少个swiper-slide(轮播页)，第二个v-for决定一个轮播页多少条数据 -->
      <swiper-slide v-for='(page,index) in pages' :key='index'>
        <div class="icon" v-for='item in page' :key='item.id'>
          <div class="icon-img">
            <img
              class="icon-img-content"
              :src="item.imgUrl"
              alt
            >
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>



<script>
export default {
  name: "HomeIcons",
  props:{
    list:Array
  },
  data(){
     return {
       swiperOption:{
        //  控制轮播图不要自动轮播
         autoplay:false
       }
     }
  },
    computed:{
       pages(){
         //  pages这个数组里面一个一个数组，八个对象一个数组
          const pages=[]
          this.list.forEach((item,index)=>{
             const page=Math.floor(index/8)
             if(!pages[page]){
                pages[page]=[]
             }
             pages[page].push(item)
          })
          return pages
       }
    }
};
</script>


<style scoped lang="stylus">
@import '~styles/varibles.styl';
@import '~styles/mixins.styl';
   // 不加这一行，只给icons设置高度，轮播效果如果只有一行图片，点击第二行不会轮播，加了点击上下整个区域都会轮播
.icons >>>.swiper-container
  height: 0;
  padding-bottom: 50%;
 .icon
    padding-top:.01rem 
  .icon 
    position: relative;
    overflow: hidden;
    float: left;
    width: 25%;
    height: 0;
    padding-bottom: 25%;

    .icon-img 
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0.44rem;
      box-sizing: border-box;
      padding: 0.1rem;

      .icon-img-content 
        height: 100%;
        display: block;
        margin: 0 auto;
    .icon-desc 
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 0.44rem;
      line-height: 0.44rem;
      text-align: center;
      color: $darkTextColor;
      // 引入mixins.styl的ellipsis方法，字数过多...代替
      ellipsis()
  
</style>
