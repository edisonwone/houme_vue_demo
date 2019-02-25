<template>
	<div>
		<bheader title="登录/注册">
			<span class="mui-icon mui-icon-back" slot="left" @click="$router.back()"></span>
		</bheader>

		<!--登录/注册-->
		<div class="login">
			<h2>候么外卖</h2>
			<!--input部分-->
			<div class="login-body">
				<div class="login-body-title">
					<a href="javascript:;" :class="{on:loginTitle}" @click="loginTitle=true">短信登录</a>
					<a href="javascript:;" :class="{on:!loginTitle}" @click="loginTitle=false">密码登录</a>
				</div>
				<form @submit.prevent="login">
					<div :class="{on:loginTitle}">
						<section class="login-msg">
							<input type="tel" maxlength="11" placeholder="手机号" v-model="phone" />
							<button :disabled="!rightPhone" class="get-msg" :class="{on:rightPhone}" @click.prevent="getCode">{{codeTime?`已发送(${codeTime}秒)`:'获取验证码'}}</button>
						</section>
						<section class="login-yanzheng">
							<input type="tel" maxlength="6" placeholder="验证码" v-model="code"/>
						</section>
						<section class="login-warning">
							温馨提示：未注册候么外卖帐号的手机号，登录时将自动注册，且代表已同意
							<a href="javascript:;">《用户服务协议》</a>
						</section>
					</div>
					<div :class="{on:!loginTitle}">
						<section class="login-text">
							<input type="tel" maxlength="11" placeholder="手机号" />
							<input type="password" maxlength="11" placeholder="密码" />
							<input type="tel" maxlength="8" placeholder="验证码" />
							<img src="./img/captcha.svg"/>
						</section>
					</div>
					<button class="login-button">登录</button>
				</form>
			</div>
		</div>

	</div>
</template>

<script>
	import bheader from '../../components/header.vue'
	export default {
		data() {
			return {
				loginTitle: true, //登录方式的切换
				phone: '', //电话号码
				codeTime: 0,//短信倒计时时间
				code:'',//验证码
			}
		},
		methods: {
			//获取短信验证码
			getCode() {
//				倒计时
				if(this.codeTime==0){
					this.codeTime=30
				const timeId=setInterval(()=>{
					this.codeTime--
					if(this.codeTime==0){
						clearInterval(timeId)
					}
				},1000)
				}
			},
			//表单登录提交
			login(){
				//判断登录方式
				if (this.loginTitle) {//短信登录
					const {rightphone,phone,code}=this
					if(!rightphone){
						//手机号不正确
						mui.toast('手机号不正确');
					}
				} else{//密码登录
					
				}
			}
		},
			computed: {
				rightPhone() {
					return /^1[3-9]\d{9}$/.test(this.phone)
				}
			},
			components: {
				bheader,
			}
		}
</script>

<style lang="less">
	@color: #ffcf03;
	.login {
		h2 {
			color: @color;
			text-align: center;
			padding-top: 30px;
			padding-bottom: 20px;
		}
		.login-body {
			width: 80%;
			margin: 0 auto;
			.login-body-title {
				text-align: center;
				a {
					color: #B6B6B6;
					font-size: 14px;
					&:first-child {
						padding-right: 10px;
					}
					&.on {
						color: @color;
					}
				}
			}
			form {
				width: 100%;
				div {
					display: none;
					&.on {
						display: block;
					}
					&:nth-child(2){
						.login-text{
							input{
								margin: 0;
								margin-top: 10px;
								width: 100%;
								height: 44px;
							}
							&:last-child{
								position: relative;
								margin-bottom: 10px;
							}
							img{
								position: absolute;
								height: 44px;
								bottom:0;
								right: 0;
							}
						}
					}
				}
				input {
					outline: 0;
					width: 100%;
					height: 100%;
					padding-left: 10px;
					box-sizing: border-box;
					border: 1px solid #DDDDDD;
					border-radius: 8px;
					font-weight: 400;
					font-size: 14px;
					margin-top: 10px;
					&:focus {
						border: 1px solid @color;
					}
				}
				.login-msg {
					position: relative;
					height: 48px;
					.get-msg {
						position: absolute;
						right: 20px;
						top: 50%;
						border: 0;
						color: #B6B6B6;
						font-size: 14px;
						padding: 0;
						background: transparent;
						&.on {
							color: @color;
						}
					}
				}
				.login-yanzheng {
					height: 48px;
					margin-top: 10px;
				}
				.login-warning {
					margin-top: 15px;
					margin-bottom: 10px;
					font-size: 14px;
					color: #B6B6B6;
					a {
						color: @color;
					}
				}
				.login-button {
					background-color: @color;
					width: 100%;
					height: 48px;
					color: #FFFFFF;
					font-size: 18px;
					font-weight: 600;
					border: 1px solid @color;
					border-radius: 8px;
					box-sizing: border-box;
				}
			}
		}
	}
</style>