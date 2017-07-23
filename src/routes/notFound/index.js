import React from 'react';
import { Route } from 'react-router-dom';
import LazilyLoad, { importLazy } from 'lazilyload';

export default function NotFoundRoute({ ...props }) {
  return (
    <Route
      {...props}
      render={() => (
        <LazilyLoad
          modules={{
            NotFound: () => importLazy(import(/* webpackChunkName: "notFound" */ './components/NotFound')),
          }}
        >
          {({ NotFound }) => <NotFound />}
        </LazilyLoad>
      )}
    />
  );
};
