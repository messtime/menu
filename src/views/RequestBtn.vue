<template>
  <div>
    <div id="btn">默认按钮</div>
    <br />
    <br />
    <br />

    <el-button type="success" @click="getMsg">获取服务端数据</el-button>
    <br />
    <br />
    <div>{{ getData }}</div>

    <br />
    <el-button type="success" @click="sendMsg">发送数据给服务端</el-button>
    <br />
    <br />
    <div>{{ sendData }}</div>
  </div>
</template>
<script>
// var btn = document.getElementById("btn")
// btn.onclick = function() {
//   alert('click')
// }
import axios from "axios";
export default {
  components: {
    //注册组件为空
  },
  data() {
    //所定义的组件的数据
    return {
      items: [],
      inputValue: "",
      getData: {},
      sendData: {},
    };
  },
  methods: {
    sendMsg() {
      let self = this;
      let data = JSON.parse(localStorage.getItem('events1'));
      axios
        .post(apiPrefix + "application/setMenu", {
          name: "第一个参数name", // 参数 name
          data: data, // 参数 data
        })
        .then(function (response) {
          console.log(response);
          if (response.data) {
            self.sendData = response.data;
          }
        })
        .catch(function (error) {
          console.log(error);
          self.$alert(error);
        });
    },
    getMsg() {
      let self = this;
      axios
        .get(apiPrefix + "application/getMenu")
        .then(function (response) {
          console.log(response);
          debugger;
          if (response.data) {
            self.getData = response.data.data.data;
          }
        })
        .catch(function (error) {
          console.log(error);
          self.$alert(error);
        });
    },
  },
  mounted() {
    let self = this;
    var btn = document.getElementById("btn");
    btn.onclick = function () {
      self.$alert("click");
    };
  },
};
</script>
<style scoped>
#btn {
  height: 20px;
  padding: 5px 10px;
  color: green;
  border: 1px solid #000;
  border-radius: 10px;
  display: inline-block;
}
</style>