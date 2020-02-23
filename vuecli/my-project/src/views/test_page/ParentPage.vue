<!--  -->
<template>
  <div>
    <h1>子路由测试页面</h1>
    <div>
      <router-link to="/parentpage/child1/小明">子页面一</router-link>|
      <!-- <router-link to="/parentpage/child2">子页面二</router-link> -->
      <router-link :to="{name:'Child2',params:{age:30}}">子页面二</router-link>
    </div>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  beforeRouteUpdate (to, from, next) {
    console.log(to, from)
    next()
  },
  data() {
    return {};
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
};
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>