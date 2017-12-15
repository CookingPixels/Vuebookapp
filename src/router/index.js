import Vue from 'vue'
import Router from 'vue-router'
import AddBookForm from '@/components/AddBookForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AddBookForm',
      component: AddBookForm
    }
  ]
})
