<template>
  <view class="layout">
    <!-- 自定义导航栏 -->
    <CustomNav />
    <!-- 历史上的今天 -->
    <HistoryToday />
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
      <u-button @click="handleLocation">获取Location</u-button>
      <u-button @click="handleDetail">进入详情页</u-button>
    </view>
    <MainTabBar />
  </view>
</template>

<script>
import MainTabBar from "../../components/MainTabBar";
import CustomNav from "../../components/CustomNav";
import HistoryToday from './components/HistoryToday';
import { getProfile, getTabMenus } from "utils/services.js";

export default {
  components: {
    MainTabBar,
    CustomNav,
    HistoryToday,
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

    handleLocation() {
      console.log(gioGlobal);
      console.log(gioGlobal.gio('getLocation'));
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
