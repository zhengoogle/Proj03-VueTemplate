<template>
  <div>ComputedView
    <div>tempA + tempB:{{sumInteger}}</div>
    <div>sumIntegerParams:{{sumIntegerParams}}</div>
    <div>sumIntegerParams1:{{sumIntegerParams1(11, 22, 33)}}</div>
  </div>
</template>

<script>

/**
 * vue computed测试
 *  计算属性将被混入到 Vue 实例中。所有 getter 和 setter 的 this 上下文自动地绑定为 Vue 实例。
 *  与methods的主要区别：
 *    computed计算属性的结果会被缓存，除非依赖的响应式属性变化才会重新计算
 *    参数定义方式不一样，computed操作更像对象属性，methods则是标准的方法
 *  类型：{ [key: string]: Function | { get: Function, set: Function } }
 *  Ref:
 *    https://cn.vuejs.org/v2/api/index.html#computed
 *    https://cn.vuejs.org/v2/guide/computed.html
 *    blog
 *    https://segmentfault.com/q/1010000009648670
 *    https://www.jb51.net/article/120073.htm
 */
export default {
  name: 'ComputedView',
  components: {},
  data () {
    return {
      paramsA: 0,
      tempA: 100,
      tempB: 200
    }
  },
  // computed属性
  computed: {
    /**
     * 计算属性默认只有getter
     */
    sumInteger: function () {
      return this.tempA + this.tempB
    },
    /**
     * 通过set传参
     */
    sumIntegerParams: {
      // getter
      get: vm => {
        return vm.paramsA
      },
      // setter
      set: function (params) {
        this.paramsA = params.A + params.B
      }
    },
    /**
     * 匿名传参
     *  https://www.cnblogs.com/it80/p/7053736.html
     * @returns {function(): number}
     */
    sumIntegerParams1 () {
      return function () {
        let temp = 0
        for (let i = 0; i < arguments.length; i++) {
          temp += arguments[i]
        }
        return temp
      }
    }
  },
  mounted: function () {
    console.log('mounted')
    console.log(this)
    console.log('sumInteger:' + this.sumInteger)
    // console.log('sumIntegerParams:' + this.sumIntegerParams)
    this.sumIntegerParams = {
      A: 11,
      B: 22
    }
    console.log('sumIntegerParams:' + this.sumIntegerParams)
    console.log('sumIntegerParams1:' + this.sumIntegerParams1(11, 22, 33))
  },
  destroyed: function () {
    console.log('destroyed')
  }
}
</script>

<style scoped>

</style>
