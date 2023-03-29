import React from 'react'
import Logo from './Logo'
import Menu from './Menu'

import './header.scss'

export default function Header() {
    return (
        <div className="header">
            <Logo />
            <Menu />
        </div>
    )
}
