<!--
 * @Author: lewei.li@qq.com
 * @Date: 2024-02-28
 * @Description: Description
-->

<template>
  <div class="credit-card">
    <div class="container">
      <el-tabs
        tabPosition="left"
        v-model="activeName"
        :span-method="objectSpanMethod"
        @tab-click="handleClick"
      >
        <!-- @tab-click="handleClick" -->
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
    </div>
    <div style="margin: 20px 5px; display: inline-block">
      <el-row :gutter="20">
        <el-col :span="8"
          ><el-button v-on:click="generate">随机生成</el-button></el-col
        >
        <el-col :span="8" :pull="0.5"
          ><el-dropdown @command="handleCommand">
            <el-button>
              choose<i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item
                v-for="(item, index) in cards"
                :command="item.name + item.card"
                icon="el-icon-plus"
                >{{ item.name + item.card }}</el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown></el-col
        >
        <el-col :span="8"
          ><el-button @click="addTab(editableTabsValue)">
            add column
          </el-button></el-col
        >
      </el-row>
    </div>
    <div class="table-container">
      <el-table
        :data="dataArr"
        style="margin: 0 auto; font-size: 20px; display: inline-block"
      >
        <el-table-column type="index" label="编号" width="60px">
        </el-table-column>
        <el-table-column prop="value" label="数额" width="60px">
        </el-table-column>
        <el-table-column
          v-for="item in cardSelect"
          prop="value"
          width="120px"
          :label="item"
          ><el-checkbox v-model="checked"></el-checkbox
        ></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreditCardView",
  components: {},
  data() {
    return {
      activeName: "second",
      input: "",
      selectCard: "",
      cardSelect: [],
      arrInput: [],
      dataArr: [],
      cards: [
        {
          name: "建行",
          card: "8338",
        },
        {
          name: "招商",
          card: "9474",
        },
        {
          name: "农行",
          card: "1945",
        },
        {
          name: "建行",
          card: "8639",
        },

        {
          name: "平安",
          card: "tq手机",
        },
        {
          name: "建行",
          card: "tq手机",
        },
      ],
      cardPwdArr: [
        {
          name: "建行",
          card: "8338",

          pwd: "19",
          person: "lw",
        },
        {
          name: "招商",
          card: "9474",
          pwd: "19",
          person: "lw",
        },
        {
          name: "农行",
          card: "1945",
          pwd: "19",
          person: "yy",
        },
        {
          name: "建行",
          card: "8639",

          pwd: "19",
          person: "sl",
        },
      ],
      cardPwdArr2: [
        {
          name: "平安",
          card: "tq手机",
          pwd: "62",
          person: "zj",
        },
        {
          name: "建行",
          card: "tq手机",
          pwd: "62",
          person: "zj",
        },
      ],
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    handleCommand(command) {
      this.$message("click on item " + command);
      this.selectCard = command;
      this.cardSelect.push(this.selectCard);
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

.addpage {
  display: inline-block;
  position: absolute;
  text-align: right;
}

.el-icon-arrow-down {
  font-size: 12px;
}

.el-input {
  width: min-content;
  min-width: 65px;
  height: fit-content;
}

.el-input_inner {
  padding: 0 10px;
  font-size: larger;
}

// .XXXX {
//   display: block;
// }
// -----------------------------------------
</style>
