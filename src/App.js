import React from 'react';
import './App.css';

import { UserProvider, UserConsumer } from './components/userContext';
import BasicNav from './components/BasicNav';
import Showcase from './components/Showcase';

const App = () => {
  return (
    <UserProvider>
      <div className='container'>
        <h2>Context API Crash Course</h2>
        <BasicNav />
        <UserConsumer>
          {({ user }) => user.isAuthenticated && <Showcase />}
        </UserConsumer>
      </div>
    </UserProvider>
  );
};

export default App;
