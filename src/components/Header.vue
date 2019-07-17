<template>
  <!-- Header 导航 -->
  <div class="header">
    <ul class="header_list">
      <li
        :class="{'header_item': true, 'active': item.type === typeed}"
        v-for="(item, index) in headerList"
        :key="index"
        @click="changeTab(item.type)"
      >{{ item.name }}</li>
    </ul>
    {{headerList.length}}
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    typeed: {
      type: String,
      default: 'html'
    },
    changeTab: Function
  },
  data: () => ({
    headerList: []
  }),
  created() {
    this.getHeader();
  },
  methods: {
    getHeader() {
      this.$axios({
        method: "get",
        url: "/interview/nav"
      })
        .then(res => {
          const data = res.data.data;

          console.log(data);
          this.headerList = data;
        })
        .catch(error => {
          console.log("error: " + error);
        });
    }
  }
};
</script>

<style scoped lang="scss" type="text/css">
.header {
  background-color: rgb(255, 255, 255);
  height: 1rem;
  overflow-x: scroll;
  overflow-y: hidden;
  .header_list {
    height: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    line-height: 1;
  }
  .header_item {
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
