<template>
	<div class="person">
		<!--头部-->
		<bheader title="我的"></bheader>
		<!--登录-->
		<router-link to="/login">
			<div class="personal">
				<span class="mui-icon mui-icon-contact"></span>
				<div>
					<span class="denglu">登录/注册</span>
					<span>暂未绑定手机号</span>
				</div>
				<i class="mui-icon mui-icon-arrowright"></i>
			</div>
		</router-link>
		<!--我的订单 积分商城  vip会员卡 服务中心-->
		<div>
			<div class="other">
				<i class="mui-icon icon-dingdan"></i><span>我的订单</span>
			</div>
			<div class="other">
				<i class="mui-icon icon-dingdan"></i><span>积分商城</span>
			</div>
			<div class="other">
				<i class="mui-icon icon-dingdan"></i><span>VIP</span>
			</div>
		</div>
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
	@color: #ffcf03;
	.person {
		.mui-bar-nav {
			box-shadow: none;
			z-index: 999;
		}
		.personal {
			border-top: 1px solid #FFFFFF;
			width: 100%;
			height: 80px;
			background-color: @color;
			color: #FFFFFF;
			font-weight: 600;
			margin-bottom: 20px;
			.mui-icon {
				font-size: 60px;
				margin-left: 10px;
				/*line-height: 80px;*/
				color: #FFFFFF;
				margin-right: 10px;
			}
			div {
				display: inline-block;
				.denglu {
					display: block;
				}
			}
			i {
				float: right;
			}
		}
		.other {
			width: 100%;
			height: 40px;
			padding-left: 10px;
			color: #5f3100;
			background-color: #FFFFFF;
			line-height: 40px;
			border-bottom:1px solid #ccc;
			i {
				margin-top: 6px;
			}
			span {
				margin-left: 10px;
			}
		}
	}
</style>