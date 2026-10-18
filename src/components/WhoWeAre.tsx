import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

const galleryImages = [
  'https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?w=1200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1706808849780-7a04fbac83ef?w=1200&q=80&auto=format&fit=crop',
]

export default function WhoWeAre() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((c) => (c + 1) % galleryImages.length)
  const prev = () =>
    setCurrent((c) => (c - 1 + galleryImages.length) % galleryImages.length)

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-premium grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label mb-4">About Us</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Who We Are
          </h2>
          <p className="text-navy/70 text-lg leading-relaxed mb-4">
            At Horizon Properties, we connect people with exceptional homes and
            sound investments. Our approach is built on integrity, deep market
            knowledge, and a genuine commitment to client satisfaction.
          </p>
          <p className="text-navy/70 text-lg leading-relaxed mb-8">
            Whether you are buying your first home, selling a long-time
            residence, or expanding your investment portfolio, our team brings
            the expertise and personalized attention you deserve.
          </p>
          <button
            onClick={() =>
              document
                .getElementById('services')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
            className="btn-primary"
          >
            Learn More <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>

        {/* Right: Image Carousel */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] card-shadow">
            {galleryImages.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Property gallery ${i + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                  i === current ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
            {/* Arrows */}
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-all"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5 text-navy" />
            </button>
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-all"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5 text-navy" />
            </button>
            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {galleryImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === current ? 'bg-gold w-6' : 'bg-white/50 w-2'
                  }`}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
