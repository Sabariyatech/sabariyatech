'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Rocket, Mail, CheckCircle, Clock, Users, BarChart, Shield, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function SaasPage() {
  const [email, setEmail] = useState('')

  const upcomingSaasProducts = [
    {
      id: 1,
      title: 'FlowManager Pro',
      description: 'Comprehensive project management suite with AI-powered insights and team collaboration tools.',
      icon: BarChart,
      features: [
        'AI-powered project analytics',
        'Real-time team collaboration',
        'Advanced reporting dashboard',
        'Custom workflow automation',
        'Integration with 50+ tools',
        'Mobile app included'
      ],
      status: 'In Development',
      launchDate: 'Q2 2024',
      color: 'from-brand-skyblue to-brand-teal'
    },
    {
      id: 2,
      title: 'SmartLead CRM',
      description: 'Intelligent customer relationship management system with automated lead scoring and nurturing.',
      icon: Users,
      features: [
        'Automated lead scoring',
        'Email marketing automation',
        'Sales pipeline management',
        'Customer behavior analytics',
        'Multi-channel communication',
        'Custom reporting tools'
      ],
      status: 'Planning',
      launchDate: 'Q3 2024',
      color: 'from-brand-orange to-brand-goldenrod'
    },
    {
      id: 3,
      title: 'SecureVault Business',
      description: 'Enterprise-grade document management and security platform with blockchain verification.',
      icon: Shield,
      features: [
        'Blockchain document verification',
        'Advanced encryption protocols',
        'Role-based access control',
        'Audit trail tracking',
        'Compliance management',
        'API integration support'
      ],
      status: 'Concept',
      launchDate: 'Q4 2024',
      color: 'from-brand-teal to-brand-skyblue'
    },
    {
      id: 4,
      title: 'AutoFlow Analytics',
      description: 'Business intelligence platform that automatically generates insights from your data streams.',
      icon: Zap,
      features: [
        'Automated data analysis',
        'Predictive analytics',
        'Custom dashboard builder',
        'Real-time data streaming',
        'Machine learning insights',
        'Export to multiple formats'
      ],
      status: 'Research',
      launchDate: 'Q1 2025',
      color: 'from-brand-goldenrod to-brand-orange'
    }
  ]

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle waitlist submission
    console.log('Waitlist email:', email)
    setEmail('')
    alert('Thank you for joining our waitlist! We\'ll keep you updated on our SaaS products.')
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-brand-skyblue to-brand-teal rounded-2xl flex items-center justify-center">
                <Rocket className="h-10 w-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-gradient">SaaS Products</span> Coming Soon
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're building innovative Software-as-a-Service solutions that will revolutionize 
              how businesses operate, collaborate, and grow in the digital age.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Upcoming SaaS Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Innovative products designed to solve real business challenges and drive growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {upcomingSaasProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 overflow-hidden">
                  {/* Product Header */}
                  <div className={`h-32 bg-gradient-to-r ${product.color} relative`}>
                    <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                      <product.icon className="h-12 w-12 text-white" />
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        product.status === 'In Development' ? 'bg-green-500/20 text-green-700' :
                        product.status === 'Planning' ? 'bg-yellow-500/20 text-yellow-700' :
                        product.status === 'Concept' ? 'bg-blue-500/20 text-blue-700' :
                        'bg-purple-500/20 text-purple-700'
                      }`}>
                        {product.status}
                      </span>
                    </div>
                  </div>

                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{product.title}</CardTitle>
                      <div className="flex items-center space-x-1 text-sm text-gray-500">
                        <Clock className="h-4 w-4" />
                        <span>{product.launchDate}</span>
                      </div>
                    </div>
                    <CardDescription>{product.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Features */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-brand-skyblue mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <div className="pt-4 border-t border-gray-100">
                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
                      >
                        Join Waitlist for Early Access
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why SaaS */}
      <section className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our SaaS Solutions?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built with modern technology and designed for scalability, security, and user experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: 'Enterprise Security',
                description: 'Bank-level security with encryption and compliance standards'
              },
              {
                icon: Zap,
                title: 'Lightning Fast',
                description: 'Optimized performance with global CDN and caching'
              },
              {
                icon: Users,
                title: 'Team Collaboration',
                description: 'Built-in tools for seamless team communication and workflow'
              },
              {
                icon: BarChart,
                title: 'Advanced Analytics',
                description: 'Deep insights and reporting to drive data-driven decisions'
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-brand-skyblue to-brand-teal rounded-2xl flex items-center justify-center">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Development Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Following industry best practices to deliver reliable and scalable SaaS solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Research & Planning',
                description: 'Deep market research and user needs analysis to identify pain points and opportunities.',
                color: 'text-brand-skyblue'
              },
              {
                step: '02',
                title: 'Design & Prototype',
                description: 'User-centered design process with interactive prototypes and usability testing.',
                color: 'text-brand-teal'
              },
              {
                step: '03',
                title: 'Develop & Launch',
                description: 'Agile development with continuous testing, security audits, and gradual rollout.',
                color: 'text-brand-orange'
              }
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center"
              >
                <div className={`text-6xl font-bold ${phase.color} mb-4`}>
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-20 bg-gradient-to-r from-brand-skyblue to-brand-teal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                <Mail className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Join Our Waitlist
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Be the first to know when our SaaS products launch. Get early access, 
              special pricing, and exclusive updates on our development progress.
            </p>
            
            <form onSubmit={handleWaitlistSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="flex-1 px-4 py-3 rounded-2xl border-0 focus:ring-2 focus:ring-white/50 focus:outline-none"
                />
                <Button type="submit" variant="secondary" size="lg">
                  Join Waitlist
                </Button>
              </div>
            </form>
            
            <p className="text-white/70 text-sm mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}