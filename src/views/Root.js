import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Feed from 'views/Feed';
import MainTemplate from 'templates/MainTemplate';

const Root = () => (
  <BrowserRouter>
    <MainTemplate>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/home" />} />
        <Route exact path="/home" component={Feed} />
      </Switch>
    </MainTemplate>
  </BrowserRouter>
);

export default Root;
