import React, { useState } from 'react';
import './App.css';

function App() {
  const { inputValue, setInputValue } = useState('');

  const handleLinearSearch = (ev) => {
    ev.preventDefault();
  };

  const handleBinarySearch = (ev) => {
    ev.preventDefault();
  }

  return (
    <div className="App">
      <form type='submit'>
        <label className='search'>Search: </label>
        <input type='text' className='search'></input>
        <br />
        <button onClick={handleLinearSearch}>Linear Search</button>
        <button onClick={handleBinarySearch}>Binary Search</button>
      </form>
    </div>
  );
}

export default App;