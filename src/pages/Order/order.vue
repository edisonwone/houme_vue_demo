<template>
	<div class="order">
		<bheader title="订单历史"></bheader>
		<div class="img">
			<img src="./img/person.png"/>
		</div>		
	</div>
</template>

<script>
	import bheader from '../../components/header.vue'
	export default{
		components:{
			bheader
		}
	}
</script>

<style lang="less">
	.order{
		width: 100%;
		background-color: #efeff4;	
		.img{
			width: 70%;
			margin: 0 auto;
			/*background-color: #FFFFFF;*/
		}
		
	}
		

</style>