<template>
<!-- v-if='list.length'解决轮播图从最后一页开始的问题 -->
    <swiper :options="swiperOption" v-if='showSwiper'>
    <!-- slides -->
    <swiper-slide v-for="item in list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="">
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
    name:'HomeSwiper',
    props:{
    list:Array
    },
    data(){
        return{//固定写法
            swiperOption:{
                pagination:'.swiper-pagination',
                // loop设置true支持循环轮播
                loop:true,
            }
        }
    },
    computed:{
        showSwiper(){
            return this.list.length
        }
    }

}
</script>

<style lang="stylus" scoped>
   .swiper-img
    width:100%
    height:4rem
</style>
