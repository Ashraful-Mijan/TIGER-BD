import React from 'react'
import SingleInfo from '../SingleInfo/SingleInfo';

function PlayersSummary(props) {
    const cart = props.cart;
    let salary = 0;
    for (let i = 0; i < cart.length; i++) {
        const playerinfo = cart[i];
        salary = salary + playerinfo.sallary;
    }
    return (
        <div className='py-3'>
            <div className='text-info border-bottom'>
            <h4>Team Members : {cart.length}</h4>
            <h6>Total Budged : ${salary}</h6>
            </div>
            {
                cart.map(player => <SingleInfo info={player}/>)
            }
        </div>
    )
}

export default PlayersSummary
