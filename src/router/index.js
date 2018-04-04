import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/list'
import shopping from '@/components/shopping'
import History from '@/components/history'
import kefu from '@/components/kefu'
import shensu from '@/components/shensu'
import User from '@/components/user'
import reg from '@/components/reg'
import Url from '@/components/url'
import Detail from '@/components/detail'
import shoppingCar from '@/components/shoppingCar'
import Head from '@/components/head'
import twoList from '@/components/twoList'
import threeList from '@/components/threeList'


Vue.use(Router)


export default new Router({
routes: [
    {
      path: '/list',
      name: 'list',
      component: List,
      children:[
      	{path:"/",component:twoList},
      	{path:"threeList",component:threeList}
      ]
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
