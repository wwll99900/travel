<template>
  <div class="header">
   <div class="header-left">
     <div class="iconfont back-icon">&#xe624;</div>
   </div>
   <div class="header-input">
     <span class="iconfont">&#xe632;</span>
     输入城市/景点/游玩主题
    </div>
    <!-- 点击跳转到city页面 -->
    <router-link to='/city'>
    <!--this.$store.state.city取存放在store的数据-->
   <div class="header-right">{{this.$store.state.city}}
      <span class="iconfont arrow-icon">&#xe64a;</span>
   </div>
   </router-link>
  </div>
</template>

<script>

export default {
  name: 'headerHeader',
  props:{
  }
}
</script>

<style scoped lang="stylus">
// 在build文件夹webpack.base里面定义了绝对路径
  @import '~styles/varibles.styl';
  .header
   display:flex
   line-height: $headerHeight
   background-color:$bgColor
   color:#fff
   .header-left
    width: .64rem
    float:left
    .back-icon
     text-align:center
     font-size:.4rem 
   .header-input
    flex:1
    background-color:#fff
    border-radius:.1rem
    margin-top:.12rem
    line-height:.64rem
    color:#ccc
    height:.64rem
    padding-left:.2rem
   .header-right
    width: 1.24rem
    float:right
    text-align:center
    color:#fff
    .arrow-icon
     font-size:.24rem
     padding-left:-.04rem
</style>
