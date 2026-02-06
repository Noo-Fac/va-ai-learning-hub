'use client'

import { BookOpen, Code, MessageSquare, BarChart, Users, Award, ChevronRight, PlayCircle } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useParallax } from '../lib/parallax'

const modules = [
  {
    week: 'Week 1-2',
    title: 'AI Fundamentals',
    description: 'Master the basics of AI, machine learning, and how they apply to virtual assistance.',
    icon: BookOpen,
    color: 'from-blue-500 to-cyan-500',
    topics: ['AI Basics', 'ML Concepts', 'Ethical AI'],
    progress: 100,
  },
  {
    week: 'Week 3-4',
    title: 'Prompt Engineering',
    description: 'Learn to craft effective prompts for ChatGPT and other AI tools to get perfect results.',
    icon: Code,
    color: 'from-purple-500 to-pink-500',
    topics: ['Prompt Patterns', 'Chain-of-Thought', 'Few-Shot Learning'],
    progress: 80,
  },
  {
    week: 'Week 5-6',
    title: 'AI Communication',
    description: 'Use AI to enhance client communication, email writing, and social media management.',
    icon: MessageSquare,
    color: 'from-green-500 to-emerald-500',
    topics: ['Email Automation', 'Social Media', 'Client Reports'],
    progress: 60,
  },
  {
    week: 'Week 7-8',
    title: 'Data & Analytics',
    description: 'Leverage AI for data analysis, reporting, and business intelligence tasks.',
    icon: BarChart,
    color: 'from-orange-500 to-amber-500',
    topics: ['Data Analysis', 'Visualization', 'Insights'],
    progress: 40,
  },
  {
    week: 'Week 9-10',
    title: 'Team Collaboration',
    description: 'Implement AI tools for team coordination, project management, and workflow automation.',
    icon: Users,
    color: 'from-red-500 to-rose-500',
    topics: ['Workflow AI', 'Team Tools', 'Automation'],
    progress: 20,
  },
  {
    week: 'Week 11-12',
    title: 'Certification',
    description: 'Complete your certification project and join our elite network of AI-powered VAs.',
    icon: Award,
    color: 'from-indigo-500 to-purple-500',
    topics: ['Final Project', 'Portfolio', 'Certification'],
    progress: 0,
  },
]

