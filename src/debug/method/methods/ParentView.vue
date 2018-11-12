<template>
  <div>ParentView
    <div>tempA + tempB:{{sumInteger()}}</div>
  </div>
</template>

<script>

/**
 * vue methods测试
 *  methods 将被混入到 Vue 实例中。可以直接通过 VM 实例访问这些方法，或者在指令表达式中使用。
 *  方法中的 this 自动绑定为 Vue 实例。
 *  类型：{ [key: string]: Function }
 *  Ref:
 *    https://cn.vuejs.org/v2/api/index.html#methods
 *    blog
 *    https://www.jb51.net/article/120073.htm
 */
export default {
  name: 'ParentView',
  components: {},
  data () {
    return {
      tempA: 100,
      tempB: 200
    }
  },
  // methods定义组件共用的函数
  methods: {
    sumInteger: function () {
      return this.tempA + this.tempB
    },
    sumIntegerParams: function (paramsA, paramsB) {
      return paramsA + paramsB
    },
    /**
     * params arguments
     *  https://www.cnblogs.com/it80/p/7053736.html
     * @returns {number}
     */
    sumIntegerParams1: function () {
      let temp = 0
      for (let i = 0; i < arguments.length; i++) {
        temp += arguments[i]
      }
      return temp
    }
  },
  mounted: function () {
    console.log('mounted')
    console.log('sumIntegerParams:' + this.sumIntegerParams(99, 88))
    console.log('sumIntegerParams1:' + this.sumIntegerParams1(11, 22, 33, 44, 55, 66))
  },
  destroyed: function () {
    console.log('destroyed')
  }
}
</script>

<style scoped>

</style>
