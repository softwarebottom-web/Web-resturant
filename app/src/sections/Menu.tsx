import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Flame, Fish, Salad, Wine, Coffee, ChefHat } from 'lucide-react';

const categories = [
  { id: 'signature', name: 'Signature', icon: ChefHat },
  { id: 'seafood', name: 'Seafood', icon: Fish },
  { id: 'grill', name: 'Grill', icon: Flame },
  { id: 'salad', name: 'Salad', icon: Salad },
  { id: 'dessert', name: 'Dessert', icon: Coffee },
  { id: 'beverage', name: 'Beverage', icon: Wine },
];

const menuItems = [
  {
    id: 1,
    category: 'signature',
    name: 'Wagyu Truffle Forest',
    desc: 'Wagyu A5 dengan truffle hitam, foam jamur shiitake, dan microgreens dari kebun kami',
    price: 'Rp 1.250K',
    image: '/images/dish-signature.jpg',
    tag: 'Best Seller',
  },
  {
    id: 2,
    category: 'signature',
    name: 'Ocean Symphony',
    desc: 'Lobster, oyster, dan caviar dengan saus yuzu buatan chef',
    price: 'Rp 1.850K',
    image: '/images/dish-seafood.jpg',
    tag: 'Premium',
  },
  {
    id: 3,
    category: 'seafood',
    name: 'Grilled Salmon Glacier',
    desc: 'Salmon Norwegia panggang dengan glaze madu dan herb crust',
    price: 'Rp 420K',
    image: '/images/dish-seafood.jpg',
    tag: null,
  },
  {
    id: 4,
    category: 'grill',
    name: 'Ribeye Ember',
    desc: 'Ribeye Australia 300g dengan smoked paprika rub dan jus au poivre',
    price: 'Rp 680K',
    image: '/images/dish-signature.jpg',
    tag: 'New',
  },
  {
    id: 5,
    category: 'salad',
    name: 'Garden of Eden',
    desc: 'Sayuran organik segar dengan edible flowers dan citrus vinaigrette',
    price: 'Rp 185K',
    image: '/images/dish-signature.jpg',
    tag: null,
  },
  {
    id: 6,
    category: 'dessert',
    name: 'Chocolate Sphere Nature',
    desc: 'Cokelat Valrhona dengan ganache matcha dan berry compote',
    price: 'Rp 195K',
    image: '/images/dish-dessert.jpg',
    tag: 'Signature',
  },
];

export default function Menu() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('signature');

  const filteredItems = menuItems.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/3 rounded-full blur-3xl" />
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
            <span className="text-emerald-400/80 text-xs tracking-[0.3em] uppercase">Menu Kami</span>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-emerald-400/60" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl md:text-5xl font-light text-emerald-50 mb-6"
          >
            Karya <span className="text-emerald-400 font-semibold">Kuliner</span> Terbaik
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-emerald-100/50 max-w-2xl mx-auto"
          >
            Setiap hidangan adalah karya seni yang dibuat dengan bahan-bahan segar
            dan teknik memasak modern oleh chef berbintang Michelin.
          </motion.p>
        </div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'text-emerald-50 bg-gradient-to-r from-emerald-600/80 to-emerald-500/80 shadow-lg shadow-emerald-500/20'
                  : 'text-emerald-100/50 hover:text-emerald-100 border border-emerald-500/10 hover:border-emerald-500/30'
              }`}
            >
              <cat.icon className="w-4 h-4" />
              {cat.name}
            </button>
          ))}
        </motion.div>

        {/* Menu Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {filteredItems.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative flex gap-5 p-5 rounded-2xl border border-emerald-500/10 bg-emerald-900/10 hover:bg-emerald-900/20 hover:border-emerald-500/20 transition-all duration-500"
              >
                {/* Image */}
                <div className="relative w-28 h-28 md:w-32 md:h-32 flex-shrink-0 rounded-xl overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f0a]/40 to-transparent" />
                  {item.tag && (
                    <div className="absolute top-2 left-2 px-2 py-0.5 bg-amber-500/90 text-[10px] text-white font-semibold rounded-full uppercase tracking-wide">
                      {item.tag}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-between py-1">
                  <div>
                    <h3 className="text-lg font-semibold text-emerald-50 mb-2 group-hover:text-emerald-400 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-sm text-emerald-100/40 leading-relaxed line-clamp-2">
                      {item.desc}
                    </p>
                  </div>
                  <div className="flex items-end justify-between mt-3">
                    <span className="text-lg font-bold text-amber-400">{item.price}</span>
                    <button className="text-xs text-emerald-400/60 hover:text-emerald-400 transition-colors uppercase tracking-wider">
                      Detail →
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View Full Menu CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 border border-emerald-500/30 text-emerald-100 rounded-full hover:bg-emerald-500/10 hover:border-emerald-500/50 transition-all"
          >
            <ChefHat className="w-4 h-4" />
            Lihat Menu Lengkap
          </a>
        </motion.div>
      </div>
    </section>
  );
}
