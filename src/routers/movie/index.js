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