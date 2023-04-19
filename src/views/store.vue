<template>
  <div class="store">
    <el-button type="success" @click="handleAdd">新增</el-button>

    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="录入日期" width="200">
        <template slot-scope="scope">
          <el-date-picker
            v-model="scope.row.date"
            align="right"
            type="date"
            size="small"
            class="picker content"
            :disabled="scope.row.disabled"
            placeholder="选择日期"
            :picker-options="pickerOptions"
          >
          </el-date-picker>
          <i
            class="el-icon-edit"
            @click="editPicker(scope.$index, scope.row)"
          ></i>
        </template>
      </el-table-column>
      <el-table-column label="食材" width="100">
        <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="数量" width="180">
        <template slot-scope="scope">
          <span class="content-number" v-show="!scope.row.numberEdit">{{
            scope.row.number
          }}</span>
          <el-input
            v-show="scope.row.numberEdit"
            size="mini"
            v-model="scope.row.number"
          ></el-input>
          <i
            class="el-icon-edit"
            @click="editNumber(scope.$index, scope.row)"
          ></i>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleSave(scope.$index, scope.row)"
            >保存</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
    
<script>
export default {
  name: "store",
  components: {},
  data() {
    return {
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            },
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            },
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            },
          },
        ],
      },
      value1: "",
      value2: "",
      tableData: [
        {
          date: "2022-04-19",
          name: "鸡蛋",
          number: "10",
          disabled: true,
          numberEdit: false,
          numberEdit: false,
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2022-04-19",
          name: "洋葱",
          number: "2",
          disabled: true,
          numberEdit: false,

          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2022-04-19",
          name: "黄瓜",
          number: "6",
          disabled: true,
          numberEdit: false,

          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2022-04-19",
          name: "番茄",
          number: "4",
          disabled: true,
          numberEdit: false,
        },
        {
          date: "2022-04-19",
          name: "咸鸭蛋",
          number: "?",
          disabled: true,
          numberEdit: false,
        },
        {
          date: "2022-04-19",
          name: "年糕",
          number: "?",
          disabled: true,
          numberEdit: false,
        },
        {
          date: "2022-04-19",
          name: "火腿",
          number: "?",
          disabled: true,
          numberEdit: false,
        },
        {
          date: "2022-04-19",
          name: "拉面",
          number: "2",
          disabled: true,
          numberEdit: false,
        },
        {
          date: "2022-04-19",
          name: "香肠",
          number: "?",
          disabled: true,
          numberEdit: false,
        },
        {
          date: "2022-04-19",
          name: "鲈鱼",
          number: "2",
          disabled: true,
          numberEdit: false,
        },
        {
          date: "2022-04-19",
          name: "牛排",
          number: "2",
          disabled: true,
          numberEdit: false,
        },
        {
          date: "2022-04-19",
          name: "火锅菜",
          number: "",
          disabled: true,
          numberEdit: false,
        },
        {
          date: "2022-04-19",
          name: "腌肉",
          number: "",
          disabled: true,
          numberEdit: false,
        },
        {
          date: "2022-04-19",
          name: "鸡排",
          number: "",
          disabled: true,
          numberEdit: false,
        },
        {
          date: "2022-04-19",
          name: "牛肉卷",
          number: "2",
          disabled: true,
          numberEdit: false,
        },
        {
          date: "2022-04-19",
          name: "烤肠",
          number: "2",
          disabled: true,
          numberEdit: false,
        },
      ],
    };
  },
  methods: {
    generateMenu() {
      var menu = document.getElementById("menu");
      menu.innerHTML =
        this.menuArr[Math.floor(Math.random() * this.menuArr.length)];
    },
    handleSave(index, row) {
      localStorage.setItem('food', JSON.stringify(this.tableData))
     
    },
    handleDelete(index, row) {
      this.tableData.splice(index,1);
    },
    editPicker(index, row) {
      row.disabled = !row.disabled;
    },

    editNumber(index, row) {
      row.numberEdit = !row.numberEdit;
    },
    handleAdd() {
       this.tableData.unshift({
         
          date: new Date(),
          name: "?",
          number: "?",
          disabled: true,
          numberEdit: false,
        
       });
    }
  },

  mounted() {
    console.log("乙");
  },
};
</script>
<style lang="scss">
.store {
  width: 80%;
  margin: 0 auto;
  margin-bottom: 100px;
  .content {
    display: inline-block;
    margin-right: 10px;
  }
  .content-number {
    display: inline-block;
    width: 30px;
    margin-right: 10px;
  }
  .picker {
    width: 135px !important;
  }
  .el-icon-edit {
    cursor: pointer;
  }
}
</style>
    
  