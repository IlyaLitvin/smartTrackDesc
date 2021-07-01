import React from 'react';
import { NavLink } from 'react-router-dom';

export default function StaffNav() {
  return (
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
  );
}
