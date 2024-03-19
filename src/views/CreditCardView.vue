<!--
 * @Author: lewei.li@qq.com
 * @Date: 2024-02-28
 * @Description: Description
-->

<template>
  <div class="credit-card" style="padding: 0 10px">
    <el-row :gutter="10">
      <el-col :span="8"
        ><el-button v-on:click="generate" style="width: 100%"
          >随机生成</el-button
        ></el-col
      >
      <el-col :span="8"
        ><el-button v-on:click="saveMenu" style="width: 100%"
          >保存</el-button
        ></el-col
      >
      <el-col :span="8"
        ><el-button v-on:click="exportimg" style="width: 100%"
          >导出图片</el-button
        ></el-col
      >
    </el-row>
    <div class="cardsList">
      <el-collapse @change="handleChange" v-model="activeNames">
        <el-collapse-item name="1">
          <el-checkbox-group
            v-model="checkcards_choose"
            @change="handleReplaceStr"
          >
            <el-checkbox-button
              v-bind:class="{ lw: isActive }"
              size="mini"
              v-for="item in cards_choose"
              :label="
                mimacode[item.passward] + ' ' + item.bank + item.number[1]
              "
              :key="item.number[2]"
              >{{ item.bank + item.number[2] }}</el-checkbox-button
            >
            <!-- </el-tooltip> -->
          </el-checkbox-group>
          <el-button v-on:click="changeActive" style="width: 100%; border: 0"
            >------------------------------</el-button
          >
        </el-collapse-item>
      </el-collapse>
    </div>
    <div class="table-container">
      <el-table :data="dataArr" style="margin: 0 auto; display: inline-block">
        <!-- <el-table-column type="selection" fixed label="操作" width="60px">
        </el-table-column> -->
        <el-table-column type="index" label="编号" width="50px">
        </el-table-column>
        <el-table-column
          v-for="item in cardSelect"
          prop="value"
          width="120px"
          :label="item"
        >
          <template slot-scope="scope"
            ><el-checkbox v-model="scope.row.checked"></el-checkbox>
            <el-input
              type="number"
              step="9"
              min="600"
              max="800"
              v-model="scope.row.value"
            ></el-input></template
        ></el-table-column>
      </el-table>
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
      isActive: false,
      // errorClass: "",
      selectCard: "",
      cardSelect: [],
      dataArr: [],
      checkedList: [],
      checkcards_choose: [],
      multipleSelection: [],
      mimacode: { "@": "叁伍", "!": "幺玖捌", "^": "陆贰" },
    };
  },
  watch: {
    isActive: {
      handler(newValue, oldValue) {
        for (let i = 0; i < this.cards_choose.length; i++) {
          let activeClass = false;
          if (this.cards_choose[i].id == 1) {
            return true;
          }
        }
        this.isActive = activeClass;
      },
    },
    deep: true,
  },

  methods: {
    changeActive() {
      const newActive = [];
      this.activeNames = newActive;
    },
    saveMenu() {},
    exportimg() {},
    handleChange(val) {
      console.log(val);
    },
    // handleSelectionChange(val) {
    //   for (let j = 0; j < val.length; j++) {
    //     for (let i = 0; i < this.dataArr.length; i++) {
    //       this.dataArr[i].checked = false;
    //       this.cardsList[j]=this.dataArr[i].checked
    //     }

    //     // this.multipleSelection = val;
    //     for (let i = 0; i < val.length; i++) {
    //       this.dataArr[val[i].index].checked = true;
    //     }
    //   }
    // },
    handleReplaceStr(val) {
      // debugger;
      const newStr = [];
      for (let i = 0; i < val.length; i++) {
        newStr[i] = val[i].replace("幺玖捌 ", "!");
        newStr[i] = newStr[i].replace("叁伍 ", "@");
        newStr[i] = newStr[i].replace("陆贰 ", "^");
      }
      this.$message({
        message: "已选择: " + val[val.length - 1],
        type: "success",
        duration: 1000,
      });
      this.selectCard = newStr;
      this.cardSelect = this.selectCard;
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
}

.el-checkbox-button {
  margin: 5px;
}
:deep .el-input__inner {
  background: 000;

  border: 0;
  padding: 0;
  width: 55%;
}

:deep .el-checkbox-group .el-checkbox-button .el-checkbox-button__inner {
  border-radius: 30px;
  border-left: 1px solid #dcdfe6;
  // background-color: #f0f0f0;
  padding: 8px;
  font-size: small;
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
:deep .el-collapse-item__header {
  position: absolute;
  z-index: 3;
  top: 8px;
  right: 40px;
  border-bottom: 0;
}
.el-collapse {
  border-top: 0;
  border-bottom: 0;
}
:deep .el-collapse-item__content {
  padding: 8px;
}
:deep .lw.el-checkbox-button .el-checkbox-button__inner {
  border-color: red;
}
</style>
