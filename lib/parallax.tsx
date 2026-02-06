'use client'

import { createContext, useContext, useEffect, useState, ReactNode, useRef } from 'react'

interface ParallaxContextType {
  scrollY: number
  parallaxRef: React.RefObject<HTMLDivElement> | null
}

const ParallaxContext = createContext<ParallaxContextType>({
  scrollY: 0,
  parallaxRef: null,
})

interface ParallaxProviderProps {
  children: ReactNode
}

export function ParallaxProvider({ children }: ParallaxProviderProps) {
  const [scrollY, setScrollY] = useState(0)
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const rect = parallaxRef.current.getBoundingClientRect()
        const scrollPosition = window.scrollY - rect.top
        setScrollY(scrollPosition)
      } else {
        setScrollY(window.scrollY)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial call

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <ParallaxContext.Provider value={{ scrollY, parallaxRef }}>
      <div ref={parallaxRef} className="relative">
        {children}
      </div>
    </ParallaxContext.Provider>
  )
}

export function useParallax() {
  return useContext(ParallaxContext)
}

export function useParallaxTransform(speed: number = 0.5, offset: number = 0) {
  const { scrollY } = useParallax()
  return {
    transform: `translateY(${scrollY * speed + offset}px)`,
  }
}

export function ParallaxLayer({
  speed = 0.5,
  offset = 0,
  children,
  className = '',
  style = {},
}: {
  speed?: number
  offset?: number
  children: ReactNode
  className?: string
  style?: React.CSSProperties
}) {
  const { scrollY } = useParallax()
  
  return (
    <div
      className={`parallax-layer ${className}`}
      style={{
        ...style,
        transform: `translateY(${scrollY * speed + offset}px)`,
      }}
    >
      {children}
    </div>
  )
}

export function FloatingElement({
  speed = 0.3,
  baseOffset = 0,
  floatAmplitude = 20,
  floatSpeed = 6,
  children,
  className = '',
}: {
  speed?: number
  baseOffset?: number
  floatAmplitude?: number
  floatSpeed?: number
  children: ReactNode
  className?: string
}) {
  const { scrollY } = useParallax()
  const [time, setTime] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => prev + 0.05)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  const floatOffset = Math.sin(time * floatSpeed) * floatAmplitude
  const parallaxOffset = scrollY * speed

  return (
    <div
      className={`absolute ${className}`}
      style={{
        transform: `translateY(${parallaxOffset + baseOffset + floatOffset}px)`,
      }}
    >
      {children}
    </div>
  )
}