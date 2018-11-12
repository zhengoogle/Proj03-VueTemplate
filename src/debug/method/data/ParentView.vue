<template>
  <div>ParentView
    <div>msg:{{msg}}</div>
    <div>$data.msg:{{$data.msg}}</div>
    <!--<div>vm.name:{{name}}</div>-->
  </div>
</template>

<script>

/**
 * vue data测试
 *  当一个 Vue 实例被创建时，它向 Vue 的响应式系统中加入了其 data 对象中能找到的所有的属性。
 *  当这些属性的值发生改变时，视图将会产生“响应”，即匹配更新为新的值。
 *  类型：Object | Function
 *  限制：组件的定义只接受 function
 *  Ref:
 *    https://cn.vuejs.org/v2/api/index.html#data
 *    blog
 *    https://blog.csdn.net/vivianluolita/article/details/78775072
 *    https://www.jb51.net/article/118131.htm
 *    https://www.cnblogs.com/libin-1/p/6878057.html
 */
export default {
  name: 'ParentView',
  components: {},
  // data的定义方式1-推荐用法
  data () {
    return {
      msg: 'data AA'
    }
  },
  // data的定义方式2
  // data: function () {
  //   return {
  //     msg: 'msg AA'
  //   }
  // },
  // data的定义方式3
  // data: vm => ({
  //   msg: 'data AC',
  //   dName: vm.toString()
  // }),
  beforeCreate: function () {
    console.log('beforeCreate')
    // 未定义
    console.log(this.msg)
  },
  created: function () {
    console.log('created')
    // 完成初始化，可访问
    console.log(this.msg)
  },
  mounted: function () {
    console.log('mounted')
    console.log(this.msg)
    console.log(this.$data.msg)
    let _self = this
    setTimeout(function () {
      _self.msg = 'msg VUE'
    }, 5000)
  },
  destroyed: function () {
    console.log('destroyed')
  }
}
</script>

<style scoped>

</style>
