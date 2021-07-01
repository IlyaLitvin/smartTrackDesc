import React, { Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard/Dashboard';
import Sequence from './pages/Sequence/Sequence';
import Alerts from './pages/Alerts/Alerts';
import routes from './routes';
import DoctorsTab from './pages/Staff/Tabs/DoctorsTab';
import AssistantsTab from './pages/Staff/Tabs/AssistantsTab';
import ReceptionistsTab from './pages/Staff/Tabs/ReceptionistsTab';

function App() {
  return (
    <Fragment>
      <Switch>
        <Route exact path={routes.dashboard} component={Dashboard} />
        <Route exact path={routes.staff} component={DoctorsTab} />
        <Route exact path={routes.alerts} component={Alerts} />
        <Route exact path={routes.sequence} component={Sequence} />
        <Route exact path="/staff/assist" component={AssistantsTab} />
        <Route exact path="/staff/recep" component={ReceptionistsTab} />
        <Redirect to={routes.dashboard} /> 
      </Switch>
    </Fragment>
  );
}

export default App;
