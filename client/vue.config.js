module.exports = {
    devServer: {
      proxy: {
        '^/recipe': {
          target: 'http://localhost:5000',
          changeOrigin: true
        },
      }
    }
  }