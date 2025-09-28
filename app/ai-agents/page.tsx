'use client'

import { motion } from 'framer-motion'
import { Brain, MessageSquare, Zap, Shield, Clock, BarChart, Users, Cog } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function AIAgentsPage() {
  const aiAgents = [
    {
      id: 1,
      title: 'Customer Support Agent',
      description: 'Intelligent chatbot that handles customer inquiries 24/7 with natural language processing.',
      icon: MessageSquare,
      features: [
        'Natural language understanding',
        '24/7 availability',
        'Multi-language support',
        'Escalation to human agents',
        'Learning from interactions',
        'Integration with CRM systems'
      ],
      useCases: ['Customer service', 'FAQ handling', 'Order tracking', 'Technical support'],
      color: 'from-brand-skyblue to-brand-teal'
    },
    {
      id: 2,
      title: 'Business Process Automation',
      description: 'AI agent that automates repetitive business tasks and workflows.',
      icon: Cog,
      features: [
        'Workflow automation',
        'Data processing',
        'Report generation',
        'Task scheduling',
        'Error handling',
        'Performance monitoring'
      ],
      useCases: ['Data entry', 'Report generation', 'Email automation', 'Inventory management'],
      color: 'from-brand-orange to-brand-goldenrod'
    },
    {
      id: 3,
      title: 'Sales Assistant Agent',
      description: 'AI-powered sales agent that qualifies leads and assists with sales processes.',
      icon: BarChart,
      features: [
        'Lead qualification',
        'Sales pipeline management',
        'Personalized recommendations',
        'Follow-up automation',
        'Performance analytics',
        'CRM integration'
      ],
      useCases: ['Lead generation', 'Sales qualification', 'Customer onboarding', 'Upselling'],
      color: 'from-brand-teal to-brand-skyblue'
    },
    {
      id: 4,
      title: 'Data Analytics Agent',
      description: 'Intelligent agent that analyzes business data and provides actionable insights.',
      icon: Brain,
      features: [
        'Automated data analysis',
        'Predictive modeling',
        'Anomaly detection',
        'Custom reporting',
        'Real-time monitoring',
        'Visualization tools'
      ],
      useCases: ['Business intelligence', 'Predictive analytics', 'Risk assessment', 'Performance monitoring'],
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
                <Brain className="h-10 w-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-gradient">AI Agents</span> for Business
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Intelligent automation solutions that work 24/7 to streamline your business processes, 
              enhance customer experience, and drive operational efficiency.
            </p>
          </motion.div>
        </div>
      </section>

      {/* AI Agents Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our AI Agent Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Specialized AI agents designed to handle specific business functions with intelligence and precision
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {aiAgents.map((agent, index) => (
              <motion.div
                key={agent.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 overflow-hidden">
                  {/* Agent Header */}
                  <div className={`h-32 bg-gradient-to-r ${agent.color} relative`}>
                    <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                      <agent.icon className="h-12 w-12 text-white" />
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl">{agent.title}</CardTitle>
                    <CardDescription>{agent.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Features */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Capabilities</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {agent.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-brand-skyblue rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Use Cases */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Use Cases</h4>
                      <div className="flex flex-wrap gap-2">
                        {agent.useCases.map((useCase, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-brand-skyblue/10 text-brand-skyblue rounded-full text-sm"
                          >
                            {useCase}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="pt-4 border-t border-gray-100">
                      <Button variant="outline" className="w-full">
                        Learn More About This Agent
                      </Button>
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
              Why Choose AI Agents?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transform your business operations with intelligent automation that never sleeps
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Clock,
                title: '24/7 Availability',
                description: 'AI agents work around the clock without breaks or downtime'
              },
              {
                icon: Zap,
                title: 'Instant Response',
                description: 'Immediate processing and response to customer inquiries'
              },
              {
                icon: Shield,
                title: 'Consistent Quality',
                description: 'Reliable performance with consistent service quality'
              },
              {
                icon: BarChart,
                title: 'Scalable Solution',
                description: 'Handle increasing workload without additional resources'
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

      {/* Implementation Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Implementation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our structured approach to deploying AI agents in your business environment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Analysis',
                description: 'Analyze your business processes and identify automation opportunities'
              },
              {
                step: '02',
                title: 'Design',
                description: 'Design custom AI agents tailored to your specific requirements'
              },
              {
                step: '03',
                title: 'Development',
                description: 'Build and train AI agents using advanced machine learning techniques'
              },
              {
                step: '04',
                title: 'Deployment',
                description: 'Deploy agents with monitoring and continuous improvement'
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
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how AI agents can transform your operations and drive efficiency. 
              Get a free consultation to explore the possibilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                View Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}