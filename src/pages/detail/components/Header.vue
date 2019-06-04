<template>
  <div>
    <router-link tag="div" to="/" class="header-abs" v-show='showAbs'>
      <!-- 字体代码 -->
      <div class="iconfont header-abs-back">&#xe624;</div>
    </router-link>
    <div class="header-fixed" v-show='!showAbs' :style="opacityStyle">
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
      景点详情
    </div>
  </div>
</template>



<script>
export default {
  name: "DetailHeader",
  data(){
      return{
          showAbs:true,
          opacityStyle:{
              opacity:0
          }
      }
  },
  methods:{
      handleScroll(){
          console.log(1111)
            const top=document.documentElement.scrollTop
            if(top>60){
                //横条 渐渐显现  当滚动距离距离顶部=头部高度（140）的时候，完全显现
                let opacity=top/140
                opacity=opacity>1 ? 1:opacity
                this.opacityStyle={opacity}
                this.showAbs=false
            }else{
                this.showAbs=true
            }
      }
  },
  created(){//进入页面触发这个函数,scroll事件触发就会触发handleScroll事件
   window.addEventListener('scroll',this.handleScroll)
  },
  destroyed(){//离开页面解绑事件，避免全局事件影响其他页面 
   window.removeEventListener('scroll',this.handleScroll)
  }
};
</script>



<style scoped lang='stylus'>
@import '~styles/varibles.styl';

.header-abs {
  position: absolute;
  left: 0.2rem;
  top: 0.2rem;
  width: 0.8rem;
  height: 0.8rem;
  line-height: 0.8rem;
  text-align: center;
  border-radius: 0.4rem;
  background: #666;

  .header-abs-back {
    color: #fff;
    font-size: 0.4rem;
  }
}

.header-fixed {
  position: fixed;
  top:0;
  left:0;
  right:0;
  height: $headerHeight;
  line-height: $headerHeight;
  text-align: center;
  color: #fff;
  background-color: $bgColor;
  font-size: 0.32rem;
  .header-fixed-back {
    width: 0.64rem;
    text-align: center;
    font-size: 0.4rem;
    position: absolute;
    top: 0;
    left: 0;
    color: #fff;
  }
}
</style>
