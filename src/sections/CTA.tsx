import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageCircle, UtensilsCrossed, Bike, MapPin, Clock, Phone, Instagram, Globe } from 'lucide-react';

const platforms = [
  {
    name: 'WhatsApp',
    desc: 'Reservasi & Pesan Langsung',
    icon: MessageCircle,
    color: 'from-green-600/20 to-green-500/20',
    hoverColor: 'hover:from-green-600/30 hover:to-green-500/30',
    borderColor: 'border-green-500/20 hover:border-green-500/40',
    textColor: 'text-green-400',
    href: 'https://wa.me/6281234567890',
  },
  {
    name: 'GoFood',
    desc: 'Pesan Antar Online',
    icon: UtensilsCrossed,
    color: 'from-emerald-600/20 to-emerald-500/20',
    hoverColor: 'hover:from-emerald-600/30 hover:to-emerald-500/30',
    borderColor: 'border-emerald-500/20 hover:border-emerald-500/40',
    textColor: 'text-emerald-400',
    href: 'https://gofood.link/u/ElNature',
  },
  {
    name: 'GrabFood',
    desc: 'Pesan Antar Cepat',
    icon: Bike,
    color: 'from-amber-600/20 to-amber-500/20',
    hoverColor: 'hover:from-amber-600/30 hover:to-amber-500/30',
    borderColor: 'border-amber-500/20 hover:border-amber-500/40',
    textColor: 'text-amber-400',
    href: 'https://grab.onelink.me/ElNature',
  },
];

const contacts = [
  { icon: MapPin, label: 'Alamat', value: 'Jl. Sudirman No. 88, Jakarta Selatan' },
  { icon: Clock, label: 'Jam Buka', value: 'Setiap Hari 10:00 - 23:00 WIB' },
  { icon: Phone, label: 'Telepon', value: '+62 812 3456 7890' },
  { icon: Instagram, label: 'Instagram', value: '@elnature.restaurant' },
  { icon: Globe, label: 'Website', value: 'www.elnature.id' },
];

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="cta" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-emerald-400/60" />
            <span className="text-emerald-400/80 text-xs tracking-[0.3em] uppercase">Hubungi Kami</span>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-emerald-400/60" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl md:text-5xl font-light text-emerald-50 mb-6"
          >
            Pesan <span className="text-emerald-400 font-semibold">Sekarang</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-emerald-100/50 max-w-2xl mx-auto"
          >
            Pilih platform favorit Anda untuk reservasi meja atau pesan antar.
            Kami siap melayani Anda kapan saja.
          </motion.p>
        </div>

        {/* Platform Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {platforms.map((platform, i) => (
            <motion.a
              key={platform.name}
              href={platform.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className={`group relative flex flex-col items-center p-8 rounded-2xl border bg-gradient-to-br ${platform.color} ${platform.hoverColor} ${platform.borderColor} transition-all duration-500 hover:shadow-lg`}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${platform.color} ${platform.borderColor} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500`}>
                <platform.icon className={`w-8 h-8 ${platform.textColor}`} />
              </div>
              <h3 className="text-xl font-semibold text-emerald-50 mb-2">{platform.name}</h3>
              <p className="text-sm text-emerald-100/50 text-center">{platform.desc}</p>
              <div className={`mt-5 text-sm ${platform.textColor} font-medium opacity-0 group-hover:opacity-100 transition-opacity`}>
                Klik untuk memesan →
              </div>
            </motion.a>
          ))}
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative p-8 md:p-10 rounded-3xl border border-emerald-500/10 bg-emerald-900/10">
            {/* Decorative corner */}
            <div className="absolute -top-px left-8 w-16 h-px bg-gradient-to-r from-emerald-400/60 to-transparent" />
            <div className="absolute -bottom-px right-8 w-16 h-px bg-gradient-to-l from-amber-400/60 to-transparent" />

            <h3 className="text-2xl font-light text-emerald-50 text-center mb-8">
              Informasi <span className="text-emerald-400 font-semibold">Kontak</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contacts.map((contact) => (
                <div key={contact.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                    <contact.icon className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-xs text-emerald-100/40 uppercase tracking-wider mb-1">
                      {contact.label}
                    </div>
                    <div className="text-sm text-emerald-100/80">{contact.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
