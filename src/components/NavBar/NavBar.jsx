import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Session } from '../Auth';

// TODO: Refactor to reactstrap
const NavBar = ({ isSignedIn, userEmail }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <h1 className="navbar-brand">Task Tracker</h1>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        {isSignedIn && (
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink className="nav-item nav-link" to="/dashboard/boards">
                Boards
              </NavLink>
            </li>
          </ul>
        )}
        <ul className="navbar-nav mr-auto" />
        {isSignedIn ? (
          <React.Fragment>
            <Session userEmail={userEmail} />
            <NavLink className="btn btn-outline-success ml-2 my-sm-0" to="/logout">
              Sign Out
            </NavLink>
          </React.Fragment>
        ) : (
          <NavLink className="btn btn-outline-success ml-2 my-sm-0" to="/auth">
            Sign in
          </NavLink>
        )}
      </div>
    </nav>
  );
};

NavBar.propTypes = {
  isSignedIn: PropTypes.bool.isRequired,
  userEmail: PropTypes.string
};

export default NavBar;
