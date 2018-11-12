import Vue from 'vue'
import Router from 'vue-router'
import Home from './../page/Home'
// import ParentView from './../debug/router/r-view/ParentView'
import ChildViewA from './../debug/router/r-view/ChildViewA'
import ChildViewB from './../debug/router/r-view/ChildViewB'
import ChildViewC from './../debug/router/r-view/ChildViewC'
import HelloWorld from './../components/HelloWorld'
import TargetPage from './../debug/router/jump/TargetPage'
// 定义一个能够被 Webpack 自动代码分割的异步组件
// https://router.vuejs.org/zh/guide/advanced/lazy-loading.html
const SubPage = () => import('./../debug/router/params/SubPage')

Vue.use(Router)

let router = new Router({
  // mode: hash/history
  // https://router.vuejs.org/zh/guide/essentials/history-mode.html
  // https://www.cnblogs.com/heioray/p/7193841.html
  // mode: 'history',
  mode: 'hash',
  routes: [
    {
      // 命名路由
      // https://router.vuejs.org/zh/guide/essentials/named-routes.html
      path: '/', // 访问路径
      name: 'Home', // 名称
      component: Home, // 渲染组件
      /**
       * 嵌套路由
       *  https://router.vuejs.org/zh/guide/essentials/nested-routes.html
       */
      children: [
        {
          path: '/childA',
          components: {
            default: ChildViewA,
            childB: ChildViewB,
            childC: ChildViewC
          }
        }]
    }, {
      path: '/hello',
      name: 'hello',
      component: HelloWorld
    }, {
      path: '/target',
      name: 'target',
      component: TargetPage,
      /**
       * 组件内导航钩子-在路由中配置的方式
       *  https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#路由独享的守卫
       * @param to
       * @param from
       * @param next
       */
      beforeEnter: (to, from, next) => {
        console.log('beforeEnter...')
        next()
      },
      beforeLeave: (to, from, next) => {
        console.log('beforeLeave...')
        next()
      }
    }, {
      path: '/subPage',
      name: 'subPage',
      component: SubPage,
      // 路由传参
      // https://router.vuejs.org/zh/guide/essentials/passing-props.html
      props: {
        default: true,
        name: 'router.js name prop...'
      },
      meta: {keepAlive: true}
    }
  ]
})
/**
 * 全局钩子函数
 *  Ref:
 *    https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#%E5%85%A8%E5%B1%80%E5%AE%88%E5%8D%AB
 *    blog:
 *    https://blog.csdn.net/sinat_17775997/article/details/68941078?utm_source=blogxgwz4
 *    https://blog.csdn.net/qxb5215/article/details/80346820
 *    https://www.cnblogs.com/heioray/p/7193841.html
 */
/**
 * 路由执行前调用
 to: Route: 即将要进入的目标 路由对象
 from: Route: 当前导航正要离开的路由
 next: Function: 一定要调用该方法来 resolve 这个钩子。
 */
// router.beforeEach((to, from, next) => {
//   console.log('global-beforeEach...')
//   next()
// })
// /**
//  * 2.5.0+新增
//  *  类似beforeEach，目标组件beforeRouteEnter执行后调用
//  */
// router.beforeResolve((to, from, next) => {
//   console.log('global-beforeResolve...')
//   console.log(to.path)
//   next()
// })
// /**
//  * 路由跳转后执行，不会接受 next 函数也不会改变导航本身
//  */
// router.afterEach((to, from) => {
//   console.log('global-afterEach...')
//   console.log(to.path)
// })
export default router
