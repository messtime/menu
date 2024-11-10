<!--
 * @Author: lewei.li@okg.com
 * @Date: 2024-11-10
 * @Description: 
-->
<template>
  <div class="father">

    <div class="child">

      <el-button type="primary" @click="updateNowData">Start</el-button>
      <el-button type="primary" @click="resetData">Reset</el-button>

      <el-progress :stroke-width="100" :percentage="percentage" color='#EBEEF5' :define-back-color="customColorMethod()"
        :show-text="textChange" style=" padding: 50px;" :text-inside="true" :format="showTime"></el-progress>

      <div style="font-size: 40px;">当前时间 {{ formatDate(nowDate) }}</div>
      <div style="font-size: 40px;">截止时间 {{ formatDate(new Date(+oneHourLater)) }}</div>
    </div>
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
      percentage: 0,
      oneHourLater: localStorage.getItem('oneHourLater'),
      timeInterval: null,
    };
  },
  computed: {
    textChange() {
      if (this.percentage < 1) {
        return false;
      } else {
        return true;
      }
    },
  },
  methods: {

    customColorMethod() {
      if (this.percentage < 40) {
        return '#67c23a';
      } else if (this.percentage >= 40 && this.percentage <= 80) {
        return '#e6a23c';
      } else {
        return '#f56c6c';
      }
    },
    deadline() {
      const diff = this.getDiff();

      const diffMinute = Math.floor(diff / (60 * 1000)); //计算相关的分钟
      const diffSecond = diff / 1000 - diffMinute * 60; //计算相关的秒
      return diffMinute.toString().padStart(2, "0") + ':' + Math.floor(diffSecond).toString().padStart(2, "0");
    },
    getDiff() {

      const now = new Date().getTime();
      // 截止时间不能更新
      if (!this.oneHourLater) {
        this.oneHourLater = now + 60 * 60 * 1000;
        localStorage.setItem('oneHourLater', this.oneHourLater);
      }
      const diff = this.oneHourLater - now;
      return diff;
    },
    showTime(percentage) {
      // console.log('showTime showTime', percentage);
      return Math.floor(percentage) + '% ' + this.deadline()
    },

    resetData() {
      this.oneHourLater = null;
      this.percentage = 0;
      localStorage.removeItem('oneHourLater');
      if (this.timeInterval) {
        clearInterval(this.timeInterval)
      }
    },
    updateNowData() {
      if (this.oneHourLater) {
        if (new Date() > this.oneHourLater) {
          this.percentage = 100;
          if (this.timeInterval) {
            clearInterval(this.timeInterval)
          }
          return;
        }
      }

      this.timeInterval = setInterval(() => {
        if (this.percentage >= 100) {
          if (this.timeInterval) {
            clearInterval(this.timeInterval)
          }
          return;
        }
        this.nowDate = new Date();
        const percentageDiff = this.getDiff() / (60 * 60 * 1000);
        // console.log(percentageDiff)
        this.percentage = (1 - percentageDiff) * 100;
        // console.log('this.percentage', this.percentage)

      }, 1000);
    },
    formatDate(date) {
      const year = date.getFullYear().toString().padStart(4, "0");
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const day = date.getDate().toString().padStart(2, "0");
      const hour = date.getHours().toString().padStart(2, "0");
      const minute = date.getMinutes().toString().padStart(2, "0");
      const second = date.getSeconds().toString().padStart(2, "0");
      return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
    },
  },
  mounted() {
    // this.updateNowData();
  },
};
</script>
<style lang="scss" scoped>
.father {
  height: calc(100% - 94px);
  width: 100%;
  position: absolute;
}

.child {
  top: 50%;
  position: relative;
  transform: translateY(-50%);
}

:deep .el-progress-bar__innerText {
  font-size: 40px;
  margin-right: 20px;
}
</style>