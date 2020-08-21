import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Advertising from '../pages/Advertising';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Advertising} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
