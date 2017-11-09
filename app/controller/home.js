'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
      const { ctx, service } = this;
      const author = ctx.session.userId;
      if (author) {
        ctx.body = 'ok';
      } else {
        const mobile = ctx.query.mobile;
        const password = ctx.query.password;
        const exist = yield service.user.findUser(mobile, password);
        if (exist) {
          ctx.session.userId = exist.userId;
          ctx.body = 'ok';
        } else {
          const exist = yield service.user.createUser(mobile, password);
          ctx.session.userId = exist.userId;
          ctx.body = 'ok';
        }
      }
    }
  }
  return HomeController;
};
