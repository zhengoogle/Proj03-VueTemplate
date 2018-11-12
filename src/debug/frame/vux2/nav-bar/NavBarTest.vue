<template>
  <div>
    <XHeader></XHeader>
  </div>
</template>

<script>
import XHeader from 'vux/src/components/x-header/index'
export default {
  name: 'NavBarTest',
  components: {XHeader},
  mounted: function () {
    console.log('mounted')
  }
}
</script>

<style scoped>

</style>
