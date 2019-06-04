// 被detail文件夹下banner引入的动画组件
<template>
    <transition>
        <slot></slot>
    </transition>
</template>


<script>
export default {
   name:'Fade',

}
</script>


<style scoped lang='stylus'>
 .v-enter,.v-leave-to
   opacity:0
 .v-enter-active,.v-leave-active
   transition:opacity .5s
</style>
