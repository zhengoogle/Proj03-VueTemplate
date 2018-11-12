<template>
  <div style="margin-top: 10px;">ChildViewA
  </div>
</template>

<script>
export default {
  name: 'ChildViewA',
  data () {
    return {
      dataMsg1: 'data aa'
    }
  },
  /**
   * 数据未初始化
   */
  beforeCreate: function () {
    // console.log(this.dataToChild)
  },
  /**
   * 数据已初始化
   */
  created: function () {
    console.log('created')
  },
  methods: {}
}
</script>

<style scoped>

</style>
