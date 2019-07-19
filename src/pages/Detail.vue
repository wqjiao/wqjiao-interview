<template>
  <div class="interview_detail">
    <!-- 固定头部: Boolean 类型需要使用 v-bind -->
    <Header :fixed="true" :isHome="false" />

    <!-- 标题 -->
    <DetailBox title="题目标题" :isFixed="true">
      <template slot="title">难度指数：{{ detail.levelDesc }}</template>
      {{ detail.title }}
    </DetailBox>

    <!-- 描述详情 -->
    <DetailBox title="描述信息">{{ detail.desc }}</DetailBox>

    <!-- 所有答案列表 -->
    <DetailBox title="答案列表">
      <router-link :to="`/add/answer/${detail.type}/${detail.id}`" slot="title">
        <img class="level" src="@/assets/add.png" alt="新增答案">
      </router-link>
      <ul class="detail_list">
        <li class="detail_item" v-for="(item, index) in detail.data" :key="index">
          <!-- <pre>{{item.content}}</pre> -->
          <div v-html="item.content"></div>
          <div class="desc_give">
            <img src="@/assets/give_gray.png" style="margin-right: .266667rem" alt="点赞">
            <img src="@/assets/comments_gray.png" alt="评论">
          </div>
        </li>
      </ul>
    </DetailBox>
  </div>
</template>

<script>
import Header from '@/components/Header';
import DetailBox from '@/components/DetailBox';

export default {
  name: "Detail",
  components: {
    Header,
    DetailBox
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
.interview_detail {
  .desc_give {
    text-align: right;
  }

  .detail_item {
    font-size: $font-size-base;
    line-height: .693333rem /* 26/37.5 */;
    margin: .266667rem /* 10/37.5 */ 0;
  }
}
</style>
