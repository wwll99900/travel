// 边上字母页面
<template>
<!--click，touchstart，touchmove，touchend都是已定义事件名  -->
  <ul class="list">
    <li
      class="item"
      v-for="item of letters"
      :key="item"
      :ref="item"
      @click="handleLetterClick"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >{{item}}</li>
  </ul>
</template>


<script>
export default {
  name: "cityAlphabet",
  props: {
    cities: Object
  },
  computed: {
    letters() {
      const letters = [];
      for (let i in this.cities) {
        letters.push(i);
      }
      return letters;
      // ['A','B','C'......]
    }
  },
  data() {
    // 设置只有在end之后时间才会触发
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    };
  },
  updated() {
    //滑动触发传值触发更新，运行里面代码
    //    获取A离上一级元素绿色框的距离
    this.startY = this.$refs["A"][0].offsetTop;
  },
  methods: {
    // 利用子组件向父组件传值,事件传值，这个函数实现了点击向父组件传递A,B,C.....
    handleLetterClick(e) {
      this.$emit("change", e.target.innerText);
    },
    // 下面三个函数实现按住屏幕字母往下滑，向父组件向父组件传递A,B,C.....
    handleTouchStart() {
      this.touchStatus = true;
    },
    handleTouchMove(e) {//定时器节流，停留16ms才会触发传值
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
          //  touchY  手指距离最顶部高度-绿色头部高度=手指距离绿色头部底部高度
          const touchY = e.touches[0].clientY - 79;
          // 每个字母高20,index获取第几个字母
          const index = Math.floor((touchY - this.startY) / 20);
          if (index >= 0 && index < this.letters.length) {
            this.$emit("change", this.letters[index]);
          }
        }, 16);
      }
    },
    handleTouchEnd() {
      this.touchStatus = false;
    }
  }
};
</script>


<style scoped lang="stylus">
@import '~styles/varibles.styl';

.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  width: 0.4rem;

  .item {
    line-height: 0.4rem;
    text-align: center;
    color: $bgColor;
  }
}
</style>
