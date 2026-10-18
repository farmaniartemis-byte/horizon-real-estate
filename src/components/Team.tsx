import { motion } from 'framer-motion'
import { Linkedin, Twitter, Mail } from 'lucide-react'
import { team } from '../data/team'

export default function Team() {
  return (
    <section id="team" className="section-padding bg-white">
      <div className="container-premium">
        <div className="text-center mb-14">
          <p className="section-label mb-3">Our Team</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Meet the Experts
          </h2>
          <p className="text-navy/60 text-lg max-w-2xl mx-auto">
            A dedicated team of professionals committed to making your real
            estate journey seamless and successful.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl overflow-hidden card-shadow card-shadow-hover bg-white"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                {/* Social Links */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a
                    href={member.social.linkedin}
                    className="w-9 h-9 rounded-full bg-white/90 flex items-center justify-center hover:bg-gold hover:text-white transition-colors"
                    aria-label={`${member.name} on LinkedIn`}
                  >
                    <Linkedin className="w-4 h-4 text-navy" />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="w-9 h-9 rounded-full bg-white/90 flex items-center justify-center hover:bg-gold hover:text-white transition-colors"
                    aria-label={`${member.name} on Twitter`}
                  >
                    <Twitter className="w-4 h-4 text-navy" />
                  </a>
                  <a
                    href={`mailto:${member.social.email}`}
                    className="w-9 h-9 rounded-full bg-white/90 flex items-center justify-center hover:bg-gold hover:text-white transition-colors"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="w-4 h-4 text-navy" />
                  </a>
                </div>
              </div>
              <div className="p-5 text-center">
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-gold text-sm font-medium mt-1">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
