<template>
  <div class="zz-page">
    <div class="ctf-main-container">
      <span class="ctf-item-text">标题</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CenterTitleFull'
}
</script>

<style scoped>
  .ctf-main-container {
    width: 100%;
    height: 45px;
    line-height: 45px;
    text-align: center;
    background: gray;
  }

  .ctf-item-text {
    height: 45px;
    line-height: 45px;
    font-size: 20px;
  }

  .ctf-item-text:before {
    /*position: relative;*/
    display: inline-block;
    width: 20px;
    height: 20px;
    content: "";
    /*background: url("/static/logo/logo.png");*/
    background: url("/static/logo/logo.png");
    background-size: 100%;
    vertical-align:middle;
    opacity: 0.5;
  }
</style>
