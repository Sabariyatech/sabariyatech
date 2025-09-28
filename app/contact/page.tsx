'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We\'ll get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'info@sabariyatech.in',
      description: 'Send us an email anytime'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+91 XXXXX XXXXX',
      description: 'Mon-Fri from 9am to 6pm'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'Vijayawada, Andhra Pradesh, India',
      description: 'Come say hello at our office'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: 'Mon-Fri: 9:00 AM - 6:00 PM',
      description: 'Saturday: 10:00 AM - 2:00 PM'
    }
  ]

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
                <MessageSquare className="h-10 w-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get In <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start your project or have questions about our services? 
              We'd love to hear from you. Let's discuss how we can help bring your ideas to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-brand-skyblue focus:border-transparent"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-brand-skyblue focus:border-transparent"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-brand-skyblue focus:border-transparent"
                      >
                        <option value="">Select a subject</option>
                        <option value="web-development">Web Development</option>
                        <option value="saas-products">SaaS Products</option>
                        <option value="ai-agents">AI Agents</option>
                        <option value="digital-marketing">Digital Marketing</option>
                        <option value="general-inquiry">General Inquiry</option>
                        <option value="partnership">Partnership</option>
                        <option value="careers">Careers</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-brand-skyblue focus:border-transparent resize-none"
                        placeholder="Tell us about your project or inquiry..."
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
                <p className="text-gray-600 mb-8">
                  We're here to help and answer any question you might have. 
                  We look forward to hearing from you.
                </p>
              </div>

              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-md transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-brand-skyblue to-brand-teal rounded-2xl flex items-center justify-center flex-shrink-0">
                          <info.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">{info.title}</h3>
                          <p className="text-brand-skyblue font-medium mb-1">{info.details}</p>
                          <p className="text-gray-600 text-sm">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}

              {/* Map Placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card>
                  <CardContent className="p-0">
                    <div className="h-64 bg-gradient-to-r from-brand-skyblue to-brand-teal rounded-2xl flex items-center justify-center">
                      <div className="text-center text-white">
                        <MapPin className="h-12 w-12 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Our Location</h3>
                        <p className="text-white/90">Vijayawada, Andhra Pradesh</p>
                        <p className="text-white/90">Interactive map coming soon</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Quick answers to common questions about our services and process
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: 'How long does a typical project take?',
                answer: 'Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex applications can take 2-6 months.'
              },
              {
                question: 'Do you provide ongoing support?',
                answer: 'Yes, we offer comprehensive support and maintenance packages to keep your applications running smoothly.'
              },
              {
                question: 'What technologies do you work with?',
                answer: 'We specialize in modern technologies like Next.js, React, Node.js, Python, and cloud platforms like AWS and Vercel.'
              },
              {
                question: 'Can you help with existing projects?',
                answer: 'Absolutely! We can help improve, maintain, or add new features to your existing applications.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}