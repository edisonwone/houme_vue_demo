<template>
	<div id="bheader" class="mui-bar mui-bar-nav">
		<slot name="left"></slot>
		<h1 class="mui-title">{{title}}</h1>
		<slot name="right"></slot>
	</div>
</template>

<script>
	export default{
		props:{
			title:String
		}
	}
</script>

<style lang="less">
	#bheader {
		color: #FFFFFF;
		background-color: #ffcf03;
			h1 {
				font-weight: 500;
				color: #FFFFFF;
			}
				
	}	
</style>