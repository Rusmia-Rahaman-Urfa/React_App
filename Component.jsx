import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('Rusmia Rahaman Urfa'); // Initial name

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <input 
        type="text" 
        value={name} 
        onChange={handleChange} 
      />
    </div>
  );
}

export default App;