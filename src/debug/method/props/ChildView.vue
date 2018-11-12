<template>
  <div style="margin-top: 10px;">ChildView
    <div>parentMsg:{{parentMsg0}}</div>
    <div>$props.parentMsg:{{$props.parentMsg1}}</div>
  </div>
</template>

<script>
export default {
  name: 'ChildView',
  // props 可以是数组或对象与data不同
  // 第一种定义方式，对象方式
  props: {
    parentMsg0: {
      // type: String,
      // default: '...'
    },
    parentMsg1: {}
  },
  // 另一种定义方式，数组方式
  // props: ['parentMsg'],
  // data
  data () {
    return {
      msg: 'data AA'
    }
  },
  beforeCreate: function () {
    console.log('beforeCreate')
    // 未定义
    // try {
    //   console.log(this.parentMsg + '')
    // } catch (e) {
    //   console.log(e)
    // }
  },
  created: function () {
    console.log('created')
    // 完成初始化，可访问
    console.log(this.parentMsg1)
  },
  mounted: function () {
    console.log('mounted')
    console.log(this.parentMsg1)
    console.log(this.$props.parentMsg1)
    let _self = this
    setTimeout(function () {
      // 不要在子组件内部改变 props
      // log: Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders.
      // _self.parentMsg = 'msg VUE'
      console.log(_self.$parent.dataMsg1.arr[0])
      _self.parentMsg1.arr[0]++
      console.log(_self.$parent.dataMsg1.arr[0])
      // String type
      console.log(_self.$parent.dataMsg0)
      _self.dataMsg0 = 'XXX'
      console.log(_self.$parent.dataMsg0)
    }, 5000)
  },
  destroyed: function () {
    console.log('destroyed')
  },
  methods: {}
}
</script>

<style scoped>

</style>
