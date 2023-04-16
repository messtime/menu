<template>
  <div>
    <div class="box1">
      1
      <div class="box2">
        2
        <div class="box3">
          3
          <div class="box4">4</div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
// @ is an alias to /src

// import vueConfig from 'vue.config';

export default {
  name: "test11",
  components: {},
  data() {
    return {
      //  menuArr:["宫保鸡丁", "红烧肉", "水煮鱼", "麻婆豆腐", "糖醋排骨", "回锅肉"]
    };
  },
  methods: {
    generateMenu() {
      var menu = document.getElementById("menu");
      menu.innerHTML = this.menuArr[
        Math.floor(Math.random() * this.menuArr.length)
      ];
    }
  },

  beforeCreate() {
    console.log("开始");
  },

  created() {
    console.log("然后");
  },

  beforeMount() {
    console.log("甲");
  },

  mounted() {
    console.log("乙");
  },

  beforeUpdate() {
    console.log("丙");
  },

  updated() {
    console.log("丁");
  },

  activated() {
    console.log("茂");
  },

  deactivated() {
    console.log("己");
  },

  beforeDestroy() {
    console.log("庚");
  },

  destroyed() {
    console.log("辛");
  }

  // errorCaptured() {
  //   console.log("壬");
  // }
};
</script>
  <style>
.container {
}
</style>
<style>
.box1 {
  width: 400px;
  height: 400px;
  background-color: rgb(242, 72, 15);
}
.box2 {
  width: 300px;
  height: 300px;
  background-color: rgb(28, 181, 89);
}
.box3 {
  width: 200px;
  height: 200px;
  background-color: rgb(78, 123, 160);
}
.box4 {
  width: 100px;
  height: 100px;
  background-color: rgb(255, 240, 243);
}
.box1,
.box2,
.box3 {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.box4 {
  top: 0px;
  left: 0px;
  position: relative;
}
.box3 {
  position: relative;
}
.box2 {
  position: absolute;
}
</style>
  
