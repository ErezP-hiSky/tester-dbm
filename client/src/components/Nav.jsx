import React, { useContext, Fragment } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/auth/authContext';
import PropTypes from 'prop-types'
import '../sass/main.scss';


function Nav() {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, logout, user } = authContext;

  const guestLinks = (
    <Fragment>
      <Link className="nav-style" to="/">
          <li>Home</li>
      </Link>
      <Link className="nav-style" to="/management">
          <li>Management</li>
      </Link>
      <Link className="nav-style" to="/search-options">
          <li>Technician (registered only)</li>
      </Link>
      <Link className="nav-style" to="/register">
          <li>Register</li>
      </Link>
      <Link className="nav-style" to="/login">
          <li>Login</li>
      </Link>
    </Fragment>
  );

  const onLogout = () => {
    logout();
  }

  const authLinks = (
    <Fragment>
      <li>
        Hello { user && user.name }
      </li>
      <Link className="nav-style" to="/">
          <li>Home</li>
      </Link>
      <Link className="nav-style" to="/management">
          <li>Management</li>
      </Link>
      <Link className="nav-style" to="/search-options">
          <li>Technician</li>
      </Link>
      <li>
        <a onClick={onLogout} href="#!">
          <i className="fas fa-sign-out-alt"></i> {' '}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </Fragment>
  );

  

  return (
    <nav>
        <ul className="nav-links">
          { isAuthenticated ? authLinks : guestLinks }
        </ul>
    </nav>
  );
}

Nav.propTypes = {
  icon: PropTypes.string
}

Nav.defaultProps = {
  icon: 'fas fa-id-card-alt'
}

export default Nav;
