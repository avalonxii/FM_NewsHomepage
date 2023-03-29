import React from 'react'

export default function NewTexto({ info }) {
    return (
        <div className='newTexto'>
            <h4>{info.title}</h4>
            <p className='font-paragraph'>{info.text}</p>
        </div>
    )
}
