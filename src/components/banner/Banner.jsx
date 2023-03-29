import React from 'react'
import Photo from './Photo'
import BannerTitle from './BannerTitle'
import BannerText from './BannerText'
import New from './New'
import './banner.scss'

export default function Banner() {
    return (
        <div className='banner'>
            <div className='left'>
                <Photo />

                <div className='bottom'>
                    <BannerTitle />
                    <BannerText />
                </div>
            </div>
            <New />
        </div>
    )
}
