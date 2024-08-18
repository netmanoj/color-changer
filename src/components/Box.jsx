import React from 'react';
import Color from 'color';

const Box = ({ color, textColor }) => {
  let hexCode;

  try {
    hexCode = Color(color).hex();
  } catch (error) {
    hexCode = 'Invalid color';
  }

  const boxStyle = {
    backgroundColor: color,
    color: textColor,
    width: '300px',
    height: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '20px auto',
    borderRadius: '15px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
    fontSize: '20px',
    transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out',
  };

  const hexCodeStyle = {
    fontSize: '14px',
    marginTop: '10px',
    fontStyle: 'italic',
    opacity: '0.7',
  };

  return (
    <div style={boxStyle}>
      <div>{color}</div>
      <div style={hexCodeStyle}>{hexCode}</div>
    </div>
  );
};

export default Box;
