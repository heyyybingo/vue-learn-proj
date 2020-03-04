<template>
  <div class="news-container">
    <div class="newshead">
      <h3 class="title" v-text="news.title">新闻标题</h3>
      <p class="info">
        <span>发表时间：{{news.add_time}}</span>
        <span>点击:{{news.click}}次</span>
      </p>
    </div>
    <div class="content" v-html="content"></div>

    <!-- 评论子组件 -->
    <comment></comment>
  </div>
</template>

<script type="text/ecmascript-6">
import comment from "../../subcomponent/comment.vue";
export default {
  name: "",
  data() {
    return {
      id: this.$route.params.id, //对应的新闻id
      news: {}, //对应的新闻对象
      content: ""
    };
  },
  components: { comment },
  methods: {
    getnewsInfo() {
      this.axios
        .get("/data/newsInfo/data.json")
        .then(result => {
          console.log(result);
          // 由于没有服务端，这里用data.json代替的数据，直接在前端js查询操作了
          let all = result.data.results;
          console.log(all);
          for (let i in all) {
            if (all[i].id == this.id) {
              this.news = all[i];
              console.log(this.news);
            }
          }
          return this.axios.get(this.news.content);
        })
        .then(result => {
          console.log("Content", result);
          this.content = result.data;
        });
    }
  },
  created() {
    this.getnewsInfo();
  }
};
</script>

<style lang="scss" >
.news-container {
  padding: 1%;
  .newshead {
    border-bottom: 1px dashed grey;
    font-size: 10px;

    .title {
      text-align: center;
      font-size: 20px;
    }
    .info {
      display: flex;
      font-size: 13px;
      color: skyblue;
      justify-content: space-between;
    }
  }
  .content {
    * {
      margin: 0 auto !important;
      width: 95% !important;
    }
  }
}
</style>
