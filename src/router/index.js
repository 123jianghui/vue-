import Vue from 'vue'
import Router from 'vue-router'
import Url from '@/components/url'
   import List from '@/components/list'
   import shopping from '@/components/shopping'
   import History from '@/components/history'
   import kefu from '@/components/kefu'
   import shensu from '@/components/shensu'
   import User from '@/components/user'
   import reg from '@/components/reg'
   import Detail from '@/components/detail'
   import shoppingCar from '@/components/shoppingCar'
   import Head from '@/components/head'
   import lingshiList from '@/components/lingshiList'
   import fruitList from '@/components/fruitList'
   import riceList from '@/components/riceList'
   import milkList from '@/components/milkList'

Vue.use(Router)


export default new Router({
routes: [
    {
      path: '/list',
      name: 'list',
      component:List
    },
    {
      path: '/lingshiList',
      name: 'lingshiList',
      component:lingshiList
    },
    {
      path: '/fruitList',
      name: 'fruitList',
      component:fruitList
    },
    {
      path: '/riceList',
      name: 'riceList',
      component:riceList
    },
    {
      path: '/milkList',
      name: 'milkList',
      component:milkList
    },
    {
    	path:'/shopping',
    	name:'shopping',
    	component:shopping
    },
    {
    	path:'/history',
    	name:'history',
    	component:History
    },
    {
    	path:'/kefu',
    	name:'kefu',
    	component:kefu
    },
    {
    	path:'/user',
    	name:'User',
    	component:User
    },
    {
    	path:'/shensu',
    	name:'shensu',
    	component:shensu
    },
    {
    	path:"/",
    	name:"head",
    	component:Head
    },
    {
    	path:"/detail",
    	name:"detail",
    	component:Detail
    },
    {
    	path:"/shoppingCar",
    	name:"shoppingCar",
    	component:shoppingCar
    },
    {
    	path:"/reg",
    	name:"reg",
    	component:reg
    }
]
})
