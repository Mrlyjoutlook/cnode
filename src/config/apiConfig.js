export default {
  getTopics: '/topics', // 获取首页列表
  accessToken: '/accessToken',  // 验证 accessToken 的正确性
  getUserInfo: name => `/user/${name}`,  // 获取用户详情
  getTopic: id => `/topic/${id}`,  // 获取主题
  giveAgree: id => `/reply/${id}/ups`, // 点赞
  collect: `/topic_collect/collect`, // 主题收藏
  deCollect: `/topic_collect/de_collect`, // 取消主题收藏
  getCollect: (id, name) => `/${id}/${name}`, // 所收藏的主题
};
