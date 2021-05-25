<template>
  <view>
    <customNav />
    <view class="content"> 板块 </view>
    <mainTabBar />
  </view>
</template>

<script>
import mainTabBar from "../../components/mainTabBar/index.vue";
import customNav from "../../components/customNav/index.vue";

export default {
  components: {
    mainTabBar,
    customNav,
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
