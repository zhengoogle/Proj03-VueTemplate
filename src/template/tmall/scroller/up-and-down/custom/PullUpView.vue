<template>
  <div class="puv-up-container">
    <span v-show="status.pullupStatus === 'default'"></span>
    <span v-show="status.pullupStatus === 'down'">释放加载</span>
    <span v-show="status.pullupStatus === 'up'">上拉加载</span>
    <spinner v-show="status.pullupStatus === 'loading'" type="dots" size="28px"></spinner>
    <span v-show="status.pullupStatus === 'loading'">&nbsp;加载中...</span>
  </div>
</template>

<script>
import {Spinner} from 'vux'

export default {
  name: 'PullUpView',
  components: {Spinner},
  props: ['status']
}
</script>

<style scoped>
  .vux-spinner {
    stroke: greenyellow;
    fill: greenyellow;
  }

  .puv-up-container {
    position: absolute;
    width: 100%;
    height: 40px;
    bottom: 0px;
    line-height: 40px;
    text-align: center;
    background: gray;
  }

  span {
    line-height: 40px;
  }
</style>
