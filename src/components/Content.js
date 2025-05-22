import React from 'react';
import Home from './Home';
import Marriage from './Marriage';
import Brothers from './Brothers';
import Sisters from './Sisters';
import Chelliah from './Chelliah';
import Babies from './Babies';
import Others from './Others';
import './Content.css';

function Content({ activePage }) {
  return (
    <div className="content">
            <div className="content-inner">
    <main>
      {activePage === 'home' && <Home />}
      {activePage === 'marriage' && <Marriage />}
      {activePage === 'bros' && <Brothers />}
      {activePage === 'siss' && <Sisters />}
      {activePage === 'babies' && <Babies />}
      {activePage === 'chelliah' && <Chelliah />}
      {activePage === 'others' && <Others />}
    </main>
            </div>
    </div>
  );
}

export default Content;