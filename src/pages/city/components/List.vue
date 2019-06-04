<template>
  <div class="list" ref='wrapper'>
      <!-- better-scroll必须使用这种结构，下面只有一个整体 -->
   <div>
        <div class="area">
      <div class="title border-topbottom">当前城市</div>
      <div class="button-list">
          <div class="button-wrapper">
              <div class="button">{{this.$store.state.city}}</div>
          </div>
      </div>
    </div>
    <div class="area">
      <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
              <div class="button-wrapper" v-for='item of hot' :key='item.id' @click='handleCityClick(item.name)'>
              <div class="button">{{item.name}}</div>
          </div>
      </div>
    </div>
    <div class="area" v-for='(item,key) of cities' :key='key' :ref='key'> 
      <div class="title border-topbottom">{{key}}</div>
      <div class="item-list">
         <div class="item border-bottom"  v-for='innerItem of item' :key='innerItem.id' @click='handleCityClick(innerItem.name)'>
             {{innerItem.name}}
         </div>
      </div> 
    </div>
   </div>
  </div>
</template>


<script>
import Bscroll from 'better-scroll'
export default {
  name: "cityList",
  props:{
      cities:Object,
      hot:Array,
      letter:String
  },
  methods:{
    handleCityClick(city){
      console.log(222222)
      //将数据传递到store文件夹，第一个参数是store里面的事件名，第二个参数传递参数
      this.$store.commit('changeCity',city)
      this.$router.push('/')//点击跳转到首页
    }
  },
  mounted(){
      this.scroll=new Bscroll(this.$refs.wrapper)
  },
  watch:{
      letter(){   
          if(this.letter){
            //   获取这个dom元素
              const element=this.$refs[this.letter][0]
              // 自动滚动到这个dom元素
              this.scroll.scrollToElement(element)
          }
      }
  }
};
</script>


<style scoped lang="stylus">
@import '~styles/varibles.styl';
.border-topbottom
   &:before 
     border-color:#ccc
   &:after
     border-color:#ccc
.border-bottom
   &:before 
     border-color:#ccc
.list
  overflow:hidden
  position:absolute
  top:1.58rem
  left:0
  right:0
  bottom:0
 .title
   line-height:.54rem
   background-color:#eee
   padding-left:.2rem
   color:#666
   font-size:.26rem
  .button-list
   padding:.1rem .6rem .1rem .1rem
   overflow:hidden
   .button-wrapper
    float:left
    width:33.33%
    .button
     padding:.1rem 0
     margin:.1rem
     text-align:center
     border:.02rem solid #ccc
     border-radius:.06rem
 .item-list
   .item
    line-height:.54rem
    padding-left:.2rem
</style>
