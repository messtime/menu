<template>
  <div class="home">
    <div class="container">
      <h1>随机菜品</h1>
      <p id="menu"></p>
      <button v-on:click="generateMenu()">点击生成</button>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  data() {
    return {
      menuArr:["宫保鸡丁", "红烧肉", "水煮鱼", "麻婆豆腐", "糖醋排骨", "回锅肉"]
    }
  },
  methods: {
    generateMenu() {
      var menu = document.getElementById("menu");
      menu.innerHTML = this.menuArr[Math.floor(Math.random() * this.menuArr.length)];
    }
   
  },
  mounted() {
            // 菜单数组
  
  // 生成随机菜品
  }
}
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