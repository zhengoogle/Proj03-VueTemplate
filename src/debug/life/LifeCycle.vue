<template>
  <div></div>
</template>

<script>
export default {
  /**
   * VUE生命周期测试组件
   */
  name: 'LifeCycle',
  /**
   * AAA
   */
  beforeCreate: function () {
    console.log('LifeCycle beforeCreate')
  },
  created: function () {
    console.log('LifeCycle created')
  },
  beforeMount: function () {
    console.log('LifeCycle beforeMount')
  },
  mounted: function () {
    console.log('LifeCycle mounted')
  },
  beforeUpdate: function () {
    console.log('LifeCycle beforeUpdate')
  },
  updated: function () {
    console.log('LifeCycle updated')
  },
  activated: function () {
    console.log('LifeCycle activated')
  },
  deactivated: function () {
    console.log('LifeCycle deactivated')
  },
  beforeDestroy: function () {
    console.log('LifeCycle beforeDestroy')
  },
  destroyed: function () {
    console.log('LifeCycle destroyed')
  },
  errorCaptured: function () {
    console.log('LifeCycle errorCaptured')
  }
}
</script>

<style scoped>

</style>
