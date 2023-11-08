import React, { useState } from 'react';
import './App.css';

function App() {
  const [dob, setDob] = useState('');
  const [age, setAge] = useState(null);
  const [error, setError] = useState('');

  const calculateAge = () => {
    const birthDate = new Date(dob);

    if (isNaN(birthDate)) {
      setError('Invalid date format. Please use yyyy-mm-dd.');
      setAge(null);
    } else {
      setError('');
      const today = new Date();
      const ageInMilliseconds = today - birthDate;
      const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
      setAge(ageInYears.toFixed(2));
    }
  };

  return (
    <div className="App">
      <h1>Age Calculator</h1>
      <label htmlFor="dob">Enter Your Date of Birth:</label>
      <input
        type="date"
        id="dob"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
      />
      <button onClick={calculateAge}>Calculate</button>
      {error && <p className="error">{error}</p>}
      {age !== null && !error && (
        <p>You are {age} years old.</p>
      )}
    </div>
  );
}

export default App;
