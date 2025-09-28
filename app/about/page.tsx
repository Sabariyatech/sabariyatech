'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Target, Eye, Users, Calendar, Award } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function AboutPage() {
  const team = [
    {
      name: 'Founder & CEO',
      role: 'Full-Stack Developer',
      description: 'Visionary leader with expertise in modern web technologies and business strategy.',
      image: '/images/team-1.jpg'
    },
    {
      name: 'Technical Lead',
      role: 'AI/ML Specialist',
      description: 'Expert in artificial intelligence and machine learning solutions.',
      image: '/images/team-2.jpg'
    },
    {
      name: 'Marketing Head',
      role: 'Digital Marketing Expert',
      description: 'Strategic marketing professional driving brand growth and online presence.',
      image: '/images/team-3.jpg'
    }
  ]

  const milestones = [
    {
      year: '2024',
      title: 'Company Founded',
      description: 'SabariyaTech was established with a vision to flow with innovation'
    },
    {
      year: '2024',
      title: 'First Major Projects',
      description: 'Successfully delivered Bhadrachalam Tourism and SLS IT SkillUp platforms'
    },
    {
      year: '2024',
      title: 'Expanding Services',
      description: 'Added AI Agents and SaaS product development to our service portfolio'
    },
    {
      year: 'Future',
      title: 'Global Expansion',
      description: 'Planning to expand services internationally and launch proprietary SaaS products'
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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-gradient">SabariyaTech</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are a dynamic IT startup that flows like a river - continuous, adaptive, 
              and always moving forward with the best technologies to deliver excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story & Vision
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  The name "Sabariya" is derived from the concept of a river's flow - continuous, 
                  powerful, and life-giving. Just as rivers shape landscapes and nurture civilizations, 
                  we believe technology should flow seamlessly to transform businesses and create value.
                </p>
                <p>
                  Founded in 2024, SabariyaTech emerged from a vision to bridge the gap between 
                  cutting-edge technology and practical business solutions. We don't just build 
                  software; we craft digital experiences that flow naturally with your business needs.
                </p>
                <p>
                  Our approach is rooted in continuous innovation, much like a river that never stops 
                  flowing. We adapt, evolve, and always find the best path forward, ensuring our 
                  clients receive solutions that are not just current but future-ready.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="w-full h-96 bg-gradient-to-br from-brand-skyblue to-brand-teal rounded-2xl flex items-center justify-center">
                <Image src="/images/icons/Logo.png" alt="SabariyaTech" width={96} height={96} className="h-24 w-24 opacity-50 object-contain" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="h-full">
                <CardHeader className="text-center">
                  <Target className="h-12 w-12 mx-auto mb-4 text-brand-skyblue" />
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    To empower businesses with innovative technology solutions that flow seamlessly 
                    with their operations, driving growth, efficiency, and digital transformation 
                    in an ever-evolving technological landscape.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="h-full">
                <CardHeader className="text-center">
                  <Eye className="h-12 w-12 mx-auto mb-4 text-brand-teal" />
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    To become a leading technology partner recognized for our innovative solutions, 
                    exceptional quality, and ability to transform ideas into powerful digital 
                    experiences that create lasting value for our clients.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Passionate professionals dedicated to delivering exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-r from-brand-skyblue to-brand-teal rounded-full flex items-center justify-center">
                      <Users className="h-12 w-12 text-white" />
                    </div>
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <CardDescription className="text-brand-skyblue font-medium">
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{member.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Key milestones in our continuous flow of innovation and growth
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-brand-skyblue to-brand-teal"></div>
            
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-5 w-5 text-brand-skyblue" />
                        <span className="text-brand-skyblue font-bold">{milestone.year}</span>
                      </div>
                      <CardTitle className="text-xl">{milestone.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-brand-skyblue rounded-full border-4 border-white shadow-lg"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide our flow and shape our approach to every project
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: () => <Image src="/images/icons/Logo.png" alt="Flow" width={64} height={64} className="h-16 w-16 object-contain" />, title: 'Flow', description: 'Continuous innovation and adaptation' },
              { icon: Award, title: 'Excellence', description: 'Commitment to quality in everything we do' },
              { icon: Users, title: 'Collaboration', description: 'Working together to achieve great results' },
              { icon: Target, title: 'Focus', description: 'Dedicated attention to client success' }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-brand-skyblue to-brand-teal rounded-2xl flex items-center justify-center">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}