<template>
  <view class="layout">
    <view class="content">首页</view>
    <mainTabBar :tabBarData="tabBarData" />
  </view>
</template>

<script>
import mainTabBar from "../../components/mainTabBar/index.vue";
import tabBarData from "../../constants/tabBarData.js";

export default {
  components: {
    mainTabBar,
  },
  data() {
    return {
      tabBarData: [],
    };
  },
  onLoad() {
    this.tabBarData = tabBarData;
  },
};
</script>

<style lang="scss" scoped></style>
