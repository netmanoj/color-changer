import React from 'react';

const ColorForm = ({ setBoxColor }) => {
  const handleChange = (e) => {
    setBoxColor(e.target.value);
  };

  return (
    <div>
      <input 
        type="text" 
        onChange={handleChange} 
        placeholder="Enter color name or hex code" 
      />
    </div>
  );
};

export default ColorForm;
