<template>
  <div>
    <h1>我的测试页面！</h1>
    <p class="active"></p>
    <TestPage :ourName.sync="str" @changename="changeParnetName"></TestPage>
  </div>
</template>
<script>
import TestPage from '../components/Test'
export default {
  components:{
    TestPage
  },
  beforeRouteEnter (to, from, next) {
    console.log(to,from)
    next()
  },
  beforeRouteLeave (to, from, next) {
    console.log(to,from)
    next()
  },
  data() {
    return {
      str:"fello37"
    }
  },
  methods: {
    changeParnetName(newName){
      console.log(newName);
      this.str = newName
    }
  },
}
</script>
<style scoped>
.active{
  color:red
}
</style>