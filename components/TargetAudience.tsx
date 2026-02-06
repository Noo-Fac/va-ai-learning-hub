import { User, Briefcase, TrendingUp, Globe, Clock, Target } from 'lucide-react'

const audienceTypes = [
  {
    icon: User,
    title: 'Beginner VAs',
    description: 'Just starting your virtual assistant journey and want to build AI skills from day one.',
    benefits: ['Quick skill acquisition', 'Competitive advantage', 'Higher starting rates'],
    color: 'bg-blue-100 text-blue-600',
  },
  {
    icon: Briefcase,
    title: 'Experienced VAs',
    description: 'Looking to upgrade your skillset and offer premium AI-enhanced services.',
    benefits: ['Service diversification', 'Premium pricing', 'Client retention'],
    color: 'bg-purple-100 text-purple-600',
  },
  {
    icon: TrendingUp,
    title: 'Aspiring Entrepreneurs',
    description: 'Wanting to build an AI-powered VA agency or scale your existing business.',
    benefits: ['Scalable processes', 'Team training', 'Business growth'],
    color: 'bg-green-100 text-green-600',
  },
  {
    icon: Globe,
    title: 'Career Changers',
    description: 'Transitioning from other fields into the high-demand VA industry.',
    benefits: ['Future-proof career', 'Remote flexibility', 'Income potential'],
    color: 'bg-orange-100 text-orange-600',
  },
]

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Freelance VA',
    content: 'This course transformed my business. I now charge 3x my previous rates and work fewer hours.',
    avatar: 'SJ',
  },
  {
    name: 'Michael Chen',
    role: 'Agency Owner',
    content: 'The AI automation skills I learned helped me scale my agency from 2 to 15 clients in 6 months.',
    avatar: 'MC',
  },
  {
    name: 'Jessica Williams',
    role: 'Career Changer',
    content: 'Coming from retail management, this course gave me the exact skills I needed to succeed as a VA.',
    avatar: 'JW',
  },
]

export default function TargetAudience() {
  return (
    <section id="audience" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Who This Is <span className="gradient-text">Perfect For</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Whether you're just starting or looking to level up, our program is designed to help you succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {audienceTypes.map((type, index) => (
            <div
              key={index}
              className="card-hover bg-gray-50 rounded-xl p-6 border border-gray-200"
            >
              <div className={`inline-flex p-3 rounded-lg ${type.color} mb-4`}>
                <type.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">{type.title}</h3>
              <p className="text-gray-600 mb-4">{type.description}</p>
              <ul className="space-y-2">
                {type.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-700">
                    <Target className="h-4 w-4 text-primary-500 mr-2" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Success metrics */}
        <div className="mb-16 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Proven Success Path</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Clock className="h-8 w-8 text-primary-600" />
                  <div>
                    <div className="font-bold">3-6 Months</div>
                    <div className="text-gray-600">Average time to mastery</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <TrendingUp className="h-8 w-8 text-primary-600" />
                  <div>
                    <div className="font-bold">65% Average</div>
                    <div className="text-gray-600">Income increase reported</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h4 className="font-bold mb-4">Typical Career Progression</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Entry Level VA</span>
                  <span className="font-bold text-primary-600">$15-25/hr</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">AI-Skilled VA</span>
                  <span className="font-bold text-primary-600">$35-50/hr</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">AI Specialist</span>
                  <span className="font-bold text-primary-600">$75-150/hr</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">Success Stories</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 border border-gray-200"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}