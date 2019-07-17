<template>
  <!-- 暂无数据提示 -->
  <div class="interview_without">
    <div>
      <img :src="without" alt="">
      <div>
        {{ title }}
      </div>
    </div>
  </div>
</template>

<script>
import without from '@/assets/without.png';

export default {
  name: "Without",
  props: {
    title: {
      type: String,
      default: '哎呀，该选项没有数据...'
    }
  },
  data: () => ({
    without
  })
};
</script>

<style scoped lang="scss" type="text/css">
.interview_without {
  width: 10rem;
  height: calc(100% - 4rem);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 0.4rem;
  margin-top: .48;
}
</style>
