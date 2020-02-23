<template>
  <div v-loading.fullscreen="loading" element-loading-text="加载中...">
    <div class="slider-bar">
      <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in sliderList" :key="item.id">
          <img class="slider-img" :src="'https://images.weserv.nl/?url='+item.cover.url" alt />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="tab-bar">
      <el-tabs v-model="activeName" :stretch='true' @tab-click="handleClick">
        <el-tab-pane label="非虚构类" name="nonfiction"></el-tab-pane>
        <el-tab-pane label="虚构类" name="fiction"></el-tab-pane>
      </el-tabs>
    </div>
    <div class="list-bar">
      <ul>
        <li>
          <el-row :gutter="24" v-for="item in bookList" :key="item.id">
            <el-col :span="8">
              <div class="grid-content bg-purple">
                <img class="slider-img" :src="'https://images.weserv.nl/?url='+item.cover.url" alt />
              </div>
            </el-col>
            <el-col :span="16">
              <div class="grid-content bg-purple">
                <div class="book-title">{{item.title}}</div>
                <div class="book-info">{{item.info}}</div>
                <div class="book-rank">
                  <!-- {{item.rating.value}} -->
                  <el-rate
                    :value="getVal(item.rating.value)"
                    disabled
                    show-score
                    text-color="#ff9900"
                  ></el-rate>
                </div>
              </div>
            </el-col>
          </el-row>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      sliderList: [],
      bookList: [],
      loading: true,
      activeName: 'nonfiction'
    };
  },
  methods: {
    getVal(val) {
      // 例：val = 6.5;
      let num = val / 2;
      // val = 3.25
      num *= 10;
      // val = 32.5
      num = Math.trunc(num);
      //val = 32
      num = num / 10;
      //val = 3.2

      //也可使用 val.toFixed(1) 返回保留一位小数的数字
      return num;
    },
    getData(type) {
      let birdUrl = "https://bird.ioliu.cn/v2?url=";
      let requestUrl =
        `https://m.douban.com/rexxar/api/v2/subject_collection/book_${type}/items?start=0&count=10`;
      axios.get(birdUrl + requestUrl).then(res => {
        this.sliderList = res.data.subject_collection_items.slice(0, 5);
        this.bookList = res.data.subject_collection_items;
        this.loading = false;
      });
    },
    handleClick() {
      this.loading = true;
      this.getData(this.activeName);
    }
  },
  created() {
    this.getData('nonfiction');
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
};
</script>
<style scoped>
.tab-bar{
  margin:10px;
}
.slider-img {
  width: 100%;
}
.book-title {
  font-size: 0.5rem;
}
.book-info {
  font-size: 0.3rem;
}
.list-bar {
  margin: 10px;
}
</style>