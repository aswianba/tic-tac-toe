import React, { useState } from 'react';

const Cell = (props) => {
    let { value } = props;
    return <div className={`cell ${value && 'not-empty'}`} onClick={props.handleCellClick}>
        {value ? value == 1 ? 'O' : 'X' : " "}
    </div>

}

export default Cell;