import React from 'react';
import { Route } from 'react-router-dom';
import { injectReducer } from '../../store/reducers';
import LazilyLoad, { importLazy } from 'lazilyload';
import HomeContainer from './components/HomeContainer';

export default function HomeRoute({ store, ...props }) {
  return (
    <Route {...props} component={HomeContainer} />
  );
}
// <Route {...props} render={({ match }) => (
    //   <LazilyLoad
    //     modules={{
    //       Home: () => importLazy(import(/* webpackChunkName: "login" */ './components/HomeContainer')),
    //     }}
    //   >
    //     {({ Home }) => {
    //     //   const reducer = require('./modules/loginReduer').default;
    //     //   injectReducer(store, { key: 'login', reducer });
    //       return <Home />;
    //     }}
    //   </LazilyLoad>
    //   )}
    // />
