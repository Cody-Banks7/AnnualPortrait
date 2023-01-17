module.exports={
  lintOnSave:false,
  configureWebpack: {
    name: "homepage",
    devtool: 'source-map',
    performance: {
      hints: 'error', 
      maxAssetSize: 30000000, // 整数类型（以字节为单位）
      maxEntrypointSize: 50000000 // 整数类型（以字节为单位）
    }
  },
  publicPath: process.env.NODE_ENV === "production" ? "/dist/" : "/",
}