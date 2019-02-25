<template>
	<div>
		<div class="cartControl">
			<transition name="move">
				<i class="mui-icon mui-icon-minus" v-if="food.count" @click="decreamCount"></i>
			</transition>
			<span v-if="food.count">{{food.count}}</span>
			<i class="mui-icon mui-icon-plus" @click="increamCount"></i>
		</div>
	</div>
</template>

<script>
	export default {
		props: ["food"],
		methods: {
			decreamCount() {
				//this.$store.commit('decreamCount')
				this.food.count--
				this.$store.commit('spliceFoods',this.food.id)
			},
			increamCount() {
				//	this.$store.commit('increamCount')
				this.food.count++
//									console.log(this.food.id)
					var add = {
						id: this.food.id,
						count: this.food.count,
						price: this.food.price
					}
				this.$store.commit("addToFoods", add)
			}
			
		}
	}
</script>

<style lang="less">
	.cartControl {
		position: absolute;
		right: 10px;
		top: 60px;
		display: flex;
		justify-content: space-between;
		i {
			font-size: 30px;
			font-weight: 700;
			color: #FFCF03;
			&:first-child {
				float: left;
				&.move-enter-active,
				&.move-leave-active {
					transition: all 0.5s;
				}
				&.move-enter,
				&.move-leave-to {
					opacity: 0;
					transform: translateX(30px) rotate(180deg);
				}
			}
			&:last-child {
				float: right;
			}
		}
		span {
			float: left;
			width: 40px;
			text-align: center;
			color: #999;
			font-size: 22px;
			line-height: 30px;
		}
	}
</style>