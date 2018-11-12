<template>
  <div style="margin-top: 10px;">ChildView
    <button @click="getParentData">get parent data</button>
  </div>
</template>

<script>
export default {
  name: 'ChildView',
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
    console.log('created')
  },
  methods: {
    /**
     * 对象方式
     *  通过父子对象方式
     *  缺点：需要获取到组件实例对象
     *  ref：
     *    https://cn.vuejs.org/v2/api/#ref
     *    https://blog.csdn.net/weixin_41646716/article/details/80455506
     *    https://blog.csdn.net/zhongshijun521/article/details/80610971
     */
    getParentData () {
      console.log(this.$parent)
      console.log(this.$parent.dataMsg1)
    }
  }
}
</script>

<style scoped>

</style>
