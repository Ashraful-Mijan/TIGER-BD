import React from 'react'
import './PlayerList.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPlusCircle, faCheckSquare, faDollarSign, faEye } from '@fortawesome/free-solid-svg-icons'

function PlayerList(props) {
    const { playername, img, role, sallary } = props.player
    return (
        <div className='list-container bg-dark shadow rounded'>
            <div className="player-container">
                <div className="player-img">
                    <img className='rounded-circle' src={img} alt="" />
                </div>
                <div className="player-info">
                    <h4>{playername}</h4>
                    <h6>{role}</h6>
                    <h6><FontAwesomeIcon icon={faDollarSign} /> {sallary}</h6>
                </div>
            </div>
            <div className="button">
                <button onClick={()=> props.buttonHandler(props.player)} className="btn btn-success"><FontAwesomeIcon icon={faPlusCircle} /> Add Team</button>
            </div>
        </div>
    )
}

export default PlayerList
