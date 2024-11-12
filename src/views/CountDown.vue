<!--
 * @Author: lewei.li@okg.com
 * @Date: 2024-11-10
 * @Description: 
-->
<template>
  <div class="father">
    <div>
      <SwitchSvg ref="switchSvg"></SwitchSvg>
    </div>
    <div ref="progress" class="child">
      <el-progress :stroke-width="800" :percentage="percentage" color='#EBEEF5' :define-back-color="customColorMethod()"
        :show-text="textChange" :text-inside="true" :format="showTime"></el-progress>
      <div style="position: relative;top:-800px;display: flex;justify-content:space-between">
        <div style="font-size: 20px;font-weight: bold;">当前时间 {{ formatDate(nowDate) }}</div>
        <div style="font-size: 40px;font-weight: bold;"> {{ formatDate2(nowDate) }}</div>
        <div style="font-size: 20px;font-weight: bold;">截止时间 {{ formatDate(new Date(+ruleTimeLater)) }}</div>
      </div>
    </div>
    <el-button ref="startBtn" style="z-index: 3;" class="startBtn" type="info" circle
      @click="startCountDown"></el-button>
    <el-button ref="resetBtn" type="info" class="resetBtn" circle @click="resetData"></el-button>



  </div>

</template>
<script>

import SwitchSvg from '../components/SwitchSvg.vue'

export default {
  components: {
    //注册组件为空
    SwitchSvg
  },
  data() {
    //所定义的组件的数据
    return {
      nowDate: new Date(),
      percentage: 0,
      ruleTimeLater: localStorage.getItem('ruleTimeLater'),
      thirtyFlag: false,
      timeInterval: null,
      diffRule: null,
      bgContent: null,
      switchA: null,
      switchB: null,
      fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
      url: '/imgswitch/switch4.svg',
      // icon: ['switchA', 'switchB'],
    };
  },
  computed: {
    textChange() {
      return true;
      // if (this.percentage < 1) {
      //   return false;
      // } else {
      //   return true;
      // }
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
      // 截止时间不能更新, 如果没有截止时间，你才去设置截止时间
      if (!this.ruleTimeLater) {
        if (this.diffRule >= 30) {
          this.thirtyFlag = true;
          this.ruleTimeLater = now + 30 * 60 * 1000;
        }
        else {
          this.thirtyFlag = false;
          this.ruleTimeLater = nightTime;
        }
        localStorage.setItem('ruleTimeLater', this.ruleTimeLater);
      }
      const diff = this.ruleTimeLater - now;
      return diff;
    },
    showTime(percentage) {
      // console.log('showTime showTime', percentage);
      return percentage >= 100 ? '游玩时间已结束' : Math.floor(percentage) + '% ' + this.deadline();
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
    startCountDown() {
      if (this.ruleTimeLater) {
        if (new Date() > this.ruleTimeLater) {
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
        const diff = this.getDiff() / (60 * 1000);
        let percentageDiff = null;
        if (this.thirtyFlag) {
          percentageDiff = diff / 30;
        } else {
          percentageDiff = diff / this.diffRule
        }

        // console.log(percentageDiff)
        this.percentage = (1 - percentageDiff) * 100;
        // if(this.percentage)
        //console.log('this.percentage', this.percentage)
      }, 1000);

    },
    formatDate(date) {
      const year = date.getFullYear().toString().padStart(4, "0");
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const day = date.getDate().toString().padStart(2, "0");
      const hour = date.getHours().toString().padStart(2, "0");
      const minute = date.getMinutes().toString().padStart(2, "0");
      const second = date.getSeconds().toString().padStart(2, "0");
      return `${hour}:${minute}`;
    },
    formatDate2(date) {
      const year = date.getFullYear().toString().padStart(4, "0");
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const day = date.getDate().toString().padStart(2, "0");
      const hour = date.getHours().toString().padStart(2, "0");
      const minute = date.getMinutes().toString().padStart(2, "0");
      const second = date.getSeconds().toString().padStart(2, "0");
      return `${year}年${month}月${day}日`;
    },
    setPosition() {

      this.bgContent = this.$refs.switchSvg.$refs.bgContent;
      this.bgContentInfo = this.bgContent.getBoundingClientRect();
      this.switchA = this.$refs.switchSvg.$refs.switchA;
      this.switchAInfo = this.switchA.getBoundingClientRect();
      this.switchB = this.$refs.switchSvg.$refs.switchB;
      this.switchBInfo = this.switchB.getBoundingClientRect();

      this.progress = this.$refs.progress;

      const insideText = document.getElementsByClassName("el-progress-bar__innerText")[0]

      // 设置进度条元素位置, 直接找到元素
      const { top, left, width, height } = this.bgContentInfo;
      this.progress.setAttribute('style', `top:${top - 68}px;left:${left - 8}px; width:${width + 2}px;height:${height}px;`);
      if (insideText) {
        insideText.setAttribute('style', `top:${(top - 68) * 2}px`);

      }
      // 设置开始按钮元素位置，找到了 el 组件，所以要读取元素
      this.startBtn = this.$refs.startBtn.$el;
      const { top: Atop, left: Aleft, width: Awidth, height: Aheight } = this.switchAInfo;
      this.startBtn.setAttribute('style', `top:${Atop - 68}px;left:${Aleft - 8}px; width:${Awidth}px;height:${Aheight}px;`);

      // 设置开始按钮元素位置，找到了 el 组件，所以要读取元素

      this.resetBtn = this.$refs.resetBtn.$el;
      const { top: Btop, left: Bleft, width: Bwidth, height: Bheight } = this.switchBInfo;
      this.resetBtn.setAttribute('style', `top:${Btop - 68}px;left:${Bleft - 18}px; width:${Bwidth}px;height:${Bheight}px;`);
    }
  },
  mounted() {
    // 添加大小改变监听事件
    this.setPosition()
    window.addEventListener('resize', this.setPosition)



  },

};
</script>
<style lang="scss" scoped>
.father {
  height: calc(100% - 94px);
  width: 100%;
  min-width: 1100px;
  position: absolute;

  .startBtn {
    opacity: 0;
    cursor: pointer;
    position: absolute;

    &:hover {
      opacity: 0.2;
    }
  }

  .resetBtn {
    opacity: 0;
    cursor: pointer;
    position: absolute;

    &:hover {
      opacity: 0.2;
    }
  }
}

.child {
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  // top: 535px;
  // position: relative;
  // transform: translateY(-50%);
  // width: 54%;
  // margin: 0 auto;
  // left: 3px;

}




:deep .el-progress-bar__outer {
  border-radius: 2px
}

:deep .el-progress-bar__innerText {
  font-size: 40px;
  font-weight: bold;
  margin-right: 20px;
  position: absolute;
}

:deep .el-progress-bar__inner {
  border-radius: 2px;
}
</style>