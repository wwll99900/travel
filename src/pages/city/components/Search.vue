<template>
  <div>
      <div class="search">
      <input v-model='keyword' class="search-input" type="text" placeholder="输入城市名或拼音" />
    </div>
    <!-- 搜索有关键字这个div才会出现，绝对定位，city.vue里面其他子模块上移被盖住 -->
    <div class="search-content" ref='search' v-show="keyword">
      <ul>
        <!-- class里面直接border-bottom会有一条下划线 -->
        <li class='search-item border-bottom' v-for='item of list' :key='item.id' @click='handleCityClick(item.name)'>{{item.name}}</li>
        <!-- list长度为0的时候显示下面li标签 -->
        <li class='search-item border-bottom' v-show='!list.length'>没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>


<script>
import Bscroll from 'better-scroll'
export default {
    name:'CitySearch',
     data(){
       return{
         keyword:'',
         list:[],
         timer:null
       }
     },
     methods:{
       handleCityClick(city){
      //将数据传递到store文件夹，第一个参数是store里面的事件名，第二个参数传递参数
      this.$store.commit('changeCity',city)
      this.$router.push('/')
    }
     },
     props:{
       cities:Object
     },
     watch:{//双向绑定之后，keyword变化触发函数
       keyword(){
        //  定时器作用节流，停留100ms才会触发执行
          if(this.timer){
            clearTimeout(this.timer)
          }
          // 清空输入框内容消失
          if(!this.keyword){
            this.list=[]
            return
          }
          this.timer=setTimeout(()=>{
             const result=[]
            //  对cities这个对象里面的每个属性对应的对象再遍历
             for(let i in this.cities){
               this.cities[i].forEach((value)=>{
                //  spell和name有关键字片段的情况下
                 if(value.spell.indexOf(this.keyword)>-1 || value.name.indexOf(this.keyword)>-1){
                  //  有关键字的对象放入result这个数组
                   result.push(value)
                 }
               })
             }
             this.list=result
          },100)
       }
     },
     mounted(){
      //  这个dom下面的子元素实现滚动
       this.scroll=new Bscroll(this.$refs.search)
     }
}
</script>


<style scoped lang="stylus">
@import '~styles/varibles.styl';
 .search
  height:.72rem
  padding:0 .1rem
  background-color:$bgColor
  .search-input
   width:100%
   height:.62rem
   padding:0 .1rem
   line-height:.62rem
   text-align:center
   border-radius:.06rem
   color:#666 
 .search-content
   z-index:1
   overflow:hidden
   position:absolute
   top:1.58rem
   left:0
   right:0
   bottom:0
   background-color:#eee 
  .search-item
   line-height:.62rem
   padding-left:.2rem
   background-color:#fff
   color:#666
</style>


