<template>
  <div>ParentView
    <button @click="jumpToPage">开始跳转</button>
    <div>
      <router-link :to="{ name: 'subPage', params: { userId: 123 }}">Link</router-link>
    </div>
  </div>
</template>

<script>

/**
 * 路由传参测试
 *  query相当于get请求，页面跳转的时候，可以在地址栏看到请求参数，而params相当于post请求，参数不会再地址栏中显示
 *  如果要隐藏参数用params，如果强制刷新不被清除用query
 *  Ref:
 *    https://router.vuejs.org/zh/guide/#html
 *    https://router.vuejs.org/zh/api/#router-link
 *    blog
 *      https://segmentfault.com/a/1190000012735168
 *      https://www.jb51.net/article/128118.htm
 *      https://www.cnblogs.com/beka/p/8583924.html
 */
export default {
  name: 'ParentView',
  components: {},
  data () {
    return {
      dataMsg1: 'data AA'
    }
  },
  methods: {
    jumpToPage: function () {
      console.log('start jump...')
      // 编程式导航传参
      // https://router.vuejs.org/zh/guide/essentials/navigation.html
      this.$router.push({
        name: 'subPage',
        // 带查询参数，变成 /register?plan=private
        query: {plan: 'private'},
        // 携带自定义参数，注意：如果提供了 path，params 会被忽略
        params: {userId: 123}
      })
    }
  },
  mounted: function () {
    console.log('mounted')
  }
}
</script>

<style scoped>

</style>
