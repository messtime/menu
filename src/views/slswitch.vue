<template>
  <div class="slswitch">
    <el-collapse @change="handleChange">
      <el-collapse-item
        v-for="count in 20"
        :title="'(' + count + ')'"
        :name="count"
      >
        <el-button
          style="margin: 10px 5px"
          v-for="(item, index) in games_import[count]"
          >{{ item.name }}</el-button
        >
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import games_import from "@/data/games_import";
export default {
  data() {
    return {
      games_import,
    };
  },

  methods: {
    handleChange(val) {
      console.log(val);
    },
  },
};
</script>
