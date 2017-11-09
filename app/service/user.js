'use strict';

module.exports = app => {
  class NewsService extends app.Service {
    * findUser(mobile, password) {
      const user = yield app.mysql.get('user', { mobile, password });
      return user;
    }

    * createUser(mobile, password) {
      const user = yield app.mysql.insert('user', { mobile, password });
      return user;
    }
  }
  return NewsService;
};
