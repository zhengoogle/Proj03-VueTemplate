<template>
  <div>sub page...
    <div>name:{{ name }}</div>
    <div>$route.query:{{ $route.query }}</div>
    <div>$route.params:{{ $route.params }}</div>
  </div>
</template>

<script>
export default {
  name: 'SubPage',
  props: {
    name: {
      type: String,
      default: '...'
    }
  },
  /**
   * 路由传参测试
   *  https://router.vuejs.org/zh/guide/essentials/passing-props.html
   * @param to
   * @param from
   * @param next
   */
  mounted: function () {
    console.log('mounted')
    console.log(this.$route.params)
  },
  destroyed: function () {
    console.log('mounted')
  }
}
</script>

<style scoped>

</style>
