import { motion } from 'framer-motion'
import { useContext } from 'react'
import { AnimationContext } from '../../context/AnimationsContext'


export default function NewTexto({ info }) {

    const {whileHoverLinkNewVariant} = useContext(AnimationContext)

    return (
        <div className='newTexto'>
            <motion.h4 whileHover={whileHoverLinkNewVariant}>{info.title}</motion.h4>
            <p className='font-paragraph'>{info.text}</p>
        </div>
    )
}
