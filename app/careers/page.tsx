'use client'

import { motion } from 'framer-motion'
import { Users, MapPin, Clock, Briefcase, Heart, Zap, Award, Coffee } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function CareersPage() {
  const jobListings = [
    {
      id: 1,
      title: 'Full-Stack Developer',
      department: 'Engineering',
      location: 'Vijayawada / Remote',
      type: 'Full-time',
      experience: '2-4 years',
      description: 'Join our development team to build cutting-edge web applications using modern technologies.',
      requirements: [
        'Experience with React, Next.js, and Node.js',
        'Knowledge of databases (PostgreSQL, MongoDB)',
        'Understanding of cloud platforms (AWS, Vercel)',
        'Strong problem-solving skills'
      ],
      benefits: ['Competitive salary', 'Health insurance', 'Flexible hours', 'Learning budget']
    },
    {
      id: 2,
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Vijayawada / Remote',
      type: 'Full-time',
      experience: '1-3 years',
      description: 'Create beautiful and intuitive user experiences for our web and mobile applications.',
      requirements: [
        'Proficiency in Figma, Adobe Creative Suite',
        'Understanding of user-centered design principles',
        'Experience with prototyping and wireframing',
        'Portfolio showcasing design projects'
      ],
      benefits: ['Creative freedom', 'Design tools budget', 'Conference attendance', 'Flexible schedule']
    },
    {
      id: 3,
      title: 'Digital Marketing Specialist',
      department: 'Marketing',
      location: 'Vijayawada / Hybrid',
      type: 'Full-time',
      experience: '1-2 years',
      description: 'Drive our digital marketing efforts and help grow our brand presence online.',
      requirements: [
        'Experience with SEO, SEM, and social media marketing',
        'Knowledge of Google Analytics and marketing tools',
        'Content creation and copywriting skills',
        'Understanding of marketing automation'
      ],
      benefits: ['Marketing budget', 'Certification courses', 'Performance bonuses', 'Team events']
    },
    {
      id: 4,
      title: 'AI/ML Engineer Intern',
      department: 'Engineering',
      location: 'Vijayawada / Remote',
      type: 'Internship',
      experience: 'Fresh Graduate',
      description: 'Learn and contribute to our AI agent development projects while gaining real-world experience.',
      requirements: [
        'Knowledge of Python and machine learning libraries',
        'Understanding of AI/ML concepts',
        'Eagerness to learn and grow',
        'Good communication skills'
      ],
      benefits: ['Mentorship program', 'Learning opportunities', 'Stipend', 'Full-time opportunity']
    }
  ]

  const benefits = [
    {
      icon: Heart,
      title: 'Work-Life Balance',
      description: 'Flexible working hours and remote work options to maintain healthy work-life balance.'
    },
    {
      icon: Zap,
      title: 'Growth Opportunities',
      description: 'Continuous learning opportunities with access to courses, conferences, and certifications.'
    },
    {
      icon: Award,
      title: 'Recognition & Rewards',
      description: 'Performance-based bonuses and recognition programs to celebrate achievements.'
    },
    {
      icon: Coffee,
      title: 'Great Culture',
      description: 'Collaborative and inclusive work environment with regular team building activities.'
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
                <Users className="h-10 w-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Join Our <span className="text-gradient">Team</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Be part of a dynamic team that's shaping the future of technology. 
              We're looking for passionate individuals who want to make a difference.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore exciting career opportunities and find your perfect role
            </p>
          </motion.div>

          <div className="space-y-6">
            {jobListings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                          <div className="flex items-center space-x-1">
                            <Briefcase className="h-4 w-4" />
                            <span>{job.department}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{job.type}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users className="h-4 w-4" />
                            <span>{job.experience}</span>
                          </div>
                        </div>
                      </div>
                      <Button className="mt-4 md:mt-0">
                        Apply Now
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">
                      {job.description}
                    </CardDescription>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Requirements</h4>
                        <ul className="space-y-1">
                          {job.requirements.map((req, idx) => (
                            <li key={idx} className="text-gray-600 text-sm flex items-start">
                              <span className="w-1.5 h-1.5 bg-brand-skyblue rounded-full mt-2 mr-2 flex-shrink-0"></span>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Benefits</h4>
                        <div className="flex flex-wrap gap-2">
                          {job.benefits.map((benefit, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-brand-skyblue/10 text-brand-skyblue rounded-full text-sm"
                            >
                              {benefit}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We believe in creating an environment where our team can thrive and grow
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-skyblue to-brand-teal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Don't See Your Role?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals. Send us your resume 
              and let us know how you can contribute to our team.
            </p>
            <Button size="lg" variant="secondary">
              Send Your Resume
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}