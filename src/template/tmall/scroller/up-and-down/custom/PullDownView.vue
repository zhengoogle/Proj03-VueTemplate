<template>
  <div class="pdv-up-container">
    <span v-show="status.pulldownStatus === 'default'">完成</span>
    <span v-show="status.pulldownStatus === 'down'">下拉刷新</span>
    <span v-show="status.pulldownStatus === 'up'">释放刷新</span>
    <spinner v-show="status.pulldownStatus === 'loading'" type="lines" size="20px" class="pull-down-spinner"></spinner>
    <span v-show="status.pulldownStatus === 'loading'">正在刷新</span>
  </div>
</template>

<script>
import {Spinner} from 'vux'

export default {
  name: 'PullDownView',
  components: {Spinner},
  props: ['status']
}
</script>

<style scoped>
  .vux-spinner {
    stroke: greenyellow;
    fill: greenyellow;
  }

  .pdv-up-container {
    position: absolute;
    width: 100%;
    height: 60px;
    line-height: 60px;
    text-align: center;
  }

  span {
    /*line-height: 60px;*/
  }

  .pull-down-spinner {
    position: absolute;
    float: left;
    display: block;
    left: 25%;
    margin-top: 5px;
  }
</style>
