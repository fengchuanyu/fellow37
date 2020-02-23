<template>
  <div>
    <div v-if="detailInfo.cover">
      <h1>{{detailInfo.title}}</h1>
      <img :src="detailInfo.pic.large" alt="" srcset="">
    </div>
    
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      detailInfo:{}
    };
  },
  methods: {
    getDate(id){
      let requestUrl = 'https://m.douban.com/rexxar/api/v2/tv/'+id;
      let birdUrl = "https://bird.ioliu.cn/v2?url=";
      axios.get(birdUrl+requestUrl).then((res)=>{
        console.log(res)
        this.detailInfo = res.data;
      })
    }
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
    this.getDate(this.$route.params.id)
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
};
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>