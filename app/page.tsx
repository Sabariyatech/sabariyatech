'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Code, Brain, Rocket, TrendingUp, CheckCircle, Users, Award, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

export default function HomePage() {
  const services = [
    {
      icon: Code,
      title: 'Web Technologies',
      description: 'Modern, responsive websites and web applications built with cutting-edge technologies.',
      color: 'text-brand-skyblue'
    },
    {
      icon: Rocket,
      title: 'SaaS Products',
      description: 'Scalable software solutions designed to streamline your business operations.',
      color: 'text-brand-orange'
    },
    {
      icon: Brain,
      title: 'AI Agents',
      description: 'Intelligent automation and AI-powered solutions to enhance productivity.',
      color: 'text-brand-teal'
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Strategic marketing solutions to boost your online presence and growth.',
      color: 'text-brand-goldenrod'
    }
  ]

  const features = [
    {
      icon: CheckCircle,
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality control for all deliverables'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Skilled professionals with years of industry experience'
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: 'Track record of successful projects and satisfied clients'
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Efficient workflows ensuring timely project completion'
    }
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 wave-bg opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-gradient">We Flow with Best Tech</span>
              <br />
              <span className="text-gray-800">to Give Best</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Professional IT startup delivering innovative Web Technologies, SaaS Products, 
              AI Agents, and Digital Marketing solutions that drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/projects">
                  Explore Our Work <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive IT solutions tailored to meet your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="text-center">
                    <service.icon className={`h-12 w-12 mx-auto mb-4 ${service.color}`} />
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Showcasing our expertise through successful project deliveries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-r from-brand-skyblue to-brand-teal"></div>
                <CardHeader>
                  <CardTitle>Bhadrachalam Papikondalu Tourism</CardTitle>
                  <CardDescription>Tourism-focused web platform showcasing river journeys</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    A comprehensive tourism website featuring trip information, booking flows, 
                    and cultural highlights for the beautiful Papikondalu region.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-brand-skyblue/10 text-brand-skyblue rounded-full text-sm">Next.js</span>
                    <span className="px-3 py-1 bg-brand-teal/10 text-brand-teal rounded-full text-sm">Tailwind</span>
                    <span className="px-3 py-1 bg-brand-orange/10 text-brand-orange rounded-full text-sm">SEO</span>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://bhadradripapikondalu.com/" target="_blank" rel="noopener noreferrer">
                      View Project <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-r from-brand-orange to-brand-goldenrod"></div>
                <CardHeader>
                  <CardTitle>SLS IT SkillUp</CardTitle>
                  <CardDescription>E-learning portal for IT skills and career growth</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    An interactive learning platform offering IT courses, student onboarding, 
                    and career development resources with modern UI/UX.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-brand-orange/10 text-brand-orange rounded-full text-sm">React</span>
                    <span className="px-3 py-1 bg-brand-goldenrod/10 text-brand-goldenrod rounded-full text-sm">Node.js</span>
                    <span className="px-3 py-1 bg-brand-skyblue/10 text-brand-skyblue rounded-full text-sm">Interactive</span>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://slsitskillup.in/" target="_blank" rel="noopener noreferrer">
                      View Project <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link href="/projects">
                View All Projects <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose SabariyaTech?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine innovation, expertise, and dedication to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-brand-skyblue to-brand-teal rounded-2xl flex items-center justify-center">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
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
              Let's discuss how we can help transform your ideas into reality with our innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Get Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
                <Link href="/projects">View Our Work</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}