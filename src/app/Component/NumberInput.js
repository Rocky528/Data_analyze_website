
import React from 'react';

function NumberInput(props) {
  const { value, onChange } = props;

  const handleChange = (event) => {
    const inputValue = event.target.value;
    // Remove all non-digits from the input value and convert to a number
    const numericValue = parseInt(inputValue.replace(/[^0-9]/g, ''), 10);
    // Format the numeric value with commas in groups of three digits
    const formattedValue = numericValue.toLocaleString('en-US', { minimumFractionDigits: 0 });
    // Call the parent onChange handler with the formatted value
    onChange(formattedValue);
  };

  return (
    <input type="text" value={value} onChange={handleChange} />
  );
}

export default NumberInput;