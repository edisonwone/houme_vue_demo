<template>
	<div>
		<div class="menu-wrapper">
			<!-- 菜单对应的是食物分类列表-->
			<ul>
				<!--当前分类class添加current-->
				<li class="menu-item" v-for="(food,index) in food" :key="index">
					<div class="goodsInfo">
						<img :src="food.img" />
						<div class="rightInfo">
							<h3>{{food.name}}</h3>
							<p>{{food.title}}</p>
							<span>月售{{food.sale}}份</span>&nbsp;&nbsp;<span>好评100%</span>
						</div>
						<h4>￥{{food.price}}</h4>
					</div>
					<cartcontrl :food="food"></cartcontrl>
				</li>
			</ul>
		</div>
		<shopCar></shopCar>
	</div>
</template>

<script>
	import shopCar from '../../../components/shopcar.vue'
	import cartcontrl from '../../../components/cartContrl.vue'
	export default {
		data(){
			return {food:[
				{id:1,name:'南瓜粥',title:'甜粥',sale:91,price:9,count:0,img:require("../../../../public/img/6 (1).jpg")},
				{id:2,name:'香菇肉粥',title:'咸粥',sale:91,price:12,count:0,img:require("../../../../public/img/6 (2).jpg")},
				{id:3,name:'芹菜炒肉',title:'小炒',sale:91,price:10,count:0,img:require("../../../../public/img/4.jpg")},
				{id:4,name:'炒面',title:'主食',sale:91,price:12,count:0,img:require("../../../../public/img/3.jpg")}
				]
			}
		},
		components:{
			shopCar,
			cartcontrl
		}
	}
</script>

<style lang="less">
	.menu-wrapper {
		background-color: #ddd;
		margin-top: 20px;
		margin-bottom: 40px;
		ul {
			list-style: none;
			width: 100%;
			padding: 0;
			li {
				position: relative;
				height: 120px;
				padding-top: 10px;
				padding-left: 20px;
				border-bottom: 1px solid #CCCCCC;
				background-color: #FFFFFF;
				.goodsInfo {
					img {
						width: 80px;
						height: 80px;
						float: left;
						margin-right: 10px;
					}
					.rightInfo {
						h3 {
							font-size: 16px;
						}
						p {
							margin: 0;
						}
						span {
							font-size: 12px;
							color: #8f8f94;
						}
					}
					h4 {
						color: red;
						font-size: 16px;
					}
				}
			}
		}
	}
</style>