<template>
	<div class="msite">
		<!--头部-->
  	<bheader title="候么外卖"></bheader>
		<!--轮播-->
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide" >
					<a href="javascript:0;">
						<img src="../../../public/img/1.jpg">
					</a>
				</div>
				<div class="swiper-slide" >
					<a href="javascript:0;">
						<img src="../../../public/img/2.jpg">
					</a>
				</div>
			</div>
			<!-- 如果需要分页器 -->
			<div class="swiper-pagination"></div>
		</div>
		<!--店铺-->
		<div class="close-shop">
			<h5>附近商家</h5>
		</div>
		<div id="shops">
			<ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;" @click="gonext">
						<img class="mui-media-object mui-pull-left" src="../../../public/img/timg.jpg">
						<div class="mui-media-body">
							<p>铜山新区店</p>
							<div class="homezhuansong">候么</div>
							<p class="mui-ellipsis">
								<span>月售100单</span>
								<span>￥5起送/配送费￥2</span>
							</p>
						</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;" @click="gonext">
						<img class="mui-media-object mui-pull-left" src="../../../public/img/timg.jpg">
						<div class="mui-media-body">
							<p>中山北路店</p>
							<div class="homezhuansong">候么</div>
							<p class="mui-ellipsis">
								<span>月售100单</span>
								<span>￥5起送/配送费￥2</span>
							</p>
						</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;" @click="gonext">
						<img class="mui-media-object mui-pull-left" src="../../../public/img/timg.jpg">
						<div class="mui-media-body">
							<p>朝阳店</p>
							<div class="homezhuansong">候么</div>
							<p class="mui-ellipsis">
								<span>月售100单</span>
								<span>￥5起送/配送费￥2</span>
							</p>
						</div>
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import Swiper from 'swiper'
	import 'swiper/dist/css/swiper.min.css'
	import bheader from '../../components/header.vue'
	export default {

		data() {
			return {
				imgBaseUrl: 'http://owoccema2.bkt.clouddn.com/show/MintShop/',
				shops:[]
			}
		},
		components:{
			bheader
		},
		mounted(){
			new Swiper ('.swiper-container', {
    		loop: true, // 循环模式选项
    		autoplay:true,
    // 如果需要分页器
    		pagination: {
      		el: '.swiper-pagination',
    		},
		})
		},
		methods:{
//			getShopList(){
//				this.$ajax.get('/apis/shops?latitude=40.10038&longitude=116.36867').then
//				(res => {
//					this.shops=res.data.data
//				}),
//				res => {
//					console.log("失败")
//				}
//			},
			gonext(){
				this.$router.push('/shop')
			}
		}
	}
	
	
//	getShopList(){
//				this.$ajax.get('/apis/shops?latitude=40.10038&longitude=116.36867')
//				.then(res => {
//					console.log(res.data.data)
//				this.shops=res.data.data
//				}, 
//				res => {
//				alert('商铺列表导入失败')
//				};
//			}
</script>

<style lang="less">
	.msite {
		margin-bottom: 50px;
		.swiper-container {
    		width: 100%;
    		height: 200px;
    		img {
    			width: 100%;
    			height: 200px;
    		}
		} 
		.close-shop {
			margin-top: 12px;
			width: 100%;
			height: 30px;
			background-color: #FFFFFF;
			padding-left: 14px;
			h5 {
				line-height: 30px;
				color: #999;
				font-weight: 500;
			}
		}
		#shops {
			.mui-media-body {
				p {
					&:first-child{
						font-size: 16px;
						color: #000000;
						font-weight: 700;
					}
				}
				.homezhuansong {
					font-size: 10px;
					text-align: center;
					width: 30px;
					height: 18px;
					float: right;
					background-color: #ffcf03;
					color: #FFFFFF;
					
				}
				.mui-ellipsis {
					font-size: 8px;
					color: #aaa;
				}
			}
		}
	}
</style>