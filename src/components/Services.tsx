import { motion } from 'framer-motion'
import { Home, TrendingUp, Briefcase, Building2 } from 'lucide-react'
import { services } from '../data/services'

const iconMap: Record<string, typeof Home> = {
  Home,
  TrendingUp,
  Briefcase,
  Building2,
}

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-premium">
        <div className="text-center mb-14">
          <p className="section-label mb-3">Our Services</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            What We Do
          </h2>
          <p className="text-navy/60 text-lg max-w-2xl mx-auto">
            Comprehensive real estate services tailored to meet your every need,
            from buying your first home to managing a growing investment
            portfolio.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon]
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-8 rounded-2xl bg-white border border-navy/5 card-shadow card-shadow-hover hover:border-gold/30"
              >
                <div className="w-14 h-14 rounded-xl bg-navy flex items-center justify-center mb-6 group-hover:bg-gold transition-colors">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-3">{service.title}</h3>
                <p className="text-navy/60 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
