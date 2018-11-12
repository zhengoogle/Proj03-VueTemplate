import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/**
 * state
 *  单一状态树，唯一数据源
 *  https://vuex.vuejs.org/zh/guide/state.html
 * @type {{count: number}}
 */
const state = {
  count: 100
}

/**
 * mutations
 *  更改 Vuex 的 store 中的状态的唯一方法是提交 mutation，mutation 都是同步事务
 *  https://vuex.vuejs.org/zh/guide/mutations.html
 * @type {{increment(*): void, decrement(*): void}}
 */
const mutations = {
  increment (state) {
    state.count++
  },
  decrement (state) {
    state.count--
  }
}

/**
 * actions
 *  Action 提交的是 mutation，而不是直接变更状态，Action 可以包含任意异步操作
 *  https://vuex.vuejs.org/zh/guide/actions.html
 * @type {{increment: (function({commit: *}): *), decrement: (function({commit: *}): *), incrementIfOdd({commit: *, state: *}): void, incrementAsync({commit?: *}): *}}
 */
const actions = {
  increment: ({commit}) => commit('increment'),
  decrement: ({commit}) => commit('decrement'),
  incrementIfOdd ({commit, state}) {
    if ((state.count + 1) % 2 === 0) {
      commit('increment')
    }
  },
  incrementAsync ({commit}) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('increment')
        resolve()
      }, 1000)
    })
  }
}

/**
 * getters
 *  就像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算
 *  https://vuex.vuejs.org/zh/guide/getters.html
 * @type {{evenOrOdd: (function(*): string)}}
 */
const getters = {
  evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
}

// 实例化
// A Vuex instance is created by combining the state, mutations, actions, and getters.
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
