<template>
	<view>
		<u-search placeholder="请输入搜索内容" shape="round" disabled @click="handleGoSearch"></u-search>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			handleGoSearch() {
				console.log("click search")
			}
		}
	}
</script>

<style lang="less">

</style>
