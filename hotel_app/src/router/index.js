import { createRouter, createWebHistory } from 'vue-router'

// const Login = () => import('../views/Login.vue')
const Index = () => import('../views/Index.vue')
const Home = () => import('../views/Index/Home.vue')
const Information = () => import('../views/Index/Information.vue')
const Introduce = () => import('../views/Index/Introduce.vue')
const OrderList = () => import('../views/Index/OrderList.vue')
const Service = () => import('../views/Index/Service.vue')


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      children: [
        {
          path: 'home',
          name: 'home',
          component: Home,
          meta:{
            breadcrumb:['首页']
          }
        },
        {
          path: 'information',
          name: 'Information',
          component: Information,
          meta:{
            breadcrumb:['个人信息']
          }
        },
        {
          path: 'service',
          name: 'Service',
          component: Service,
          meta:{
            breadcrumb:['客房服务']
          }
        },
        {
          path: 'introduce',
          name: 'Introduce',
          component: Introduce,
          meta:{
            breadcrumb:['酒店介绍']
          }
        },
        {
          path: 'orderList',
          name: 'orderList',
          component: OrderList,
          meta:{
            breadcrumb:['我的订单']
          }
        }
      ]
    },
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: Login
    // }
  ]
})

export default router
