import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, MapPin, Clock } from 'lucide-react';
import gsap from 'gsap';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  useEffect(() => {
    if (!textRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-title-line',
        { y: 100, opacity: 0, rotateX: -40 },
        { y: 0, opacity: 1, rotateX: 0, duration: 1.2, stagger: 0.15, ease: 'power4.out', delay: 0.5 }
      );
      gsap.fromTo(
        '.hero-subtitle',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 1.2 }
      );
      gsap.fromTo(
        '.hero-cta',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 1.5 }
      );
      gsap.fromTo(
        '.hero-badge',
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, ease: 'back.out(1.7)', delay: 1.8, stagger: 0.1 }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Luxury restaurant interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f0a]/70 via-[#0a0f0a]/50 to-[#0a0f0a]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f0a]/60 via-transparent to-[#0a0f0a]/60" />
      </motion.div>

      {/* Animated particles overlay */}
      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 rounded-full bg-emerald-400/40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <div ref={textRef} className="space-y-8">
          {/* Overline */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex items-center justify-center gap-3"
          >
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-emerald-400/60" />
            <span className="text-emerald-400/80 text-xs md:text-sm tracking-[0.3em] uppercase font-medium">
              Fine Dining Experience
            </span>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-emerald-400/60" />
          </motion.div>

          {/* Main Title */}
          <div className="overflow-hidden">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[1.1]">
              <div className="hero-title-line overflow-hidden">
                <span className="inline-block text-emerald-50">
                  Rasa <span className="text-emerald-400 font-semibold">Alam</span>
                </span>
              </div>
              <div className="hero-title-line overflow-hidden">
                <span className="inline-block text-emerald-50">
                  Dalam <span className="text-amber-400 font-semibold">Setiap</span> Gigitan
                </span>
              </div>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="hero-subtitle text-base md:text-lg text-emerald-100/60 max-w-2xl mx-auto leading-relaxed font-light">
            Pengalaman kuliner kelas atas yang memadukan keindahan alam dengan sentuhan
            teknologi modern. Nikmati hidangan istimewa dalam suasana yang memukau.
          </p>

          {/* CTA Buttons */}
          <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#menu"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-medium rounded-full overflow-hidden shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all"
            >
              <span className="relative z-10 flex items-center gap-2">
                Lihat Menu
                <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-emerald-500/40 text-emerald-100 font-medium rounded-full hover:bg-emerald-500/10 hover:border-emerald-500/60 transition-all"
            >
              Reservasi Sekarang
            </a>
          </div>

          {/* Info badges */}
          <div className="hero-badge flex flex-wrap items-center justify-center gap-6 pt-8">
            <div className="flex items-center gap-2 text-emerald-100/50 text-sm">
              <MapPin className="w-4 h-4 text-emerald-400" />
              <span>Jakarta Selatan, Indonesia</span>
            </div>
            <div className="flex items-center gap-2 text-emerald-100/50 text-sm">
              <Clock className="w-4 h-4 text-emerald-400" />
              <span>Buka 10:00 - 23:00</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-emerald-100/40 text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-5 h-5 text-emerald-400/60" />
        </motion.div>
      </motion.div>

      {/* Side decorative lines */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-3 z-10">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="w-0.5 bg-emerald-500/30"
            initial={{ height: 0 }}
            animate={{ height: 20 + i * 8 }}
            transition={{ delay: 2 + i * 0.1, duration: 0.8 }}
          />
        ))}
      </div>
    </section>
  );
}
