import { REQUEST_ACCESSTOKEN } from '../modules/loginActions';

const initialState = {
  status: true,
  accesstoken: '',
  userInfo: {},
};

export default function loginReduer(state = initialState, action) {
  switch (action.type) {
    case `${REQUEST_ACCESSTOKEN}_OK`:
      return Object.assign({}, state, { status: true, accesstoken: action.accesstoken });
    case `${REQUEST_ACCESSTOKEN}_FAIL`:
      return initialState;
    default:
      return state;
  }
}

