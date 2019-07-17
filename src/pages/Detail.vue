<template>
  <div class="interview_detail">
    <!-- 固定头部 -->
    <mt-header fixed :title="title">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>

    <!-- 描述详情 -->
    <div class="desc_box">
      <div class="detail_title">描述信息</div>
      <div class="desc_content">{{ desc }}</div>
    </div>

    <!-- 所有答案列表 -->
    <mt-loadmore :top-method="loadTop" ref="loadmore">
      <div class="detail_list">
        <div class="detail_title">答案列表</div>
        <ul>
          <li class="detail_item" v-for="(item, index) in list" :key="index" v-html="item.content"></li>
        </ul>
      </div>
    </mt-loadmore>
  </div>
</template>

<script>
export default {
  name: "Detail",
  components: {},
  data: () => ({
    title: '', // 标题
    desc: '', // 描述信息
    list: [] // 所有结果
  }),
  created() {
    this.getDetail();
  },
  methods: {
    // 获取列表详情
    getDetail() {
      this.$axios({
        method: "post",
        url: "/interview/detail",
        data: this.$route.params
      })
        .then(res => {
          const data = res.data.data;

          console.log(data);
          this.title = data.title;
          this.desc = data.desc;
          this.list = data.data;
        })
        .catch(error => {
          console.log("error: " + error);
        });
    },
    loadTop() {
      // 加载更多数据
      this.$refs.loadmore.onTopLoaded();
    }
  }
};
</script>

<style scoped lang="scss" type="text/css">
.detail_title {
  font-size: $font-size-head;
  color: $heading-color;
  font-weight: 600;
}

.desc_box {
  margin-top: 1.066667rem /* 40/37.5 */;
  padding: .533333rem /* 20/37.5 */ .266667rem /* 10/37.5 */;
  background: $color-white;
  .desc_content {
    margin-top: .533333rem /* 20/37.5 */;
  }
}

.detail_list {
  margin-top: .533333rem /* 20/37.5 */;
  padding: .533333rem /* 20/37.5 */ .266667rem /* 10/37.5 */;
  background: $color-white;
  .detail_item {
    font-size: $font-size-base;
    line-height: .693333rem /* 26/37.5 */;
    margin: .266667rem /* 10/37.5 */ 0;
  }
}
</style>
