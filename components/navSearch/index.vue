<template>
    <u-search
      placeholder="请输入搜索内容"
      shape="round"
      :show-action="showAction"
      @click="handleGoSearch"
    />
</template>

<script>
export default {
  name: "navSearch",
  props: {
    showAction: {
      type: Boolean,
      default: false,
    },
  },
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
