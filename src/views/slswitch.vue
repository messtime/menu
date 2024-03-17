<template>
  <div class="slswitch">
    <el-collapse
      v-model="activeNames"
      @change="handleChange"
      style="margin-left: 30px"
    >
      <el-collapse-item
        v-for="count in 20"
        :title="'game' + ' ' + 'list' + ' ' + '[' + ' ' + count + ' ' + ']'"
        :name="count"
      >
        <el-button
          plain
          :disabled="!switchvaluedata"
          style="margin: 10px 5px"
          @click="handleClick(count)"
          v-for="(item, index) in games_import[count]"
          >{{ item.name }}</el-button
        >
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import games_import from "@/data/games_import";
import games_link from "@/data/switch_games/games_link";
export default {
  props: {
    switchvaluedata: Boolean,
  },
  data() {
    return {
      activeNames: [],
      games_import,
      games_link,
      act: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      ],
    };
  },
  watch: {
    switchvaluedata: {
      handler(newValue, oldValue) {
        if (this.switchvaluedata == true) {
          this.activeNames = this.act;
        } else {
          this.activeNames = [];
        }
      },
    },
  },
  methods: {
    handleChange(val) {
      console.log(val);
    },
    handleClick(count) {
      window.open(games_link[count]);
    },
  },
};
</script>
