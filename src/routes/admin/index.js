import React from 'react';
import { Route } from 'react-router-dom';
import LazilyLoad, { importLazy } from 'lazilyload';
// import { injectReducer } from '../../store/reducers';

export default function AdminRoute({ store, ...props }) {
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
