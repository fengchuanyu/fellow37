<!--  -->
<template>
  <div>
    自定义组件{{ourName}}
    <div>
      <button @click="changeHandle">change</button>
      <button @click="changeHandle2">change2</button>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    changeHandle(){
      this.$emit("update:ourName","hello")
    },
    changeHandle2(){
      this.$emit("changename","小明")
    }
  },
  props:['ourName'],
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
};
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>