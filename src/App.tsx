import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tokenomics from './components/Tokenomics';
import Section1 from './components/Section1';
import Memes from './components/Memes';

function App() {
  return (
    <div className="App">
      <Section1/>
      <Tokenomics/>
      <Memes/>
    </div>
  );
}

export default App;
