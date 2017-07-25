import { fromJS, Map } from 'immutable';
import * as actions from './listInfoActions';

const initialState = fromJS({
  type: 'tab',
  page: 1,
  limit: 10,
  listData: [
    {
      author: {loginname: "i5ting", avatar_url: "https://avatars0.githubusercontent.com/u/3118295?v=3&s=120"},
      author_id: "54009f5ccd66f2eb37190485",
      create_at: "2017-04-13T02:41:41.818Z",
      good: true,
      id: "58eee565a92d341e48cfe7fc",
      last_reply_at: "2017-07-25T07:49:23.517Z",
      reply_count: 112,
      tab: "share",
      title: "2017，我们来聊聊 Node.js",
      top: true,
      visit_count: 39236,
    }
  ],
  contentData: [],
});

export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
};
