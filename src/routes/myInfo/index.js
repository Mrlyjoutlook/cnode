import React from 'react';
import { Route } from 'react-router-dom';
import LazilyLoad, { importLazy } from 'lazilyload';
// import { injectReducer } from '../../store/reducers';
import { memoryHistory } from '../../components/Memory';

export default function MyInfoRoute({ store, ...props }) {
  return (
    <Route {...props} render={routeProps => (
      <LazilyLoad
        modules={{
          MyInfo: () => importLazy(import(/* webpackChunkName: "login" */ './components/MyInfoContainer')),
        }}
      >
        {({ MyInfo }) => {
          // const reducer = require('./modules/loginReduer').default;
          // injectReducer(store, { key: 'login', reducer });
          return memoryHistory(<MyInfo {...routeProps} />)({ location: routeProps.location });
        }}
      </LazilyLoad>
      )}
    />
  );
}
