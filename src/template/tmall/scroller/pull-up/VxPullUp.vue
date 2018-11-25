<template>
  <div class="zz-page vpu-page">
    <!-- title -->
    <div class="vpu-title-container">{{title}}</div>
    <!-- scroll view list -->
    <scroller lock-x scrollbar-y use-pullup :pullup-config="pullUpConfig" @on-pullup-loading="onPullUpEvent"
              height="-44" v-model="status" ref="scroller" class="vpu-scroll-sty2">
      <div class="box2">
        <div class="vpu-scroll-inner2">
          <div v-for="(item,index) in scrollList" v-bind:key="index" class="vpu-item-container">
            <span class="vpu-item-text">列表内容{{item}}</span>
          </div>
        </div>
      </div>
      <!--pull up slot-->
      <div slot="pullup" class="xs-plugin-pullup-container xs-plugin-pullup-up vpu-pull-up-slot">
        <span v-show="status.pullupStatus === 'default'"></span>
        <span class="pullup-arrow"
              v-show="status.pullupStatus === 'default' || status.pullupStatus === 'up' || status.pullupStatus === 'down'"
              :class="{'rotate': status.pullupStatus === 'down'}">↑</span>
        <span v-show="status.pullupStatus === 'loading'"><spinner type="ios-small"></spinner></span>
      </div>
    </scroller>
  </div>
</template>

<script>
import {Scroller, Divider, Spinner} from 'vux'

export default {
  name: 'VxPullUp',
  components: {Scroller, Divider, Spinner},
  data () {
    return {
      title: 'VxPullUp',
      pullUpConfig: {
        content: '上拉加载更多',
        downContent: '松开进行加载',
        upContent: '上拉加载更多',
        loadingContent: '加载中...'
      },
      status: {
        pullupStatus: 'default'
      },
      scrollList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    }
  },
  methods: {
    onPullUpEvent () {
      console.log('onPullUpEvent')
      let _self = this
      setTimeout(function () {
        _self.$refs.scroller.donePullup()
      }, 1000)
    },
    calc (params) {
      return params
    }
  },
  /**
   * 上拉加载业务场景
   *  s1.上拉加载特性支持；
   *  s2.可定制上拉加载底部内容；
   *  component:
   *  https://doc.vux.li/zh-CN/components/scroller.html
   *
   *  issue:
   *  #1.Scroller组件无法下拉到底的问题；
   *    1.给scroller下边添加一个padding-bottom值，等于scroller组件未填充的页面高度；
   *    2.设置height="-xxx"，设置一个负值；
   *  #2.上拉加载底部定制特性；
   *    1.slot="pullup"；
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
  .vpu-page {
    font-size: 14px;
  }

  .vpu-title-container {
    width: 100%;
    height: 44px;
    line-height: 44px;
    text-align: center;
    font-size: 16px;
    background: lightcyan;
  }

  .vpu-item-container {
    box-sizing: border-box;
    height: 50px;
    margin: 10px;
    border-bottom: 1px solid #CCC;
  }

  .vpu-item-text {
    display: inline-block;
    height: 100%;
    line-height: 50px;
    text-align: center;
  }

  .vpu-scroll-sty2 {
    background: lightgoldenrodyellow;
  }

  .vpu-scroll-inner2 {
    /*padding-bottom: 44px;*/
  }

  .rotate {
    transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
  }

  .pullup-arrow {
    display: block;
    transition: all linear 0.2s;
    -webkit-transition: all linear 0.2s;
    color: #666;
    font-size: 25px;
  }

  .vpu-pull-up-slot {
    position: absolute;
    width: 100%;
    height: 40px;
    bottom: -40px;
    text-align: center;
  }
</style>
