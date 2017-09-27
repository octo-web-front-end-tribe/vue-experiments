import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello/Hello'
import Counter from '@/components/Counter/Counter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      props: { name: 'RG' }
    },
    {
      path: '/counter',
      name: 'Counter',
      component: Counter
    }
  ]
})
