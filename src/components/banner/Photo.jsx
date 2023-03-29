import React from 'react'
import fotoBannerMobile from '../../assets/images/image-web-3-mobile.jpg'
import fotoBannerDesktop from '../../assets/images/image-web-3-desktop.jpg'

export default function photo() {
    return <>

        <img src={fotoBannerMobile} alt="foto banner" className='fotoMobile'/>
        <img src={fotoBannerDesktop} alt="foto banner" className='fotoDesktop'/>
    </>
}
