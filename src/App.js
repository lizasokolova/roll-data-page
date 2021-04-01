import React, { useEffect, useState } from 'react';
import { RollTable } from './components/RollTable';
import MOCK from './data/data.json';

import './App.css';

const fetchRolls = () => {
  return MOCK;
}

export default function App() {

  const [rolls, setRolls] = useState([]);

  useEffect(() => {
    const rollsData = fetchRolls();
    setRolls(rollsData);
  }, []);

  return (
    <div className="page">
      <main className="main">
        <div className="main__image">
          
        </div>
        <div className="main__rollTable">
          <RollTable rolls={rolls} />
        </div>
      </main>
    </div>
  );
}