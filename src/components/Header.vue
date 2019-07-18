<template>
  <!-- Header 导航 -->
  <mt-header :fixed="fixed" :title="title" class="header">
    <!-- 首页Logo || 返回首页 -->
    <mt-button slot="left" v-if="isHome">
      <img slot="icon" src="@/assets/logo.png" style="width: 48%;" alt="logo">
    </mt-button>
    <mt-button slot="left" icon="back" v-else @click="goBack"></mt-button>
    <!-- <router-link to="/" slot="left" v-else>
      <mt-button icon="back"></mt-button>
    </router-link> -->

    <router-link to="/add/question" slot="right" v-show="isRight">
      <img src="@/assets/plus_active.png" alt="新增题目">
    </router-link>
  </mt-header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      default: '小小题集合'
    },
    isHome: {
      type: Boolean,
      default: true
    },
    isRight: {
      type: Boolean,
      default: true
    },
    fixed: {
      type: Boolean,
      default: false
    }
  },
  create() {
    console.log('***', isHome, title, fixed)
  },
  methods: {
    // 返回上一层路由
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped lang="scss" type="text/css">
.header {
  background: $color-white;
  color: $heading-color;
  border-bottom: .026667rem /* 1/37.5 */ solid #f1f1f1;
}
</style>
