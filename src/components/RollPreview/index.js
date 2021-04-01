import React from 'react';
import './index.css';

export function RollPreview(props) {
    return <img className="rollPreview" src={`images/${props.previewId}.jpg`} />
};