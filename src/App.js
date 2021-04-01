import React from 'react';
import { RollTable } from './components/RollTable';
import './App.css';

export default function App() {
  return (
    <div className="page">
      <div className="header">

      </div>
      <div className="main">
        <div className="main__image">
          <img src="../images/1.jpg"></img>
        </div>
        <div className="main__rollTable">
          <RollTable />
        </div>
      </div>
      <div className="footer">
        ПАО «Северсталь» 2021 
      </div>
    </div>
  );
}