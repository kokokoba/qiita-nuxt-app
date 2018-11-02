export default({app}) => {
  // ルーターナビゲーションの前にフック
  app.router.beforeEach((to, from, next) => {
    console.log(`[ROUTER] move to '${to.fullPath}'`)
    next()
  })
}
