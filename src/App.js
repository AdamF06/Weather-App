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
