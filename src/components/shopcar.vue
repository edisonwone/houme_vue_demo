<template>
	<div>
		<div class="shopcar">
			<div class="imgicon">
				<i class="mui-icon mui-icon-paperplane"></i>
			</div>
			<div class="contentRight">
				<p>￥{{$store.getters.totleMoney}}</p>
				<span>另需配送费￥2元</span>
			</div>
			<div class="shopcarM">结算</div>
		</div>
	</div>

</template>

<script>
	export default {
		
	}
</script>

<style lang="less">
	.shopcar {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 50px;
		background-color: #ffcf03;
		.imgicon{
			width: 50px;
			height: 50px;
			border:4px solid #FFCF03;
			border-radius: 50%;
			box-sizing: border-box;
			background-color: #5F3100;
			position: absolute;
			left: 30px;
			top: -20px;
			i{
				font-size: 40px;
				line-height: 40px;
				color: #FFCF03;
			}
		}
		.contentRight{
			width: 200px;
			height: 100%;
			box-sizing: border-box;
			padding-top: 4px;
			position: absolute;
			right: 100px;
			top: 0;
			p{
				margin: 0;
				padding-left: 10px;
				font-size: 16px;
				color: #FFFFFF;
			}
			span{
				font-size: 14px;
				color: #8f8f94;
				padding-left: 10px;
			}
		}
		.shopcarM{
			position: absolute;
			right: 0;
			top: 0;
			width: 100px;
			height: 100%;
			background-color: #5F3100;
			color: #FFCF03;
			line-height: 50px;
			text-align: center;
		}
	}
</style>