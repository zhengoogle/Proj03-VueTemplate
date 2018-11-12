<template>
  <div>ParentView
    <router-view name="childB"/>
    <router-view name="childC"/>
  </div>
</template>

<script>

/**
 * router-view测试
 *  router-view会匹配到当前路径路由配置中的components组件
 *  Ref:
 *    https://router.vuejs.org/zh/guide/#html
 *    https://router.vuejs.org/zh/api/#router-view
 *    https://router.vuejs.org/zh/guide/essentials/named-views.html
 */
export default {
  name: 'ParentView',
  components: {},
  data () {
    return {
      dataMsg1: 'data AA'
    }
  },
  methods: {},
  mounted: function () {
    console.log('mounted')
  }
}
</script>

<style scoped>

</style>
