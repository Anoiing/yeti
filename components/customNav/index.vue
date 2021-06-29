<template>
  <u-navbar :is-back="false" title="">
    <view class="u-flex u-padding-left-24 u-padding-right-24">
      <view class="iconfont icon-home u-margin-right-16" @click="handleHome"></view>
      <NavSearch />
    </view>
  </u-navbar>
</template>

<script>
import NavSearch from "components/NavSearch";

export default {
  name: "customNav",
  components: {
    NavSearch,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.icon-home {
  font-size: 28px;
}
</style>
