//引入并初始化router
const Router = require('koa-router');
let router = new Router();

router.post("/login", async (ctx, next) => {

  console.log(ctx.request.body)
      ctx.body = {
          code: 20000,
          data: {
              token: 'admin-token'
            }
      }
}),

router.get("/info", async (ctx, next) => {
  console.log(ctx.query)
      ctx.body = {
          code: 20000,
          data: {
              roles: ['admin'],
              introduction: 'I am a super administrator',
              avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
              name: 'fellow37'
            }
      }
})

module.exports = router;