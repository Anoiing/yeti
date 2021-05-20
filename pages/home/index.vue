<template>
  <view class="layout">
    <!-- 自定义导航栏 -->
    <customNav />
    <!-- 历史上的今天 -->
    <view class="u-flex date-today">
      <view class="date-card">
        <view class="date-day">{{ new Date().getDate() }}</view>
        <view class="date-month">{{ new Date().getMonth() + 1 }}月</view>
      </view>
      <view class="history-today text-gray-600">
        <view class="history-day">
          {{ historyToday.date ? `- ${historyToday.date} -` : "" }}
        </view>
        <view class="history-title u-line-2">
          {{ historyToday.title || "" }}
        </view>
      </view>
    </view>
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
    <view class="content">首页</view>
    <mainTabBar :tabBarData="tabBarData" />
  </view>
</template>

<script>
import mainTabBar from "../../components/mainTabBar/index.vue";
import tabBarData from "../../constants/tabBarData.js";
import customNav from "../../components/customNav/index.vue";
import { getProfile, getHistoryToday, getTabMenus } from "utils/services.js";

export default {
  components: {
    mainTabBar,
    customNav,
  },
  data() {
    return {
      tabBarData: [],
      menuList: [],
      historyToday: {},
      currentMenu: 0,
    };
  },
  onLoad() {
    // 底下Tab数据传入，交给uView处理
    this.tabBarData = tabBarData;

    // 获取配置信息
    getProfile().then((res) => {
      // console.log(res);
    });

    // 初始化历史上的今天
    this.loadHistoryTodayData();

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
    // 获取历史上的今天数据
    loadHistoryTodayData() {
      const date = `${new Date().getMonth() + 1}/${new Date().getDate()}`;
      const getHistoryTodayData = () => getHistoryToday({
        key: "bb930191a775c236534119bdc6df760f",
        date,
      }).then(({ result, reason }) => {
        if (reason === "success" && result.length > 0) {
          uni.setStorageSync(date, JSON.stringify(result));
          getRandomData(result);
        }
      });
      // 在数组里随机取一个
      const getRandomData = (l) => {
        if (l.length > 0) {
          const rand = Math.floor(Math.random() * l.length);
          this.historyToday = l[rand];
        }
      };
      // 尝试取本地缓存的数据，没有或数据格式错误则重新获取
      let storageHistoryToday = uni.getStorageSync(date);
      if (storageHistoryToday) {
        try {
          storageHistoryToday = JSON.parse(storageHistoryToday);
          getRandomData(storageHistoryToday);
        } catch (error) {
          getHistoryTodayData();
        }
      } else {
        getHistoryTodayData();
      }
    },

    // 菜单变更
    handleTabChange(index) {
      this.currentMenu = index;
      console.log(menuList[index]);
    },
  },
};
</script>

<style lang="scss" scoped>
.layout {
  padding: 0 16px;
}
.date-today {
  padding: 12px 0;
  border-bottom: 1px solid $gray-300;
}
.date-card {
  border: 1px solid;
  border-radius: 4px;
  height: 48px;
  width: 48px;
  background-color: $yellow-300;
  text-align: center;
  margin-right: 16px;
  .date-day {
    font-size: 24px;
    font-family: "Georgia";
    font-weight: bolder;
  }
  .date-month {
    font-size: 10px;
  }
}
.history-today {
  font-size: 12px;
  .history-day {
    font-weight: bolder;
    margin-bottom: 2px;
  }
}

.content {
  margin-top: 12px;
}
</style>
