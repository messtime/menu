<!--
 * @Author: lewei.li@okg.com
 * @Date: 2024-11-10
 * @Description: 
-->
<template>
  <div class="father">

    <div class="child">



      <el-progress :stroke-width="100" :percentage="percentage" color='#EBEEF5' :define-back-color="customColorMethod()"
        :show-text="textChange" style=" padding: 50px;" :text-inside="true" :format="showTime"></el-progress>
      <div class="buttonFather"><el-button type="primary" @click="updateNowData">Start</el-button>
        <el-button type="primary" @click="resetData">Reset</el-button>
      </div>

      <div style="font-size: 40px;">当前时间 {{ formatDate(nowDate) }}</div>
      <div style="font-size: 40px;">截止时间 {{ formatDate(new Date(+ruleTimeLater)) }}</div>
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
      ruleTimeLater: localStorage.getItem('ruleTimeLater'),
      timeInterval: null,
      diffRule: null,
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
      const nightRule = new Date();
      const nightTime = new Date(nightRule.getFullYear(), nightRule.getMonth(), nightRule.getDate(), 21);
      if (!this.diffRule) {
        this.diffRule = (nightTime - now) / (60 * 1000);
      }
      // console.log(diffRule);
      // 截止时间不能更新
      if (!this.ruleTimeLater) {
        if (this.diffRule >= 30) { this.ruleTimeLater = now + 30 * 60 * 1000; }
        else {
          this.ruleTimeLater = nightTime;
        }
        localStorage.setItem('ruleTimeLater', this.ruleTimeLater);
      }
      const diff = this.ruleTimeLater - now;
      return diff;

    },

    showTime(percentage) {
      // console.log('showTime showTime', percentage);
      return Math.floor(percentage) + '% ' + this.deadline()
    },

    resetData() {
      this.ruleTimeLater = null;
      this.percentage = 0;
      this.diffRule = null;
      localStorage.removeItem('ruleTimeLater');
      if (this.timeInterval) {
        clearInterval(this.timeInterval)
      }
    },
    updateNowData() {
      if (this.ruleTimeLater) {
        if (new Date() > this.ruleTimeLater) {
          this.percentage = 100;
          if (this.timeInterval) {
            clearInterval(this.timeInterval)
          }
          return;
        }
      }

      // diff 一次性判断
      let thirtyFlag = false;
      const diff = this.getDiff() / (60 * 1000);
      if (diff == 30) {
        thirtyFlag = true;
      }
      this.timeInterval = setInterval(() => {
        if (this.percentage >= 100) {
          if (this.timeInterval) {
            clearInterval(this.timeInterval)
          }
          return;
        }

        this.nowDate = new Date();
        const diff = this.getDiff() / (60 * 1000);
        let percentageDiff = null;
        if (thirtyFlag) {
          percentageDiff = diff / 30;
        } else {
          percentageDiff = diff / this.diffRule
        }

        console.log(percentageDiff)
        this.percentage = (1 - percentageDiff) * 100;
        console.log('this.percentage', this.percentage)

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