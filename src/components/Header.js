import React from 'react'
//onReset is a function that would reset the games
const Header = ({ onReset, wins }) => {
    return (
        <div className='info-ss'>
            <div className='game-info'>
                <h2>Current wins: {wins}</h2>
            </div>
            <button type='reset' onClick={onReset}>
                Reset
            </button>
        </div>
    )
}

export default Header