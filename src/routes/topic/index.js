import React from 'react';
import { Route } from 'react-router-dom';
import LazilyLoad, { importLazy } from 'lazilyload';
import { injectReducer } from '../../store/reducers';
import { memoryHistory } from '../../components/Memory';

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
          return memoryHistory(<Topic {...routeProps} />)({ location: routeProps.location });
        }}
      </LazilyLoad>
      )}
    />
  );
}
