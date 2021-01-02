const express = require('express')
const next = require('next')
const { createProxyMiddleware } = require("http-proxy-middleware")

const port = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const apiPaths = {
    '/api': {
        target: 'http://localhost:3080', 
        pathRewrite: {
            '^/api': '/api'
        },
        changeOrigin: true
    },
    '/api2': {
      target: 'http://localhost:3081', 
      pathRewrite: {
          '^/api2': '/api2/tasks'
      },
      changeOrigin: true
  }
}

// left for brevity