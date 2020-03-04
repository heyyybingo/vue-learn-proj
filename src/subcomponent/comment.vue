<template>
  <div class="comment-container">
    <div class="comment-send">
      <div>发表评论</div>
      <textarea placeholder="请输入内容(不超过120字)" maxlength="120"></textarea>
      <div>
        <a
          class="btn"
          :class="{'btn-on':clicked}"
          ref="sendbutton"
          @touchstart="clicked=true"
          @touchend="send"
        >发送</a>
      </div>
    </div>

    <div class="comment-list">
      <ul>
        <li class="comment" v-for="item in comments" :key="item.user">
          <div class="comment-head">
            <span class="user">用户:{{item.user}}</span>
            <span class="time">发表时间:{{item.time}}</span>
          </div>
          <div class="comment-content">{{item.content}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "",
  data() {
    return {
      clicked: false,
      comments: [
        {
          user: "helloword",
          time: "2020-02-25 21:19:00",
          content: "你好你个傻逼"
        },
        {
          user: "ssssssssssssssssssssssssssss",
          time: "2020-02-25 21:19:00",
          content: "你好你个傻逼"
        },
        {
          user: "s",
          time: "2020-02-25 21:19:00",
          content:
            "你好你个傻逼你好你个傻逼你好你个傻逼你好你个傻逼你好你个傻逼你好你个sadasdsadsadasdad你好你个傻逼sadasdsadad"
        },
        { user: "1", time: "2020-02-25 21:19:00", content: "你好你个傻逼" }
      ]
    };
  },
  components: {},
  methods: {
    send() {
      console.log("sending");
      this.clicked = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.comment-container {
  padding-top: 3%;

  .comment-send {
    div {
      font-size: 15px;
      font-weight: 1000;
      text-shadow: 0 0 20px skyblue;
    }
    textarea {
      width: 100%;
      height: 100px;
      border: 1px dashed grey;
      border-radius: 3%;
    }
    div {
      height: 20px;
      .btn {
        text-align: center;
        font-weight: bold;
        float: right;
        border: 3px solid rgb(65, 7, 92);
        padding: 0.2em;
        border-radius: 50%;
        width: 40px;
      }
      .btn-on {
        text-shadow: 0 0 20px red;
        box-shadow: 1px 1px 5px #333333;
        border: 3px solid grey;
        border-radius: 0%;
        background-color: skyblue;
        transform: translateX(-20px);
        transition: all 1s ease;
      }
    }
  }
  .comment-list {
    padding-bottom: 5%;
    ul {
      list-style-type: none;
      padding: 0;
    }
    .comment {
      padding: 1%;
      border-top: 1px dashed grey;
      .comment-head {
        box-shadow: 1px 1px 1px #dd8c8c;
        display: flex;
        justify-content: space-between;
        font-size: 13px;

        .user {
          color: #dd8c8c;
          max-width: 10em;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .time {
          font-style: italic;
        }
      }
    }
  }
}
</style>
