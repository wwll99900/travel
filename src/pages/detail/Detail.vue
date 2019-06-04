<template>
    <div>
        <!-- 将请求到的三个值传递给子组件DetailBanner -->
       <detail-banner 
       :sightName='sightName'
       :bannerImg='bannerImg'
       :bannerImgs='gallaryImgs'>
       </detail-banner>
       <detail-header></detail-header>       
       <div class="content">
           <detail-list :list='list'></detail-list>
       </div>
    </div>
</template>



<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
// 引入axios处理ajax请求
import axios from 'axios'
export default {
    name:'Detail',
    components:{
        DetailBanner,
        DetailHeader,
        DetailList
    },
    data(){
        return{
            sightName:'',
            bannerImg:'',
            gallaryImgs:[],
            list:[]
        }
    },
    methods:{
        getDetailInfo(){
            // 发送请求到这个地址，取出对应id的对象
            axios.get('/api/detail.json',{
                params:{
                    id:this.$route.params.id
                }
            }).then(this.handleGetDateSucc)
        },
        handleGetDateSucc(res){
            res=res.data
            if(res.ret && res.data){
                const data=res.data
                this.sightName=data.sightName
                this.bannerImg=data.bannerImg
                this.gallaryImgs=data.gallaryImgs
                this.list=data.categoryList       
            }
        }
    },
    mounted(){
        this.getDetailInfo()
    }
}
</script>


<style scoped lang='stylus'>
 .content
  height:50rem
</style>
