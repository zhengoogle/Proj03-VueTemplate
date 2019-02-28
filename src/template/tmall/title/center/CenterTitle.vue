<template>
    <div class="zz-page">
      <div class="ct-main-container">
        <span>标题</span>
      </div>
    </div>
</template>

<script>
export default {
  name: 'CenterTitle'
}
</script>

<style scoped>
  .ct-main-container{
    width: 100%;
    height: 45px;
    line-height: 45px;
    text-align: center;
    font-size: 16px;
    background: gray;
  }

  .ct-main-container:before{
    content: " ";
    background: url("/static/logo/logo.png") 100% 100%;
  }
</style>
