import React from 'react';
import { Provider } from 'react-redux';
import { Route, Router, Redirect, Switch } from 'react-router-dom';
import { history } from './core/history';
import store from './store/store';
import PublicPages from './components/PublicPages/PublicPages';
import PrivatePages from './components/PrivatePages/PrivatePages';

const Routes = () => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/public" component={PublicPages} />
        <Route path="/private" component={PrivatePages} />
        <Redirect to="/public" />
      </Switch>
    </Router>
  </Provider>
);


export default Routes;