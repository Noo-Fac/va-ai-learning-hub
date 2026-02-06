'use client'

import { useState } from 'react'
import { Menu, X, Brain } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-primary-600" />
              <span className="text-xl font-bold gradient-text">VA AI Learning Hub</span>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">Home</a>
              <a href="#courses" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">Courses</a>
              <a href="#features" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">Features</a>
              <a href="#audience" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">Who's It For</a>
              <button className="btn-primary text-sm">Get Started</button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium">Home</a>
            <a href="#courses" className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium">Courses</a>
            <a href="#features" className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium">Features</a>
            <a href="#audience" className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium">Who's It For</a>
            <button className="btn-primary w-full mt-4">Get Started</button>
          </div>
        </div>
      )}
    </nav>
  )
}