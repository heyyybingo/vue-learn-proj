<template>
  <div class="app-container">
    <!-- header区域 -->
    <mt-header fixed title="VueProject"></mt-header>

    <!-- router-view区域 -->

    <!-- 底部tabbar区域 -->
    <mt-tabbar v-model="selected">
      <mt-tab-item id="外卖">外卖</mt-tab-item>
      <mt-tab-item id="订单">订单</mt-tab-item>
      <mt-tab-item id="发现">发现</mt-tab-item>
      <mt-tab-item id="我的">我的</mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "",
  data() {
    return {};
  },
  components: {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.app-container {
  padding-top: 40px;
}
</style>
