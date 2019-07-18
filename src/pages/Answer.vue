<template>
  <!-- 添加答案 -->
  <div class="answer">
    <!-- 固定头部: Boolean 类型需要使用 v-bind -->
    <Header :fixed="true" :isHome="false" :isRight="false" />

    <!-- 标题 -->
    <DetailBox title="题目标题" :isFixed="true">
      <template slot="title">难度指数：{{ detail.levelDesc }}</template>
      {{ detail.title }}
    </DetailBox>

    <!-- 描述详情 -->
    <DetailBox title="描述信息">{{ detail.desc }}</DetailBox>

    <DetailBox title="答案">
      <textarea
        class="answer_content"
        placeholder="请输入详细的答案,不少于5个字"
        v-model="content"
      ></textarea>
    </DetailBox>

    <!-- 按钮 -->
    <FixedBotton :handleSubmit="handleSubmit" />
  </div>
</template>

<script>
import Header from '@/components/Header';
import DetailBox from '@/components/DetailBox';
import FixedBotton from '@/components/FixedBotton';
import {Toast} from 'mint-ui';

export default {
  name: 'Answer',
  data: () => ({
    detail: {}, // 详细内容
    content: '' // 内容
  }),
  components: {
    Header,
    DetailBox,
    FixedBotton
  },
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
    // 提交信息
    handleSubmit() {
      // 信息必填
      if (!this.content.trim()) {
        Toast('请填写答案');
        return false;
      }

      if (this.content.length < 5) {
        Toast('答案不得少于5个字');
        return false;
      }

      this.$axios({
        method: "post",
        url: "/interview/answer",
        data: {
          ...this.$route.params,
          content: this.content
        }
      })
        .then(res => {
          console.log('success', res)
        })
        .catch(error => {
          console.log("error: " + error);
        });
    }
  }
};
</script>

<style scoped lang="scss" type="text/css">
.answer {
  padding-bottom: 1.093333rem /* 41/37.5 */;
  box-sizing: border-box;

  .answer_content {
    width: 100%;
    height: auto;
    min-height: 4.4rem /* 165/37.5 */;
    line-height: 1.5;
    box-sizing: border-box;
    border-radius: .106667rem /* 4/37.5 */;
    border-color: #e5e5e5;
    vertical-align: bottom;
    -webkit-transition: all .3s, height 0s;
    transition: all .3s,height 0s;
  }
}
</style>
