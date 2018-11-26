<template>
  <div class="zz-page vsf-page">
    <!-- title -->
    <div class="vsf-title-container">{{title}}</div>
    <!-- scroll view list -->
    <scroller lock-x scrollbar-y use-pulldown use-pullup
              @on-pulldown-loading="onPullDownEvent"
              @on-pullup-loading="onPullUpEvent"
              v-model="status" ref="scroller" class="vsf-scroll-sty2">
      <div class="box2">
        <div class="vsf-scroll-inner2">
          <div v-for="(item,index) in scrollList" v-bind:key="index" class="vsf-item-container">
            <span class="vsf-item-text">列表内容{{item}}</span>
          </div>
        </div>
      </div>
      <!-- custom pull down slot -->
      <div slot="pulldown" class="xs-plugin-pulldown-container xs-plugin-pulldown-down vsf-pull-down-slot">
        <PullDownView :status="status"/>
      </div>
      <!-- custom pull up slot-->
      <div slot="pullup" class="xs-plugin-pullup-container xs-plugin-pullup-up vsf-pull-up-slot">
        <PullUpView :status="status"/>
      </div>
    </scroller>
  </div>
</template>

<script>
import {Scroller, Divider, Spinner} from 'vux'
import PullUpView from './custom/PullUpView'
import PullDownView from './custom/PullDownView'

export default {
  name: 'VxScrollerFull',
  components: {PullUpView, PullDownView, Scroller, Divider, Spinner},
  data () {
    return {
      title: 'VxScrollerFull',
      pageSize: 10,
      status: {
        pulldownStatus: 'default',
        pullupStatus: 'default'
      },
      scrollList: [],
      listDataIndex: 0
    }
  },
  computed: {},
  methods: {
    // full data scene
    scrollFullData: function () {
      let arr = []
      for (let i = 0; i < 10; i++) {
        arr.push(this.listDataIndex++)
      }
      // console.log(arr)
      return arr
    },
    // data dynamic load
    scrollDynamicData: function () {
      let arr = []
      let arrLength = this.listDataIndex < 30 ? 5 : 10
      for (let i = 0; i < arrLength; i++) {
        arr.push(this.listDataIndex++)
      }
      return arr
    },
    // less data scene
    scrollLessData: function () {
      let arr = []
      for (let i = 0; i < 5; i++) {
        arr.push(this.listDataIndex++)
      }
      return arr
    },
    // no data scene
    scrollNoData: function () {
      return []
    },
    onPullDownEvent () {
      console.log('onPullDownEvent')
      let _self = this
      setTimeout(function () {
        _self.$refs.scroller.donePulldown()
        _self.listDataIndex = 0
        _self.scrollList = _self.scrollFullData()
      }, 1000)
    },
    onPullUpEvent () {
      console.log('onPullUpEvent')
      let _self = this
      setTimeout(function () {
        _self.$refs.scroller.donePullup()
        _self.scrollList = _self.scrollList.concat(_self.scrollDynamicData())
        if (_self.scrollList.length !== _self.pageSize) {
          _self.hasMore = false
        }
      }, 1000)
    },
    calc (params) {
      return params
    }
  },
  /**
   * 上下拉Scroller业务场景
   *  s1.上下拉特性支持，满数据、少量数据、无数据、加载错误场景；
   *  s2.可定制头部底部模板内容；
   *  component:
   *  https://doc.vux.li/zh-CN/components/scroller.html
   *
   *  issue:
   *  #1.头部底部模板内容定制；
   *    1.slot="pulldown"；
   *    2.slot="pullup"；
   *
   */
  mounted: function () {
    console.log('mounted')
    this.onPullDownEvent()
  },
  destroyed: function () {
    // console.log('destroyed')
  }
}
</script>

<style scoped>
  .vsf-page {
    font-size: 14px;
  }

  .vsf-title-container {
    width: 100%;
    height: 44px;
    line-height: 44px;
    text-align: center;
    font-size: 16px;
    background: lightcyan;
  }

  .vsf-item-container {
    box-sizing: border-box;
    height: 50px;
    padding: 10px;
    text-align: center;
    border: 1px solid #CCC;
  }

  .vsf-item-text {
    display: inline-block;
    height: 100%;
    line-height: 30px;
    text-align: center;
  }

  .vsf-scroll-sty2 {
    background: lightgoldenrodyellow;
  }

  .vsf-scroll-inner2 {
    padding-bottom: 44px;
  }

  .vsf-pull-down-slot {
    position: absolute;
    width: 100%;
    top: -60px;
  }

  .vsf-pull-up-slot {
    position: absolute;
    width: 100%;
    bottom: 4px;
  }
</style>
