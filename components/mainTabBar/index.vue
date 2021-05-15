<template>
  <u-tabbar
    :list="tabBarData"
    :mid-button="true"
    icon-size="28px"
    height="55px"
    mid-button-size="46px"
		inactive-color="#a6a5ab"
		active-color="#444444"
  ></u-tabbar>
</template>

<script>
export default {
	props:{
		tabBarData: {
			type: Array,
			default: [],
		},
	}
};
</script>

<style lang="scss">
</style>
