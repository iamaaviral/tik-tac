import React from 'react'
import './grid.css'


const renderValue = (value) => {
    if(value === 'cross') {
        return 'X'
    } else if(value === 'circle') {
        return 'O'
    } else {
          return  null
        }
}

const Grid = (props) => {
    return(
    <>
    <div className="container">
        {props.data.map((value,index) => {
           return( <div key={index}
             onClick={() => {props.setGrid(index)}}>{renderValue(value)}
        </div>)
        })}
    </div>
    <div className="grid-turn">{`turn: ${props.turn}`}</div>
    {props.winner ? <div className="grid-result">{`player with ${(props.turn === 'cross') ? 'circle' : 'cross'} won` }</div>: null}
    </>)
}

export default Grid;