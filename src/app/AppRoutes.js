import React, { Component, Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Spinner from '../app/shared/Spinner';

const INtro = lazy(() => import('./dashboard/Introduction'));
const Dashboard = lazy(() => import('./dashboard/Dashboard'));
const Tab1 = lazy(() => import('./dashboard/chat'));
const Tab2 = lazy(() => import('./dashboard/Tab2'));
const Login = lazy(() => import('./user-pages/Login'));
const Register = lazy(() => import('./user-pages/Register'));
const ForgotPass = lazy(() => import('./user-pages/ForgotPass'));




class AppRoutes extends Component {
  render() {
    return (
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path="/intro" component={INtro} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/tab1" component={Tab1} />
          <Route exact path="/tab2" component={Tab2} />
          <Route exact path="/detailed_report1" component={Tab2} />
          <Route exact path="/detailed_report2" component={Tab2} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/forget_pass" component={ForgotPass} />

          <Redirect to="/dashboard" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;