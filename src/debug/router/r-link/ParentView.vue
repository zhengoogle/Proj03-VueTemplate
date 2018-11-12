<template>
  <div>ParentView
    <!-- 1.渲染成a标签 -->
    <!--<router-link to="hello">Link to Hello</router-link>-->
    <!-- 2.自定义样式 -->
    <!--<router-link to="hello">-->
    <!--<button>Link-->
    <!--</button>-->
    <!--</router-link>-->
    <!-- 4.:to携带参数 -->
    <!--<router-link :to="{ path: 'hello', params: { userId: 123 }, query: { plan: 'private' }}">Link to Hello</router-link>-->
    <!-- 5.设置replace不会留下 history 记录 -->
    <router-link to="hello" replace>Link to Hello</router-link>
  </div>
</template>

<script>

/**
 * router-link测试
 *  跳转到to指向路由组件
 *  Ref:
 *    https://router.vuejs.org/zh/guide/#html
 *    https://router.vuejs.org/zh/api/#router-link
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
