import { BookOpen, Code, MessageSquare, BarChart, FileText, Globe, Video, Database } from 'lucide-react'

const modules = [
  {
    icon: BookOpen,
    title: 'Module 1: AI Fundamentals',
    description: 'Understand the basics of AI, machine learning, and how they apply to virtual assistance.',
    topics: ['AI Terminology', 'Use Cases for VAs', 'Ethical Considerations'],
    duration: '2 weeks',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    icon: MessageSquare,
    title: 'Module 2: ChatGPT Mastery',
    description: 'Master prompt engineering, conversation design, and advanced ChatGPT techniques.',
    topics: ['Prompt Engineering', 'Workflow Automation', 'Content Creation'],
    duration: '3 weeks',
    color: 'bg-green-100 text-green-600',
  },
  {
    icon: Code,
    title: 'Module 3: AI Automation',
    description: 'Learn to automate repetitive tasks using AI tools and no-code platforms.',
    topics: ['Zapier + AI', 'Make.com', 'Custom GPTs'],
    duration: '3 weeks',
    color: 'bg-purple-100 text-purple-600',
  },
  {
    icon: BarChart,
    title: 'Module 4: Data Analysis',
    description: 'Use AI for data processing, analysis, and creating insightful reports.',
    topics: ['Excel Automation', 'Data Visualization', 'Report Generation'],
    duration: '2 weeks',
    color: 'bg-orange-100 text-orange-600',
  },
  {
    icon: FileText,
    title: 'Module 5: Content Creation',
    description: 'Leverage AI for writing, editing, and creating professional content.',
    topics: ['Blog Writing', 'Social Media', 'Email Campaigns'],
    duration: '2 weeks',
    color: 'bg-pink-100 text-pink-600',
  },
  {
    icon: Globe,
    title: 'Module 6: Research & Analysis',
    description: 'Master AI-powered research techniques and competitive analysis.',
    topics: ['Market Research', 'Competitor Analysis', 'Trend Spotting'],
    duration: '2 weeks',
    color: 'bg-indigo-100 text-indigo-600',
  },
  {
    icon: Video,
    title: 'Module 7: Multimedia AI',
    description: 'Create and edit videos, images, and audio using AI tools.',
    topics: ['Video Editing', 'Image Generation', 'Audio Processing'],
    duration: '2 weeks',
    color: 'bg-red-100 text-red-600',
  },
  {
    icon: Database,
    title: 'Module 8: Business Integration',
    description: 'Implement AI solutions into your VA business and client workflows.',
    topics: ['Client Onboarding', 'Pricing Strategies', 'Portfolio Building'],
    duration: '3 weeks',
    color: 'bg-teal-100 text-teal-600',
  },
]

export default function CourseStructure() {
  return (
    <section id="courses" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Comprehensive <span className="gradient-text">Curriculum</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A structured learning path designed specifically for virtual assistants, covering everything from basics to advanced AI applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((module, index) => (
            <div
              key={index}
              className="card-hover bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-primary-200"
            >
              <div className={`inline-flex p-3 rounded-lg ${module.color} mb-4`}>
                <module.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold mb-3">{module.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{module.description}</p>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Topics:</h4>
                <ul className="space-y-1">
                  {module.topics.map((topic, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <span className="text-sm font-medium text-gray-700">{module.duration}</span>
                <span className="text-xs px-3 py-1 bg-primary-100 text-primary-700 rounded-full font-medium">
                  Included
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Program overview */}
        <div className="mt-16 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">8</div>
              <div className="text-gray-700 font-semibold">Comprehensive Modules</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">60+</div>
              <div className="text-gray-700 font-semibold">Hours of Content</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">100%</div>
              <div className="text-gray-700 font-semibold">Practical Application</div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <button className="btn-primary">
              View Detailed Syllabus
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}