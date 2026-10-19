import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden"
    >
      {/* Background with subtle scale animation */}
      <motion.div
        initial={{ scale: 1.03 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute inset-0"
      >
        <img
          src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&q=80&auto=format&fit=crop"
          alt="Luxury modern villa at dusk"
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/30 to-navy/70" />

      {/* Content */}
      <div className="relative z-10 container-premium text-center text-white py-32">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-6 max-w-4xl mx-auto text-balance"
        >
          Discover Exceptional Homes &amp; Investments
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Premium properties in prime locations. Find your dream home or the
          perfect investment with confidence.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link to="/properties" className="btn-primary">
            View Properties <ArrowRight className="w-5 h-5" />
          </Link>
          <a href="#about" className="btn-outline-light">
            Learn More
          </a>
        </motion.div>
      </div>
    </section>
  )
}
