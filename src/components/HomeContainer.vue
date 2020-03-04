<template>
  <div>
    <mt-swipe :auto="10000">
      <mt-swipe-item v-for="item in lunbotulist" :key="item">
        <img :src="item" width="100%" height="100%" />
      </mt-swipe-item>
    </mt-swipe>
    <div class="middle"></div>
    <div class="blocks">
      <div class="blocks-row">
        <div id="newsList" @click="jumpto('newsList')">
          <span class="iconfont icon-dingwei"></span>
          <p>新闻资讯</p>
        </div>
        <div id="picshare" @click="jumpto('picshare')">
          <span class="iconfont icon-pengyouquan"></span>
          <p>图片分享</p>
        </div>
        <div id="buy" @click="jumpto('buy')">
          <span class="iconfont icon-lihe"></span>
          <p>商品购买</p>
        </div>
      </div>
      <div class="blocks-row">
        <div id="words" @click="jumpto('words')">
          <span class="iconfont icon-jiju"></span>
          <p>留言反馈</p>
        </div>
        <div id="videos" @click="jumpto('videos')">
          <span class="iconfont icon-xiaoxizhongxin"></span>
          <p>视频专区</p>
        </div>
        <div id="contact" @click="jumpto('contact')">
          <span class="iconfont icon-bangzhu"></span>
          <p>联系我们</p>
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
  methods: {
    jumpto(path) {
      console.log(this.$route.path);

      this.$router.push(this.$route.path + "/" + path);
    }
  }
};
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  border: 6px solid white;
  box-shadow: 1px 1px 5px #333333;
}
.middle {
  margin: 0 auto;
  margin-top: 10%;
  width: 50%;
  height: 10px;
  border-radius: 50%;
  box-shadow: 1px 1px 5px red;
}
.blocks {
  margin-top: 10%;
  .blocks-row {
    width: 100%;
    display: flex;
    height: 50px;
    margin-bottom: 10%;
    div {
      margin-left: 5%;
      margin-right: 5%;
      height: 50%;
      flex-grow: 1;
      text-align: center;
      span {
        font-size: 30px;
        flex-grow: 1;
      }
      p {
        font-size: 10px;
        text-shadow: 0 0 20px red;
      }
    }
  }
}
</style>
