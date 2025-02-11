import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('your name here'); // Initial name

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <h1> {name}!</h1>
      <input 
        type="text" 
        value={name} 
        onChange={handleChange} 
      />
    </div>
  );
}

export default App;