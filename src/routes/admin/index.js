import React from 'react';
import { Route } from 'react-router-dom';
import LazilyLoad, { importLazy } from 'lazilyload';
import { injectReducer } from '../../store/reducers';
import { saveoldLocation } from '../../modules/appActions';

export default function AdminRoute({ store, ...props }) {
  const { dispatch } = store;
  dispatch(saveoldLocation(location));
  return (
    <Route {...props} render={({ match }) => (
      <LazilyLoad
        modules={{
          Admin: () => importLazy(import(/* webpackChunkName: "admin" */ './components/AdminContainer')),
        }}
      >
        {({ Admin }) => {
        //   const reducer = require('./modules/loginReduer').default;
        //   injectReducer(store, { key: 'login', reducer });
          return <Admin />;
        }}
      </LazilyLoad>
      )}
    />
  );
};
