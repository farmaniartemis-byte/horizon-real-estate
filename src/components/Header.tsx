import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'

interface NavLink {
  label: string
  id?: string
  route?: string
}

const navLinks: NavLink[] = [
  { label: 'Home', id: 'top' },
  { label: 'Properties', route: '/properties' },
  { label: 'About Us', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Team', id: 'team' },
  { label: 'Contact', id: 'contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const isHome = location.pathname === '/'
  const solid = scrolled || !isHome

  const handleNavClick = (link: NavLink) => {
    setMobileOpen(false)
    if (link.route) {
      navigate(link.route)
      return
    }
    if (link.id === 'top') {
      if (!isHome) navigate('/')
      else window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    if (!isHome) {
      navigate('/')
      setTimeout(() => {
        document.getElementById(link.id!)?.scrollIntoView({ behavior: 'smooth' })
      }, 150)
    } else {
      document.getElementById(link.id!)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          solid ? 'bg-navy shadow-xl py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="container-premium flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick({ label: 'Home', id: 'top' })}
            className="flex items-center gap-2.5 shrink-0"
          >
            <div className="flex flex-col gap-[3px]">
              <div className="w-6 h-[3px] bg-gold rounded-full" />
              <div className="w-4 h-[3px] bg-gold rounded-full" />
              <div className="w-5 h-[3px] bg-gold rounded-full" />
            </div>
            <span className="text-white font-bold text-base lg:text-lg tracking-wide whitespace-nowrap">
              HORIZON <span className="text-gold">PROPERTIES</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link)}
                className="text-white/80 hover:text-gold transition-colors text-sm font-medium"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Phone CTA */}
          <a
            href="tel:+15552467890"
            className="hidden lg:flex items-center gap-2 border border-white/30 rounded-lg px-4 py-2.5 text-white hover:bg-white hover:text-navy transition-colors text-sm font-medium whitespace-nowrap"
          >
            <Phone className="w-4 h-4" />
            (555) 246-7890
          </a>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-white p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          mobileOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div
          className="absolute inset-0 bg-navy/80 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        <nav
          className={`absolute right-0 top-0 h-full w-72 bg-navy shadow-2xl transition-transform duration-300 ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="pt-24 px-6 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link)}
                className="text-white/80 hover:text-gold transition-colors text-base font-medium text-left py-3.5 border-b border-white/5"
              >
                {link.label}
              </button>
            ))}
            <a
              href="tel:+15552467890"
              className="flex items-center gap-2 text-white/80 text-base font-medium py-3.5 mt-4"
            >
              <Phone className="w-4 h-4 text-gold" />
              (555) 246-7890
            </a>
          </div>
        </nav>
      </div>
    </>
  )
}
