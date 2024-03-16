<template>
  <div class="noteBook" style="text-align: left; margin-left: 20px">
    <H1>Note book</H1>
    <p>路由填写</p>
    <el-tree
      class="filter-tree"
      :data="treedata"
      :props="defaultProps"
      default-expand-all
      ref="tree"
      :render-content="renderContent"
    >
    </el-tree>
  </div>
</template>

<script>
// debugger;
//
export default {
  data() {
    return {
      treedata: [
        {
          id: 1,
          label: "menu",
          children: [
            {
              id: 2,
              label: "src",
              children: [
                {
                  id: 3,
                  label: "router",
                  color: "color",
                  children: [
                    {
                      id: 5,
                      label: "index.js",
                    },
                  ],
                },
                {
                  id: 4,
                  color: "color",
                  label: "App.vue",
                },
              ],
            },
          ],
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
        color: "color",
      },
    };
  },

  methods: {
    renderContent(h, { node, data, store }) {
      // debugger;
      if (data.color == "color") {
        return (
          <span class="custom-color">
            <span>{node.label}</span>
          </span>
        );
      } else {
        return <span>{node.label}</span>;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.noteBook {
  :deep .custom-color {
    background: bisque;
  }
}
</style>
