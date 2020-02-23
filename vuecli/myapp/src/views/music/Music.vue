<template>
  <div>
    <div class="music-player">
      <aplayer :music="music" />
    </div>
    <div class="music-list">
      <ul>
        <li class="title">
          <div class="music-num">序号</div>
          <div class="music-title">歌曲名称</div>
          <div class="music-star">歌手</div>
        </li>
        <li @click="checkMusic(item.id)" v-for="(item,index) in musicList" v-bind:key="item.id">
          <div class="music-num">{{index+1}}</div>
          <div class="music-title">{{item.name}}</div>
          <div class="music-star">{{item.ar[0].name}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import aplayer from "vue-aplayer";
import axios from "axios";
export default {
  components: {
    aplayer
  },
  data() {
    return {
      music: {
        title: "东西（Cover：林俊呈）",
        artist: "纳豆",
        src: "https://cdn.moefe.org/music/mp3/thing.mp3",
        pic:
          "https://p1.music.126.net/5zs7IvmLv7KahY3BFzUmrg==/109951163635241613.jpg?param=300y300"
      },
      musicList: []
    };
  },
  methods: {
    //获取单首歌曲信息
    checkMusic(id){
      let thisUrl = 'https://bird.ioliu.cn/netease/song?id='+id;
      let musicObj = {};
      axios.get(thisUrl).then((res)=>{
        musicObj = {
          title: res.data.data.name,
          artist: res.data.data.ar[0].name,
          src: res.data.data.mp3.url,
          pic: res.data.data.al.picUrl
        }
        this.music = musicObj
      })
    },
    //获取歌曲列表
    getData() {
      let thisId = "3237181190";
      let thisUrl = "https://bird.ioliu.cn/netease/playlist?id=" + thisId;
      axios.get(thisUrl).then(res => {
        console.log(res);
        this.musicList = res.data.playlist.tracks;
      });
    }
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
    this.getData();
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
};
</script>
<style scoped>
.music-list {
  margin-top: 30px;
}
.music-list li:nth-child(odd) {
  background-color: rgba(0, 150, 136, 0.5);
}
.music-list li {
  margin: 10px;
  display: flex;
  font-size: 0.3rem;
}
.music-list .title {
  /* font-size: 0.5rem; */
  font-weight: bolder;
}
.music-list li .music-num {
  flex: 1;
}
.music-list li .music-title {
  flex: 3;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.music-list li .music-star {
  flex: 3;
}
</style>