import Vue from 'vue'
import Router from 'vue-router'

import login from '../views/login.vue'
import index from '../views/layout/children/index.vue'
import layout from '../views/layout/layout.vue'

import edit from '@/views/edit/edit.vue'
import rowEdit from '@/views/edit/children/rowEdit.vue'
import cellEdit from '@/views/edit/children/cellEdit.vue'
import btnEdit from '@/views/edit/children/btnEdit.vue'


import rotationChart from '../views/rotationChart/rotationChart.vue'
import pagination from '../views/pagination/pagination.vue'
import linkage from '../views/linkage/linkage.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
//	  {
//    path: '/',
//    name: 'layout',
//    component: layout
//	
//  },
			
    {
      path: '/layout',
      name: 'layout',
      component: layout,
      redirect:'/layout/index',
      children:[
      	{
		      path: 'index',
		      name: 'index',
		      component: index
		    },
		    {
		      path: 'edit',
		      name: 'edit',
		      component: edit,
		      redirect:'/layout/edit/rowEdit',
		      children:[
		      	{
				      path: 'rowEdit',
				      name: 'rowEdit',
				      component: rowEdit
				    },
				    {
				      path: 'cellEdit',
				      name: 'cellEdit',
				      component: cellEdit
				    },
				    {
				      path: 'btnEdit',
				      name: 'btnEdit',
				      component: btnEdit
				    },
				    
		      ]
				},
				{
		      path: 'rotationChart',
		      name: 'rotationChart',
		      component: rotationChart
		    },
		    {
		      path: 'pagination',
		      name: 'pagination',
		      component: pagination
		    },
		    {
		      path: 'linkage',
		      name: 'linkage',
		      component: linkage
		    },
		    
      ]
    },
    {
        path: '/',
        redirect: '/layout/index'
      },
    
//  {
//    path: '/Home',
//    name: 'Home',
//    component: Home,
//    children:[
//    	{
//		      path: 'rowEdit',
//		      name: 'rowEdit',
//		      component: rowEdit
//		    },
//		    {
//		      path: 'index',
//		      name: 'index',
//		      component: index
//		    },
//		    {
//		      path: 'rotationChart',
//		      name: 'rotationChart',
//		      component: rotationChart
//		    },
//		    {
//		      path: 'pagination',
//		      name: 'pagination',
//		      component: pagination
//		    },
//		    
//    
//    ]
//  },
    {
      path: '/login',
      name: 'login',
      component: login
    },
//  {
//    path: '/about',
//    name: 'about',
//    // route level code-splitting
//    // this generates a separate chunk (about.[hash].js) for this route
//    // which is lazy-loaded when the route is visited.
//    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//  }
  ]
})
