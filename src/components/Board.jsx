import React, { useEffect, useState } from 'react';
import './Board.css';
import Cell from './Cell';

const SIZE = 3;


const create2dArray = (size = 0) => {
    let y = Array(size).fill([]).map(() => Array(size).fill(null))
    return y;

}

const Board = () => {

    const [values, setValues] = useState(create2dArray(SIZE));
    const [player, setPlayer] = useState(null)

    useEffect(() => {
        console.log(values)
        //row-wise checking
        let rows = [[1, 8, 7], [2, 7, 2], [7, 6, 9]];
        const winner = validateWinner(values);
        if (winner) {
            console.log(`Player:${player} won the game`)
        } else {
            togglePlayer();
        }



    }, [values])

    const validateWinner = (rows) => {
        let winner = null;
        let martixSize = rows.length;


        //Row checking
        for (let rowIdx = 0; rowIdx < martixSize; rowIdx++) {
            let row = rows[rowIdx];
            for (let colIdx = 0; colIdx < martixSize; colIdx++) {
                if (colIdx === martixSize - 1 && row[0] === row[colIdx]) {
                    winner = row[colIdx];
                    break;
                } else if (row[0] !== row[colIdx]) break;
            }
            if (winner) {
                return winner;
            }
        }


        //column checking
        for (let rowIdx = 0; rowIdx < martixSize; rowIdx++) {

            for (let colIdx = 0; colIdx < martixSize; colIdx++) {
                if (colIdx === martixSize - 1 && rows[0][rowIdx] === rows[colIdx][rowIdx]) {
                    winner = rows[colIdx][rowIdx];
                    break;
                } else if (rows[0][rowIdx] !== rows[colIdx][rowIdx]) break;
            }
            if (winner) {
                return winner;
            }
        }


        //diagonal -1 checking
        for (let rowIdx = 0; rowIdx < martixSize; rowIdx++) {
            if (rowIdx === martixSize - 1 && rows[0][0] === rows[rowIdx][rowIdx]) {
                winner = rows[rowIdx][rowIdx];
                break;
            } else if (rows[0][0] !== rows[rowIdx][rowIdx]) break;
            if (winner) {
                return winner;
            }
        }

        //diagonal 2 checking
        for (let rowIdx = 0; rowIdx < martixSize; rowIdx++) {
            let colIdx = martixSize - (rowIdx + 1)
            if (rowIdx === martixSize - 1 && rows[0][martixSize - 1] === rows[rowIdx][colIdx]) {
                winner = rows[rowIdx][colIdx];
                break;
            } else if (rows[0][martixSize - 1] !== rows[rowIdx][colIdx]) break;
            if (winner) {
                return winner;
            }
        }
        return winner;
    }


    const togglePlayer = () => {
        setPlayer((player) => player === 1 ? 2 : 1)
    }

    const handleCellClick = (row, col) => {
        let newVal = [...values];
        newVal[row][col] = player;
        setValues(newVal)
    }

    const resetGame = () => {
        setValues(create2dArray(SIZE))
    }

    let styleVal = `repeat(${SIZE}, ${Math.floor(100 / (SIZE * 2))}vmin)`;
    console.log(player)

    return <><div className='board' style={{ 'gridTemplateColumns': styleVal, 'gridTemplateRows': styleVal }}>

        {
            values.map((val, row) => {
                return val.map((v, col) => {
                    return <Cell value={v} handleCellClick={() => handleCellClick(row, col)} />
                })

            })
        }
    </div>
        <button onClick={resetGame}>Reset Game</button>
    </>


}

export default Board;