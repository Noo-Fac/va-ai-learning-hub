'use client'

import { ArrowRight, Sparkles, TrendingUp, Zap, Target, Users } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useParallax, FloatingElement, ParallaxLayer } from '../lib/parallax'

export default function Hero() {
  const [stats, setStats] = useState([
    { label: 'VAs Trained', value: '1,200+' },
    { label: 'Avg Income Increase', value: '65%' },
    { label: 'Course Rating', value: '4.9/5' },
  ])

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollY } = useParallax()

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20
      const y = (e.clientY / window.innerHeight - 0.5) * 20
      setMousePosition({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section id="home" className="relative min-h-screen overflow-hidden parallax-container">
      {/* Animated gradient background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-primary-50/30 via-white to-secondary-50/30"
        style={{
          transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`,
        }}
      />

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Parallax layers */}
      <ParallaxLayer speed={0.1} className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-primary-300/10 to-secondary-300/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-secondary-300/10 to-primary-300/10 rounded-full blur-3xl" />
      </ParallaxLayer>

      <ParallaxLayer speed={0.2} className="absolute inset-0">
        <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-gradient-to-r from-primary-200/20 to-secondary-200/20 rounded-full blur-2xl" />
        <div className="absolute bottom-1/3 left-1/3 w-32 h-32 bg-gradient-to-r from-secondary-200/20 to-primary-200/20 rounded-full blur-2xl" />
      </ParallaxLayer>

      {/* Floating elements */}
      <FloatingElement
        speed={0.15}
        floatAmplitude={30}
        floatSpeed={5}
        className="top-20 left-10 hidden lg:block"
      >
        <div className="glass-card w-16 h-16 rounded-2xl flex items-center justify-center">
          <Zap className="h-8 w-8 text-primary-600" />
        </div>
      </FloatingElement>

      <FloatingElement
        speed={0.25}
        floatAmplitude={40}
        floatSpeed={4}
        className="top-40 right-10 hidden lg:block"
      >
        <div className="glass-card w-20 h-20 rounded-2xl flex items-center justify-center">
          <Target className="h-10 w-10 text-secondary-600" />
        </div>
      </FloatingElement>

      <FloatingElement
        speed={0.2}
        floatAmplitude={25}
        floatSpeed={6}
        className="bottom-40 left-20 hidden lg:block"
      >
        <div className="glass-card w-12 h-12 rounded-xl flex items-center justify-center">
          <Users className="h-6 w-6 text-primary-500" />
        </div>
      </FloatingElement>

      {/* Main content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center max-w-4xl mx-auto">
          {/* Animated badge */}
          <div 
            className="inline-flex items-center gap-2 glass-card text-primary-800 px-6 py-3 rounded-full mb-8 animate-fade-down"
            style={{
              transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
            }}
          >
            <Sparkles className="h-5 w-5 animate-pulse" />
            <span className="text-sm font-semibold">The Future of Virtual Assistance is Here</span>
          </div>

          {/* Main headline with parallax */}
          <div className="mb-6">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold mb-4">
              <span 
                className="block animate-fade-up animation-delay-200"
                style={{
                  transform: `translateY(${scrollY * 0.1}px)`,
                }}
              >
                Master AI for
              </span>
              <span 
                className="gradient-text block animate-fade-up animation-delay-400"
                style={{
                  transform: `translateY(${scrollY * 0.15}px)`,
                  backgroundSize: '200% auto',
                  animation: 'gradient 8s ease infinite',
                }}
              >
                Virtual Assistants
              </span>
            </h1>
          </div>

          {/* Subtitle with glass effect */}
          <div 
            className="glass-panel rounded-2xl p-6 mb-10 max-w-2xl mx-auto animate-fade-up animation-delay-600"
            style={{
              transform: `translate(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.2}px)`,
            }}
          >
            <p className="text-xl text-gray-700">
              Transform your career with cutting-edge AI skills. Learn practical tools and techniques 
              to boost productivity, increase income, and become indispensable in the AI-powered future.
            </p>
          </div>

          {/* CTA Buttons with hover effects */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-up animation-delay-800">
            <button className="btn-primary btn-glow group relative overflow-hidden">
              <span className="relative z-10 flex items-center justify-center gap-2">
                Start Learning Free
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-white/20 to-primary-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </button>
            <button className="btn-secondary group relative overflow-hidden">
              <span className="relative z-10 flex items-center justify-center gap-2">
                <TrendingUp className="h-5 w-5 group-hover:scale-110 transition-transform" />
                View Curriculum
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-100/0 via-white/10 to-primary-100/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </button>
          </div>

          {/* Stats with 3D effect */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto animate-scale-in animation-delay-1000">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="card-3d glass-card rounded-2xl p-6 text-center transform-gpu"
                style={{
                  transform: `perspective(1000px) rotateX(${mousePosition.y * 0.5}deg) rotateY(${mousePosition.x * 0.5}deg) translateZ(0)`,
                }}
              >
                <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-to-b from-primary-500 to-secondary-500 rounded-full mt-2 animate-pulse" />
        </div>
      </div>

      {/* Wave divider with parallax */}
      <ParallaxLayer speed={0.3} className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-32 text-gray-50" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            fill="currentColor"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            fill="currentColor"
          />
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            fill="currentColor"
          />
        </svg>
      </ParallaxLayer>
    </section>
  )
}