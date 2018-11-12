<template>
  <div>ParentView
    <button @click="jumpToPage">开始跳转</button>
    <div>
      <router-link to="target">Link</router-link>
    </div>
  </div>
</template>

<script>

/**
 * 使用代码跳转测试
 *  Ref:
 *    https://router.vuejs.org/zh/guide/essentials/navigation.html
 *    https://router.vuejs.org/zh/guide/#html
 *    https://router.vuejs.org/zh/api/#router-link
 *    blog:
 *    https://www.jb51.net/article/127676.htm
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
      // 1.执行默认跳转
      // router.push(location, onComplete ?, onAbort ?)
      // this.$router.push('/target')
      // 2.不会向 history 添加新记录
      // router.replace(location, onComplete ?, onAbort ?)
      this.$router.replace('/target')
      // 3.使用go方式，类似 window.history.go(n)
      // router.go(n)
      // this.$router.go(-1)
      // 4.后退一步，this.$router.go(-1)
      // router.back()
      // this.$router.back()
      // 5.前进一步，this.$router.go(1)
      // router.forward()
      // this.$router.forward()
    }
  },
  mounted: function () {
    console.log('mounted')
  }
}
</script>

<style scoped>

</style>
