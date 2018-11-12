<template>
  <div style="margin-top: 10px;">VuexCiView2
    <div>$store.state.count:{{$store.state.count}}</div>
  </div>
</template>

<script>
export default {
  name: 'VuexCiView2',
  data () {
    return {
      dataMsg1: 'data aa',
      dataMsg2: 'data bb'
    }
  },
  /**
   * 数据已初始化
   */
  mounted: function () {
    console.log('mounted')
  }
}
</script>

<style scoped>

</style>
