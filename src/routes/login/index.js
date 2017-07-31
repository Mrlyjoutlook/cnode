import React from 'react';
import { Route } from 'react-router-dom';
import LazilyLoad, { importLazy } from 'lazilyload';
// import { injectReducer } from '../../store/reducers';
import { saveoldLocation } from '../../modules/appActions';

export default function LoginRoute({ store, ...props }) {
  const { dispatch } = store;
  return (
    <Route {...props} render={routeProps => (
      <LazilyLoad
        modules={{
          Login: () => importLazy(import(/* webpackChunkName: "login" */ './components/LoginContainer')),
        }}
      >
        {({ Login }) => {
          // const reducer = require('./modules/loginReduer').default;
          // injectReducer(store, { key: 'login', reducer });
          // dispatch(saveoldLocation(props.location));
          return <Login {...routeProps} />;
        }}
      </LazilyLoad>
      )}
    />
  );
}
