<template>
    <div >
    <div>方案1</div>
    <div class="red"></div>
    <div class="flex">
        <div class="left"></div>
        <div class="right"></div>
    </div>
    <div class="green"></div>
    <div>方案2</div>
    <div class="red"></div>
    <div class="inline">
        <div class="left"></div>
        <div class="right"></div>
    </div>
    <div class="green"></div>
  
    <div>方案3</div>
    <div class="red"></div>
    <div class="float">
        <div class="left"></div>
        <div class="right"></div>
    </div>
    <div class="green"></div>
    <div>方案4</div>
  
  
    <div class="red"></div>
    <div class="abs">
        <div class="left"></div>
        <div class="right"></div>
    </div>
    <div class="green"></div>
  </div>
    </template>
    
    <script>
    // @ is an alias to /src
    
    export default {
      name: 'test11',
      components: {
        
      },
      data() {
        return {
        //  menuArr:["宫保鸡丁", "红烧肉", "水煮鱼", "麻婆豆腐", "糖醋排骨", "回锅肉"]
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
    
    <style scoped>
    div {
        height: 100px;
    }
  
    .red {
        background-color: rgb(255, 127, 146);
    }
  
    .left {
        background-color: aquamarine;
    }
  
    .right {
        background-color: bisque;
    }
  
    .green {
        background-color: aqua;
    }
  
    .flex {
        display: flex;
    }
  
    .flex .left {
        flex: 3
    }
  
    .flex .right {
        flex: 2
    }
  
    .inline {
        font-size: 0;
    }
  
    .inline .left {
        display: inline-block;
        width: 60%;
    }
  
    .inline .right {
        display: inline-block;
        width: 40%;
  
    }
  
    .float {
        clear: both;
    }
  
    .float .left {
        float: left;
        width: 60%;
    }
  
    .float .right {
        float: right;
        width: 40%;
    }
  
    
  
    .abs .left {
        position: absolute;
        width: 60%;
    }
  
    .abs .right {
        position: absolute;
        width: 40%;
        right: 0;
    }
  </style>