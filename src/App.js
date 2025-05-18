import React, { useState } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [activePage, setActivePage] = useState('home');

  return (
    <div className="app">
      <Header setActivePage={setActivePage} />
      <Content activePage={activePage} />
      <Footer /> 
    </div>
  );
}

export default App;