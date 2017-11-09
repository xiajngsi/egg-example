'use strict';

module.exports = app => {
  app.get('/api/login', app.controller.home.index);
  // app.get('/api/login', app.controller.news.list);
};
