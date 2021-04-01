import React, { useEffect, useState } from 'react';
import { RollTable } from './components/RollTable';
import { RollPreview } from './components/RollPreview';
import './App.css';
import MOCK from './data/data.json';

const fetchRolls = () => {
  return MOCK;
}

export default function App() {

  const [rolls, setRolls] = useState([]);

  useEffect(() => {
    const rollsData = fetchRolls();
    console.log(rollsData);
    setRolls(rollsData);
  }, []);

  return (
    <div className="page">
      <main className="main">
        <div className="main__image">
          <RollPreview />
        </div>
        <div className="main__rollTable">
          <RollTable rolls={rolls} />
        </div>
      </main>
    </div>
  );
}