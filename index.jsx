import { useState } from 'react'
import { ArrowRight, Waving, Zap, Shield, Users, Check, ChevronDown, Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function FullPage() {
  const [activeFeature, setActiveFeature] = useState(0)
  const [expandedFaq, setExpandedFaq] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const features = [
    { icon: Zap, title: 'Fast Performance', description: 'Optimize your website for speed, ensuring quick load times and smooth user experiences.' },
    { icon: Shield, title: 'Secure & Reliable', description: 'Implement robust security measures to protect your website and your users\' data.' },
    { icon: Users, title: 'User-Centric Design', description: 'Create intuitive interfaces that prioritize user experience and drive engagement.' },
  ]

  const faqs = [
    { question: 'What is your design process?', answer: 'Our design process involves understanding your needs, creating wireframes, designing mockups, and iterating based on your feedback.' },
    { question: 'How long does a typical project take?', answer: 'Project timelines vary, but most websites take 4-8 weeks from start to finish, depending on complexity and revisions.' },
    { question: 'Do you offer ongoing support?', answer: 'Yes, we offer various support and maintenance packages to keep your website up-to-date and running smoothly.' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-purple-900 text-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
            Foliofy
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="#" className="hover:text-purple-400 transition-colors">Home</Link>
            <Link href="#" className="hover:text-purple-400 transition-colors">About</Link>
            <Link href="#" className="hover:text-purple-400 transition-colors">Portfolio</Link>
            <Link href="#" className="hover:text-purple-400 transition-colors">Pricing</Link>
            <Link href="#" className="hover:text-purple-400 transition-colors">Blog</Link>
          </nav>
          <button className="hidden md:flex bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full hover:opacity-90 transition-opacity items-center">
            Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
          </button>
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-lg"
            >
              <nav className="flex flex-col items-center py-4 space-y-4">
                <Link href="#" className="hover:text-purple-400 transition-colors">Home</Link>
                <Link href="#" className="hover:text-purple-400 transition-colors">About</Link>
                <Link href="#" className="hover:text-purple-400 transition-colors">Portfolio</Link>
                <Link href="#" className="hover:text-purple-400 transition-colors">Pricing</Link>
                <Link href="#" className="hover:text-purple-400 transition-colors">Blog</Link>
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full hover:opacity-90 transition-opacity flex items-center">
                  Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center">
          <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
            <motion.div 
              className="md:w-1/2 space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-5xl font-bold flex items-center">
                Hi! <Waving className="ml-4 h-12 w-12 text-yellow-400" />
              </h2>
              <h3 className="text-5xl font-bold">
                <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
                  Esther Joy
                </span>{' '}
                is a
              </h3>
              <div className="flex items-center space-x-4">
                <div className="h-1 w-16 bg-purple-500"></div>
                <h4 className="text-4xl font-bold text-purple-400">Web designer</h4>
              </div>
              <p className="text-gray-300 max-w-md">
                Crafting marvelous responsive, user-friendly websites that drive engagement and growth to your business.
              </p>
              <div className="flex space-x-4">
                <motion.button 
                  className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Hire me
                </motion.button>
                <motion.button 
                  className="border border-purple-500 text-purple-400 px-6 py-3 rounded-full hover:bg-purple-500 hover:text-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View my work
                </motion.button>
              </div>
            </motion.div>
            <motion.div 
              className="md:w-1/2 mt-12 md:mt-0 relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Image
                src="/placeholder.svg?height=500&width=400"
                alt="Web Designer"
                width={400}
                height={500}
                className="rounded-lg z-10 relative"
              />
              <div className="absolute top-4 -left-4 w-72 h-72 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full filter blur-3xl opacity-50 z-0 animate-blob"></div>
              <div className="absolute bottom-4 -right-4 w-72 h-72 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full filter blur-3xl opacity-50 z-0 animate-blob animation-delay-2000"></div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.h2 
              className="text-4xl font-bold text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              About Me
            </motion.h2>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <motion.div 
                className="md:w-1/2 mb-8 md:mb-0"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="About Me"
                  width={400}
                  height={400}
                  className="rounded-lg shadow-2xl"
                />
              </motion.div>
              <motion.div 
                className="md:w-1/2 md:pl-12"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <p className="text-lg mb-6">
                  With over 5 years of experience in web design and development, I specialize in creating beautiful,
                  functional, and user-friendly websites that help businesses grow and succeed online.
                </p>
                <p className="text-lg mb-6">
                  My approach combines creativity with technical expertise, ensuring that every project not only looks
                  great but also performs exceptionally well.
                </p>
                <motion.button 
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </motion.div>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-1/2 right-1/2 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/2 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-4xl font-bold text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              What I Offer
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className={`bg-gray-900 bg-opacity-50 p-6 rounded-lg cursor-pointer transform transition-all duration-300 ${activeFeature === index ? 'scale-105 shadow-xl' : ''}`}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setActiveFeature(index)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <feature.icon className="h-12 w-12 text-purple-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-4xl font-bold text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Pricing Plans
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {['Basic', 'Pro', 'Enterprise'].map((plan, index) => (
                <motion.div 
                  key={plan}
                  className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg p-8 rounded-lg border border-purple-500 transform transition-all duration-300 hover:scale-105"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="text-2xl font-bold mb-4">{plan}</h3>
                  <p className="text-4xl font-bold mb-6">{plan === 'Enterprise' ? 'Custom' : `$${999 * (index + 1)}`}</p>
                  <ul className="mb-8">
                    <li className="flex items-center mb-2">
                      <Check className="h-5 w-5 text-green-400 mr-2" /> {5 * (index + 1)}-page website
                    </li>
                    <li className="flex items-center mb-2">
                      <Check className="h-5 w-5 text-green-400 mr-2" /> Responsive design
                    </li>
                    <li className="flex items-center mb-2">
                      <Check className="h-5 w-5 text-green-400 mr-2" /> {index === 0 ? 'Basic' : 'Advanced'} SEO optimization
                    </li>
                    {index > 0 && (
                      <li className="flex items-center mb-2">
                        <Check className="h-5 w-5 text-green-400 mr-2" /> {index === 1 ? 'E-commerce integration' : 'Custom features'}
                      </li>
                    )}
                  </ul>
                  <motion.button 
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Choose Plan
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Teams Section */}
        <section className="py-20 bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-4xl font-bold text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Meet Our Team
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((member) => (
                <motion.div 
                  key={member}
                  className="bg-gray-900 bg-opacity-50 rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: member * 0.1 }}
                >
                  <Image
                    src={`/placeholder.svg?height=300&width=300`}
                    alt={`Team Member ${member}`}
                    width={300}
                    height={300}
                    className="w-full"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">John Doe</h3>
                    <p className="text-purple-400 mb-4">Senior Developer</p>
                    <p className="text-gray-300">
                      Experienced developer with a passion for creating efficient and scalable web applications.
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-4xl font-bold text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Frequently Asked Questions
            </motion.h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <button
                    className="flex justify-between items-center w-full p-4 text-left"
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  >
                    <span className="font-medium">{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 transition-transform ${expandedFaq === index ? 'transform rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {expandedFaq === index && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="p-4 bg-gray-700 bg-opacity-50"
                      >
                        <p>{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/4 mb-8 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">Foliofy</h3>
              <p className="text-gray-300">Crafting digital experiences that inspire and engage.</p>
            </div>
            <div className="w-full md:w-1/4 mb-8 md:mb-0">
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-300 hover:text-purple-400">Home</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-purple-400">About</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-purple-400">Services</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-purple-400">Contact</Link></li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 mb-8 md:mb-0">
              <h4 className="text-lg font-bold mb-4">Contact Us</h4>
              <p className="text-gray-300 mb-2">123 Web Street, Digital City</p>
              <p className="text-gray-300 mb-2">contact@foliofy.com</p>
              <p className="text-gray-300">+1 (555) 123-4567</p>
            </div>
            <div className="w-full md:w-1/4">
              <h4 className="text-lg font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-purple-400">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-purple-400">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-purple-400">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-300">&copy; 2023 Foliofy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
