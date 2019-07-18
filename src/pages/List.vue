<template>
  <div class="interview_list">
    <div class="header_fixed">
      <!-- Header 头部信息 -->
      <Header />

      <!-- Navigate 导航 -->
      <Navigate :typeed="typeed" :changeTab="changeTab" />
    </div>

    <!-- 小标题 指数 -->
    <Level :leveled="leveled" :changeLevel="changeLevel" :length="contentList.length" />

    <!-- 内容 -->
    <div class="content" id="listContent" v-if="contentList.length > 0">
      <ul class="content_list">
        <li
          class="content_item"
          v-for="(item, index) in contentList"
          :key="index"
          v-lazy.listContent="item"
          @click="goDetail(item)"
        >
          <div class="rank_title">
            <span class="content_number">{{index + 1}}</span>
            <span>{{item.title}}</span>
          </div>
          <div class="rank_detail">{{item.desc}}</div>
        </li>
      </ul>
    </div>
    <!-- 暂无数据 -->
    <Without v-else />
  </div>
</template>

<script>
import Header from '@/components/Header';
import Navigate from "@/components/Navigate";
import Level from "@/components/Level";
import Without from "@/components/Without";

export default {
  name: "List",
  components: {
    Header,
    Navigate,
    Level,
    Without
  },
  data: () => ({
    typeed: 'html', // 类型
    leveled: '', // 选定指数, 默认全部
    contentList: [] // 内容列表
  }),
  created() {
    this.getData(this.typeed, ''); // 获取对应列表
  },
  methods: {
    // 切换类型标签
    changeTab(type) {
      this.typeed = type;
      this.getData(type, '');
    },
    // 切换困难指数
    changeLevel(index) {
      this.leveled = index;
      this.getData(this.typeed, index);
    },
    // 获取列表数据
    getData(type, level) {
      this.$axios({
        method: "get",
        url: "/interview/list",
        params: {
          type,
          level: level === '' ? undefined : level
        }
      })
        .then(res => {
          const data = res.data.data;

          console.log(data);
          this.contentList = data;
        })
        .catch(error => {
          console.log("error: " + error);
        });
    },
    // 跳转至详情
    goDetail(item) {
      this.$router.push({ path: `/detail/${item.type}/${item.id}` })
    }
  }
};
</script>

<style scoped lang="scss" type="text/css">
.interview_list {
  height: 100%;
}
.header_fixed {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
  transition: all .2s;
  transform: translateZ(0);
  background-color: rgb(255, 255, 255);
}
// 列表内容
.content {
  background: $color-white;
  height: 100%;

  .content_item {
    padding: .533333rem /* 20/37.5 */ .266667rem /* 10/37.5 */;
    border-bottom: .026667rem /* 1/37.5 */ solid $border-color-base;

    .rank_title {
      font-size: $font-size-base;
      color: $heading-color;
      font-weight: 600;
      line-height: .586667rem /* 22/37.5 */;
      margin-bottom: .266667rem /* 10/37.5 */;
    }
    .content_number {
      display: inline-block;
      width: .533333rem /* 20/37.5 */;
      height: .533333rem /* 20/37.5 */;
      margin-top: .029467rem /* 1.105/37.5 */;
      margin-right: .266667rem /* 10/37.5 */;
      color: $text-color;
      font-size: .32rem /* 12/37.5 */;
      line-height: .533333rem /* 20/37.5 */;
      text-align: center;
      background-color: #f5f5f5;
      border-radius: .533333rem /* 20/37.5 */;
    }
    .rank_detail {
      font-size: .32rem /* 12/37.5 */;
      line-height: .586667rem /* 22/37.5 */;
      overflow: hidden;
      text-overflow: ellipsis;
      text-overflow: ellipsis-lastline;
      display: -webkit-box;
      -webkit-line-clamp: 3; /*需要显示的行数*/
      -webkit-box-orient: vertical;
    }
    &:hover,
    &:focus {
      .rank_title {
        color: $primary-color;
      }
      .content_number {
        background: $primary-color;
        color: $color-white;
      }
    }
  }
}
</style>
