import React from 'react';

import { UserConsumer } from '../components/userContext';

const BasicNav = () => {
  return (
    <UserConsumer>
      {({ user }) => (
        <div className='nav-container'>
          {user.isAuthenticated ? <LoggedInNav /> : <LoggedOutNav />}
        </div>
      )}
    </UserConsumer>
  );
};

const LoggedInNav = () => {
  return (
    <UserConsumer>
      {({ user, logout }) => (
        <div>
          <p>
            Hello {user.name}, You are LoggedIn with {user.email}
          </p>
          <ul className='nav'>
            <li>Dashboard</li>
            <li onClick={logout}>Logout</li>
          </ul>
        </div>
      )}
    </UserConsumer>
  );
};

const LoggedOutNav = () => {
  return (
    <UserConsumer>
      {({ login }) => (
        <div>
          <p>Please click the login button below</p>
          <ul className='nav'>
            <li onClick={login}>Login</li>
            <li>Register</li>
          </ul>
        </div>
      )}
    </UserConsumer>
  );
};

export default BasicNav;
