import Vue from 'vue'
import Router from 'vue-router'
import movieRouter from './movie'
import mineRouter from './mine'
import cinemaRouter from './cinema'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  base: '/miaoMovie',
  routes: [

    // 三大主页面
    movieRouter,
    mineRouter,
    cinemaRouter,
    // 给项目加一个重定向，在输入错误的网址时重定向到电影页。
    {
      path: '/*',
      redirect: '/movie'
    }

  ]
})
