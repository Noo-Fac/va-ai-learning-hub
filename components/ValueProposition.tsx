'use client'

import { Zap, Shield, Users, Clock, DollarSign, Target, ChevronRight } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useParallax } from '../lib/parallax'

const valueProps = [
  {
    icon: Zap,
    title: '10x Productivity',
    description: 'Learn AI tools that automate repetitive tasks, allowing you to handle more clients and increase your output dramatically.',
    color: 'from-orange-500 to-pink-500',
    delay: 0,
  },
  {
    icon: Shield,
    title: 'Future-Proof Skills',
    description: 'Stay ahead of the curve with skills that will remain in high demand as AI transforms the virtual assistant industry.',
    color: 'from-blue-500 to-cyan-500',
    delay: 100,
  },
  {
    icon: Users,
    title: 'Community Support',
    description: 'Join a thriving community of AI-powered VAs, share insights, and grow together with regular mastermind sessions.',
    color: 'from-purple-500 to-pink-500',
    delay: 200,
  },
  {
    icon: Clock,
    title: 'Flexible Learning',
    description: 'Self-paced courses with lifetime access. Learn when it suits you, with bite-sized modules perfect for busy professionals.',
    color: 'from-green-500 to-emerald-500',
    delay: 300,
  },
  {
    icon: DollarSign,
    title: 'Higher Earnings',
    description: 'Command premium rates by offering AI-enhanced services. Our graduates report 65% average income increase.',
    color: 'from-yellow-500 to-amber-500',
    delay: 400,
  },
  {
    icon: Target,
    title: 'Practical Focus',
    description: 'No theory, just practical skills you can apply immediately. Every lesson includes real-world applications.',
    color: 'from-red-500 to-rose-500',
    delay: 500,
  },
]

export default function ValueProposition() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollY } = useParallax()

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background with parallax */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-gray-50/50 via-white to-primary-50/30"
        style={{
          transform: `translateY(${scrollY * 0.05}px)`,
        }}
      />

      {/* Animated dots pattern */}
      <div className="absolute inset-0 dot-pattern opacity-10" />

      {/* Floating gradient orbs */}
      <div 
        className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-primary-300/20 to-secondary-300/20 rounded-full blur-3xl"
        style={{
          transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.05}px)`,
        }}
      />
      <div 
        className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-secondary-300/20 to-primary-300/20 rounded-full blur-3xl"
        style={{
          transform: `translate(${scrollY * -0.1}px, ${scrollY * -0.05}px)`,
        }}
      />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header with parallax */}
        <div 
          className="text-center mb-20"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-100/50 to-secondary-100/50 text-primary-800 px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-semibold">Why We're Different</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Why Choose <span className="gradient-text">VA AI Learning Hub</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We don't just teach AI - we transform how virtual assistants work, earn, and succeed in the digital age.
          </p>
        </div>

        {/* Value props grid with 3D effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {valueProps.map((prop, index) => {
            const isHovered = hoveredIndex === index
            const distanceX = mousePosition.x - (window.innerWidth / 2)
            const distanceY = mousePosition.y - (window.innerHeight / 2)
            
            return (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  animationDelay: `${prop.delay}ms`,
                }}
              >
                {/* Card with glassmorphism and 3D effect */}
                <div
                  className={`card-3d glass-card rounded-3xl p-8 h-full transition-all duration-500 animate-fade-up ${
                    isHovered ? 'scale-105' : ''
                  }`}
                  style={{
                    transform: `perspective(1000px) rotateX(${distanceY * 0.01}deg) rotateY(${distanceX * 0.01}deg) translateZ(${isHovered ? '20px' : '0px'})`,
                    animationDelay: `${prop.delay}ms`,
                  }}
                >
                  {/* Animated gradient border */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500" />
                  
                  {/* Icon with gradient background */}
                  <div className={`relative mb-6 p-4 rounded-2xl bg-gradient-to-r ${prop.color} w-fit group-hover:scale-110 transition-transform duration-300`}>
                    <prop.icon className="h-8 w-8 text-white" />
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Title with gradient text */}
                  <h3 className="text-2xl font-bold mb-4 group-hover:gradient-text transition-all duration-300">
                    {prop.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 group-hover:text-gray-800 transition-colors duration-300">
                    {prop.description}
                  </p>

                  {/* Learn more link with animation */}
                  <div className="flex items-center gap-2 text-primary-600 font-medium group-hover:text-secondary-600 transition-colors duration-300">
                    <span>Learn more</span>
                    <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>

                  {/* Hover shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 rounded-3xl" />
                </div>

                {/* Floating particles on hover */}
                {isHovered && (
                  <div className="absolute inset-0 overflow-hidden rounded-3xl">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full animate-float"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          animationDelay: `${i * 0.2}s`,
                          animationDuration: `${Math.random() * 3 + 2}s`,
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Stats bar with glassmorphism */}
        <div 
          className="glass-panel rounded-3xl p-8 md:p-12 backdrop-blur-xl animate-fade-up"
          style={{
            transform: `translateY(${scrollY * 0.15}px)`,
          }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '98%', label: 'Satisfaction Rate', color: 'from-primary-500 to-secondary-500' },
              { value: '24/7', label: 'Support Available', color: 'from-secondary-500 to-primary-500' },
              { value: '50+', label: 'Practical Exercises', color: 'from-primary-500 to-secondary-500' },
              { value: 'Lifetime', label: 'Course Access', color: 'from-secondary-500 to-primary-500' },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center group"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div 
                  className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}
                >
                  {stat.value}
                </div>
                <div className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-300">
                  {stat.label}
                </div>
                {/* Animated underline */}
                <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-500 mx-auto mt-2" />
              </div>
            ))}
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -left-20 top-1/4 w-40 h-40 bg-gradient-to-r from-primary-200/10 to-transparent rounded-full blur-2xl" />
        <div className="absolute -right-20 bottom-1/4 w-40 h-40 bg-gradient-to-r from-transparent to-secondary-200/10 rounded-full blur-2xl" />
      </div>
    </section>
  )
}