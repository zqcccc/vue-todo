// import Todo from '../views/todo/todo.vue'
// import Login from '../views/login/login.vue'

export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    path: '/app',
    // props: true,
    component: () => import('../views/todo/todo.vue'),
    name: 'app',
    meta: {
      title: 'this is main route',
      description: 'fwejlfjwlewj'
    },
    beforeEnter (to, from, next) {
      console.log('app route before enter')
      next()
    }
    // children: [
    //   {
    //     path: 'test',
    //     name: 'test',
    //     component: Login
    //   }
    // ]
  },
  {
    path: '/login',
    component: () => import('../views/login/login.vue')
  }
  // {
  //   path: '/login/exact',
  //   component: Login
  // }
]
