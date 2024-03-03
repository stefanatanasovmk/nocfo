import { useState, useEffect } from 'react'

/**
 * Hook to get the current screen size category
 * @returns {string} The current screen size category ("lg", "md", "sm")
 */

function useScreenSize() {
  const [screenSize, setScreenSize] = useState('sm') // Default to 'sm'

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth
      if (width >= 1200) {
        setScreenSize('lg')
      } else if (width >= 700) {
        setScreenSize('md')
      } else {
        setScreenSize('sm')
      }
    }

    updateScreenSize()
    window.addEventListener('resize', updateScreenSize)

    return () => window.removeEventListener('resize', updateScreenSize)
  }, [])

  return screenSize
}

export default useScreenSize
