<template>
  <!-- Level 难度指数 -->
  <div class="nav_index">
    <ul class="nav_list">
      <li
        :class="{'nav_item': true, 'active': item.value === leveled}"
        v-for="(item, index) in levelList"
        :key="index"
        @click="changeLevel(item.value)"
      >
        <span>{{ item.label }}</span>
        <mt-badge size="small" v-if="item.value === leveled">{{ length }}</mt-badge>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Level",
  props: {
    leveled: {
      default: ''
    },
    changeLevel: Function,
    length: {
      type: Number,
      default: 0
    }
  },
  data: () => ({
    levelList: [{
      value: '',
      label: '全部'
    }, {
      value: 0,
      label: '简单'
    }, {
      value: 1,
      label: '中等'
    }, {
      value: 2,
      label: '困难'
    }] // 难度指数
  })
};
</script>

<style scoped lang="scss" type="text/css">
.nav_index {
  padding: 0.266667rem;
  border-bottom: 1px solid hsla(0, 0%, 59.2%, 0.1);
  background: $color-white;
  margin-top: 2.666667rem /* 100/37.5 */; // 固定头部与margin

  .nav_list {
    display: flex;
    align-items: center;
    line-height: 1;
  }

  .nav_item {
    padding: 0 .4rem /* 15/37.5 */;
    font-size: $font-size-base;
    border-right: 1px solid hsla(0,0%,59.2%,.2);
    &.active,
    &:hover,
    &:focus {
      color: $primary-color;
    }
  }
}
</style>
