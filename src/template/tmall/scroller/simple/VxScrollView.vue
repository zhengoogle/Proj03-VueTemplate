<template>
  <div class="zz-page vsv-page">
    <!-- title -->
    <div class="vsv-title-container">{{title}}</div>
    <!-- scroll view list0 -->
    <scroller lock-y scrollbar-x height="50px" ref="scroller" class="vsv-scroll-sty0">
      <div class="box1">
        <div class="vsv-scroll-inner0">
          <div v-for="(item,index) in scrollList" v-bind:key="index" class="vsv-item-container-x">
            <span class="vsv-item-text">列表内容{{item}}</span>
          </div>
        </div>
      </div>
    </scroller>
    <!-- scroll view list1 -->
    <scroller lock-x scrollbar-y height="150px" ref="scroller" class="vsv-scroll-sty1">
      <div class="vsv-scroll-inner1">
        <div v-for="(item,index) in scrollList" v-bind:key="index" class="vsv-item-container">
          <span class="vsv-item-text">列表内容{{item}}</span>
        </div>
      </div>
    </scroller>
    <!-- scroll view list2 -->
    <scroller lock-x scrollbar-y ref="scroller" class="vsv-scroll-sty2">
      <div class="vsv-scroll-inner2">
        <div v-for="(item,index) in scrollList" v-bind:key="index" class="vsv-item-container">
          <span class="vsv-item-text">列表内容{{item}}</span>
        </div>
      </div>
    </scroller>
  </div>
</template>

<script>
import {Scroller} from 'vux'

export default {
  name: 'VxScrollView',
  components: {Scroller},
  data () {
    return {
      title: 'VxScrollView',
      scrollList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    }
  },
  methods: {
    calc (params) {
      return params
    }
  },
  /**
   * 滚动列表业务场景
   *  s0.横向的滚动列表；
   *  s1.高度限定的滚动列表；
   *  s2.高度自动适配的滚动列表；
   *  component:
   *  https://doc.vux.li/zh-CN/components/scroller.html
   *
   *  issue:
   *  #1.Scroller组件无法下拉到底的问题；
   *    1.给scroller下边添加一个padding-bottom值，等于scroller组件未填充的页面高度；
   *    2.设置height="-xxx"，设置一个负值；
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
  .vsv-page {
    font-size: 14px;
  }

  .vsv-title-container {
    width: 100%;
    height: 44px;
    line-height: 44px;
    text-align: center;
    font-size: 16px;
    background: lightcyan;
  }

  .vsv-item-container-x {
    display: inline-block;
    box-sizing: border-box;
    width: 100px;
    height: 50px;
    margin-left: 0;
    border: 1px solid red;
  }

  .vsv-item-container {
    box-sizing: border-box;
    height: 50px;
    margin: 10px;
    border-bottom: 1px solid #CCC;
  }

  .vsv-item-text {
    display: inline-block;
    height: 100%;
    line-height: 50px;
    text-align: center;
  }

  .vsv-scroll-sty0 {
    background: darkseagreen;
  }

  .vsv-scroll-inner0 {
    display: inline-block;
    /*padding-right: 0px;*/
  }

  .box1 {
    height: 100px;
    position: relative;
    width: 1500px;
  }

  .vsv-scroll-sty1 {
    background: darkkhaki;
  }

  .vsv-scroll-inner1 {
    padding-bottom: 1px;
  }

  .vsv-scroll-sty2 {
    background: lightgoldenrodyellow;
  }

  .vsv-scroll-inner2 {
    padding-bottom: 245px;
  }
</style>
