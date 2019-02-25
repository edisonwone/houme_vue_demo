<template>
  <div id="footer">
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/msite">
				<span class="mui-icon icon-shouye"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon icon-sousuo"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
			<router-link class="mui-tab-item" to="/order">
				<span class="mui-icon icon-dingdan"></span>
				<span class="mui-tab-label">订单</span>
			</router-link>
			<router-link class="mui-tab-item" to="/person">
				<span class="mui-icon icon-wode"></span>
				<span class="mui-tab-label">我的</span>
			</router-link>
		</nav>
  </div>
</template>

<script>
export default {
  name: 'footerGuaid',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
	#footer{
		.mui-active {
			color: #ffcf03;
		}
	}
</style>
