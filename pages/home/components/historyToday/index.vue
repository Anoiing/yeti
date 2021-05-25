<template>
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
</template>

<script>
import { getHistoryToday } from "utils/services.js";

export default {
  name: "historyToday",
  data() {
    return {
      historyToday: {}
    };
  },
  beforeMount() {
    const date = `${new Date().getMonth() + 1}/${new Date().getDate()}`;
    // 将Storage中已缓存的过期数据清除
    uni.getStorageInfo({
      success: function ({ keys }) {
        const regex = /^\d{1,2}\/\d{1,2}$/;
        keys.forEach((o) => {
          if (regex.test(o) && o !== date) {
            uni.removeStorageSync(o);
          }
        });
      },
    });
    // 请求接口获取
    const getHistoryTodayData = () =>
      getHistoryToday({
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
};
</script>

<style lang="scss" scoped>
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
</style>