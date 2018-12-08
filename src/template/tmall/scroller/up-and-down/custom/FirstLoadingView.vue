<template>
  <div class="llv-container">
    <spinner type="lines" size="20px" class="llv-pre-spinner"></spinner>
    <span class="llv-text-sty">加载中...</span>
  </div>
</template>

<script>
import {Spinner} from 'vux'

export default {
  name: 'FirstLoadingView',
  components: {Spinner}
}
</script>

<style scoped>
  .vux-spinner {
    stroke: springgreen;
    fill: springgreen;
  }

  .llv-container {
    width: 100%;
    height: 100%;
    /*margin-top: 40vh;*/
    text-align: center;
    font-size: 14px;
    color: gray;
  }

  .llv-text-sty {
    display: inline-block;
    width: 100vw;
    height: 40px;
    line-height: 40px;
    background: #EEE;
  }

  .llv-pre-spinner {
    position: absolute;
    float: left;
    display: block;
    left: 25%;
    margin-top: 10px;
  }
</style>
