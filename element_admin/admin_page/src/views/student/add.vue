<!--  -->
<template>
  <div class="app-container">
    <el-form label-width="80px">
      <el-form-item label="学生姓名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="学生年龄">
        <el-input v-model="form.age"></el-input>
      </el-form-item>
      <el-form-item label="学校">
        <el-select v-model="form.school" placeholder="请选择学校">
          <el-option label="黑大" value="hd"></el-option>
          <el-option label="理工" value="lg"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { addStudent } from '@/api/student'
export default {
  data() {
    return {
      form: {
        name: "",
        age:"",
        school:""
      }
    };
  },
  methods: {
    onSubmit(){
      console.log(this.form)
      addStudent({...this.form}).then((res)=>{
        console.log(res);
      })
    }
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