// src/RadioButton.tsx
import React from 'react';
import './App.css'; // Import component-specific styles

interface RadioButtonProps {
  id: string;
  name: string;  // This should be the actual name of the user
  value: string;
  checked: boolean;
  onChange: () => void;
  testId: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({ id, name, value, checked, onChange, testId }) => {
  return (
    <label className="radio-button-label">
      <input
        data-testid={testId}
        id={id}
        name="user" // This can be static as it's used for grouping
        type="radio"
        value={value}
        checked={checked}
        onChange={onChange}
        className="radio-button-input"
      />
      {name}  {/* Display the actual name of the user */}
    </label>
  );
};

export default RadioButton;
