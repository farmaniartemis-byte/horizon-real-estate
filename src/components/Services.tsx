import { motion } from 'framer-motion'
import { services } from '../data/services'

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
            From acquisition to investment strategy, we provide end-to-end real
            estate services designed around your goals.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-navy/10">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group p-8 lg:p-10 border-r border-b border-navy/10 hover:bg-[#fafbfc] transition-colors duration-300"
            >
              <div className="text-4xl font-bold text-gold/40 group-hover:text-gold transition-colors duration-300 mb-5">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="font-bold text-xl mb-3">{service.title}</h3>
              <p className="text-navy/60 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
