<template>
  <div>VuexPrView
    <button @click="decrement">增加</button>
    <ChildView1></ChildView1>
    <ChildView2></ChildView2>
  </div>
</template>

<script>
import {mapGetters, mapActions, mapState} from 'vuex'
import ChildView1 from './VuexCiView1'
import ChildView2 from './VuexCiView2'

/**
 * VUEX测试
 *  https://github.com/vuejs/vuex
 */
export default {
  name: 'VuexPrView',
  components: {ChildView1, ChildView2},
  computed: {
    // 访问getter
    ...mapGetters([
      'evenOrOdd'
    ]),
    // 通过mapState辅助函数访问
    ...mapState({
      stateCount: state => state.count,
      getStateCount (state) {
        return state.count
      }
    })
  },
  data () {
    return {
      dataMsg1: 'data AA',
      dataMsg2: 'data BB',
      msg: [1, 2, 3]
    }
  },
  methods: {
    // 访问actions
    ...mapActions([
      'increment',
      'decrement',
      'incrementIfOdd',
      'incrementAsync'
    ]),
    addCount () {
    }
  },
  mounted: function () {
    console.log('mounted')
    console.log('this.$store.state.count:' + this.$store.state.count)
    console.log('this.getStateCount:' + this.getStateCount)
    console.log('this.stateCount:' + this.stateCount)
  }
}
</script>

<style scoped>

</style>
