const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  assetsDir: './assets',
  // 基本路径
  publicPath: './',
})