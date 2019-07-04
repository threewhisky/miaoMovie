export default {
  path: '/movie',
  component: () => import('@/views/Movie'),
  children: [
    {
      path: 'city',
      component: () => import('@/components/City')
    },
    {
      path: 'nowPlaying',
      component: () => import('@/components/NowPlaying')
    },
    {
      path: 'comingSoon',
      component: () => import('@/components/ComingSoon')
    },
    {
      path: 'detail/:movieId',
      //让页面整个载入detail页面，如果不写components，则会保留 喵电影 的标题
      components: {
        detail: () => import('@/views/Movie/detail')
      },
      props: {
        detail: true
      }
    },
    {
      path: 'search',
      component: () => import('@/components/Search')
    },
    {
      // 给movie页面添加一个重定向到nowPlaying路由。
      path: '',
      redirect: '/movie/nowPlaying'
    }

  ]
}