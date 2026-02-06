'use client'

import { ArrowRight, CheckCircle, Calendar, Gift } from 'lucide-react'
import { useState } from 'react'

export default function CTASection() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would connect to your email service
    alert(`Thank you! We'll send the free course to ${email}`)
    setEmail('')
  }

  const benefits = [
    'Free introductory AI course',
    'Access to community forum',
    'Weekly AI tips newsletter',
    'Discount on full program',
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-8">
            <Gift className="h-4 w-4" />
            <span className="text-sm font-semibold">Limited Time Offer</span>
          </div>

          {/* Main CTA */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Start Your AI Journey <span className="text-secondary-300">Today</span>
          </h2>
          
          <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
            Join thousands of virtual assistants who have transformed their careers with AI skills.
          </p>

          {/* Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 max-w-2xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-secondary-300" />
                <span className="text-primary-100">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Pricing cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Free offer */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Free Starter Pack</h3>
                <div className="text-4xl font-bold mb-2">$0</div>
                <p className="text-primary-200">Perfect for getting started</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary-300" />
                  <span>Introductory AI Course</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary-300" />
                  <span>Community Access</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary-300" />
                  <span>Basic Templates</span>
                </li>
              </ul>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-primary-200 focus:outline-none focus:ring-2 focus:ring-secondary-300"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-secondary-500 to-pink-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-secondary-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Get Free Access
                  <ArrowRight className="h-5 w-5" />
                </button>
              </form>
            </div>

            {/* Premium offer */}
            <div className="bg-gradient-to-br from-secondary-600 to-pink-600 rounded-2xl p-8 relative overflow-hidden">
              {/* Popular badge */}
              <div className="absolute top-4 right-4 bg-white text-secondary-700 px-3 py-1 rounded-full text-sm font-bold">
                MOST POPULAR
              </div>
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Full Program</h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <div className="text-4xl font-bold">$497</div>
                  <div className="text-white/80 line-through">$997</div>
                </div>
                <p className="text-white/90">One-time payment, lifetime access</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>All 8 Modules</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>Certification</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>1-on-1 Mentoring</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>Premium Templates</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>Job Board Access</span>
                </li>
              </ul>
              
              <button className="w-full bg-white text-secondary-700 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2">
                Enroll Now
                <ArrowRight className="h-5 w-5" />
              </button>
              
              <div className="mt-4 text-center text-sm text-white/80">
                <Calendar className="inline h-4 w-4 mr-1" />
                30-day money-back guarantee
              </div>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-2xl font-bold">100%</div>
              <div className="text-primary-200">Satisfaction Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-primary-200">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">Lifetime</div>
              <div className="text-primary-200">Course Updates</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">5000+</div>
              <div className="text-primary-200">Happy Students</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}