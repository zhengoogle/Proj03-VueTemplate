<template>
  <div style="margin-top: 10px;">ChildView {{dataToChild.name}}
    <button @click="sendDataToParent">Child Send data</button>
  </div>
</template>

<script>
export default {
  name: 'ChildView',
  props: ['dataToChild'],
  data () {
    return {
      dataMsg1: 'data aa',
      dataMsg2: 'data bb'
    }
  },
  /**
   * 数据未初始化
   */
  beforeCreate: function () {
    // console.log(this.dataToChild)
  },
  /**
   * 数据已初始化
   */
  created: function () {
    console.log(this.dataToChild)
    let _self = this
    setInterval(function () {
      // debugger
      console.log(_self.dataToChild.arr[0])
    }, 1000)
  },
  methods: {
    /**
     * 基础传值方式
     *  props-emit传值
     *  缺点：父组件到子组件传值使用props方式。子组件到父组件的传值可由事件触发
     *  ref：
     *    https://blog.csdn.net/guozhangqiang/article/details/80769829
     *    .sync
     *    https://cn.vuejs.org/v2/guide/components-custom-events.html#sync-%E4%BF%AE%E9%A5%B0%E7%AC%A6
     */
    sendDataToParent () {
      this.$emit('dataToParent', this.dataMsg1, this.dataMsg2)
    }
  }
}
</script>

<style scoped>

</style>
