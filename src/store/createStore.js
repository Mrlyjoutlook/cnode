import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import createHashHistory from 'history/createHashHistory';
import requestMiddleware from './requestMiddleware';
import makeRootReducer from './reducers';
import appState from '../modules/appReduer';
import listInfo from '../routes/home/modules/listInfoReduer';
import loginState from '../routes/login/modules/loginReduer';

export default (initialState = {}) => {
  // create saga middleware
  const sagaMiddleware = createSagaMiddleware();

  // create router middleware
  const history = createHashHistory();
  const router = routerMiddleware(history);

  // Middleware Configuration
  const middleware = [router, thunk, requestMiddleware, sagaMiddleware];

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
    makeRootReducer({ router: routerReducer, appState, listInfo, loginState }),
    initialState,
    composeEnhancers(
      applyMiddleware(...middleware),
      ...enhancers,
    ),
  );

  store.asyncReducers = { appState, listInfo, loginState };

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const reducers = require('./reducers').default;
      store.replaceReducer(reducers(store.asyncReducers));
    });
  }

  return {
    history,
    store,
    runSaga: sagaMiddleware.run,
  };
};
