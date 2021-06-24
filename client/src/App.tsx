import React, { Fragment } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard/Dashboard';


function App() {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/" component={Staff} />
        <Route exact path="/" component={Alerts} />
        <Route exact path="/" component={Dashboard} />
      </Switch>
    </Fragment>
  );
}

export default App;
