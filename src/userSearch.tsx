// src/UserSearch.tsx
import React, { useState } from 'react';
import { users } from './data';
import UserDetails from './userDetails';
import RadioButton from './RadioButton';
import './App.css'; // Import component-specific styles

const UserSearch: React.FC = () => {
  const [searchId, setSearchId] = useState('');
  const [selectedUser, setSelectedUser] = useState<string | null>(null);

  const filteredUsers = users.filter(user => user.id.includes(searchId));

  const clearSearch = () => {
    setSearchId('');
    setSelectedUser(null);
  };

  return (
    <div className="user-search">
      <input
        type="text"
        value={searchId}
        onChange={(e) => setSearchId(e.target.value)}
        placeholder="Enter User Id ( ex: 1 )"
        data-testid="search-input"
        className="search-input"
      />
      <button onClick={clearSearch} data-testid="clear-button" className="clear-button">Clear</button>
      {searchId && (
        <div className="radio-buttons">
          {filteredUsers.length > 0 ? (
            filteredUsers.map(user => (
              <RadioButton
                key={user.id}
                id={`radio-${user.id}`}
                name={user.name}
                value={user.id}
                checked={selectedUser === user.id}
                onChange={() => setSelectedUser(user.id)}
                testId={`radio-${user.id}`}
              />
            ))
          ) : (
            <p>No users found</p>
          )}
        </div>
      )}
      <UserDetails userId={selectedUser} />
    </div>
  );
};

export default UserSearch;
