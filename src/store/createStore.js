import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import requestMiddleware from './requestMiddleware';
import makeRootReducer from './reducers';
import appState from '../modules/appReduer';
import listInfo from '../routes/home/modules/listInfoReduer';

export default (initialState = {}) => {
  // create saga middleware
  const sagaMiddleware = createSagaMiddleware();

  // Middleware Configuration
  const middleware = [thunk, requestMiddleware, sagaMiddleware];

  // Store Enhancers
  const enhancers = [];

  let composeEnhancers = compose;

  if (__DEV__) {
    const composeWithDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    if (typeof composeWithDevToolsExtension === 'function') {
      composeEnhancers = composeWithDevToolsExtension;
    }
  }

  // Store Instantiation and HMR Setup
  const store = createStore(
    makeRootReducer({ appState, listInfo }),
    initialState,
    composeEnhancers(
      applyMiddleware(...middleware),
      ...enhancers,
    ),
  );

  store.asyncReducers = { appState, listInfo };

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const reducers = require('./reducers').default;
      store.replaceReducer(reducers(store.asyncReducers));
    });
  }

  return {
    store,
    runSaga: sagaMiddleware.run,
  };
};
