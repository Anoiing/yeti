<template>
  <view>
    <CustomNav />
    <view class="content"> 板块 </view>
    <MainTabBar />
  </view>
</template>

<script>
import MainTabBar from "../../components/MainTabBar";
import CustomNav from "../../components/CustomNav";

export default {
  components: {
    MainTabBar,
    CustomNav,
  },
  data() {
    return {
    };
  },
  onLoad() {
  },
};
</script>

<style lang="scss"></style>