export default function CourseStructure() {
  const [activeModule, setActiveModule] = useState<number | null>(null)
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
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-primary-50/10 to-white" />
      
      {/* Geometric pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(217, 70, 239, 0.1) 0%, transparent 50%)`,
        }} />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-card text-primary-800 px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-semibold">12-Week Journey</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Course <span className="gradient-text">Structure</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive 12-week program designed to transform you into an AI-powered virtual assistant.
          </p>
        </div>

        {/* Timeline visualization */}
        <div className="relative mb-20">
          {/* Animated timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-500 via-secondary-500 to-primary-500">
            <div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-white/20 to-transparent h-20"
              style={{
                transform: `translateY(${scrollY * 0.2}px)`,
              }}
            />
          </div>

          {/* Modules */}
          <div className="space-y-12">
            {modules.map((module, index) => {
              const isEven = index % 2 === 0
              const isActive = activeModule === index
              const distanceX = mousePosition.x - (window.innerWidth / 2)
              
              return (
                <div
                  key={index}
                  className={`relative flex items-center ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
                  onMouseEnter={() => setActiveModule(index)}
                  onMouseLeave={() => setActiveModule(null)}
                >
                  {/* Timeline node */}
                  <div className={`absolute left-1/2 transform -translate-x-1/2 z-10 ${
                    isActive ? 'scale-125' : ''
                  } transition-transform duration-300`}>
                    <div className={`relative p-3 rounded-full bg-gradient-to-r ${module.color} shadow-lg`}>
                      <module.icon className="h-6 w-6 text-white" />
                      {/* Pulsing glow */}
                      {isActive && (
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/30 to-transparent animate-ping" />
                      )}
                    </div>
                  </div>

                  {/* Module card */}
                  <div className={`w-5/12 ${isEven ? 'pr-12' : 'pl-12'}`}>
                    <div
                      className={`glass-card rounded-3xl p-8 transform-gpu transition-all duration-500 ${
                        isActive ? 'scale-105 shadow-2xl' : ''
                      }`}
                      style={{
                        transform: `perspective(1000px) rotateY(${distanceX * 0.01 * (isEven ? 1 : -1)}deg) translateZ(${isActive ? '30px' : '0px'})`,
                      }}
                    >
                      {/* Week badge */}
                      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-100/50 to-secondary-100/50 text-primary-800 px-4 py-2 rounded-full mb-4">
                        <span className="text-sm font-semibold">{module.week}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold mb-3 group-hover:gradient-text transition-all duration-300">
                        {module.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 mb-6">
                        {module.description}
                      </p>

                      {/* Topics */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {module.topics.map((topic, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-gradient-to-r from-primary-50 to-secondary-50 text-primary-700 rounded-full text-sm font-medium"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>

                      {/* Progress bar */}
                      <div className="mb-4">
                        <div className="flex justify-between text-sm text-gray-600 mb-2">
                          <span>Progress</span>
                          <span>{module.progress}%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${module.color} rounded-full transition-all duration-1000`}
                            style={{ width: `${module.progress}%` }}
                          />
                        </div>
                      </div>

                      {/* Action button */}
                      <button className="flex items-center gap-2 text-primary-600 font-medium hover:text-secondary-600 transition-colors duration-300 group">
                        <PlayCircle className="h-5 w-5 group-hover:scale-110 transition-transform" />
                        <span>Preview Module</span>
                        <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </button>

                      {/* Hover shine */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 rounded-3xl" />
                    </div>
                  </div>

                  {/* Floating elements on hover */}
                  {isActive && (
                    <>
                      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-primary-300/10 to-secondary-300/10 rounded-full blur-2xl" />
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-2 h-2 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full animate-float"
                          style={{
                            left: `${50 + (Math.random() * 20 - 10)}%`,
                            top: `${50 + (Math.random() * 20 - 10)}%`,
                            animationDelay: `${i * 0.3}s`,
                            animationDuration: `${Math.random() * 2 + 3}s`,
                          }}
                        />
                      ))}
                    </>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Course highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Hands-On Projects',
              description: 'Real-world projects that build your portfolio',
              icon: Code,
              color: 'from-primary-500 to-secondary-500',
            },
            {
              title: 'Expert Mentorship',
              description: 'Weekly Q&A sessions with industry experts',
              icon: Users,
              color: 'from-secondary-500 to-primary-500',
            },
            {
              title: 'Career Support',
              description: 'Job placement assistance and networking',
              icon: Award,
              color: 'from-primary-500 to-secondary-500',
            },
          ].map((highlight, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 text-center group hover:scale-105 transition-all duration-300"
              style={{
                animationDelay: `${index * 200}ms`,
              }}
            >
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${highlight.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <highlight.icon className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2 group-hover:gradient-text transition-all duration-300">
                {highlight.title}
              </h4>
              <p className="text-gray-600">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>

        {/* Decorative elements */}
        <div 
          className="absolute -left-40 top-40 w-80 h-80 bg-gradient-to-r from-primary-200/10 to-transparent rounded-full blur-3xl"
          style={{
            transform: `translate(${scrollY * 0.15}px, ${scrollY * 0.1}px)`,
          }}
        />
        <div 
          className="absolute -right-40 bottom-40 w-80 h-80 bg-gradient-to-r from-transparent to-secondary-200/10 rounded-full blur-3xl"
          style={{
            transform: `translate(${scrollY * -0.15}px, ${scrollY * -0.1}px)`,
          }}
        />
      </div>
    </section>
  )
}