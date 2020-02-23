<template>
  <div>
    <ul class="tv-list">
      <li @click="goDetail(item.id)" class="clearfix" v-for="item in dataList" :key="item.id">
        <div class="left">
          <img v-bind:src="item.cover.url" alt />
        </div>
        <div class="right">
          <p class="title">{{item.title}}</p>
          <p class="info">{{item.info}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      dataList: [],
      start: 0,
      isContinue: true,
      total:1
    };
  },
  methods: {
    //添加滚动监听
    listenScroll() {
      let htmlDom = document.documentElement;
      window.onscroll = () => {
        let hHeight = htmlDom.clientHeight; //视口高度
        let scrollTop = htmlDom.scrollTop; //获取去滚动多少距离
        let scrollHeight = htmlDom.scrollHeight; //可滚动区域的高度
        // console.log(hHeight, scrollTop, scrollHeight);
        if (hHeight + scrollTop + 10 >= scrollHeight) {
          this.getData();
        }
      };
    },
    //跳转至详情页
    goDetail(id){
      this.$router.push("/tvdetail/"+id)
    },
    //获取数据列表
    getData() {
      // var _this = this;
      //跨域
      //浏览器通源策略
      console.log(this.total,this.start)
      if (this.isContinue && this.total>this.start) {
        let requestUrl = `https://m.douban.com/rexxar/api/v2/subject_collection/tv_domestic/items?start=${this.start}&count=10`;
        let birdUrl = "https://bird.ioliu.cn/v2?url=";
        this.isContinue = false;
        axios.get(birdUrl + requestUrl).then(res => {
          // this.dataList = this.dataList.concat(res.data.subject_collection_items)
          this.dataList = [
            ...this.dataList,
            ...res.data.subject_collection_items
          ];
          this.total = res.data.total;
          this.start += 10;
          this.isContinue = true;
        });
      }
    }
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
    this.getData();
    this.listenScroll();
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
};
</script>
<style scoped>
.tv-list li {
  padding: 20px 20px 5px 20px;
  border-bottom: 1px solid #999;
  margin: 0 10px;
}
.tv-list li .left {
  float: left;
  width: 40%;
}
.tv-list .left img {
  width: 80%;
}
.tv-list li .right {
  float: left;
  width: 60%;
}
.tv-list .right .title {
  font-size: 25px;
}
.tv-list .right .info {
  font-size: 12px;
}
</style>