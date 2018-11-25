<template>
  <div>
    <XHeader :left-options="{backText: '返回'}" class="over-header-sty">Page title</XHeader>
  </div>
</template>

<script>
import XHeader from 'vux/src/components/x-header/index'

export default {
  name: 'AccountPage01',
  components: {XHeader}
}
</script>

<style scoped>
  .over-header-sty {
    background-color: #FFF;
  }

  .over-header-sty:nth-child(1) {
    color: black;
  }
</style>
