<template>
  <div>ParentView
    <button>Parent Send data</button>
    <ChildView :dataToChild.sync="msg" @dataToParent="getChildData"></ChildView>
  </div>
</template>

<script>
import ChildView from './ChildView'

/**
 * VUE父子组件传值测试
 */
export default {
  name: 'ParentView',
  components: {ChildView},
  data () {
    // 传值仅执行一次
    return {
      dataMsg1: 'data AA',
      dataMsg2: 'data BB',
      msg: {
        name: 'Array',
        arr: [1, 2, 3]
      }
    }
  },
  methods: {
    getChildData (param0, param1) {
      console.log(param0)
      console.log(param1)
    }
  },
  mounted: function () {
    console.log('mounted')
    let _self = this
    setInterval(function () {
      _self.msg.arr[0]++
      console.log(_self.msg.arr[0])
    }, 1000)
  }
}
</script>

<style scoped>

</style>
