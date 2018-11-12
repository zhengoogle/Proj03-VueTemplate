<template>
  <div>网络请求测试：vue-axios框架</div>
</template>

<script>
export default {
  name: 'AxiosTest',
  /**
   * axios
   *  ref:
   *    https://github.com/imcvampire/vue-axios
   *    https://github.com/axios/axios
   */
  mounted: function () {
    console.log('vue-axios test start...')
    // Make a request for a user with a given ID
    this.axios.get('https://getman.cn/echo')
      .then(function (response) {
        // handle success
        console.log(response.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error)
      })
      .then(function () {
        // always executed
      })
  }
}
</script>

<style scoped>

</style>
