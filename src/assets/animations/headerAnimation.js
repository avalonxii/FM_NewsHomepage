import { useIsDesktop } from './mediaquery'

const IsDesktop = useIsDesktop()

export const menuVariant = IsDesktop
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

export const enlacesMenuVariant = IsDesktop
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
          closed: { opacity: 1 }
      }

export const whileClickVariant = {
    scale: 0.8
}

export const closeSpaceVariant = {
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
