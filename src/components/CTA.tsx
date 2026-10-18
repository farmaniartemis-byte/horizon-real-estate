import { motion } from 'framer-motion'
import { ArrowRight, Key } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-16 lg:py-20 bg-[#f7f8fa]">
      <div className="container-premium">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl bg-white card-shadow overflow-hidden p-8 lg:p-14"
        >
          {/* Decorative accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2" />

          <div className="relative flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Icon */}
            <div className="w-20 h-20 rounded-full bg-navy flex items-center justify-center shrink-0">
              <Key className="w-10 h-10 text-gold" />
            </div>

            {/* Text */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
                Ready to Find Your Perfect Property?
              </h2>
              <p className="text-navy/60 text-lg">
                Let our experts guide you to the right home or investment.
              </p>
            </div>

            {/* Button */}
            <button
              onClick={() =>
                document
                  .getElementById('contact')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="btn-primary shrink-0"
            >
              Get In Touch <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
