import { motion } from 'framer-motion'
import { whileHoverLinkNewVariant } from '../../assets/animations/framerAnimations'


export default function NewTexto({ info }) {
    return (
        <div className='newTexto'>
            <motion.h4 whileHover={whileHoverLinkNewVariant}>{info.title}</motion.h4>
            <p className='font-paragraph'>{info.text}</p>
        </div>
    )
}
