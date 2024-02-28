<!--
 * @Author: lewei.li@qq.com
 * @Date: 2024-02-28
 * @Description: Description
-->
<template>
  <div class="credit-card">
    <div class="container">
      <h1>随机刷卡额</h1>
      <el-button type="success" v-on:click="generate">点击随机生成</el-button>
    </div>
    <div class="table-container">
      <el-table :data="cardPwdArr" style="width: 200px;margin: 0 auto; display: inline-block;overflow: hidden;">
        <el-table-column prop="name" label="名称" width="70px">
        </el-table-column>
        <el-table-column prop="card" label="卡号" width="70px">
        </el-table-column>
        <el-table-column prop="pwd" label="mm" width="50px">
        </el-table-column>
      </el-table>
      <!-- <span style="width: 5px;display: inline-block;"> </span> -->
      <el-table :data="dataArr" style="width: 120px;margin: 0 auto; font-size: 20px; display: inline-block;">
        <el-table-column type="index" label="编号" width="60px">
        </el-table-column>
        <el-table-column prop="value" label="数额" width="60px">
        </el-table-column>
      </el-table>
    </div>

  </div>
</template>
<script>

export default {
  name: "CreditCardView",
  components: {
  },
  data() {
    return {
      dataArr: [],
      cardPwdArr: [{
        name: "lw建行",
        card: '8338',
        pwd: '19',
      }, {
        name: "lw招商",
        card: '9474',
        pwd: '19',
      }, {
        name: "yy农行",
        card: '1945',
        pwd: '19',
      }, {
        name: "sl建行",
        card: '8639',

        pwd: '19',
      }, {
        name: "zj平安",
        card: 'tq手机',
        pwd: '62',
      }, {
        name: "zj建行",
        card: 'tq手机',
        pwd: '62',
      },
      ]
    };
  },
  methods: {
    generate() {
      const arr = [];
      let isMoreThan700 = true;
      function isAllSame(value) {
        let result = true;
        let data = value % 10;
        while (value) {
          value = Math.floor(value / 10);
          if (value && data != value % 10) {
            return false;
          }
        }
        return true;
      }
      for (let index = 0; index < 6;) {
        let value = (600 + Math.random() * 200).toFixed(0);
        if (isAllSame(value)) {
          continue;
        }
        if (value > 700 && isMoreThan700) {
          arr.push({ value });
          isMoreThan700 = false;
          index++;
        } else if (value < 700 && !isMoreThan700) {
          arr.push({ value });
          isMoreThan700 = true;
          index++;
        }
      }
      this.dataArr = arr;
    },
  },
  mounted() {
    this.generate();
  },
};
</script>

<style lang="scss" scoped>
.credit-card {
  text-align: center;
  margin-top: -80px;

  .el-table__body-wrapper {
    overflow: hidden !important;

  }
}
</style>