import { Zap, Shield, Users, Clock, DollarSign, Target } from 'lucide-react'

const valueProps = [
  {
    icon: Zap,
    title: '10x Productivity',
    description: 'Learn AI tools that automate repetitive tasks, allowing you to handle more clients and increase your output dramatically.',
    color: 'from-orange-500 to-pink-500',
  },
  {
    icon: Shield,
    title: 'Future-Proof Skills',
    description: 'Stay ahead of the curve with skills that will remain in high demand as AI transforms the virtual assistant industry.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Users,
    title: 'Community Support',
    description: 'Join a thriving community of AI-powered VAs, share insights, and grow together with regular mastermind sessions.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Clock,
    title: 'Flexible Learning',
    description: 'Self-paced courses with lifetime access. Learn when it suits you, with bite-sized modules perfect for busy professionals.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: DollarSign,
    title: 'Higher Earnings',
    description: 'Command premium rates by offering AI-enhanced services. Our graduates report 65% average income increase.',
    color: 'from-yellow-500 to-amber-500',
  },
  {
    icon: Target,
    title: 'Practical Focus',
    description: 'No theory, just practical skills you can apply immediately. Every lesson includes real-world applications.',
    color: 'from-red-500 to-rose-500',
  },
]

export default function ValueProposition() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Why Choose <span className="gradient-text">VA AI Learning Hub</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We don't just teach AI - we transform how virtual assistants work, earn, and succeed in the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {valueProps.map((prop, index) => (
            <div
              key={index}
              className="card-hover bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${prop.color} mb-6`}>
                <prop.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">{prop.title}</h3>
              <p className="text-gray-600">{prop.description}</p>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold">98%</div>
              <div className="text-primary-100">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-primary-100">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">50+</div>
              <div className="text-primary-100">Practical Exercises</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">Lifetime</div>
              <div className="text-primary-100">Course Access</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}