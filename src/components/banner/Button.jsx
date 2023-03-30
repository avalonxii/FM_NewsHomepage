import { motion } from 'framer-motion'
import { useContext } from 'react'
import { AnimationContext } from '../../context/AnimationsContext'

export default function Button() {

    const {whileHoverPrimaryButton} = useContext(AnimationContext)

    return (
        <motion.button
            whileHover={whileHoverPrimaryButton}
            className='weight-700'
        >
            READ MORE
        </motion.button>
    )
}
