import React, { useState } from 'react';
import LoginScreen from './components/LoginScreen';
import HomeScreen from './components/HomeScreen';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
    setLoggedIn(true);
  };

  return (
    <div className="App">
      {!loggedIn ? (
        <LoginScreen onLogin={handleLogin} />
      ) : (
        <HomeScreen user={user} />
      )}
    </div>
  );
};

export default App;
