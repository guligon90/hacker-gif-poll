const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  const target = process.env.REACT_APP_PROXY_TARGET || 'http://backend:8000/';
  app.use(createProxyMiddleware(['/graphql/'], { target }));
};
