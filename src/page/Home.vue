<template>
  <div>Home
    <VxScrollView/>
    <!--<VxScrollerFull/>-->
    <router-view />
  </div>
</template>

<script>
import VxScrollerFull from '../template/tmall/scroller/up-and-down/VxScrollerFull'
import CenterTitle from '../template/tmall/title/center/CenterTitle'
import CenterTitleFull from '../template/tmall/title/center/CenterTitleFull'
import VxScrollView from '../template/tmall/scroller/simple/VxScrollView'

export default {
  name: 'Home',
  components: {VxScrollView, CenterTitleFull, CenterTitle, VxScrollerFull},
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
