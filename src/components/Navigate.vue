<template>
  <!-- Navigate 导航 -->
  <div class="navigate">
    <ul class="nav_list">
      <li
        :class="{'nav_item': true, 'active': item.type === typeed}"
        v-for="(item, index) in navList"
        :key="index"
        @click="changeTab(item.type)"
      >{{ item.name }}</li>
    </ul>
    {{navList.length}}
  </div>
</template>

<script>
export default {
  name: 'Navigate',
  props: {
    typeed: {
      type: String,
      default: 'html'
    },
    changeTab: Function
  },
  data: () => ({
    navList: []
  }),
  created() {
    this.getNavigate();
  },
  methods: {
    getNavigate() {
      this.$axios({
        method: "get",
        url: "/interview/nav"
      })
        .then(res => {
          const data = res.data.data;

          console.log(data);
          this.navList = data;
        })
        .catch(error => {
          console.log("error: " + error);
        });
    }
  }
};
</script>

<style scoped lang="scss" type="text/css">
.navigate {
  height: 1rem;
  overflow-x: scroll;
  overflow-y: hidden;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
  transition: all .2s;
  transform: translateZ(0);
  .nav_list {
    height: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    line-height: 1;
  }
  .nav_item {
    height: 100%;
    display: flex;
    flex-shrink: 0;
    align-items: center;
    padding: 0 .533333rem /* 20/37.5 */;
    text-align: center;
    font-size: 0.426667rem /* 16/37.5 */;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 1;
    cursor: pointer;

    &.active,
    &:hover,
    &:focus {
      color: $primary-color;
    }
  }
}
</style>
