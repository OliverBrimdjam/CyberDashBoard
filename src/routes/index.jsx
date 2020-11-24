import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';
import Combat from '../pages/Combat';
import Equips from '../pages/Equips';
import Skills from '../pages/Skills';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={SignUp} />
    <Route path="/SignIn" component={SignIn} />
    {/* <Route path="/SignUp" component={xxxxx} /> */}
    <Route path="/Dashboard" component={Dashboard} />
    <Route path="/Dashboard/Combat" component={Combat} />
    <Route path="/Dashboard/Equips" component={Equips} />
    <Route path="/Dashboard/Skills" component={Skills} />
  </Switch>
);

export default Routes;
