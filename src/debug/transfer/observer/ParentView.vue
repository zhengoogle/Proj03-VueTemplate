<template>
  <div>ParentView
    <button @click="sendData">parent send data</button>
    <ChildView></ChildView>
  </div>
</template>

<script>
import ChildView from './ChildView'

/**
 * VUE组件传值测试
 */
export default {
  name: 'ParentView',
  components: {ChildView},
  data () {
    return {
      dataMsg1: 'data AA',
      dataMsg2: 'data BB',
      msg: [1, 2, 3]
    }
  },
  methods: {
    sendData () {
      window.bus.$emit('change', 'from parent data...')
    }
  },
  mounted: function () {
    console.log('mounted')
  }
}
</script>

<style scoped>

</style>
