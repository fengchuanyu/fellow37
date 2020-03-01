//引入并初始化router
const Router = require('koa-router');
let router = new Router();
const cloud = require('tcb-admin-node');
const db = cloud.database();
const studentColl = db.collection("fellow_student")

router.get("/list",async (ctx,next)=>{
  console.log(ctx.query);
  let res = null;
  try {
    res = await studentColl.get()
  } catch (error) {
    console.log(error);
  }
  ctx.body = {
    code:20000,
    data:res
  }
})

router.post("/add",async (ctx,next)=>{
  console.log(ctx.request.body)
  let res = null;
  
  try {
    res = await studentColl.add({
        data:{
          ...ctx.request.body
        }
      })
    } catch(e) {
      console.error(e)
    }

  ctx.body={
      code:20000,
      data:res
  }
})

module.exports = router;
