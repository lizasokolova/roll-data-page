import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import './index.css';

const useStyles = makeStyles({
  table: {
    width: '100%',
  },
});

export function RollTable(props) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Тип материала</TableCell>
            <TableCell align="right">Длинна</TableCell>
            <TableCell align="right">Время окончания</TableCell>
            <TableCell align="right">Время начала</TableCell>
            <TableCell align="right">Обнаружено проблем</TableCell>
            <TableCell align="right">№ рулона</TableCell>
            <TableCell align="right">Партия</TableCell>
            <TableCell align="right">Ширина</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rolls.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}