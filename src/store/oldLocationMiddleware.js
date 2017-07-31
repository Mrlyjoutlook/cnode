export default ({ dispatch, getState }) => next => (action) => {
  const { type } = action;
  if (type === '@@router/LOCATION_CHANGE') {
    const { payload } = action;
    const pathname = getState().appState.getIn(['oldLocation', 'pathname']);
    if (payload.pathname !== pathname) {
      return dispatch({ type: 'SAVE_OLDLOCATION', location: payload });
    } else {
      return dispatch({ type: 'SAVE_OLDLOCATION', location: payload });
    }
  } else {
    next(action);
  }
};
