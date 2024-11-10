<!--
 * @Author: lewei.li@okg.com
 * @Date: 2024-11-10
 * @Description: 
-->
<template>
  <div>
    <div id="btn">默认按钮</div>
    <el-progress :percentage="percentage" :color="customColor"></el-progress>

    <el-progress :percentage="percentage" :color="customColorMethod"></el-progress>

    <el-progress :percentage="percentage" :color="customColors"></el-progress>
    <div>
      <el-button-group>
        <el-button icon="el-icon-minus" @click="decrease"></el-button>
        <el-button icon="el-icon-plus" @click="increase"></el-button>
      </el-button-group>
    </div>
    <!-- <el-button type="success" @click="getMsg">获取服务端数据</el-button> -->

    <div>{{ nowDate }}</div>

    <!-- <el-button type="success" @click="sendMsg">发送数据给服务端</el-button> -->


  </div>
</template>
<script>


export default {
  components: {
    //注册组件为空
  },
  data() {
    //所定义的组件的数据
    return {
      nowDate: new Date(),
      percentage: 20,
      customColor: '#409eff',
      customColors: [
        { color: '#f56c6c', percentage: 20 },
        { color: '#e6a23c', percentage: 40 },
        { color: '#5cb87a', percentage: 60 },
        { color: '#1989fa', percentage: 80 },
        { color: '#6f7ad3', percentage: 100 }
      ]

    };
  },
  methods: {
    customColorMethod(percentage) {
      if (percentage < 30) {
        return '#909399';
      } else if (percentage < 70) {
        return '#e6a23c';
      } else {
        return '#67c23a';
      }
    },
    increase() {
      this.percentage += 10;
      if (this.percentage > 100) {
        this.percentage = 100;
      }
    },
    decrease() {
      this.percentage -= 10;
      if (this.percentage < 0) {
        this.percentage = 0;
      }
    },
    updateNowData() {
      setInterval(() => {
        this.nowDate = new Date();
      }, 1000);
    },
    // getMsg() {

    // },
  },
  mounted() {
    this.updateNowData();
  },
};
</script>
<style scoped>
#btn {
  height: 20px;
  padding: 5px 10px;
  color: green;
  border: 1px solid #000;
  border-radius: 10px;
  display: inline-block;
}
</style>