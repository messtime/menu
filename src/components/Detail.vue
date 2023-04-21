<template>
  <div class="detail">
    <el-table :data="dataArr" style="width: 100%">
      <el-table-column type="index" label="编号" width="auto">
      </el-table-column>
      <el-table-column prop="name" label="菜品名" width="180">
      </el-table-column>
      <el-table-column prop="desc" label="介绍" width="180"> </el-table-column>

      <el-table-column prop="materials" label="材料" width="180">
        <template slot-scope="scope">
          <ul>
            <li v-for="(value, key, index) in scope.row.materials" :key="index">
              {{ key }}
            </li>
          </ul>
        </template>
      </el-table-column>
      <el-table-column prop="steps" label="操作" width="auto">
      </el-table-column>
      <el-table-column prop="additional" label="附加内容" width="180">
      </el-table-column>
    </el-table>
  </div>
</template>
    
    <script>
// @ is an alias to /src

export default {
  name: "test11",
  components: {},
  props: {
    dataArr: [],
  },
  data() {
    return {
      //  menuArr:["宫保鸡丁", "红烧肉", "水煮鱼", "麻婆豆腐", "糖醋排骨", "回锅肉"]
    };
  },
  methods: {
    generateMenu() {
      var menu = document.getElementById("menu");
      menu.innerHTML =
        this.menuArr[Math.floor(Math.random() * this.menuArr.length)];
    },
  },
  mounted() {
    // 菜单数组
    // 生成随机菜品
  },
};
</script>
    
<style scoped>
</style>