<template>
  <div>target page...</div>
</template>

<script>
let stateFlag = false
export default {
  name: 'TargetPage',
  /**
   * 组件内导航钩子
   *  https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#组件内的守卫
   * @param to
   * @param from
   * @param next
   */
  beforeRouteEnter: function (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    console.log('beforeRouteEnter...')
    console.log(to)
    console.log(from)
    next(vm => {
      // 通过 `vm` 访问组件实例
      console.log(vm)
    })
  },
  beforeRouteLeave: function (to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    console.log('beforeRouteLeave...')
    if (!stateFlag) {
      stateFlag = true
      // 取消本次执行，通常用来禁止用户在还未保存修改前突然离开
      next(false)
    } else {
      next()
    }
  },
  beforeRouteUpdate: function (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    console.log('beforeRouteUpdate...')
    next()
  },
  mounted: function () {
    console.log('mounted')
  },
  destroyed: function () {
    console.log('mounted')
  }
}
</script>

<style scoped>

</style>
