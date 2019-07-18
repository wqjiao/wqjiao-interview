<template>
  <!-- 添加答案 -->
  <div class="answer">
    <!-- 固定头部: Boolean 类型需要使用 v-bind -->
    <Header :fixed="true" :isHome="false" :isRight="false" />
    Add A Answer
  </div>
</template>

<script>
import Header from '@/components/Header';

export default {
  name: 'Answer',
  components: {
    Header
  }
};
</script>

<style scoped lang="scss" type="text/css">
</style>
