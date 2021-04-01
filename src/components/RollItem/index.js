import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import './index.css';

export function RollItem(props) {
    const startTime = new Date(props.roll.starttime * 1000);
    const endTime = new Date(props.roll.endtime * 1000);
    return <>
        <TableCell className='roll-row' align="right">{props.roll.type}</TableCell>
        <TableCell className='roll-row' align="right">{props.roll.length}</TableCell>
        <TableCell className='roll-row' align="right">{endTime.toLocaleString()}</TableCell>
        <TableCell className='roll-row' align="right">{startTime.toLocaleString()}</TableCell>
        <TableCell className='roll-row' align="right">{props.roll.totaldefects}</TableCell>
        <TableCell className='roll-row' align="right">{props.roll.coilid}</TableCell>
        <TableCell className='roll-row' align="right">{props.roll.batch}</TableCell>
        <TableCell className='roll-row' align="right">{props.roll.width}</TableCell>

    </>
};