/**
 * route list
 */
export const homeRoute = {
  key: 'home',
  name: '首页',
  path: '/home',
};

export const loginRoute = {
  key: 'login',
  name: '登录',
  path: '/login',
};

export const topicRoute = {
  key: 'topic',
  name: '贴',
  path: '/topic/:id',
};

export const myInfoRoute = {
  key: 'myInfo',
  name: '消息',
  path: '/myInfo',
}

export const personalRoute = {
  key: 'personal',
  name: '个人',
  path: '/personal',
  child: {
    base: {
      key: 'base',
      name: '基础信息',
      path: '/personal/base',
    },
  },
};

export const adminRoute = {
  key: 'admin',
  name: '账户',
  path: '/admin',
};

export default {
  login: {
    paths: ['/login', '/home/all', '/home/good', '/home/share', '/home/answer', '/home/job'],
    details: loginRoute,
  },
  admin: {
    paths: [],
    details: adminRoute,
  },
  personal: {
    paths: [],
    details: personalRoute,
  },
};
