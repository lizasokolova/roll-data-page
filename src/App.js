import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { RollPreview } from './components/RollPreview';
import { TableHeader } from './components/TableHeader';
import { RollItem } from './components/RollItem';

import './App.css';


const useStyles = makeStyles({
  table: {
    width: '100%',
  },
  container: {
    maxHeight: '100%',
  },
});

const fetchRolls = async () => {
  const response = await fetch('/api/rolls');
  const rolls = await response.json();
  return rolls;
}

export default function App() {

  const [rolls, setRolls] = useState([]);
  const [previewId, setPreviewId] = useState('default');

  const classes = useStyles();

  const load = async () => {
    const rollsData = await fetchRolls();
    setRolls(rollsData);
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="page">
      <main className="main">
        <div className="main__image">
          <RollPreview previewId={previewId} />
        </div>
        <div className="main__rollTable">
          <TableContainer component={Paper} className={classes.container}>
            <Table stickyHeader className={classes.table} size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableHeader />
                </TableRow>
              </TableHead>
              <TableBody>
                {rolls ? rolls.map((roll) => {
                  return (
                    <TableRow key={roll.name} onClick={() => setPreviewId(roll.imageid)}>
                      <RollItem roll={roll} />
                    </TableRow>
                  )
                }) : 'Загрузка'}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </main>
    </div>
  );
}