import React, { useState } from 'react';
import WordBank from './components/WordBank.jsx';
import Box from './components/Box.jsx';
import Hero from './components/startPage.jsx';

const App = () => {
  const [droppedWords, setDroppedWords] = useState([]);

  const handleDrop = (word) => {
    setDroppedWords([...droppedWords, word]);
  };

  return (
    <div>
      <Hero/>
    </div>
  );
};

export default App;
