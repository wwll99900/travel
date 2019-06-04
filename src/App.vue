<template>
  <div id="app">
    <!-- 除了Detail.vue不做缓存其他都缓存，因为Detail里面有id请求，避免每一次都发送同样id -->
    <keep-alive exclude="Detail">
    <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
