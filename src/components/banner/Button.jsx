import { motion } from 'framer-motion'
import { whileHoverPrimaryButton } from '../../assets/animations/framerAnimations'

export default function Button() {
    return (
        <motion.button
            whileHover={whileHoverPrimaryButton}
            className='weight-700'
        >
            READ MORE
        </motion.button>
    )
}
