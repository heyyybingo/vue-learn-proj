<template>
  <div class="app-container">
    <!-- header区域 -->
    <mt-header fixed title="VueProject"></mt-header>

    <!-- router-view区域 -->
    <router-view></router-view>
    <!-- 底部tabbar区域 -->
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="home">
        <span class="iconfont icon-shouye"></span>首页
      </mt-tab-item>
      <mt-tab-item id="member">
        <span class="iconfont icon-wodeguanzhu"></span>会员
      </mt-tab-item>
      <mt-tab-item id="shopcar">
        <span class="iconfont icon-icon-test"></span>购物车
      </mt-tab-item>
      <mt-tab-item id="search">
        <span class="iconfont icon-sousuo"></span>搜索
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "",
  data() {
    return {
      selected: ""
    };
  },
  components: {},
  methods: {},
  watch: {
    selected(newVal, oldVal) {
      console.log(this.$router);
      this.$router.push("/" + newVal);
    }
  },
  created() {
    this.selected = "home";
  }
};
</script>

<style lang="scss" scoped>
.app-container {
  padding-top: 40px;
  .iconfont {
    display: block;
  }
}
</style>
