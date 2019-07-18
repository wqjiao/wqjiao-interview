<template>
  <!-- 详细信息的 Box 组件 -->
  <div :class="{'desc_box': true, 'fixed_margin': isFixed}">
    <!-- 标题 -->
    <div class="detail_title">
      {{ title }}
      <span class="level">
        <slot name="title"></slot>
      </span>
    </div>
    <!-- 详细内容 -->
    <div class="desc_content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBox',
  props: {
    // Box 标题
    title: {
      type: String,
      default: ''
    },
    // Box 标题
    isFixed: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss" type="text/css">
.desc_box {
  margin-top: .4rem /* 15/37.5 */;
  padding: .533333rem /* 20/37.5 */ .266667rem /* 10/37.5 */;
  background: $color-white;

  .detail_title {
    font-size: $font-size-head;
    color: $heading-color;
    font-weight: 600;
  }
  .desc_content {
    margin-top: .533333rem /* 20/37.5 */;
  }

  .level {
    float: right;
    color: $text-color;
    font-size: .32rem /* 12/37.5 */;
    font-weight: normal;
  }

  &.fixed_margin {
    margin-top: 1.6rem;
  }
}
</style>
