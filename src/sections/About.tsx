import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Leaf, TreePine, Droplets, Sun } from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: 'Bahan Organik',
    desc: 'Semua bahan berasal dari petani lokal yang menggunakan metode organik tanpa pestisida kimia.',
  },
  {
    icon: TreePine,
    title: 'Suasana Hutan',
    desc: 'Desain interior terinspirasi dari keindahan hutan tropis dengan tanaman hidup dan air terjun buatan.',
  },
  {
    icon: Droplets,
    title: 'Air Mineral Alami',
    desc: 'Menggunakan sistem filtrasi air alami yang memberikan kesegaran dalam setiap hidangan.',
  },
  {
    icon: Sun,
    title: 'Pencahayaan Biologis',
    desc: 'Pencahayaan dinamis yang meniru siklus cahaya matahari alami sepanjang hari.',
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-emerald-400/60" />
            <span className="text-emerald-400/80 text-xs tracking-[0.3em] uppercase">Tentang Kami</span>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-emerald-400/60" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl md:text-5xl font-light text-emerald-50 mb-6"
          >
            Di Mana <span className="text-emerald-400 font-semibold">Alam</span> Bertemu{' '}
            <span className="text-amber-400 font-semibold">Kuliner</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-emerald-100/50 max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
          >
            El Nature adalah restoran fine dining yang menghadirkan pengalaman kuliner unik
            dengan konsep "nature-integrated dining". Setiap elemen desain dan hidangan
            diciptakan untuk menghormati keindahan alam.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              className="group relative"
            >
              <div className="relative p-8 rounded-2xl border border-emerald-500/10 bg-emerald-900/10 hover:bg-emerald-900/20 hover:border-emerald-500/20 transition-all duration-500">
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500">
                    <feature.icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-emerald-50 mb-3">{feature.title}</h3>
                  <p className="text-sm text-emerald-100/50 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: '15+', label: 'Tahun Pengalaman' },
            { number: '50+', label: 'Menu Eksklusif' },
            { number: '12K+', label: 'Pelanggan Puas' },
            { number: '5', label: 'Bintang Rating' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-amber-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-emerald-100/40">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
