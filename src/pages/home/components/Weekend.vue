<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
        <!-- main.js引入border.css样式，这里class直接接border-bottomk就使用了1像素样式 -->
      <li class="item border-bottom" v-for='item of list' :key='item.id'>
        <!-- 包裹div,修改样式 -->
        <div class="item-img-wrapper">
        <img class="item-img"
          :src="item.imgUrl"
          alt
        >
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  name: "HomeWeekend",
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
  text-indent: 0.2rem;
 }
 .item-img-wrapper
  overflow:hidden
  height:0
  padding-bottom:37.09%
 .item-img
  width:100%
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
</style>
