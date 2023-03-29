import React from 'react'
import burguer from '../../assets/images/icon-menu.svg'

export default function Menu() {
    return (
        <>
            <div className="burguer">
                <img src={burguer} alt="menu icon" />
            </div>

            <ul className='menu'>
                <li>Home</li>
                <li>New</li>
                <li>Popular</li>
                <li>Trending</li>
                <li>Categories</li>
            </ul>
        </>
    )
}
