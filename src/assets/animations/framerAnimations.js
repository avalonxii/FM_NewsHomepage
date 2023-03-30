let IsMobile = window.innerWidth <= 375 //al cargar la página, si el ancho de la pantalla es menor a 375px, entonces IsMobile = true

// --------------------------- ANIMACIONES HEADER --------------------------- //

export const menuVariant = IsMobile
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

export const enlacesMenuVariant = IsMobile
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

export const whileTapLinkVariant = {
    scale: 0.8
}

export const whileHoverLinkMenuVariant = {
    color: 'hsl(5, 85%, 63%)',
    scale: 1.1
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

// --------------------------- ANIMACIONES BANNER --------------------------- //

export const whileHoverPrimaryButton = {
    backgroundColor: '#00001a'
}

export const whileHoverLinkNewVariant = {
    color: 'hsl(35, 77%, 62%)'
}

export const whileHoverLinkCardVariant = {
    color: 'hsl(5, 85%, 63%)'
}
