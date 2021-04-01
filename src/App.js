import React from 'react';
import { RollTable } from './components/RollTable';
import { RollPreview } from './components/RollPreview';
import './App.css';

export default function App() {
  return (
    <div className="page">
      <main className="main">
        <div className="main__image">
          <RollPreview />
        </div>
        <div className="main__rollTable">
          <RollTable />
        </div>
      </main>
    </div>
  );
}