import Vue from 'vue'
import App from './App.vue'
//import store from './store'
import './registerServiceWorker'

//引入axios
import Axios from 'axios'
//挂载到原型上
Vue.prototype.$ajax	=Axios
//默认配置
//Axios.defaults.baseURL="http://localhost:4000/"

//引入mui

//import './assets/mui/css/mui.css'


//引入vue-router
import VueRouter from 'vue-router'
//注册vuerouter
Vue.use(VueRouter)
//引入msite search order person路由页面
import Msite from './pages/Msite/msite.vue'
import Order from './pages/Order/order.vue'
import Search from './pages/Search/search.vue'
import Person from './pages/Person/person.vue'
import Shop from './pages/Shop/shop.vue'
import Login from './pages/Login/login.vue'
import ShopGoods from './pages/Shop/ShopGoods/ShopGoods.vue'
import ShopInfo from './pages/Shop/ShopInfo/ShopInfo.vue'
import ShopRatings from './pages/Shop/ShopRatings/ShopRatings.vue'

//创建对象配置路由规则
var router = new VueRouter({
	routes:[
		{path:'/',redirect:'/msite'},
		{path:'/msite',component:Msite,meta:{show:true}},
		{path:'/order',component:Order,meta:{show:true}},
		{path:'/search',component:Search,meta:{show:true}},
		{path:'/person',component:Person,meta:{show:true}},
		{path:'/shop',component:Shop,
			children:[
				{path:'/shop/shopgoods',component:ShopGoods},
				{path:'/shop/shopinfo',component:ShopInfo},
				{path:'/shop/shopratings',component:ShopRatings},
				{path:'/',redirect:'/shop/shopgoods'}
		
			]
		},
		{path:'/login',component:Login}
	],
	linkActiveClass:'mui-active'
})


//使用vuex存储数据
import Vuex from 'vuex'
Vue.use(Vuex)
var store=new Vuex.Store({
	state:{//{id:**,count:**,price:**}
		foods:[]
	},
	mutations:{
		addToFoods(state,add){
			//先假设foods数组没有对应数据
			var flag=false
			//假如foods数组中没有对应数据，把数据加载到foods中，如果有数据，那就更新count
			state.foods.some(item=>{
				if(item.id==add.id){
					item.count++
					flag=true
					return true
				}
			})
			if(!flag){
				state.foods.push(add)
			}
		},
		spliceFoods(state,id){
			state.foods.some(item=>{
				if(item.id==id){
					item.count--
					return true
				}
			})
		}
	},
	getters:{
		totleMoney(state){
			var c=0
			state.foods.forEach(item=>{
				c+=item.count*item.price
			})
			return c
		}
	}
})

Vue.config.productionTip = false

new Vue({
	el:"#app",
  store,
  render: h => h(App),
  router
})
