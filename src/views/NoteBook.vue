<template>
  <div class="noteBook" style="text-align: left; margin-left: 20px">
    <H1>Note book</H1>
    <div>
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
    <div>
      <p>参数传递</p>
      <div>
        <code>
          <pre
            style="
              background-color: beige;
              font-size: larger;
              margin: 0 40px 0 0;
            "
          >
@click="handleClick(count)" 

v-for="(item, index) in games_import[count]"

router-view :switchvaluedata="value"

props: {
    switchvaluedata: Boolean,
  }

watch: {
    switchvaluedata: {
      handler(newValue, oldValue) {
        if (this.switchvaluedata == true) {
          this.activeNames = this.act;
        }
      },
    },
  }
</pre
          >
        </code>
      </div>
    </div>
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
