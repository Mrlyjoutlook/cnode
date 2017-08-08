import React from 'react';
import { Route } from 'react-router-dom';
import HomeContainer from './components/HomeContainer';
import { memoryHistory } from '../../components/Memory';

export default function HomeRoute({ store, ...props }) {
  const { dispatch } = store;
  return (
    <Route
      {...props} render={(routeProps) => {
        return memoryHistory(<HomeContainer {...routeProps} />)({ location: routeProps.location });
      }}
    />
  );
};
