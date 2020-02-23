<template>
  <div class="about">
    <h1 class="active">This is an about page</h1>
    <!-- <h1>vuex-count:{{$store.state.count}}</h1>
    <h1>getters-newCount:{{$store.getters.newCount}}</h1> -->
    <!-- <button @click="addHandle">add</button> -->
    <!-- <button @click="$store.commit('add')">add</button>
    <button @click="$store.commit('reduce')">reduce</button> -->
    <h1>用户明:{{$store.state.users.username}}</h1>
    <h1>vuex-count:{{count}}</h1>
    <h1>getters-newCount:{{newCount}}</h1>
    <button @click="add">add</button>
    <button @click="reduce">reduce</button>
    <button @click="addAction">addAction</button>
  </div>
</template>
<script>
import {mapActions,mapMutations,mapState,mapGetters} from 'vuex'
export default {
  methods:{
    addHandle(){
      console.log(this.$store.state.count);
      
      this.$store.commit("add");
    },
    ...mapActions(['addAction']),
    ...mapMutations(['add','reduce'])
  },
  computed: {
    ...mapState(['count']),
    ...mapGetters(['newCount'])
  }
}
</script>

