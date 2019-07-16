<template>
  <div class="interview_ist">
    <ul class="nav_list">
      <li
        class="nav_item"
        v-for="(item, index) in navList"
        :key="index"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'InterviewList',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      navList: []
    }
  },
  created () {
    this.$axios({
      method: 'get',
      url: '/interview/nav'
    }).then(res => {
      const data = res.data.data.data
      console.log(data)
      this.navList = data
      this.$notify({
        title: '成功',
        message: '这是一条成功的提示消息',
        type: 'success'
      })
    }).catch(error => {
      console.log('error: ' + error)
    })
  }
}
</script>

<style  lang="scss" scoped="" type="text/css">
.interview_ist {
  color: $color-blue;
  margin: .533333rem; /* 20/37.5 */
}
</style>
