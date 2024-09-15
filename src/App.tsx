// src/App.tsx
import React from 'react';
import UserSearch from './userSearch';
import './App.css'

const App: React.FC = () => {
  return (
    <div>
      <h1 style={{textAlign:'center'}}>User Search</h1>
      <UserSearch />
    </div>
  );
};

export default App;