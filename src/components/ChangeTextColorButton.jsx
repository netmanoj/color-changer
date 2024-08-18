import React from 'react';

const ChangeTextColorButton = ({ setTextColor }) => {
  const handleClick = () => {
    setTextColor(prevColor => prevColor === '#000000' ? '#ffffff' : '#000000');
  };

  return (
    <button onClick={handleClick}>Change Text Color</button>
  );
};

export default ChangeTextColorButton;
