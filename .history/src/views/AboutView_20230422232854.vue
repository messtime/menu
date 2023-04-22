<template>
  <div class="about">
    <div class="container">
      <h1>随机菜品</h1>
      <p class="menu">{{ type }} {{ result }}</p>
      <el-button type="success" v-on:click="generateMenu"
        >随机点击生成</el-button
      >
      <el-button type="success" v-on:click="generate"
        >已有食材随机点击生成</el-button
      >
    </div>

        <Detail :dataArr="selectArr"> </Detail>

    <h1>现有食材和菜谱模糊列表</h1>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane
        :label="this.typeMap.vegetable_dish + ': ' + vegetable_dish.length"
        name="vegetable_dish"
      >
        <Detail :dataArr="vegetable_dish"> </Detail>
      </el-tab-pane>
      <el-tab-pane
        :label="this.typeMap.meat_dish + ': ' + meat_dish.length"
        name="meat_dish"
      >
        <Detail :dataArr="meat_dish"> </Detail>
      </el-tab-pane>
      <el-tab-pane
        :label="this.typeMap.aquatic + ': ' + aquatic.length"
        name="aquatic"
      >
        <Detail :dataArr="aquatic"> </Detail>
      </el-tab-pane>
      <el-tab-pane
        :label="this.typeMap.breakfast + ': ' + breakfast.length"
        name="breakfast"
      >
        <Detail :dataArr="breakfast"> </Detail>
      </el-tab-pane>
      <el-tab-pane
        :label="this.typeMap.staple + ': ' + staple.length"
        name="staple"
      >
        <Detail :dataArr="staple"> </Detail>
      </el-tab-pane>

      <el-tab-pane
        :label="this.typeMap.semi_finished + ': ' + semi_finished.length"
        name="semi_finished"
      >
        <Detail :dataArr="semi_finished"> </Detail>
      </el-tab-pane>

      <el-tab-pane :label="this.typeMap.soup + ': ' + soup.length" name="soup">
        <Detail :dataArr="soup"> </Detail>
      </el-tab-pane>

      <el-tab-pane
        :label="this.typeMap.drink + ': ' + drink.length"
        name="drink"
      >
        <Detail :dataArr="drink"> </Detail>
      </el-tab-pane>

      <el-tab-pane
        :label="this.typeMap.condiment + ': ' + condiment.length"
        name="condiment"
      >
        <Detail :dataArr="condiment"> </Detail>
      </el-tab-pane>
      <el-tab-pane
        :label="this.typeMap.dessert + ': ' + dessert.length"
        name="dessert"
      >
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
      selectArr:[],
      menuArr: [],
      breakfast: [],
      meat_dish: [],
      aquatic: [],
      soup: [],
      dessert: [],
      staple: [],
      condiment: [],
      drink: [],
      semi_finished: [],
      vegetable_dish: [],
      activeName: "vegetable_dish",
      allArr: [],
      tableData: [],
      result: "",
      type: "",
      typeMap: {
        aquatic: "11",
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
    generateMenu() {
      debugger;
      // var menu = document.getElementById("menu");
      // menu.innerHTML =
      //   this.menuArr[Math.floor(Math.random() * this.menuArr.length)];
      var select = this.allArr[Math.floor(Math.random() * this.allArr.length)]; //将allarr数组的值赋给select
      var list = select.list;
      this.type = this.typeMap[select.name] + ":  ";
      var result = list[Math.floor(Math.random() * list.length)];
      this.result = result.name;
      this.activeName = select.name;
      this.selectArr = [result]
      //随机按钮，随机一个主单然后在主单里再随机一个菜
    },
    generate() {
      var select =
        this.tableData[Math.floor(Math.random() * this.tableData.length)]; //tableData
      var list = select.menu;
      this.type = this.typeMap[select.type] + ":  ";
      debugger;
      this.result = list.name;
      this.activeName = select.type;
      this.selectArr = [list]
      // var flag = false;
      // this.allArr.forEach((menuItem) => {
      //   if (menuItem.name == type)
      //     menuItem.list.forEach((listItem) => {
      //       debugger;
      //       if (listItem.name == result) {
      //         flag = true;
      //       }
      //     });
      // });
      // if (flag) {
      //   this.type = this.typeMap[type] + ":  ";
      //   this.result = result;
      //   this.activeName = type;
      // } else {
      //   this.generate();
      // }
    },
    handleClick(tab, event) {
      console.log(tab, event);
    }, //调试用

    initFood() {
      debugger;
      var food = JSON.parse(localStorage.getItem("food"));
      if (food.length > 0) {
        food.forEach((foodItem) => {
          if (this.allArr.length > 0) {
            this.allArr.forEach((menuItem) => {
              menuItem.list.forEach((listItem) => {
                //方法用于调用数组的每个元素，并将元素传递给回调函数。
                if (listItem && listItem.materials) {
                  Object.keys(listItem.materials).forEach((key) => {
                    if (key.indexOf(foodItem.name) >= 0) {
                      this.tableData.push({
                        food: foodItem.name,
                        menu: listItem,
                        type: menuItem.name,
                      });
                    }
                  });
                }
              });
            });
          }
        });
        debugger;
        if (this.tableData.length > 0) {
          this.tableData.forEach((item) => {
            switch (item.type) {
              case "breakfast":
                this.breakfast.push(item.menu);
                break;
              case "meat_dish":
                this.meat_dish.push(item.menu);

                break;
              case "aquatic":
                this.aquatic.push(item.menu);

                break;
              case "soup":
                this.soup.push(item.menu);

                break;
              case "dessert":
                this.dessert.push(item.menu);

                break;
              case "staple":
                this.staple.push(item.menu);

                break;
              case "condiment":
                this.condiment.push(item.menu);

                break;
              case "drink":
                this.drink.push(item.menu);

                break;
              case "semi_finished":
                this.semi_finished.push(item.menu);

                break;
              default:
                this.vegetable_dish.push(item.menu);

              // vegetable_dish
            }
          });
        }
      }
    },
  },

  mounted() {
    debugger;
    this.allArr = [
      { name: "breakfast", list: breakfast },
      { name: "meat_dish", list: meat_dish },
      { name: "aquatic", list: aquatic },
      { name: "soup", list: soup },
      { name: "dessert", list: dessert },
      { name: "staple", list: staple },
      { name: "condiment", list: condiment },
      { name: "drink", list: drink },
      { name: "semi_finished", list: semi_finished },
      { name: "vegetable_dish", list: vegetable_dish },
    ];
    this.initFood();
    // 菜单数组
    // 生成随机菜品
  },
};
</script>

<style lang="scss" scoped>
.about {
  .menu {
    min-height: 53px;
  }
}
</style>