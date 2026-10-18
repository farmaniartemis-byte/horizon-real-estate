import { motion } from 'framer-motion'
import { Award, Users, Home, TrendingUp } from 'lucide-react'

const stats = [
  { icon: Award, value: '18+', label: 'Years Experience' },
  { icon: Home, value: '1,200+', label: 'Properties Sold' },
  { icon: Users, value: '950+', label: 'Happy Clients' },
  { icon: TrendingUp, value: '$2B+', label: 'In Sales' },
]

const reasons = [
  {
    title: 'Unmatched Market Expertise',
    description:
      'Our advisors live and breathe real estate, with deep knowledge of every neighborhood we serve.',
  },
  {
    title: 'Personalized Service',
    description:
      'No two clients are alike. We tailor our approach to your specific goals, timeline, and budget.',
  },
  {
    title: 'Proven Track Record',
    description:
      'Consistently ranked among the top agencies, with a 98% client satisfaction rate.',
  },
  {
    title: 'Full-Service Support',
    description:
      'From the first viewing to closing day and beyond, we are with you at every step.',
  },
]

export default function WhyChooseHorizon() {
  return (
    <section className="section-padding bg-navy text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy to-navy-800" />

      <div className="relative container-premium">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-7 h-7 text-gold" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold mb-1">
                {stat.value}
              </div>
              <div className="text-white/60 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Reasons */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-label mb-3">Why Choose Us</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              The Horizon Difference
            </h2>
            <p className="text-white/70 text-lg leading-relaxed">
              We do not just sell properties. We build relationships, earn trust,
              and help you make one of life&rsquo;s most important decisions with
              total confidence.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <h3 className="font-semibold text-lg mb-2 text-gold">
                  {reason.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
