import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image src="/images/icons/Logo.png" alt="SabariyaTech" width={64} height={64} className="h-16 w-16 object-contain" />
              <span className="text-xl font-bold">SabariyaTech</span>
            </div>
            <p className="text-gray-400">
              We flow with best tech to give best. Professional IT solutions for modern businesses.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/sabariyatech">
                <Facebook className="h-5 w-5 text-gray-400 hover:text-brand-skyblue cursor-pointer transition-colors" />
              </Link>
              <Link href="https://www.twitter.com/sabariyatech">
                <Twitter className="h-5 w-5 text-gray-400 hover:text-brand-skyblue cursor-pointer transition-colors" />
              </Link>
              <Link href="https://www.linkedin.com/company/sabariyatech/">
                <Linkedin className="h-5 w-5 text-gray-400 hover:text-brand-skyblue cursor-pointer transition-colors" />
              </Link>
              <Link href="https://www.instagram.com/sabariyatech">
                <Instagram className="h-5 w-5 text-gray-400 hover:text-brand-skyblue cursor-pointer transition-colors" />
              </Link>
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
              <li><Link href="/projects" className="text-gray-400 hover:text-white transition-colors">Web Development</Link></li>
              <li><Link href="/marketing" className="text-gray-400 hover:text-white transition-colors">Digital Marketing</Link></li>
              <li><Link href="/saas" className="text-gray-400 hover:text-white transition-colors">SaaS Solutions</Link></li>
              <li><Link href="/ai-agents" className="text-gray-400 hover:text-white transition-colors">AI Integration</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-brand-skyblue" />
                <Link href="mailto:team@sabariyatech.in" className="text-gray-400 hover:text-white transition-colors">
                  team@sabariyatech.in
                </Link>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-brand-skyblue" />
                <span className="text-gray-400">9652557187, 6301814451</span>
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
            © {currentYear} SabariyaTech. All rights reserved. | Built with ❤️ using Next.js
          </p>
        </div>
      </div>
    </footer>
  )
}