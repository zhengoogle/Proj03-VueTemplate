<template>
  <div>Home
    <VxScrollView/>
    <router-view />
  </div>
</template>

<script>
import VxScrollView from '../template/tmall/scroller/simple/VxScrollView'
import VxPullDown from '../template/tmall/scroller/pull-down/VxPullDown'
import VxPullUp from '../template/tmall/scroller/pull-up/VxPullUp'

export default {
  name: 'Home',
  components: {VxPullUp, VxPullDown, VxScrollView},
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
