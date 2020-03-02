<template>
  <div>
    <mt-swipe :auto="10000">
      <mt-swipe-item v-for="item in lunbotulist" :key="item">
        <img :src="item" width="100%" height="100%" />
      </mt-swipe-item>
    </mt-swipe>

    <div class="blocks">
      <div class="blocks-row">
        <div>
          <span class="iconfont icon-dingwei"></span>
        </div>
        <div>
          <span class="iconfont icon-pengyouquan"></span>
        </div>
        <div>
          <span class="iconfont icon-lihe"></span>
        </div>
      </div>
      <div class="blocks-row">
        <div>
          <span class="iconfont icon-jiju"></span>
        </div>
        <div>
          <span class="iconfont icon-xiaoxizhongxin"></span>
        </div>
        <div>
          <span class="iconfont icon-bangzhu"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "",
  data() {
    return {
      lunbotulist: [
        "./src/lib/image/lunbotu/1.jpg",
        "./src/lib/image/lunbotu/2.jpg",
        "./src/lib/image/lunbotu/3.jpg",
        "./src/lib/image/lunbotu/4.jpg"
      ]
    };
  },
  components: {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
}
.blocks {
  margin-top: 10%;
  .blocks-row {
    width: 100%;
    display: flex;
    height: 50px;
    div {
      margin-left: 5%;
      margin-right: 5%;
      height: 50%;
      flex-grow: 1;
      display: flex;
      align-items: center;
      border-radius: 50;

      span {
        text-align: center;
        flex-grow: 1;
      }
    }
  }
}
</style>
