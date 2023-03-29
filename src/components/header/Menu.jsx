import React, { useState } from 'react'
import burguer from '../../assets/images/icon-menu.svg'
import menuClose from '../../assets/images/icon-menu-close.svg'
import {
    menuVariant,
    closeSpaceVariant,
    enlacesMenuVariant,
    whileClickVariant
} from '../../assets/animations/headerAnimation'
import { motion } from 'framer-motion'

export default function Menu() {
    const [isOpen, setIsOpen] = useState(false)

    const links = ['Home', 'New', 'Popular', 'Trending', 'Categories']

    console.log(menuVariant);
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
                            whileTap={whileClickVariant}
                        >
                            {link}
                        </motion.li>
                    ))}
                </ul>
            </motion.div>
        </>
    )
}
