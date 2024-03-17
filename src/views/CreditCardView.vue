<!--
 * @Author: lewei.li@qq.com
 * @Date: 2024-02-28
 * @Description: Description
-->

<template>
  <div class="credit-card" style="padding: 0 30px">
    <!-- <div class="container">
      <el-tabs
        tabPosition="left"
        v-model="activeName"
        :span-method="objectSpanMethod"
        @tab-click="handleClick"
      >
        <el-tab-pane label="幺玖捌" name="first">
          <el-table
            :data="cardPwdArr"
            height="200"
            style="display: inline-block"
          >
            <el-table-column prop="person" width="65px"> </el-table-column>
            <el-table-column prop="name" width="65px"> </el-table-column>
            <el-table-column prop="card" width="65px">
            </el-table-column> </el-table
        ></el-tab-pane>
        <el-tab-pane label="陆贰" name="second"
          ><el-table
            :data="cardPwdArr2"
            height="200"
            style="display: inline-block"
          >
            <el-table-column prop="person" width="65px"> </el-table-column>
            <el-table-column prop="name" width="65px"> </el-table-column>
            <el-table-column prop="card" width="65px">
            </el-table-column> </el-table
        ></el-tab-pane>
      </el-tabs>
    </div> -->
    <!-- ------ -->
    <el-button v-on:click="generate" style="width: 100%">随机生成</el-button>
    <div class="table-container">
      <el-table
        ref="multipleTable"
        :data="dataArr"
        style="margin: 0 auto; font-size: 20px; display: inline-block"
        @selection-change="handleSelectionChange"
      >
        <!-- <el-table-column type="selection" width="55"> </el-table-column> -->
        <el-table-column type="index" label="编号" width="60px">
        </el-table-column>
        <el-table-column prop="value" label="数额" width="60px">
        </el-table-column>
        <el-table-column
          v-for="item in cardSelect"
          prop="value"
          width="120px"
          :label="item"
        >
          <template slot-scope="scope">
            <el-checkbox v-model="scope.row.checked"></el-checkbox> </template
        ></el-table-column>
      </el-table>
    </div>
    <div>
      <el-collapse @change="handleChange" v-model="activeNames">
        <el-collapse-item title="list of cards" name="1">
          <el-checkbox-group
            v-model="checkcards_choose"
            @change="handleCheckAllChange"
          >
            <el-checkbox-button
              v-for="item in cards_choose"
              :label="item.bank + item.number[1]"
              :key="item.number[2]"
              >{{
                item.person + item.bank + item.number[2]
              }}</el-checkbox-button
            >
          </el-checkbox-group>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
import cards_choose from "@/data/cards_choose";
export default {
  name: "CreditCardView",
  components: {},
  data() {
    return {
      cards_choose,
      activeNames: ["1"],
      selectCard: "",
      cardSelect: [],
      dataArr: [],
      checkcards_choose: [],
      multipleSelection: [],
    };
  },
  methods: {
    handleClick(tab, event) {
      debugger;
      console.log(tab, event);
    },
    handleChange(val) {
      console.log(val);
    },
    handleCheckAllChange(val) {
      this.$message("click on item " + val[val.length - 1]);
      this.selectCard = val;
      this.cardSelect = this.selectCard;
    },
    handleSelectionChange(val) {
      debugger;
      this.multipleSelection = val;
      for (let i = 0; i < val.length; i++) {
        this.dataArr[val[i].index].checked = true;
      }
    },
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
      for (let index = 0; index < 6; ) {
        let value = (600 + Math.random() * 200).toFixed(0);
        if (isAllSame(value)) {
          continue;
        }
        if (value > 700 && isMoreThan700) {
          arr.push({ value, index, checked: false });
          isMoreThan700 = false;
          index++;
        } else if (value < 700 && !isMoreThan700) {
          arr.push({ value, index, checked: false });
          isMoreThan700 = true;
          index++;
        }
      }
      this.dataArr = arr;
    },
    // cardPwdArr2Fun() {
    //   // this.cardPwdArr = arr;
    //   debugger;
    //   for (let i = 0; i < this.cardPwdArr.length; i++) {
    //     let item = this.cardPwdArr[i]
    //     if (item.person !== 'zj') continue;
    //     if (item.person == 'zj') {
    //       this.cardPwdArr2.push(item)
    //     }
    //   }
    // }

    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        if (rowIndex % 2 === 0) {
          return {
            rowspan: 2,
            colspan: 1,
          };
        } else {
          return {
            rowspan: 0,
            colspan: 0,
          };
        }
      }
    },
  },

  mounted() {
    // debugger;

    this.generate();
    // this.cardPwdArr2Fun();
  },
};
</script>

<style lang="scss" scoped>
.credit-card {
  text-align: left;
  // margin-top: -80px;
  // margin-left: 20px;

  .el-table__body-wrapper {
    overflow: hidden !important;
  }

  .el-tab-pane {
    margin-top: -45px;
  }
}

.el-table .el-table__cell {
  // padding: 2px 0;
}

.el-tabs.el-tabs--left {
  // display: inline-block;
}

.el-checkbox-button {
  margin: 5px;
}

.addpage {
  display: inline-block;
  position: absolute;
  text-align: right;
}

.el-icon-arrow-down {
  font-size: 12px;
}
:deep .el-checkbox-group .el-checkbox-button .el-checkbox-button__inner {
  border-radius: 30px;
  border-left: 1px solid #dcdfe6;
  background-color: #f0f0f0;
  padding: 10px;
}
:deep .el-checkbox-button.is-checked .el-checkbox-button__inner {
  // color: #fff;
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
}
:deep .el-checkbox-button.is-focus .el-checkbox-button__inner {
  // color: #409eff;
  border-color: #409eff;
}
// .XXXX {
//   display: block;
// }
// -----------------------------------------
</style>
