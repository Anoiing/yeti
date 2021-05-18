<template>
  <view>
    <u-navbar :is-back="false" title="我的" />
    <view class="content">
      <view class="personal-card">
        <view class="personal-bg-bar" />
        <view class="personal-avatar-wrapper">
          <view class="personal-avatar">
            <u-avatar
              src="/static/images/default_personal.jpg"
              mode="circle"
              size="180"
              show-level
            ></u-avatar>
            <view class="u-font-18 u-line-1">Anoi灬V</view>
            <view class="u-margin-top-8 u-margin-bottom-8">
              <text class="text-gray-400 u-margin-right-8">点赞：</text>
              <text class="u-text-center text-gray-700">123</text>
            </view>
          </view>
          <view class="personal-logout">
            <u-tag
              text="退出登录"
              mode="plain"
              type="info"
              shape="circleLeft"
              @click="handleLogout"
            />
          </view>
        </view>
      </view>
      <view class="">
        <view class="w-half u-padding-right-16 u-margin-bottom-32 inline-block">
          <view class="my-collection u-flex">
            <view class="my-icons"><view class="iconfont icon-collection" /></view>
            我的收藏
          </view>
        </view>
        <view class="w-half u-padding-left-16 u-margin-bottom-32 inline-block">
          <view class="my-publish u-flex">
            <view class="my-icons"><view class="iconfont icon-history" /></view>
            我的发布
          </view>
        </view>
        <view class="w-half u-padding-right-16 inline-block">
          <view class="my-liked u-flex">
            <view class="my-icons"><view class="iconfont icon-liked" /></view>
            我的点赞
          </view>
        </view>
        <view class="w-half u-padding-left-16 inline-block">
          <view class="my-focus u-flex">
            <view class="my-icons"><view class="iconfont icon-focus" /></view>
            关注&粉丝
          </view>
        </view>
      </view>
    </view>
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
  methods: {
    handleLogout() {
      console.log("logout");
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  padding: 0 24px;
}
.personal-card {
  height: 298px;
  overflow: hidden;
  padding-top: 80px;
  margin-bottom: 24px;
  position: relative;
}
.personal-bg-bar {
  height: 100px;
  width: 120%;
  background-color: #f19737;
  transform: rotate(-15deg);
  margin-left: -10%;
}
.personal-avatar-wrapper {
  text-align: center;
  max-width: 60%;
  margin: -40px auto 0;
}
.personal-avatar {
  display: inline-block;
}
.personal-logout {
  position: absolute;
  right: 0;
  bottom: 65px;
}

.my-collection,
.my-publish,
.my-liked,
.my-focus {
  padding: 10px 12px;
  border-radius: 12px;
}

.my-collection,
.my-focus {
  background-color: rgba(241, 151, 55, 0.5);
}
.my-publish,
.my-liked {
  background-color: rgba(55, 204, 197, 0.5);
}

.my-icons {
  border-radius: 8px;
  padding: 4px;
  background-color: #fff;
  margin-right: 12px;
  .iconfont {
    font-size: 22px;
  }
}
</style>
