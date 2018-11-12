<template>
  <div>ParentView {{dataCenter.name}}
  </div>
</template>

<script>
/**
 * VUE组件传值测试-数据共享
 *  https://cn.vuejs.org/v2/guide/plugins.html
 *  https://cn.vuejs.org/v2/cookbook/adding-instance-properties.html
 *  https://www.cnblogs.com/linxin/p/6637904.html
 */
export default {
  name: 'ParentView',
  components: {},
  data () {
    return {
      dataCenter: this.$dataCenter,
      dataMsg1: 'data AA',
      dataMsg2: 'data BB',
      msg: [1, 2, 3]
    }
  },
  methods: {
    sendData () {
      window.bus.$emit('change', 'from parent data...')
    }
  },
  mounted: function () {
    console.log('mounted')
    console.log(this.dataCenter)
    console.log(this.$dataCenter)
    this.$dataCenter.name = 'DataCenter2'
  }
}
</script>

<style scoped>

</style>
