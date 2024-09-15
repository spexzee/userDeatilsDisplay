import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('UserSearch component', () => {
  it('should show user details when a radio button is clicked', () => {
    render(<App />);

    const searchInput = screen.getByTestId('search-input');
    fireEvent.change(searchInput, { target: { value: '1' } });

    const radioButton = screen.getByTestId('radio-1');
    fireEvent.click(radioButton);

    const userDetails = screen.getByTestId('user-details');
    expect(userDetails).toBeInTheDocument();
    expect(screen.getByText(/ID: 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Name: Alice/i)).toBeInTheDocument();
  });

  it('should display "No users found" when no user matches the search criteria', () => {
    render(<App />);

    const searchInput = screen.getByTestId('search-input');
    fireEvent.change(searchInput, { target: { value: '4' } }); // Using a non-existent ID

    // Check for the "No users found" message
    expect(screen.getByText(/No users found/i)).toBeInTheDocument();
  });
});
