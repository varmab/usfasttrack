import React from 'react';
import './App.css';
import Welcome from './Welcome'
import Counter from './Counter'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Welcome name="Varma"/>
      </header>
      <Counter/>
    </div>
  );
}

export default App;
