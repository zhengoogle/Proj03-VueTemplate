<template>
  <div>ParentView
    <ChildView v-bind:parentMsg0.sync="dataMsg0" :parentMsg1="dataMsg1"></ChildView>
  </div>
</template>

<script>

import ChildView from './ChildView'

/**
 * vue props测试
 *  props 可以是数组或对象，用于接收来自父组件的数据。props 可以是简单的数组，或者使用对象作为替代，
 *  对象允许配置高级选项，如类型检测、自定义校验和设置默认值。
 *  类型：Array<string> | Object
 *  Ref:
 *    https://cn.vuejs.org/v2/api/index.html#props
 *    blog
 *    https://www.cnblogs.com/xiaohuochai/p/7388866.html
 *    https://blog.csdn.net/jingtian678/article/details/81160995
 */
export default {
  name: 'ParentView',
  components: {ChildView},
  data () {
    return {
      // 基本类型
      dataMsg0: 'AAA',
      // 引用类型
      dataMsg1: {
        name: 'Array',
        arr: [1, 2, 3]
      }
    }
  },
  mounted: function () {
    console.log('mounted')
  },
  destroyed: function () {
    console.log('destroyed')
  }
}
</script>

<style scoped>

</style>
