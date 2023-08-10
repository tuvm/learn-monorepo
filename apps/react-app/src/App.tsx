import React from 'react';
import logo from './logo.svg';
import './App.css';
import { UserProfile } from '@shared/ui';
import { UserType } from '@shared/interface';

function App() {
  const user: UserType = {
    username: 'admin',
    fullname: 'Admin',
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <UserProfile {...user} />
    </div>
  );
}

export default App;
