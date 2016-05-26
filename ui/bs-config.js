/*
 |--------------------------------------------------------------------------
 | Browser-sync config file
 |--------------------------------------------------------------------------
 |
 | For up-to-date information about the options:
 |   http://www.browsersync.io/docs/options/
 |
 | There are more options than you see here, these are just the ones that are
 | set internally. See the website for more info.
 */

var proxy = require('http-proxy-middleware');
var devApi = proxy('/api', { // all requests to /api/** => will redirect on http://localhost:8080/api/**
  target: 'http://localhost:8080',
  changeOrigin: true, // for vhosted sites, changes host header to match to target's host
  logLevel: 'debug'
});

module.exports = {
  files: [
    "./web"
  ],
  server: {
    baseDir: "./web",
    middleware: [devApi]
  },
  serveStatic: [
    '.' // node_modules/
  ],
  snippetOptions: {
    ignorePaths: [
      "**/*.ts"
    ]
  },
  ui: {
    port: 3001,
    weinre: {
      port: 8081
    }
  }
};
