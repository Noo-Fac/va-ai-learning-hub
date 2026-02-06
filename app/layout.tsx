import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ParallaxProvider } from '../lib/parallax'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'VA AI Learning Hub - Master AI for Virtual Assistants',
  description: 'Transform your virtual assistant career with cutting-edge AI skills. Learn practical AI tools and techniques to boost productivity and income.',
  keywords: 'AI training, virtual assistant, AI skills, ChatGPT, automation, productivity',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="smooth-scroll">
      <body className={`${inter.className} min-h-screen flex flex-col overflow-x-hidden`}>
        <ParallaxProvider>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </ParallaxProvider>
      </body>
    </html>
  )
}