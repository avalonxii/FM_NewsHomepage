import React, { useState } from 'react'
import burguer from '../../assets/images/icon-menu.svg'
import menuClose from '../../assets/images/icon-menu-close.svg'
import {
    menuVariant,
    closeSpaceVariant,
    enlacesMenuVariant,
    whileTapLinkVariant,
    whileHoverLinkMenuVariant
} from '../../assets/animations/framerAnimations'
import { motion } from 'framer-motion'

export default function Menu() {
    const [isOpen, setIsOpen] = useState(false)

    const links = ['Home', 'New', 'Popular', 'Trending', 'Categories']

    const IsDesktop = window.innerWidth > 768
    console.log(IsDesktop)

    console.log(menuVariant)
    return (
        <>
            <img
                src={burguer}
                alt='menu icon'
                className='burguer'
                onClick={() => setIsOpen(true)}
            />

            <motion.div
                variants={closeSpaceVariant}
                initial='closed'
                animate={isOpen ? 'open' : 'closed'}
                onClick={() => setIsOpen(false)}
                className='closeSpace'
            ></motion.div>

            <motion.div
                variants={menuVariant}
                initial='closed'
                animate={isOpen ? 'open' : 'closed'}
                className='container-menu'
            >
                <img
                    src={menuClose}
                    alt='menu icon'
                    className='closeMenu'
                    onClick={() => setIsOpen(false)}
                />

                <ul className='menu weight-400'>
                    {links.map((link) => (
                        <motion.li
                            key={link}
                            variants={enlacesMenuVariant}
                            whileTap={whileTapLinkVariant}
                            whileHover={whileHoverLinkMenuVariant}
                        >
                            {link}
                        </motion.li>
                    ))}
                </ul>
            </motion.div>
        </>
    )
}
