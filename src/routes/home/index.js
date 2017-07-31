import React from 'react';
import { Route } from 'react-router-dom';
import HomeContainer from './components/HomeContainer';
import { saveoldLocation } from '../../modules/appActions';

export default function HomeRoute({ store, ...props }) {
  const { dispatch } = store;
  return (
    <Route
      {...props} render={(routeProps) => {
        // dispatch(saveoldLocation(routeProps.location));
        return <HomeContainer {...routeProps} />;
      }}
    />
  );
};
