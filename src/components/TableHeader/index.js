import React from 'react';
import TableCell from '@material-ui/core/TableCell';

export function TableHeader() {
    return <>
        <TableCell align="right">Тип материала</TableCell>
        <TableCell align="right">Длина</TableCell>
        <TableCell align="right">Время окончания</TableCell>
        <TableCell align="right">Время начала</TableCell>
        <TableCell align="right">Обнаружено проблем</TableCell>
        <TableCell align="right">№ рулона</TableCell>
        <TableCell align="right">Партия</TableCell>
        <TableCell align="right">Ширина</TableCell>
    </>
};