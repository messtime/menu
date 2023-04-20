<template>
  <div class="all-menu">
    <el-table :data="vegetable_dish" style="width: 100%">
      <el-table-column prop="name" label="菜譜名" width="180">
      </el-table-column>
    </el-table>
    <el-table :data="meat_dish" style="width: 100%">
      <el-table-column prop="name" label="菜譜名" width="180">
      </el-table-column>
    </el-table>
    <el-table :data="aquatic" style="width: 100%">
      <el-table-column prop="name" label="菜譜名" width="180">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
// @ is an alias to /src
import menuData from "@/data/menu.json";

export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      menuDataArr: menuData,
      vegetable_dish: [],
      aquatic: [],
      meat_dish: [],
      早餐: [],
      主食: [],
      半成品加工: [],
      汤与粥: [],
      饮料: [],
      酱料和其它材料: [],
      甜品: [],
    };
  },
  methods: {
    initMenu() {
      var vegetable_dishIndex = 0;
      var meat_dishIndex = 0;

      var aquaticIndex = 0;
      var breakfastIndex = 0;

      this.menuDataArr.forEach((item, index) => {
        if (item.name == "素菜") {

        }
        if (item.name == "荤菜") {
          this.vegetable_dish = this.menuDataArr.slice(0, index);
          vegetable_dishIndex = index;
        }
        if (item.name == "水产") {
          this.meat_dish = this.menuDataArr.slice(vegetable_dishIndex, index);
          aquaticIndex = index;
        }
        if (item.name == "早餐") {
          this.aquatic = this.menuDataArr.slice(aquaticIndex, index);
          breakfastIndex = index;
        }
      });
    },
  },
  mounted() {
    this.initMenu();

    // 菜单数组
    // 生成随机菜品
  },
};
</script>
<style scoped>
.all-menu {
  display: flex;
}
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
