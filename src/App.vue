<template>
  <div id="app">
    <!--<ParentView></ParentView>-->
    <!--<AxiosTest></AxiosTest>-->
    <!--<router-view/>-->
    <NavBarTest></NavBarTest>
  </div>
</template>

<script>
import LifeCycle from './debug/life/LifeCycle'
import ParentView from './debug/router/r-view/ParentView'
import NavBarTest from './debug/frame/vux2/nav-bar/NavBarTest'
// import AxiosTest from './debug/http/vue-axios/AxiosTest'

export default {
  name: 'App',
  components: {NavBarTest, ParentView, LifeCycle},
  mounted: function () {
    console.log('mounted')
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    width: 100%;
    height: 100%;
  }
</style>
