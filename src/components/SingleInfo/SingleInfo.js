import React from 'react'
import './SingleInfo.css'
function SingleInfo(props) {
    const { playername, sallary, img } = props.info

    return (
        <div className='bg-light text-dark mt-2 info-container rounded'>
            <div>
                <img className='w-50 border border-info' src={img} alt="" />
            </div>
            <div className='preview px-1'>
                <h6>{playername}</h6>
                <h6>${sallary}</h6>
            </div>
        </div>
    )
}

export default SingleInfo
