import React from 'react';
import TableCell from '@material-ui/core/TableCell';

export function RollItem(props) {
    const startTime = new Date(props.roll.starttime * 1000);
    const endTime = new Date(props.roll.endtime * 1000);
    return <>
        <TableCell align="right">{props.roll.type}</TableCell>
        <TableCell align="right">{props.roll.length}</TableCell>
        <TableCell align="right">{endTime.toLocaleString()}</TableCell>
        <TableCell align="right">{startTime.toLocaleString()}</TableCell>
        <TableCell align="right">{props.roll.totaldefects}</TableCell>
        <TableCell align="right">{props.roll.coilid}</TableCell>
        <TableCell align="right">{props.roll.batch}</TableCell>
        <TableCell align="right">{props.roll.width}</TableCell>

    </>
};