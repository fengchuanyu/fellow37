<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/mypage">MyPage</router-link>|
      <router-link to="/parentpage">parentpage</router-link>|
      <router-link to="/home">返回首页</router-link>|
      <router-link to="/gochild1/小刚">重定向child2</router-link>｜
      <router-link to="/gomypage">我的页面</router-link>｜
      <span @click='routerHandle'>编程式导航</span>
    </div>
    <div class="box">
      <transition name="fade">
        <router-view />
      </transition>
    </div>
    
  </div>
</template>
<script>
export default {
  methods:{
    routerHandle(){
      // this.$router.push('mypage')
      this.$router.go(-1)
    }
  }
}
</script>
<style scoped>
.box{
  position: relative;
}
.fade-enter{
  transform: translateX(100%)
}
.fade-enter-active{
  transition: all 1s ease;
  position: absolute;
  top:0;
  width: 100%;
}
.fade-enter-to{
  transform: translateX(0)
}

.fade-leave{
  transform: translateX(0)
}
.fade-leave-active{
  transition: all 1s ease;
  position: absolute;
  top:0;
  width: 100%;
}
.fade-leave-to{
  transform: translateX(-100%)
}




.active {
  color: blue;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
