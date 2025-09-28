'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Search, Share2, Target, BarChart, Users, Megaphone, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function MarketingPage() {
  const services = [
    {
      icon: Search,
      title: 'Search Engine Optimization',
      description: 'Improve your website\'s visibility and ranking on search engines with our proven SEO strategies.',
      features: ['Keyword research', 'On-page optimization', 'Technical SEO', 'Link building', 'Local SEO', 'SEO audits'],
      color: 'from-brand-skyblue to-brand-teal'
    },
    {
      icon: Share2,
      title: 'Social Media Marketing',
      description: 'Build your brand presence and engage with your audience across all major social platforms.',
      features: ['Content creation', 'Community management', 'Paid advertising', 'Influencer partnerships', 'Analytics', 'Strategy development'],
      color: 'from-brand-orange to-brand-goldenrod'
    },
    {
      icon: Target,
      title: 'Pay-Per-Click Advertising',
      description: 'Drive targeted traffic and conversions with strategic PPC campaigns across Google, Facebook, and more.',
      features: ['Campaign setup', 'Keyword bidding', 'Ad copywriting', 'Landing page optimization', 'Conversion tracking', 'ROI optimization'],
      color: 'from-brand-teal to-brand-skyblue'
    },
    {
      icon: Megaphone,
      title: 'Content Marketing',
      description: 'Create compelling content that attracts, engages, and converts your target audience.',
      features: ['Content strategy', 'Blog writing', 'Video production', 'Infographics', 'Email campaigns', 'Content distribution'],
      color: 'from-brand-goldenrod to-brand-orange'
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
                <TrendingUp className="h-10 w-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-gradient">Digital Marketing</span> Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Boost your online presence and drive business growth with our comprehensive 
              digital marketing strategies tailored to your unique business needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Marketing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital marketing solutions to help your business thrive online
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className={`h-32 bg-gradient-to-r ${service.color} relative`}>
                    <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                      <service.icon className="h-12 w-12 text-white" />
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-brand-skyblue rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full mt-6">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
              Why Choose Our Marketing Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Data-driven strategies that deliver measurable results for your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: BarChart,
                title: 'Data-Driven Results',
                description: 'Every strategy is backed by comprehensive analytics and performance metrics'
              },
              {
                icon: Users,
                title: 'Expert Team',
                description: 'Certified marketing professionals with years of industry experience'
              },
              {
                icon: Target,
                title: 'Targeted Approach',
                description: 'Customized strategies that align with your specific business goals'
              },
              {
                icon: Globe,
                title: 'Multi-Channel Reach',
                description: 'Comprehensive coverage across all digital marketing channels'
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

      {/* Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Marketing Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A systematic approach to delivering successful marketing campaigns
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Strategy & Planning',
                description: 'Comprehensive market research and strategic planning phase'
              },
              {
                step: '02',
                title: 'Campaign Development',
                description: 'Create compelling campaigns across multiple channels'
              },
              {
                step: '03',
                title: 'Implementation',
                description: 'Execute campaigns with precision and attention to detail'
              },
              {
                step: '04',
                title: 'Optimization',
                description: 'Continuous monitoring and optimization for better results'
              }
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-brand-orange to-brand-goldenrod rounded-2xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{phase.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
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
              Ready to Grow Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's create a digital marketing strategy that drives real results for your business. 
              Get a free consultation and marketing audit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Get Free Audit
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                View Case Studies
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}