'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Filter, Calendar, Users, Code } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function ProjectsPage() {
  const [filter, setFilter] = useState('All')

  const projects = [
    {
      id: 1,
      title: 'Bhadrachalam Papikondalu Tourism',
      description: 'A comprehensive tourism website showcasing the beautiful Papikondalu region with trip information, booking flows, and cultural highlights.',
      longDescription: 'This tourism-focused web platform was designed to promote the scenic beauty and cultural richness of the Bhadrachalam Papikondalu region. The website features an intuitive booking system, detailed trip information, photo galleries, and cultural insights that help visitors plan their perfect river journey experience.',
      image: '/images/project-1.jpg',
      category: 'Web',
      technologies: ['Next.js', 'Tailwind CSS', 'SEO Optimization', 'Responsive Design'],
      liveUrl: 'https://bhadradripapikondalu.com/',
      githubUrl: '#',
      features: [
        'Interactive trip booking system',
        'Photo galleries and virtual tours',
        'Cultural heritage information',
        'Mobile-responsive design',
        'SEO optimized for tourism keywords',
        'Multi-language support planning'
      ],
      timeline: '2 months',
      teamSize: '3 members',
      status: 'Live'
    },
    {
      id: 2,
      title: 'SLSIT SkillUp',
      description: 'An interactive e-learning portal designed for IT skills development and career growth with modern UI/UX and comprehensive course management.',
      longDescription: 'SLSIT SkillUp is a comprehensive e-learning platform that bridges the gap between academic learning and industry requirements. The platform offers structured IT courses, interactive learning modules, student progress tracking, and career guidance resources.',
      image: '/images/project-2.jpg',
      category: 'Web',
      technologies: ['React', 'Node.js', 'Tailwind CSS', 'Interactive UI', 'Course Management'],
      liveUrl: 'https://slsitskillup.in/',
      githubUrl: '#',
      features: [
        'Course catalog and enrollment system',
        'Interactive learning modules',
        'Student progress tracking',
        'Certificate generation',
        'Career guidance resources',
        'Admin dashboard for course management'
      ],
      timeline: '3 months',
      teamSize: '4 members',
      status: 'Live'
    },
    {
      id: 3,
      title: 'AI-Powered Business Assistant',
      description: 'An intelligent business automation tool that helps streamline operations and improve productivity through AI-driven insights.',
      longDescription: 'This upcoming AI agent will revolutionize how businesses handle routine tasks and decision-making processes. It will integrate with existing business tools to provide intelligent automation, predictive analytics, and personalized recommendations.',
      image: '/images/project-3.jpg',
      category: 'AI',
      technologies: ['Python', 'TensorFlow', 'OpenAI API', 'React', 'FastAPI'],
      liveUrl: '#',
      githubUrl: '#',
      features: [
        'Natural language processing',
        'Automated task scheduling',
        'Predictive analytics dashboard',
        'Integration with popular business tools',
        'Custom workflow automation',
        'Real-time insights and reporting'
      ],
      timeline: '4 months',
      teamSize: '5 members',
      status: 'In Development'
    },
    {
      id: 4,
      title: 'SaaS Project Management Suite',
      description: 'A comprehensive project management platform designed for modern teams with advanced collaboration features and analytics.',
      longDescription: 'This SaaS solution will provide teams with powerful project management capabilities, including task tracking, team collaboration, time management, and advanced analytics to boost productivity and project success rates.',
      image: '/images/project-4.jpg',
      category: 'SaaS',
      technologies: ['Next.js', 'PostgreSQL', 'Prisma', 'Stripe', 'WebSocket'],
      liveUrl: '#',
      githubUrl: '#',
      features: [
        'Advanced task and project tracking',
        'Real-time team collaboration',
        'Time tracking and reporting',
        'Custom dashboard and analytics',
        'Integration with popular tools',
        'Multi-tenant architecture'
      ],
      timeline: '6 months',
      teamSize: '6 members',
      status: 'Planning'
    }
  ]

  const categories = ['All', 'Web', 'Mobile', 'AI', 'SaaS']

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter)

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
              Our <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showcasing our expertise through successful project deliveries and innovative solutions 
              that drive business growth and digital transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-2 mb-8">
            <Filter className="h-5 w-5 text-gray-600" />
            <span className="text-gray-600 font-medium">Filter by category:</span>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? 'default' : 'outline'}
                onClick={() => setFilter(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
                  {/* Project Image */}
                  <div className="h-64 bg-gradient-to-r from-brand-skyblue via-brand-teal to-brand-orange relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <div className="text-center text-white">
                        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                        <div className="flex items-center justify-center space-x-4">
                          <span className={`px-3 py-1 rounded-full text-sm ${
                            project.status === 'Live' ? 'bg-green-500' :
                            project.status === 'In Development' ? 'bg-yellow-500' :
                            'bg-blue-500'
                          }`}>
                            {project.status}
                          </span>
                          <span className="px-3 py-1 bg-white/20 rounded-full text-sm">
                            {project.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-brand-skyblue/10 text-brand-skyblue rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Features</h4>
                      <ul className="space-y-1">
                        {project.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="text-gray-600 text-sm flex items-start">
                            <span className="w-1.5 h-1.5 bg-brand-skyblue rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Project Stats */}
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-brand-skyblue" />
                        <span className="text-sm text-gray-600">{project.timeline}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-brand-teal" />
                        <span className="text-sm text-gray-600">{project.teamSize}</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-4 pt-4">
                      {project.liveUrl !== '#' && (
                        <Button size="sm" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            View Live
                          </a>
                        </Button>
                      )}
                      {project.status === 'Live' && (
                        <Button size="sm" variant="outline">
                          <Code className="h-4 w-4 mr-2" />
                          Case Study
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Project Statistics
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Numbers that reflect our commitment to delivering quality solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '10+', label: 'Projects Completed', color: 'text-brand-skyblue' },
              { number: '100%', label: 'Client Satisfaction', color: 'text-brand-teal' },
              { number: '24/7', label: 'Support Available', color: 'text-brand-orange' },
              { number: '50+', label: 'Technologies Used', color: 'text-brand-goldenrod' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}>
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-skyblue to-brand-teal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can bring your ideas to life with our proven expertise and innovative approach.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <a href="/contact">
                Start Your Project <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}