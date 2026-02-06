import Hero from '../components/Hero'
import ValueProposition from '../components/ValueProposition'
import CourseStructure from '../components/CourseStructure'
import FeaturesShowcase from '../components/FeaturesShowcase'
import TargetAudience from '../components/TargetAudience'
import CTASection from '../components/CTASection'

export default function Home() {
  return (
    <>
      <Hero />
      <ValueProposition />
      <CourseStructure />
      <FeaturesShowcase />
      <TargetAudience />
      <CTASection />
    </>
  )
}