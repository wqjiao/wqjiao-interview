<template>
  <div class="fixed_button">
    <mt-button @click="goBack">取消</mt-button>
    <mt-button type="primary" @click="handleSubmit">提交</mt-button>
  </div>
</template>

<script>
export default {
  name: 'FixedBotton',
  props: {
    handleSubmit: Function
  },
  methods: {
    // 返回上一层路由
    goBack() {
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped lang="scss" type="text/css">
.fixed_button {
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
  z-index: 4;
  button {
    flex: 1;
  }
}
</style>
