<template>
	<div>
		<bheader title="店铺详情">
			<span class="mui-icon mui-icon-back" slot="left" @click="$router.push('/msite')"></span>
		</bheader>
		<div class="shop-goods-info">
			<img src="../../../public/img/timg.jpg" alt="" />
			<h3>铜山新区店</h3>
			<p><span>4.2</span>&nbsp;&nbsp;<span>月售90单</span>&nbsp;&nbsp;外卖专送</p>
		</div>
		<!--<div class="tab-item">
			<router-link to='/shop/shopgoods'>点餐</router-link>	
		</div>
		<div class="tab-item">
			<router-link to='/shop/shopratings'>评论</router-link>	
		</div>
		<div class="tab-item">
			<router-link to='/shop/shopinfo'>商家</router-link>	
		</div>-->
		<router-view></router-view>
	</div>
</template>

<script>
	import bheader from '../../components/header.vue'
	export default {
		components: {
			bheader
		}
	}
</script>

<style lang="less">
	.shop-goods-info{
		background-color: #FFFFFF;
		width: 100%;
		height:140px;
		padding-top: 10px;
		img{
			width: 60px;
			height: 60px;
			display: block;
			margin: 0 auto;
			border: 1px solid #5f3100;
		}
		h3{
			text-align: center;
		}
		p{
			text-align: center;
		}
		
	}
	.tab-item{
			float: left;
			width: 33.3%;
			height: 30px;
			text-align: center;
			line-height: 30px;
			font-size: 14px;
			background-color: #FFFFFF;
			border-top: 1px solid #ccc;
			a{
				color: #666;
          		&.mui-active{
          			color: #ffcf03;
          		}
			}
		}

</style>