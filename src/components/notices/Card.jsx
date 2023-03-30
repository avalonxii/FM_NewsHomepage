import { motion } from 'framer-motion'
import { useContext } from 'react'
import { AnimationContext } from '../../context/AnimationsContext'



export default function Card({ notice }) {

    const {whileHoverLinkCardVariant} = useContext(AnimationContext)

    return (
        <div className='card'>
            <img src={notice.img} alt={notice.title} />
            <div className='info'>
                <span className='num'>{notice.num}</span>
                <motion.span className='title' whileHover={whileHoverLinkCardVariant}>{notice.title}</motion.span>
                <span className='text font-paragraph'>{notice.text}</span>
            </div>
        </div>
    )
}
