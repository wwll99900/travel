<template>
  <div>
    <div class="title">热门推销</div>
    <ul>
        <!-- main.js引入border.css样式，这里class直接接border-bottomk就使用了1像素样式 -->
       <!-- 将router-link从a标签转化为li标签 加id是为了把对应数据id传递过去，详情页根据对应id的数据渲染页面-->
        <router-link 
        tag='li'
        class="item border-bottom" 
        v-for='item of list' 
        :key='item.id'
        :to="'/detail/'+item.id">
        <img class="item-img"
          :src="item.imgUrl"
          alt
        >
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>


<script>
export default {
  name: "HomeRecommend",
  props:{
    list:Array
  }
}
</script>


<style lang='stylus' scoped>
@import '~styles/mixins.styl';
.title {
  background-color: #eee;
  line-height: 0.8rem;
  margin-top: 0.2rem;
  text-indent: 0.2rem;
}

.item {
  overflow: hidden;
  display: flex;
  height: 1.9rem;
}
 .item-img
  width:1.7rem
  height:1.7rem
  padding:.1rem
 .item-info
  flex:1
  padding:.1rem
  // 这个样式要写，否则下面省略号不会出现
  min-width:0
  ellipsis()
 .item-desc
   line-height:.4rem
   color:#ccc
   ellipsis()
 .item-button
   line-height:.44rem
   margin-top:.16rem
   background-color:#ff9300
   padding:0 .2rem
   border-radius:.06rem
   color:#fff
</style>
