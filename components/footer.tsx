import Link from 'next/link'
import { Waves, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Waves className="h-8 w-8 text-brand-skyblue" />
              <span className="text-xl font-bold">SabariyaTech</span>
            </div>
            <p className="text-gray-400">
              We flow with best tech to give best. Professional IT solutions for modern businesses.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-brand-skyblue cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-brand-skyblue cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-brand-skyblue cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-brand-skyblue cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/projects" className="text-gray-400 hover:text-white transition-colors">Projects</Link></li>
              <li><Link href="/saas" className="text-gray-400 hover:text-white transition-colors">SaaS Products</Link></li>
              <li><Link href="/ai-agents" className="text-gray-400 hover:text-white transition-colors">AI Agents</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-400">Web Development</span></li>
              <li><span className="text-gray-400">Digital Marketing</span></li>
              <li><span className="text-gray-400">SaaS Solutions</span></li>
              <li><span className="text-gray-400">AI Integration</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-brand-skyblue" />
                <span className="text-gray-400">info@sabariyatech.in</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-brand-skyblue" />
                <span className="text-gray-400">+91 XXXXX XXXXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-brand-skyblue" />
                <span className="text-gray-400">Vijayawada, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 SabariyaTech. All rights reserved. | Built with ❤️ using Next.js
          </p>
        </div>
      </div>
    </footer>
  )
}