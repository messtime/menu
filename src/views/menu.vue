<template>
  <div class="bk">
    <p>请输入菜品</p>
    <input type="text" id="myInput" v-model="inputValue" />

    <div><button class="1" @click="dis()">输入</button></div>
    <button @click="search()">百度搜索菜谱</button>
    <button @click="clear()">清除菜单</button>
    <button v-on:click="generateMenu()">随机吃一个</button>
    <p id="mylist">今天想吃什么？</p>
    <div id="myLis">
      <li v-for="item in items" :key="item">{{ item }}</li>
    </div>
  </div>
</template>
<!-- V-modei绑定将表单元素中的值与组件实例中的一个属性绑定起来，从而让它们的变化互相影响。 -->
<!-- @click相当于oneclick事件 -->
<!-- v-for 循环渲染表单元素，重复生成元素内容 -->
<script>
export default {
  name: "menuxxx", //调用组件
  components: {
    //注册组件为空
  },
  data() {
    //所定义的组件的数据
    return {
      items: [],
      inputValue: "",
    };
  },
  methods: {
       //存储需要使用的函数
    generateMenu() {
      var mylist = document.getElementById("mylist");
      mylist.innerHTML =
        this.items[Math.floor(Math.random() * this.items.length)];
    },   //将数组的一个元素插入到id为menu的innerhtml里
    refresh() {
      var menulist = localStorage.getItem("menulist"); //定义一个变量menulist来调用getItem("menulist")方法从localStorage中获取"menulist"的值

      menulist = JSON.parse(menulist); //将local里本来只能输出的字符串类型，变为我们能使用的对象
      if (menulist) {
        this.items = menulist; //如果menulist为真，将menulist的值 给到item
      }
    }, //this在事件中代表的是事件本身
    search() {
      window.open("https://www.baidu.com/s?wd=" + this.inputValue, "_black");
    },
    dis() {
      if (this.inputValue) {
        this.items.push(this.inputValue); //push用于在数组里添加新元素
        localStorage.setItem("menulist", JSON.stringify(this.items)); //将转化为字符串类型的items值存储到menulist里面
      } else {
        //localStorage.getItem(key):获取指定key本地存储的值
        //localStorage.setItem(key,value)：将value存储到key字段
        this.$alert("请输入菜品");
      }
    },
    clear() {
      localStorage.clear(); //使用clear方法清除本地的storage储存
      this.items = [];
    },
  },
  mounted() {
    // 菜单数组
    this.refresh();
    //  var tt = ["宫保鸡丁", "红烧肉", "水煮鱼", "麻婆豆腐", "糖醋排骨", "回锅肉"]
    //               localStorage.setItem('menulist', JSON.stringify(tt))

    // 生成随机菜品
  },
};
</script>

<style scoped>
button {
  cursor: pointer;
  padding: 10px;
  font-size: 24px;
}
#mylist {
}
</style>
<!--  cursor: pointer;光标移到button上的时候改为小手样式-->
