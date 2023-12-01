import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { NavItem, NavLink } from 'reactstrap';
import { ApplicationPaths } from './ApiAuthorizationConstants';
import authService from './AuthorizeService';

const LoginMenu = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    const subscription = authService.subscribe(() => populateState());
    populateState();

    return () => {
      authService.unsubscribe(subscription);
    };
  }, []);

  const populateState = async () => {
    const [isAuth, user] = await Promise.all([
      authService.isAuthenticated(),
      authService.getUser(),
    ]);

    setIsAuthenticated(isAuth);
    setUserName(user && user.name);
  };

  const authenticatedView = (userName, profilePath, logoutPath, logoutState) => {
    return (
      <>
        <NavItem>
          <NavLink tag={Link} className="text-dark" to={profilePath}>
            Hello {userName}
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} className="text-dark" to={logoutPath} state={logoutState}>
            Logout
          </NavLink>
        </NavItem>
      </>
    );
  };

  const anonymousView = (registerPath, loginPath) => {
    return (
      <>
        <NavItem>
          <NavLink tag={Link} className="text-dark" to={registerPath}>
            Register
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} className="text-dark" to={loginPath}>
            Login
          </NavLink>
        </NavItem>
      </>
    );
  };

  if (!isAuthenticated) {
    const registerPath = `${ApplicationPaths.Register}`;
    const loginPath = `${ApplicationPaths.Login}`;
    return anonymousView(registerPath, loginPath);
  } else {
    const profilePath = `${ApplicationPaths.Profile}`;
    const logoutPath = `${ApplicationPaths.LogOut}`;
    const logoutState = { local: true };
    return authenticatedView(userName, profilePath, logoutPath, logoutState);
  }
};

export default LoginMenu;
