import React from 'react'
import './Header.css'
function Header() {
    return (
        <div className="container bg-dark header-container">
            <div className="log">
                <h3 className='text-white text-uppercase'><span className='text-danger'>Tiger</span> <span className='text-success'>BD</span></h3>
            </div>
            <div className="nav fw-bold">
                <a href="/" className="nav-link text-white ">See Members</a>
            </div>
        </div>
    )
}

export default Header
