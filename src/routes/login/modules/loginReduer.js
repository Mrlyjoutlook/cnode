import * as actions from '../modules/loginActions';

const initialState = {
  status: true,
  accesstoken: '',
  userInfo: {},
};

export default function loginReduer(state = initialState, action) {
  switch (action.type) {
    case actions.REQUEST_ACCESSTOKEN_OK:
      return Object.assign({}, state, { status: true, accesstoken: action.accesstoken });
    case actions.REQUEST_ACCESSTOKEN_FAIL:
      return initialState;
    default:
      return state;
  }
}

