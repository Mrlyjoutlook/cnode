export default {
  getTopics: '/topics', // 获取首页列表
  accessToken: '/accessToken',  // 验证 accessToken 的正确性
  getUserInfo: name => `/user/${name}`,  // 获取用户详情
};
