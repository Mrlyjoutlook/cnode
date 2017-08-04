import React from 'react';
import { Route } from 'react-router-dom';
import LazilyLoad, { importLazy } from 'lazilyload';
import { injectReducer } from '../../store/reducers';

export default function TopicRoute({ store, ...props }) {
  return (
    <Route {...props} render={routeProps => (
      <LazilyLoad
        modules={{
          Topic: () => importLazy(import(/* webpackChunkName: "topic" */ './components/TopicContainer')),
        }}
      >
        {({ Topic }) => {
          const reducer = require('./modules/topicReducer').default;
          injectReducer(store, { key: 'topic', reducer });
          return <Topic {...routeProps} />;
        }}
      </LazilyLoad>
      )}
    />
  );
}
