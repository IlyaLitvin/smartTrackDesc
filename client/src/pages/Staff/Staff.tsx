import React from 'react';
import { NavLink, Switch, Route, useRouteMatch, Redirect, Link } from 'react-router-dom';
import AssistantsTab from './Tabs/AssistantsTab';
import DoctorsTab from './Tabs/DoctorsTab';
import ReceptionistsTab from './Tabs/ReceptionistsTab';

export default function Staff() {
  // const {path,url}: any = useRouteMatch();

  return (
    <>
    <div>
      <button type="button">Add new</button>
      <ul>
        <li>
          <NavLink to="/staff/doctors">Doctors</NavLink>
        </li>
        <li>
          <NavLink to="/staff/assist">Assistants</NavLink>
        </li>
        <li>
          <NavLink to="/staff/recep">Receptionist</NavLink>
        </li>
      </ul>
    </div>

    <Route path="/staff/doctors" component={DoctorsTab} />
    <Route path="/staff/assist" component={AssistantsTab} />
    <Route path="/staff/recep" component={ReceptionistsTab} />
    <Redirect to="/staff" />
    </>
  );
};

