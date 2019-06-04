<template>
    <div class="header">
        城市选择
        <!-- 点击回到首页 -->
    <router-link to='/'>
         <div class="iconfont header-back">&#xe624;</div>
    </router-link>
    </div>
</template>


<script>
export default {
    name:'cityHeader'
}
</script>


<style scoped lang="stylus">
@import '~styles/varibles.styl';
 .header
  position:relative
  overflow:hidden
  height:$headerHeight
  line-height:$headerHeight
  text-align:center
  color:#fff
  background-color:$bgColor
  font-size:.32rem
  .header-back
   width:.64rem
   text-align:center
   font-size:.4rem
   position:absolute
   top:0
   left:0
   color:#fff
</style>
