import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Eye } from 'lucide-react';

const galleryImages = [
  {
    src: '/images/hero-bg.jpg',
    title: 'Suasana Restoran',
    desc: 'Interior mewah dengan pemandangan alam',
    size: 'large',
  },
  {
    src: '/images/dish-signature.jpg',
    title: 'Wagyu Truffle',
    desc: 'Hidangan signature kami',
    size: 'small',
  },
  {
    src: '/images/dish-seafood.jpg',
    title: 'Ocean Symphony',
    desc: 'Seafood premium terbaik',
    size: 'small',
  },
  {
    src: '/images/bar-lounge.jpg',
    title: 'Bar Lounge',
    desc: 'Cocktail dengan pemandangan air terjun',
    size: 'large',
  },
  {
    src: '/images/dish-dessert.jpg',
    title: 'Chocolate Sphere',
    desc: 'Dessert elegan untuk penutup',
    size: 'small',
  },
  {
    src: '/images/dish-signature.jpg',
    title: 'Fine Dining',
    desc: 'Pengalaman kuliner tak terlupakan',
    size: 'small',
  },
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="gallery" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/3 rounded-full blur-3xl" />
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
            <span className="text-emerald-400/80 text-xs tracking-[0.3em] uppercase">Galeri</span>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-emerald-400/60" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl md:text-5xl font-light text-emerald-50 mb-6"
          >
            Mata <span className="text-emerald-400 font-semibold">Memakan</span> Dahulu
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-emerald-100/50 max-w-2xl mx-auto"
          >
            Setiap hidangan dan sudut restoran kami dirancang untuk memberikan
            pengalaman visual yang tak terlupakan.
          </motion.p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[280px]">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer ${
                img.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f0a]/90 via-[#0a0f0a]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content on hover */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-emerald-50 mb-1">{img.title}</h3>
                    <p className="text-sm text-emerald-100/60">{img.desc}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center backdrop-blur-sm">
                    <Eye className="w-5 h-5 text-emerald-400" />
                  </div>
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-emerald-400/0 group-hover:border-emerald-400/60 transition-all duration-500 rounded-tr-lg" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-emerald-400/0 group-hover:border-emerald-400/60 transition-all duration-500 rounded-bl-lg" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
