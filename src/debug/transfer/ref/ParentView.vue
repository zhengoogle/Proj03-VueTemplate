<template>
  <div>ParentView
    <button @click="getChildData">get child data</button>
    <ChildView ref="childElm"></ChildView>
  </div>
</template>

<script>
import ChildView from './ChildView'

/**
 * VUE父子组件传值测试
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
    getChildData () {
      console.log(this.$refs.childElm)
      console.log(this.$refs.childElm.dataMsg1)
    }
  },
  mounted: function () {
    console.log('mounted')
  }
}
</script>

<style scoped>

</style>
