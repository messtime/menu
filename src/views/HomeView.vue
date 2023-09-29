<template>
  <div class="home">
    <h1>基础菜单</h1>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane :label="this.typeMap.vegetable_dish + ': '+ vegetable_dish.length" name="vegetable_dish">
        <Detail :dataArr="vegetable_dish"> </Detail>
      </el-tab-pane>
      <el-tab-pane :label="this.typeMap.meat_dish+ ': '+ meat_dish.length" name="meat_dish">
        <Detail :dataArr="meat_dish"> </Detail>
      </el-tab-pane>
      <el-tab-pane :label="this.typeMap.aquatic+ ': '+ aquatic.length" name="aquatic">
        <Detail :dataArr="aquatic"> </Detail>
      </el-tab-pane>
      <el-tab-pane :label="this.typeMap.breakfast+ ': '+ breakfast.length" name="breakfast">
        <Detail :dataArr="breakfast"> </Detail>
      </el-tab-pane>
      <el-tab-pane :label="this.typeMap.staple+ ': '+ staple.length" name="staple">
        <Detail :dataArr="staple"> </Detail>
      </el-tab-pane>

      <el-tab-pane :label="this.typeMap.semi_finished+ ': '+ semi_finished.length" name="semi_finished">
        <Detail :dataArr="semi_finished"> </Detail>
      </el-tab-pane>

      <el-tab-pane :label="this.typeMap.soup+ ': '+ soup.length" name="soup">
        <Detail :dataArr="soup"> </Detail>
      </el-tab-pane>

      <el-tab-pane :label="this.typeMap.drink+ ': '+ drink.length" name="drink">
        <Detail :dataArr="drink"> </Detail>
      </el-tab-pane>

      <el-tab-pane :label="this.typeMap.condiment+ ': '+ condiment.length" name="condiment">
        <Detail :dataArr="condiment"> </Detail>
      </el-tab-pane>
      <el-tab-pane :label="this.typeMap.dessert+ ': '+ dessert.length" name="dessert">
        <Detail :dataArr="dessert"> </Detail>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
// @ is an alias to /src
import breakfast from "@/data/breakfast.js";
import aquatic from "@/data/aquatic.js";
import soup from "@/data/soup.js";
import dessert from "@/data/dessert.js";
import staple from "@/data/staple.js";
import condiment from "@/data/condiment.js";
import meat_dish from "@/data/meat_dish.js";
import drink from "@/data/drink.js";
import semi_finished from "@/data/semi_finished.js";
import vegetable_dish from "@/data/vegetable_dish.js";
import Detail from "@/components/Detail.vue";
export default {
  name: "HomeView",
  components: {
    Detail,
  },
  data() {
    return {
      breakfast: breakfast,
      meat_dish: meat_dish,
      aquatic: aquatic,
      soup: soup,
      dessert: dessert,
      staple: staple,
      condiment: condiment,
      drink: drink,
      semi_finished: semi_finished,
      vegetable_dish: vegetable_dish,
      activeName: "vegetable_dish",
      typeMap: {
        aquatic: "水产",
        meat_dish: "荤菜",
        soup: "汤与粥",
        breakfast: "早餐",
        dessert: "甜品",
        staple: "主食",
        condiment: "酱料和其它材料",
        drink: "饮料",
        semi_finished: "半成品加工",
        vegetable_dish: "素菜",
      },
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
  mounted() {
    // 菜单数组
    // 生成随机菜品
  },
};
</script>
<style>
.home {
  width: 80%;
  margin: 0 auto;
  margin-bottom: 100px;
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
