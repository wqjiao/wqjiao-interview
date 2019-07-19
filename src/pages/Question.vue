<template>
  <!-- 新增题目 -->
  <div class="question">
    <!-- 固定头部: Boolean 类型需要使用 v-bind -->
    <Header :fixed="true" :isHome="false" :isRight="false" />

    <DetailBox title="题目标题" :isFixed="true">
      <mt-field placeholder="请输入标题" v-model="title"></mt-field>
    </DetailBox>

    <DetailBox title="题目类型">
      <mt-radio
        :value.sync="type"
        :options="['html', 'css', 'javascript']"
        align="right"
        v-model="type"
      ></mt-radio>
    </DetailBox>

    <DetailBox title="难度指数">
      <mt-radio
        :value.sync="level"
        :options="options"
        align="right"
        v-model="level"
      ></mt-radio>
    </DetailBox>

    <DetailBox title="描述信息">
      <mt-field placeholder="请输入描述信息" v-model="desc"></mt-field>
    </DetailBox>

    <DetailBox title="答案">
      <mt-field placeholder="请输入答案" type="textarea" rows="4" v-model="content"></mt-field>
    </DetailBox>

    <!-- 按钮 -->
    <FixedBotton :handleSubmit="handleSubmit" />
  </div>
</template>

<script>
import Header from '@/components/Header';
import DetailBox from '@/components/DetailBox';
import FixedBotton from '@/components/FixedBotton';

export default {
  name: 'Question',
  components: {
    Header,
    DetailBox,
    FixedBotton
  },
  data: () => ({
    title: '',
    type: '',
    desc: '',
    level: '',
    content: '',
    options: [{
      value: 0,
      label: '简单'
    }, {
      value: 1,
      label: '中等'
    }, {
      value: 2,
      label: '困难'
    }]
  }),
  methods: {
    // 验证必填项
    verifyForm() {
      if (!this.title.trim()) {
        Toast('请填写标题');
        return false;
      }
      if (!this.type.trim()) {
        Toast('请选择难度指数');
        return false;
      }
      if (!this.leval.trim()) {
        Toast('请选择难度指数');
        return false;
      }
      if (!this.desc.trim()) {
        Toast('请填写描述信息');
        return false;
      }
    },
    // 提交信息
    handleSubmit() {
      this.$axios({
        method: "post",
        url: "/interview/add",
        data: {
          type: this.type,
          title: this.title,
          level: this.level,
          desc: this.desc,
          content: this.content
        }
      })
        .then(res => {
          console.log('success', res)
          this.$router.go(-1);
        })
        .catch(error => {
          console.log("error: " + error);
        });
    }
  }
};
</script>

<style scoped lang="scss" type="text/css">
</style>
