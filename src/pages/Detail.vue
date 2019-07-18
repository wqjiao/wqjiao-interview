<template>
  <div class="interview_detail">
    <!-- 固定头部: Boolean 类型需要使用 v-bind -->
    <Header :fixed="true" :isHome="false" />

    <!-- 标题 -->
    <div class="desc_box fixed_margin">
      <div class="detail_title">
        题目标题
        <span class="level">难度指数：{{ detail.levelDesc }}</span>
      </div>
      <div class="desc_content">{{ detail.title }}</div>
    </div>

    <!-- 描述详情 -->
    <div class="desc_box">
      <div class="detail_title">描述信息</div>
      <div class="desc_content">{{ detail.desc }}</div>
    </div>

    <!-- 所有答案列表 -->
    <mt-loadmore class="desc_box" :top-method="loadTop" ref="loadmore">
      <div class="detail_title">
        答案列表
        <router-link :to="`/add/answer/${detail.type}/${detail.id}`">
        <!-- <router-link :to="'/add/answer/' + detail.type + '/' + detail.id"> -->
          <img class="level" src="@/assets/add.png" alt="新增答案">
        </router-link>
      </div>
      <ul class="detail_list">
        <li class="detail_item" v-for="(item, index) in detail.data" :key="index">
          <div v-html="item.content"></div>
          <div class="desc_give">
            <img src="@/assets/give_gray.png" style="margin-right: .266667rem" alt="点赞">
            <img src="@/assets/comments_gray.png" alt="评论">
          </div>
        </li>
      </ul>
    </mt-loadmore>
  </div>
</template>

<script>
import Header from '@/components/Header';

export default {
  name: "Detail",
  components: {
    Header
  },
  data: () => ({
    detail: {} // 详细信息
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

          this.detail = data;
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
.desc_box {
  margin-top: .4rem /* 15/37.5 */;
  padding: .533333rem /* 20/37.5 */ .266667rem /* 10/37.5 */;
  background: $color-white;
  .desc_content {
    margin-top: .533333rem /* 20/37.5 */;
  }
  &.fixed_margin {
    margin-top: 1.6rem /* 60/37.5 */;
  }
  .desc_give {
    text-align: right;
  }
}

.detail_title {
  font-size: $font-size-head;
  color: $heading-color;
  font-weight: 600;
  .level {
    float: right;
    color: $text-color;
    font-size: .32rem /* 12/37.5 */;
    font-weight: normal;
  }
}

.detail_list {
  .detail_item {
    font-size: $font-size-base;
    line-height: .693333rem /* 26/37.5 */;
    margin: .266667rem /* 10/37.5 */ 0;
  }
}
</style>
