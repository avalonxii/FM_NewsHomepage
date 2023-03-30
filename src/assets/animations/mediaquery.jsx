import { useEffect, useState } from 'react'

export function useMediaQuery() {
    const [DeviceSize, setDeviceSize] = useState(window.innerWidth)

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize(window.innerWidth)
        }

        window.addEventListener('resize', handleWindowResize)

        return () => {
            window.removeEventListener('resize', handleWindowResize)
        }
    }, [window.innerWidth])

}
