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
    <el-table :data="bk" style="width: 100%">
      <el-table-column prop="name" label="菜譜名" width="180">
      </el-table-column>
    </el-table>
    <el-table :data="mf" style="width: 100%">
      <el-table-column prop="name" label="菜譜名" width="180">
      </el-table-column>
    </el-table>
    <el-table :data="hf" style="width: 100%">
      <el-table-column prop="name" :label="hf[0].name" width="180">
      </el-table-column>
    </el-table>
    <el-table :data="sup" style="width: 100%">
      <el-table-column prop="name" :label="sup[0].name" width="180">
      </el-table-column>
    </el-table>
    <el-table :data="dk" style="width: 100%">
      <el-table-column prop="name" label="菜譜名" width="180">
      </el-table-column>
    </el-table>
    <el-table :data="ss" style="width: 100%">
      <el-table-column prop="name" label="菜譜名" width="180">
      </el-table-column>
    </el-table>
    <el-table :data="dzt" style="width: 100%">
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
      bk: [],
      mf: [],
      hf: [],
      sup: [],
      dk: [],
      ss: [],
      dzt: [],
    };
  },
  methods: {
    initMenu() {
      var vegetable_dishIndex = 0;
      var meat_dishIndex = 0;
      var aquaticIndex = 0;
      var breakfastIndex = 0;
      var mfIndex = 0;
      var hfIndex = 0;
      var supIndex = 0;
      var dkIndex = 0;
      var ssIndex = 0;
      var dztIndex = 0;

      this.menuDataArr.forEach((item, index) => {
        if (item.name == "荤菜") {
          this.vegetable_dish = this.menuDataArr.slice(0, index); //从零开始索引
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
        if (item.name == "主食") {
          this.bk = this.menuDataArr.slice(breakfastIndex, index);
          mfIndex = index;
        }
        if (item.name == "半成品加工") {
          this.mf = this.menuDataArr.slice(mfIndex, index);
          hfIndex = index;
        }
        if (item.name == "汤与粥") {
          this.hf = this.menuDataArr.slice(hfIndex, index);
          supIndex = index;
        }
        if (item.name == "饮料") {
          this.sup = this.menuDataArr.slice(supIndex, index);
          dkIndex = index;
        }
        if (item.name == "酱料和其它材料") {
          debugger;
          this.dk = this.menuDataArr.slice(dkIndex, index);
          ssIndex = index;
        }
        if (item.name == "甜品") {
          debugger;

          this.ss = this.menuDataArr.slice(ssIndex, index);   //酱料和其它材料
          dztIndex = index;
        }

        this.dzt = this.menuDataArr.slice(   //甜点数组
          dztIndex,
          this.menuDataArr.length - 1
        );
      });
      debugger;
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
