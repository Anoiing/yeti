<template>
  <view class="layout">
    <customNav />
    <view class="content">首页</view>
    <mainTabBar :tabBarData="tabBarData" />
  </view>
</template>

<script>
import mainTabBar from "../../components/mainTabBar/index.vue";
import tabBarData from "../../constants/tabBarData.js";
import customNav from "../../components/customNav/index.vue";

export default {
  components: {
    mainTabBar,
    customNav,
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
