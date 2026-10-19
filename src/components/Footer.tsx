import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import { Link } from 'react-router-dom'

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'Properties', to: '/properties' },
  { label: 'About Us', to: '/#about' },
  { label: 'Services', to: '/#services' },
  { label: 'Team', to: '/#team' },
]

const serviceLinks = [
  'Buy a Property',
  'Sell Your Home',
  'Investment Advisory',
  'Property Management',
]

const socials = [Facebook, Twitter, Instagram, Linkedin]

export default function Footer() {
  return (
    <footer id="contact" className="bg-navy text-white">
      <div className="container-premium py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="flex flex-col gap-[3px]">
                <div className="w-6 h-[3px] bg-gold rounded-full" />
                <div className="w-4 h-[3px] bg-gold rounded-full" />
                <div className="w-5 h-[3px] bg-gold rounded-full" />
              </div>
              <span className="font-bold text-lg tracking-wide">
                HORIZON <span className="text-gold">PROPERTIES</span>
              </span>
            </div>
            <p className="text-white/60 leading-relaxed mb-6">
              Connecting people with exceptional homes and investments since 2007.
              Your trusted partner in premium real estate.
            </p>
            <div className="flex gap-3">
              {socials.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors"
                  aria-label="Social media"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-white/60 text-sm mb-3">
                Subscribe to our newsletter
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex gap-2"
              >
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 min-w-0 px-4 py-2.5 rounded-lg bg-white/10 border border-white/10 text-white placeholder-white/40 text-sm focus:outline-none focus:border-gold"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-lg bg-gold text-white text-sm font-medium hover:bg-gold-600 transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-white/60 hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-5">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <Link
                    to="/#services"
                    className="text-white/60 hover:text-gold transition-colors text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-5">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span>
                  1234 Horizon Plaza, Suite 500
                  <br />
                  New York, NY 10001
                </span>
              </li>
              <li>
                <a
                  href="tel:+15552467890"
                  className="flex items-center gap-3 text-white/60 hover:text-gold transition-colors text-sm"
                >
                  <Phone className="w-5 h-5 text-gold shrink-0" />
                  (555) 246-7890
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@horizonproperties.com"
                  className="flex items-center gap-3 text-white/60 hover:text-gold transition-colors text-sm"
                >
                  <Mail className="w-5 h-5 text-gold shrink-0" />
                  info@horizonproperties.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/10">
        <div className="container-premium py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Horizon Properties. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/40">
            <a href="#" className="hover:text-gold transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
