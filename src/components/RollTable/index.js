import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { RollPreview } from '../RollPreview';

import './index.css';

const useStyles = makeStyles({
  table: {
    width: '100%',
  },
});

export function RollTable(props) {
  const classes = useStyles();

  const [previewId, setPreviewId] = useState('default');

  return (
    <>
      <RollPreview previewId={previewId} />
      <TableContainer component={Paper}>
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Тип материала</TableCell>
              <TableCell align="right">Длина</TableCell>
              <TableCell align="right">Время окончания</TableCell>
              <TableCell align="right">Время начала</TableCell>
              <TableCell align="right">Обнаружено проблем</TableCell>
              <TableCell align="right">№ рулона</TableCell>
              <TableCell align="right">Партия</TableCell>
              <TableCell align="right">Ширина</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.rolls.map((roll) => {
              console.log(roll);
              const startTime = new Date(roll.starttime * 1000);
              const endTime = new Date(roll.endtime * 1000);
              return (
                <TableRow key={roll.name} onClick={() => setPreviewId(roll.imageid)}>
                  <TableCell align="right">{roll.type}</TableCell>
                  <TableCell align="right">{roll.length}</TableCell>
                  <TableCell align="right">{endTime.toLocaleString()}</TableCell>
                  <TableCell align="right">{startTime.toLocaleString()}</TableCell>
                  <TableCell align="right">{roll.totaldefects}</TableCell>
                  <TableCell align="right">{roll.coilid}</TableCell>
                  <TableCell align="right">{roll.batch}</TableCell>
                  <TableCell align="right">{roll.width}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}