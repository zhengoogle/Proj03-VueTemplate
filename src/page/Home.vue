<template>
  <div>Home
    <VxScrollerFull/>
    <router-view />
  </div>
</template>

<script>
import VxScrollerFull from '../template/tmall/scroller/up-and-down/VxScrollerFull'

export default {
  name: 'Home',
  components: {VxScrollerFull},
  mounted: function () {
    console.log('mounted')
  },
  destroyed: function () {
    console.log('destroyed')
  }
}
</script>

<style scoped>

</style>
