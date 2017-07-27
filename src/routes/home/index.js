import React from 'react';
import { Route } from 'react-router-dom';
import HomeContainer from './components/HomeContainer';
import { saveoldLocation } from '../../modules/appActions';

export default function HomeRoute({ store, ...props }) {
  const { dispatch } = store;
  dispatch(saveoldLocation(props.location));
  return (
    <Route {...props} component={HomeContainer} />
  );
};

