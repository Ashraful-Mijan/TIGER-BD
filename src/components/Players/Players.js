import React, { useEffect, useState } from 'react'
import './Players.css'
import playersData from '../../playersData/team.json'
import PlayerList from '../PlayersList/PlayerList';
import PlayersSummary from '../PlayersSummary/PlayersSummary';

function Players() {
    const [players, setPlayers] = useState([]);
    const [playerCounter, setPlayerCounter] = useState([]);
    useEffect(()=> {
        setPlayers(playersData)
    }, [])

    const addButtonHandler = player => {
        const singlePlayer = [...playerCounter, player ];
        setPlayerCounter(singlePlayer);
    }

    console.log(players)
    return (
        <div className='container bg-light wrapper border border-bottom-0'>
            <div className="players-container">
                {
                    players.map(player => <PlayerList key={player.id} buttonHandler={addButtonHandler} player={player} />)
                }
            </div>
            <div className="cart-container bg-dark rounded shadow">
                <PlayersSummary cart={playerCounter} />
            </div>
        </div>
    )
}

export default Players
