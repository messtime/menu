<template>
  <div class="about">
    <div class="container">
      <h1>随机菜品</h1>
      <p id="menu"></p>
      <button v-on:click="generateMenu()">随机点击生成</button>
    </div>
    <h1>现有食材和菜谱模糊列表</h1>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="menu" label="菜品" width="180"> </el-table-column>
      <el-table-column prop="food" label="食材" width="180"> </el-table-column>
    </el-table>
    
  </div>
</template>
<script>
// @ is an alias to /src
import menuArrJson from "@/data/menu.json";

export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      jsonDataArr: [jsonData],
      menuArr:[],
      tableData: [
        {
          name: "xx",
          label: "x",
        },
      ],
    };
  },
  methods: {
    generateMenu() {
      var menu = document.getElementById("menu");
      menu.innerHTML =
        this.menuArr[Math.floor(Math.random() * this.menuArr.length)];
    },
    generate() {},


  },
  mounted() {
    // 菜单数组
    // 生成随机菜品
  },
};
</script>