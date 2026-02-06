import { CheckCircle, PlayCircle, Download, Award, Clock, Users, FileVideo, Headphones } from 'lucide-react'

const features = [
  {
    icon: PlayCircle,
    title: 'Video Lessons',
    description: 'High-quality video tutorials with practical demonstrations',
    highlight: 'HD Quality',
  },
  {
    icon: Download,
    title: 'Downloadable Resources',
    description: 'Templates, checklists, and cheat sheets for immediate use',
    highlight: '50+ Templates',
  },
  {
    icon: Award,
    title: 'Certification',
    description: 'Earn a recognized certificate upon completion',
    highlight: 'Industry Recognized',
  },
  {
    icon: Clock,
    title: 'Self-Paced Learning',
    description: 'Learn at your own speed with lifetime access',
    highlight: 'Lifetime Access',
  },
  {
    icon: Users,
    title: 'Live Q&A Sessions',
    description: 'Weekly live sessions with AI experts',
    highlight: 'Weekly Sessions',
  },
  {
    icon: FileVideo,
    title: 'Project-Based Learning',
    description: 'Build real projects for your portfolio',
    highlight: 'Portfolio Ready',
  },
  {
    icon: Headphones,
    title: '1-on-1 Mentoring',
    description: 'Personalized guidance from experienced AI VAs',
    highlight: 'Expert Support',
  },
  {
    icon: CheckCircle,
    title: 'Practical Exercises',
    description: 'Hands-on exercises with immediate feedback',
    highlight: 'Instant Feedback',
  },
]

export default function FeaturesShowcase() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Premium <span className="gradient-text">Learning Experience</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We've designed every aspect of the learning journey to maximize your success and ensure you get real value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card-hover bg-white rounded-xl p-6 border border-gray-200 hover:border-primary-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary-100 rounded-lg">
                  <feature.icon className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{feature.description}</p>
                  <span className="inline-block px-3 py-1 bg-primary-50 text-primary-700 text-xs font-semibold rounded-full">
                    {feature.highlight}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Feature comparison */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-3">
            <div className="p-8 bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
              <h3 className="text-2xl font-bold mb-4">What You Get</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>Full Course Access</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>Community Membership</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>Weekly Office Hours</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>Resource Library</span>
                </li>
              </ul>
            </div>
            
            <div className="p-8 md:col-span-2">
              <h3 className="text-2xl font-bold mb-6">Learning Journey</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Foundation Building</h4>
                    <p className="text-gray-600">Master AI fundamentals and understand how they apply to virtual assistance.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Skill Development</h4>
                    <p className="text-gray-600">Learn practical AI tools through hands-on exercises and real-world projects.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Business Integration</h4>
                    <p className="text-gray-600">Implement AI solutions into your VA business and start earning more.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}