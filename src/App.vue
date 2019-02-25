<template>
  <div id="msiteBody">
  	
			<!--中间路由-->  
	<router-view id="router"></router-view>
	
  <!--底部-->
  <footerGuaid v-show="$route.meta.show"></footerGuaid>
  </div>
</template>

<script>
import footerGuaid from './components/footerGuaid.vue'


export default {
  name: 'app',
  components: {
    footerGuaid,

  }
}
</script>

<style lang="less">
	#msiteBody {
		background-color: #efeff4;
		
		#router {
			margin-top: 44px;
		}
	}
</style>
