<template>
  <div>
    <!-- 食材列表 -->
    <table>
      <thead>
        <tr>
          <th>食材名称</th>
          <th>数量</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(count, ingredient) in ingredients" :key="ingredient">
          <td>{{ ingredient }}</td>
          <td>{{ count }}</td>
          <td>
            <button @click="decrease(ingredient)">-</button>
            <button @click="increase(ingredient)">+</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- 推荐菜谱按钮 -->
    <button @click="recommend()">推荐菜谱</button>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      ingredients: {
        // 食材对象
        鸡蛋: 0,
        面粉: 0,
        油: 0,
        水: 0,
        鸡胸: 0,
        青椒: 0,
        番茄: 0,
        // 在这里放材料
      },
      recipes: [
        // 菜谱数组
        {
          name: "煎鸡蛋",
          ingredients: ["鸡蛋", "油"]
        },
        {
          name: "番茄炒鸡蛋",
          ingredients: ["鸡蛋", "番茄"]
        },
        {
          name: "青椒鸡胸",
          ingredients: ["鸡胸", "青椒", "油"]
        },
        {
          name: "面粉馒头",
          ingredients: ["面粉", "水"]
        }
        // 这里是菜谱
      ]
    };
  },
  methods: {
    decrease(ingredient) {
      // 减少食材数量
      if (this.ingredients[ingredient] > 0) {
        this.ingredients[ingredient]--;
      }
    },
    increase(ingredient) {  // 增加食材数量
     
      this.ingredients[ingredient]++;
    },
    recommend() {
      // 随机推荐食谱
      // 获取当前可用的食材
      const availableIngredients = Object.keys(this.ingredients).filter(
        ingredient => this.ingredients[ingredient] > 0
      );

      // 遍历所有菜谱，找到可制作的菜谱
      const availableRecipes = this.recipes.filter(recipe =>
        recipe.ingredients.every(ingredient =>
          availableIngredients.includes(ingredient)
        )
      );

      // 随机选择一道菜谱，并展示出来
      if (availableRecipes.length > 0) {
        const randomIndex = Math.floor(Math.random() * availableRecipes.length);
        const recipe = availableRecipes[randomIndex];
        alert(`推荐制作：${recipe.name}`);
      } else {
        alert("没有可制作的菜品，请先购买食材");
      }
    }
  }
};
</script>
  <style>
</style>