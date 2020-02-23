<template>
  <div id="app">
    <div id="nav">
      <Navagation />
    </div>
    <router-view/>
  </div>
</template>

<script>
import Navagation from '@/components/Navagation.vue'
export default {
  components:{
    Navagation
  }
}
</script>

<style>
  *{
    margin: 0;
    padding:0;
  }
  li{
    list-style: none;
  }
  body{
    padding:1rem 0;
  }
  .clearfix::after{
    content:"";
    display: block;
    clear: both;
  }
</style>
