import React from 'react';
import './App.css';
import Header from './components/Header.js'
import Card from './components/Card'
import './App.css'
function App() {
  return (
    <>
      <header>
        <div className="header">
          <Header />
          <h1>{process.env.REACT_APP_NAME}</h1>
        </div>
      </header>
      <main>
        <div className="card">
          <Card />
        </div>
      </main>
    </>
  );
}

export default App;
