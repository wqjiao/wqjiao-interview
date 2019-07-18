<template>
  <!-- 新增题目 -->
  <div class="question">
    <!-- 固定头部: Boolean 类型需要使用 v-bind -->
    <Header :fixed="true" :isHome="false" :isRight="false" />
    Add A Question
  </div>
</template>

<script>
import Header from '@/components/Header';

export default {
  name: 'Question',
  components: {
    Header
  }
};
</script>

<style scoped lang="scss" type="text/css">
</style>
