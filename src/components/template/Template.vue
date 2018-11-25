<template>
  <div class="zz-page">{{title}}</div>
</template>

<script>
export default {
  name: 'Template',
  components: {},
  data () {
    return {
      title: 'template component'
    }
  },
  methods: {
    calc (params) {
      return params
    }
  },
  /**
   * template
   */
  mounted: function () {
    console.log('mounted')
  },
  destroyed: function () {
    // console.log('destroyed')
  }
}
</script>

<style scoped>

</style>
