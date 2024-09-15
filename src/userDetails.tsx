// src/UserDetails.tsx
import React from 'react';
import { users } from './data';
import './App.css'; // Ensure this CSS file is included for styling

interface UserDetailsProps {
  userId: string | null;  // userId can be either a string or null
}

const UserDetails: React.FC<UserDetailsProps> = ({ userId }) => {
  // Early return if no userId is provided
  if (!userId) {
    return (
      <div data-testid="user-details" className="user-details no-user">
        <h2>User Details</h2>
        <p>No user selected</p>
      </div>
    );
  }

  // Find the user by userId
  const user = users.find(user => user.id === userId);

  return (
    <div data-testid="user-details" className="user-details">
      <h2>User Details</h2>
      <hr />
      {user ? (
        <div className="user-info">
          <img src={user.profilePicture} alt={`${user.name}'s profile`} className="user-profile-picture" />
          <div className="user-details-text">
            <p>ID: {user.id}</p>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Address: {user.address.street}, {user.address.city}, {user.address.state}, {user.address.zip}</p>
            <p>Age: {user.age}</p>
          </div>
        </div>
      ) : (
        <p>User not found</p>
      )}
    </div>
  );
};

export default UserDetails;
