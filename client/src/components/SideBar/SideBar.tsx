import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import routes from '../../routes';
import styles from './SideBar.module.css';
import sprite from '../../assets/images/sprite.svg';

export default function SideBar() {
  return (
    <div className={styles.sidebar}>
      <header className={styles.header}>
        <Link to={routes.dashboard}>Logo</Link>
      </header>
      <ul className={styles.nav}>
        <li>
          <NavLink className={styles.link} to={routes.dashboard}>
            <svg width="23" height="23" fill="#6AC7BE" className={styles.svg}>
              <use href={sprite + '#icon-dashboard-interface'} />
            </svg>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.link} to={routes.staff}>
            <svg width="23" height="23" fill="#6AC7BE" className={styles.svg}>
              <use href={sprite + '#icon-Vector'} />
            </svg>
            Staff
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.link} to={routes.alerts}>
            <svg width="24" height="24" fill="#6AC7BE" className={styles.svg}>
              <use href={sprite + '#icon-bell'} />
            </svg>
            Alerts
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.link} to={routes.sequence}>
            <svg width="27" height="27" fill="#6AC7BE" className={styles.svg}>
              <use href={sprite + '#icon-Group-861'} />
            </svg>
            Sequence
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
