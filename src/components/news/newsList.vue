<template>
  <div>
    <ul class="newslist">
      <li class="newsitem" v-for="item in newsList" :key="item.id" @click="tonewsInfo(item.id)">
        <img class="newsimg" :src="item.img_url" />
        <div class="newscontent">
          <span class="newsTitle">{{item.title}}</span>
          <div class="newsdata">
            <span class="newsTime">发表时间:{{item.pdate_src}}</span>
            <span class="newsclick">点击:{{item.click}}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "",
  data() {
    return {
      newsList: []
    };
  },
  components: {},
  methods: {
    tonewsInfo(id) {
      var path = "/home/newsInfo/" + id;
      console.log(path);
      this.$router.push(path);
    }
  },
  created() {
    this.axios.get("./data/newsList/data.json").then(result => {
      this.newsList = result.data.result;
      console.log(this.newsList);
    });
  }
};
</script>

<style lang="scss" scoped>
.newslist {
  list-style-type: none;
  padding: 0;
  display: inline;
  .newsitem {
    height: 40px;
    padding: 1%;
    border-top: 1px dashed grey;
    display: flex;
    .newsimg {
      width: 40px;
      height: 100%;
    }
    .newscontent {
      margin-left: 5%;
      width: 100%;

      .newsTitle {
        color: black;
        font-size: 10px;
        width: 60%;
        font-weight: 300;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .newsdata {
        color: skyblue;
        font-size: 8px;
        display: flex;
        justify-content: space-between;

        .newsTime {
        }
        .newsclick {
        }
      }
    }
  }
}
</style>
