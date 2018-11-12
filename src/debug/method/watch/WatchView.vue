<template>
  <div>WatchView
    <div>tempA + tempB:{{tempA}}</div>
  </div>
</template>

<script>

/**
 * vue watch测试
 *  一个对象，键是需要观察的表达式，值是对应回调函数。值也可以是方法名，或者包含选项的对象。
 *  Vue 实例将会在实例化时调用 $watch()，遍历 watch 对象的每一个属性。
 *  类型：{ [key: string]: string | Function | Object | Array }
 *  Ref:
 *    https://cn.vuejs.org/v2/api/index.html#watch
 *    https://cn.vuejs.org/v2/guide/computed.html
 *    blog
 *      https://www.jb51.net/article/120073.htm
 *      https://blog.csdn.net/wandoumm/article/details/80259908
 */
export default {
  name: 'WatchView',
  components: {},
  data () {
    return {
      tempA: 1,
      tempB: 2,
      tempC: 3,
      tempD: 4
    }
  },
  // 定义watch对象
  watch: {
    // watch data
    tempA: function (val, oldVal) {
      console.log('new: %s, old: %s', val, oldVal)
    },
    // 深度 watcher
    tempB: {
      handler: function (val, oldVal) {
        console.log('new: %s, old: %s', val, oldVal)
      },
      deep: true
    },
    // 可以是方法
    tempC: 'callMethod'
  },
  methods: {
    callMethod (curVal, oldVal) {
      console.log('new: %s, old: %s', curVal, oldVal)
    }
  },
  mounted: function () {
    console.log('mounted')
    this.tempA = 100
    this.tempB = 200
    this.tempC = 300
  },
  destroyed: function () {
    console.log('destroyed')
  }
}
</script>

<style scoped>

</style>
