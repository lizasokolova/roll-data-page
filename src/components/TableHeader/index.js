import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import './index.css';

export function TableHeader(props) {
    return <>
        <TableCell className="table-header" align="right" onClick={() => props.onSort('type')}>Тип материала</TableCell>
        <TableCell className="table-header" align="right" onClick={() => props.onSort('length')}>Длина</TableCell>
        <TableCell className="table-header" align="right" onClick={() => props.onSort('endtime')}>Время окончания</TableCell>
        <TableCell className="table-header" align="right" onClick={() => props.onSort('starttime')}>Время начала</TableCell>
        <TableCell className="table-header" align="right" onClick={() => props.onSort('totaldefects')}>Обнаружено проблем</TableCell>
        <TableCell className="table-header" align="right" onClick={() => props.onSort('coilid')}>№ рулона</TableCell>
        <TableCell className="table-header" align="right" onClick={() => props.onSort('batch')}>Партия</TableCell>
        <TableCell className="table-header" align="right" onClick={() => props.onSort('width')}>Ширина</TableCell>
    </>
};