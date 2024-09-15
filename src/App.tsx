import React, { useState } from 'react';
import UserSearch from './userSearch';
import './App.css';

const testCaseCode = `
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('UserSearch component', () => {
  it('should show user details when a radio button for Alice is clicked', () => {
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

  it('should show "No users found" when no users match the search', () => {
    render(<App />);

    const searchInput = screen.getByTestId('search-input');
    fireEvent.change(searchInput, { target: { value: '999' } });

    expect(screen.getByText(/No users found/i)).toBeInTheDocument();
  });
});
`;

const App: React.FC = () => {
  const [showCode, setShowCode] = useState(false);

  const handleShowCode = () => {
    setShowCode(!showCode); // Toggle display of test case code
  };

  return (
    <div className="app-container">
      <h1 style={{textAlign:'center', color:'white'}}>User Search</h1>
      <UserSearch />
      <div className="test-div">
      <button onClick={handleShowCode} data-testid="show-code-button" className="show-code-button">
        {showCode ? 'Hide Test Case Code' : 'Show Test Case Code'}
      </button>
        </div>

      {showCode && (
        <pre data-testid="test-case-code" className="test-case-code">
          {testCaseCode}
        </pre>
      )}
    </div>
  );
};

export default App;
