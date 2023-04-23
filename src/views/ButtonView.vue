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
  name: "menuxxx1", //调用组件
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
      axios
        .post("http://192.168.1.25:8881/application/sendMsg", {
          name: "娃娃", // 参数 firstName
          test: "哈哈", // 参数 lastName
        })
        .then(function (response) {
          console.log(response);
          if (response.data) {
            this.sendData = response.data;
          }
        })
        .catch(function (error) {
          console.log(error);
          alert(error);
        });
    },
    getMsg() {
      axios
        .get("http://192.168.1.25:8881/application/getMenu")
        .then(function (response) {
          console.log(response);
          debugger;
          if (response.data) {
            this.getData = response.data;
          }
        })
        .catch(function (error) {
          console.log(error);
          alert(error);
        });
    },
  },
  mounted() {
    var btn = document.getElementById("btn");
    btn.onclick = function () {
      alert("click");
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