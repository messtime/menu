<template>
  <div id="app" style="padding-top: 60px">
    <div
      class="topCtn"
      style="
        background-color: white;
        position: fixed;
        z-index: 3;
        width: 100%;
        padding: 10px;
        top: 0;
        left: 0;
      "
    >
      <el-button
        class="pageLink"
        @click="drawer = true"
        type="primary"
        plain
        style="display: inline-block; position: absolute; left: 40px"
        >!
      </el-button>
      <div style="display: inline-block; padding: 10px 20px">
        welcome myIsland
      </div>
    </div>

    <el-drawer :visible.sync="drawer" :direction="direction">
      <span style="margin-left: 10px"
        ><el-switch
          v-model="value"
          active-color="#13ce66"
          inactive-color="#ff4949"
        >
        </el-switch
      ></span>
      <nav>
        <router-link style="display: inline-block" to="/home">Home</router-link>
        <router-link style="display: inline-block" to="/creditCard"
          >creditCard</router-link
        >
        <router-link style="display: inline-block" to="/about"
          >About</router-link
        >
        <router-link style="display: inline-block" to="/test11"
          >allMenu</router-link
        >
        <router-link style="display: inline-block" to="/store"
          >store</router-link
        >
        <router-link style="display: inline-block" to="/RequestBtn"
          >RequestBtn</router-link
        >
        <router-link style="display: inline-block" to="/BookStore"
          >BookStore</router-link
        >
        <router-link style="display: inline-block" to="/Alfred"
          >Alfred</router-link
        >
        <router-link style="display: inline-block" to="/Flavor"
          >Flavor</router-link
        >
        <router-link style="display: inline-block" to="/CookBook"
          >CookBook</router-link
        >
        <router-link style="display: inline-block" to="/NoteBook"
          >NoteBook</router-link
        >
        <router-link style="display: inline-block" to="/slswitch"
          >slswitch
        </router-link>
        <router-link style="display: inline-block" to="/test33"
          >test33
        </router-link>
      </nav>
    </el-drawer>

    <router-view :switchvaluedata="value" />
    <br />
    <br />
  </div>
</template>
<script>
import axios from "axios";
axios.defaults.timeout = 5000;
export default {
  components: {
    //注册组件为空
  },
  data() {
    //所定义的组件的数据
    return {
      drawer: false,
      direction: "ltr",
      value: false,
    };
  },
  methods: {
    getMsg() {
      let self = this;
      axios
        .get(apiPrefix + "application/getMenu")
        .then(function (response) {
          console.log(response);
          if (response.data) {
            localStorage.setItem(
              "events1",
              JSON.stringify(response.data.data.data)
            );
          }
        })
        .catch(function (error) {
          console.log(error);
          self.$alert(error);
        });
    },
  },
  mounted() {
    // this.getMsg();
    const tableData = [
      //作为数组输入数据
      {
        date: "2022-04-19",
        name: "鸡蛋",
        number: "10",
        disabled: true,
        numberEdit: false,
        foodEdit: false,
      },
      {
        date: "2022-04-19",
        name: "洋葱",
        number: "2",
        disabled: true,
        numberEdit: false,
        foodEdit: false,
        address: "上海市普陀区金沙江路 1517 弄",
      },
      {
        date: "2022-04-19",
        name: "黄瓜",
        number: "6",
        disabled: true,
        numberEdit: false,
        foodEdit: false,

        address: "上海市普陀区金沙江路 1519 弄",
      },
      {
        date: "2022-04-19",
        name: "番茄",
        number: "4",
        disabled: true,
        numberEdit: false,
        foodEdit: false,
      },
      {
        date: "2022-04-19",
        name: "咸鸭蛋",
        number: "?",
        disabled: true,
        numberEdit: false,
        foodEdit: false,
      },
      {
        date: "2022-04-19",
        name: "年糕",
        number: "?",
        disabled: true,
        numberEdit: false,
        foodEdit: false,
      },
      {
        date: "2022-04-19",
        name: "火腿",
        number: "?",
        disabled: true,
        numberEdit: false,
        foodEdit: false,
      },
      {
        date: "2022-04-19",
        name: "拉面",
        number: "2",
        disabled: true,
        numberEdit: false,
        foodEdit: false,
      },
      {
        date: "2022-04-19",
        name: "香肠",
        number: "?",
        disabled: true,
        numberEdit: false,
        foodEdit: false,
      },
      {
        date: "2022-04-19",
        name: "鲈鱼",
        number: "2",
        disabled: true,
        numberEdit: false,
        foodEdit: false,
      },
      {
        date: "2022-04-19",
        name: "牛排",
        number: "2",
        disabled: true,
        numberEdit: false,
        foodEdit: false,
      },
      {
        date: "2022-04-19",
        name: "火锅菜",
        number: "",
        disabled: true,
        numberEdit: false,
        foodEdit: false,
      },
      {
        date: "2022-04-19",
        name: "腌肉",
        number: "",
        disabled: true,
        numberEdit: false,
        foodEdit: false,
      },
      {
        date: "2022-04-19",
        name: "鸡排",
        number: "",
        disabled: true,
        numberEdit: false,
        foodEdit: false,
      },
      {
        date: "2022-04-19",
        name: "牛肉卷",
        number: "2",
        disabled: true,
        numberEdit: false,
        foodEdit: false,
      },
      {
        date: "2022-04-19",
        name: "烤肠",
        number: "2",
        disabled: true,
        numberEdit: false,
        foodEdit: false,
      },
    ];
    localStorage.setItem("food", JSON.stringify(tableData));
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 10px;
  font-size: large;
  display: block;
}

nav a.router-link-exact-active {
  color: #42b983;
}
/* in this case no space mean they are select the same element */
</style>
