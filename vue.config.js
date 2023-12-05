const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? '/2023_F2E_Week1/' : '/',
  transpileDependencies: true
})
