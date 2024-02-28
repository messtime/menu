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
      <el-table :data="cardPwdArr" style="width: 280px;margin: 0 auto; display: inline-block;">
        <el-table-column prop="name" label="特殊卡名称" width="auto">
        </el-table-column>
        <el-table-column prop="pwd" label="特殊密码" width="auto">
        </el-table-column>
      </el-table>
      <span style="width: 40px;display: inline-block;"> </span>
      <el-table :data="dataArr" style="width: 130px;margin: 0 auto;    display: inline-block;">
        <el-table-column type="index" label="编号" width="auto">
        </el-table-column>
        <el-table-column prop="value" label="数额" width="auto">
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
        name: "lw 建行卡   8338",
        pwd: '19',
      }, {
        name: "lw 招商卡   9474",
        pwd: '19',
      }, {
        name: "lw妈 农行卡 1945",
        pwd: '19',
      }, {
        name: "tq 建行卡 8639",
        pwd: '19',
      }, {
        name: "tq妈 平安卡 tq手机",
        pwd: '62',
      }, {
        name: "tq妈 建行卡 tq手机",
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
}
</style>