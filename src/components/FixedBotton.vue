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
  position: fixed;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  button {
    flex: 1;
  }
}
</style>
