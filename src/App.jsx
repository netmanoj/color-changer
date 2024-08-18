import React, { useState } from 'react';
import Box from './components/Box';
import ColorForm from './components/ColorForm';
import ChangeTextColorButton from './components/ChangeTextColorButton';
import './App.css';

function App() {
  const [boxColor, setBoxColor] = useState('#ffffff');
  const [textColor, setTextColor] = useState('white');

  return (
    <div className="App">
      <Box color={boxColor} textColor={textColor} />
      <ColorForm setBoxColor={setBoxColor} />
      <ChangeTextColorButton setTextColor={setTextColor} />
    </div>
  );
}

export default App;

