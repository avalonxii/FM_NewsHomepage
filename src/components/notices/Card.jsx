import React from 'react'

export default function Card({ notice }) {
    return (
        <div className='card'>
            <img src={notice.img} alt={notice.title} />
            <div className='info'>
                <span className='num'>{notice.num}</span>
                <span className='title'>{notice.title}</span>
                <span className='text font-paragraph'>{notice.text}</span>
            </div>
        </div>
    )
}
