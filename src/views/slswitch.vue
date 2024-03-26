<template>
  <div class="slswitch">
    <el-link
      type="info"
      target="_blank"
      href="https://tinfoil.io/"
      style="position: absolute; z-index: 3; top: 21.5px; right: 40px"
      >tinfoil<i class="el-icon-view el-icon--right"></i
    ></el-link>
    <el-collapse
      v-model="activeNames"
      @change="handleChange"
      style="margin-left: 30px"
      ><el-collapse-item>
        <template slot="title">
          <a target="_blank" href="https://tinfoil.io/">switch 520</a
          ><span>&nbsp;</span><i class="header-icon el-icon-info"></i>
        </template>
        <el-button @click="handleClick(url)">sifu</el-button></el-collapse-item
      >
      <el-collapse-item
        v-for="count in 20"
        :title="'Game List ' + count"
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
    handleClick(url) {
      url =
        "https://5vz43f.sharepoint.com/sites/free34/Shared%20Documents/Forms/AllItems.aspx?ga=1&id=%2Fsites%2Ffree34%2FShared%20Documents%2F2023%E5%B9%B4%2D06%E6%9C%88%2DGAME&viewid=bf5d72b0%2Df3a1%2D4644%2Dbc45%2D1d18a2b7ea24";
      window.open(url);
    },
  },
};
</script>
