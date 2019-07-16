<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<!-- 在 style 中签中使用 scoped 属性：限制当前组件独有的 css -->
<style lang="scss" type="text/css">
// 包括全局可用的 变量、工具函数等
@import './assets/scss/index.scss';
</style>
