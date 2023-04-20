<template>
  <div class="home">

    <el-table :data="jsonDataArr" style="width: 100%">
      <el-table-column prop="materials" label="材料" width="180">
      </el-table-column>
      <el-table-column prop="steps" label="操作" width="180"> </el-table-column>
      <el-table-column prop="additional" label="附加内容" width="180">
      </el-table-column>
      <el-table-column prop="desc" label="食材" width="180"> </el-table-column>
      <el-table-column prop="name" label="菜品名" width="180"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
// @ is an alias to /src
import jsonData from "@/data/data/aquatic/白灼虾.json";
export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      jsonDataArr: [jsonData],
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
    initFood() {
      debugger;
      var food = JSON.parse(localStorage.getItem("food"));
      food.forEach((foodItem) => {
        this.menuArr.forEach((menuItem) => {
          debugger;
          if (menuItem.indexOf(foodItem.name) >= 0) {
            this.tableData.push({
              food: foodItem.name,
              // number: foodItem.number,
              menu: menuItem,
            });
          }
        });
      });
    },
  },
  mounted() {
    this.initFood();
    // 菜单数组
    // 生成随机菜品
  },
};
</script>
<style>
.container {
  text-align: center;
  margin-top: 50px;
}
h1 {
  font-size: 36px;
  color: green;
}
p {
  font-size: 24px;
}
button {
  font-size: 24px;
  padding: 10px 20px;
  color: white;
  background-color: green;
  border-radius: 5px;
  border: none;
}
</style>
