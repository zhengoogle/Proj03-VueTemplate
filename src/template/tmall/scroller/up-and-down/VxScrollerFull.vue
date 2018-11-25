<template>
  <div class="zz-page vsf-page">
    <!-- title -->
    <div class="vsf-title-container">{{title}}</div>
    <!-- scroll view list -->
    <scroller lock-x scrollbar-y use-pulldown :pulldown-config="pullDownConfig" @on-pulldown-loading="onPullDownEvent"
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
        <span v-show="status.pulldownStatus === 'default'"></span>
        <span class="pull-down-arrow" v-show="status.pulldownStatus === 'down' || status.pulldownStatus === 'up'"
              :class="{'rotate': status.pulldownStatus === 'up'}">↓</span>
        <span v-show="status.pulldownStatus === 'loading'"><spinner type="ios-small"></spinner></span>
      </div>
    </scroller>
  </div>
</template>

<script>
import {Scroller, Divider, Spinner} from 'vux'

export default {
  name: 'VxScrollerFull',
  components: {Scroller, Divider, Spinner},
  data () {
    return {
      title: 'VxScrollerFull',
      pullDownConfig: {
        content: '下拉刷新',
        downContent: '下拉刷新',
        upContent: '释放刷新',
        loadingContent: '加载中'
      },
      status: {
        pulldownStatus: 'default'
      },
      scrollList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    }
  },
  methods: {
    onPullDownEvent () {
      console.log('onPullDownEvent')
      let _self = this
      setTimeout(function () {
        _self.$refs.scroller.donePulldown()
      }, 1000)
    },
    calc (params) {
      return params
    }
  },
  /**
   * 下拉刷新业务场景
   *  s1.下拉刷新特性支持；
   *  s2.可定制下拉刷新头部内容；
   *  component:
   *  https://doc.vux.li/zh-CN/components/scroller.html
   *
   *  issue:
   *  #1.Scroller下拉刷新头部内容定制；
   *    1.slot="pulldown"；
   *
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
    margin: 10px;
    border-bottom: 1px solid #CCC;
  }

  .vsf-item-text {
    display: inline-block;
    height: 100%;
    line-height: 50px;
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
    height: 60px;
    line-height: 60px;
    top: -60px;
    text-align: center;
  }

  .rotate {
    transform: rotate(-180deg);
  }

  .pull-down-arrow {
    display: inline-block;
    transition: all linear 0.2s;
    color: #666;
    font-size: 25px;
  }
</style>
