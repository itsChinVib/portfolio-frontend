import React from 'react';
import { Switch, Route, HashRouter as Router } from 'react-router-dom';

import { NotFound } from 'pages/404Page';
import { routes } from './route-config';
import { LayoutComponent } from 'components/Layout';

const createRoutes = () => {
  const routeElems = routes.map((route, index) => {
    return (
      <Route
        exact={route.exact}
        key={route.path || `Not Found ${index}`}
        path={route.path}
        render={() => (
          <LayoutComponent>
            <route.component />
          </LayoutComponent>
        )}
      />
    );
  });
  return [...routeElems, <Route component={NotFound} />];
};

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        {/* All Routes elements are created here */}
        {createRoutes()}
      </Switch>
    </Router>
  );
};
