import React, { createContext, useEffect, useState } from 'react'

export const AnimationContext = createContext()

export default function AnimationsContextProvider(props) {
    const [IsMobile, setIsMobile] = useState(false)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleWindowResize)

        setIsMobile(windowWidth <= 900)

        return () => {
            window.removeEventListener('resize', handleWindowResize)
        }
    })

    // Animations ----------------------------------------------------------------------------------------------------------------

    // --------------------------- ANIMACIONES HEADER --------------------------- //

    const menuVariant = IsMobile
        ? {
              // initial
              closed: {
                  x: '100vw'
              },
              // animate
              open: {
                  x: 0,
                  transition: {
                      ease: 'easeInOut',
                      staggerChildren: 0.1
                  }
              }
          }
        : {
              closed: { x: 0 },
              open: { x: 0 }
          }

    const enlacesMenuVariant = IsMobile
        ? {
              // initial
              closed: {
                  opacity: 0,
                  x: '100vw'
              },
              // animate
              open: {
                  opacity: 1,
                  x: 0,
                  transition: {
                      duration: 0.4
                  }
              }
          }
        : {
              closed: { opacity: 1 },
              open: { opacity: 1 }
          }

    const whileTapLinkVariant = {
        scale: 0.8
    }

    const whileHoverLinkMenuVariant = {
        color: 'hsl(5, 85%, 63%)',
        scale: 1.1
    }

    const closeSpaceVariant = {
        // initial
        closed: {
            x: '100vw'
        },
        // animate
        open: {
            x: 0,
            transition: {
                delay: 0.2,
                ease: 'easeInOut'
            }
        }
    }

    // --------------------------- ANIMACIONES BANNER --------------------------- //

    const whileHoverPrimaryButton = {
        backgroundColor: '#00001a'
    }

    const whileHoverLinkNewVariant = {
        color: 'hsl(35, 77%, 62%)'
    }

    // --------------------------- ANIMACIONES NOTICES --------------------------- //

    const whileHoverLinkCardVariant = {
        color: 'hsl(5, 85%, 63%)'
    }

    // Animation Context Provider ---------------------------------------------------------------------------------------

    return (
        <AnimationContext.Provider
            value={{
                menuVariant,
                enlacesMenuVariant,
                whileTapLinkVariant,
                whileHoverLinkMenuVariant,
                closeSpaceVariant,
                whileHoverPrimaryButton,
                whileHoverLinkNewVariant,
                whileHoverLinkCardVariant
            }}
        >
            {props.children}
        </AnimationContext.Provider>
    )
}
