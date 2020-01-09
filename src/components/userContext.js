import React, { createContext, useState } from 'react';

let UserContext = null;
const { Provider, Consumer } = (UserContext = createContext());

const UserProvider = props => {
  const [user, setUser] = useState({
    name: 'Rayhanul Islam',
    email: 'rislammb@email.com',
    languages: ['HTML', 'CSS', 'JavaScript'],
    isAuthenticated: true
  });

  const login = () => {
    setUser({ ...user, isAuthenticated: true });
  };

  const logout = () => {
    setUser({ ...user, isAuthenticated: false });
  };

  const addLang = lang => {
    const languages = user.languages;
    languages.push(lang);
    setUser({ ...user, languages: user.languages });
  };

  return (
    <Provider value={{ user, login, logout, addLang }}>
      {props.children}
    </Provider>
  );
};

export { UserProvider, Consumer as UserConsumer, UserContext };
