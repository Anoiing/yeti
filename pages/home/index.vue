<template>
  <view class="layout">
    <!-- 自定义导航栏 -->
    <customNav />
    <!-- 历史上的今天 -->
    <historyToday />
    <!-- 分类菜单 -->
    <u-tabs
      :list="menuList"
      name="title"
      is-scroll
      bar-width="80"
      :current="currentMenu"
      @change="handleTabChange"
    ></u-tabs>
    <!-- 内容 -->
    <view class="content">
      <u-button @click="handleDetail">进入详情页</u-button>
    </view>
    <mainTabBar />
  </view>
</template>

<script>
import mainTabBar from "../../components/mainTabBar/index.vue";
import customNav from "../../components/customNav/index.vue";
import historyToday from './components/historyToday/index.vue';
import { getProfile, getTabMenus } from "utils/services.js";

export default {
  components: {
    mainTabBar,
    customNav,
    historyToday,
  },
  data() {
    return {
      menuList: [],
      currentMenu: 0,
    };
  },
  onLoad() {
    // 获取配置信息
    getProfile().then((res) => {
      // console.log(res);
    });

    // 初始化首页Tab菜单
    getTabMenus().then(({ data }) => {
      let menuList = [];
      data.forEach((o) => {
        menuList = menuList.concat(o.menues);
      });
      this.menuList = menuList;
    });
  },
  methods: {
    // 菜单变更
    handleTabChange(index) {
      this.currentMenu = index;
      console.log(menuList[index]);
    },

    // 跳转详情页
    handleDetail() {
      console.log("detail click");
      uni.navigateTo({ url: "../detail/index" });
    },
  },
};
</script>

<style lang="scss" scoped>
.layout {
  padding: 0 16px;
}

.content {
  margin-top: 12px;
}
</style>
