<template>
    <u-search
      disabled
      placeholder="请输入搜索内容"
      shape="round"
      :show-action="false"
      @click="handleGoSearch"
    />
</template>

<script>
export default {
  name: "NavSearch",
  data() {
    return {};
  },
  methods: {
    handleGoSearch() {
      console.log("click search");
    },
  },
};
</script>

<style lang="scss"></style>
