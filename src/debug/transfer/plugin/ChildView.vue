<template>
  <div style="margin-top: 10px;">ChildView
    <button @click="getParentData">child get data</button>
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
    window.bus.$on('change', (params) => {
      console.log(params)
    })
  },
  methods: {
    /**
     * 观察者模式
     *  发布者-订阅者
     *  缺点：需要获取到组件实例对象
     *  ref：
     *    https://www.jb51.net/article/103763.htm
     */
    getParentData () {
    }
  }
}
</script>

<style scoped>

</style>
