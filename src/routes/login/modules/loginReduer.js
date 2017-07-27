import * as actions from '../modules/loginActions';

const initialState = {
  status: false,
  accesstoken: '',
  userInfo: {},
};

export default function loginReduer(state = initialState, action) {
  switch (action.type) {
    case actions.REQUEST_ACCESSTOKEN_OK:
      return Object.assign({}, state, { status: true, accesstoken: action.accesstoken });
    default:
      return state;
  }
}

