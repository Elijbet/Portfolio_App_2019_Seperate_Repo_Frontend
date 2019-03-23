import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import Articles from '@/components/Articles'
import Add_Articles from '@/components/Articles/Add_Articles' 
import Design_Portfolio_Items from '@/components/Design_Portfolio_Items'
import Code_Portfolio_Items from '@/components/Code_Portfolio_Items'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {                         
	    path: '/articles',
	    name: 'Articles',
	    component: Articles
	  },
	  {                         
	    path: '/design_portfolio_items',
	    name: 'Design_Portfolio_Items',
	    component: Design_Portfolio_Items
	  },
	  {                         
	    path: '/code_portfolio_items',
	    name: 'Code_Portfolio_Items',
	    component: Code_Portfolio_Items
	  },
	  {                         
	    path: '/about',
	    name: 'About',
	    component: About
	  },
	  {                         
	    path: '/add_articles',
	    name: 'Add_Articles',
	    component: Add_Articles
	  }
  ]
})
