import React from 'react';

import { UserConsumer } from '../components/userContext';
import AddForm from './AddForm';

const Showcase = () => {
  return (
    <UserConsumer>
      {({ user }) => (
        <div>
          <h3>{user.name} Showcase:</h3>
          <AddForm />
          <ItemList />
        </div>
      )}
    </UserConsumer>
  );
};

const ItemList = () => {
  return (
    <UserConsumer>
      {({ user }) => (
        <ul>
          {user.languages.map(lang => (
            <li key={lang}>{lang}</li>
          ))}
        </ul>
      )}
    </UserConsumer>
  );
};

export default Showcase;
