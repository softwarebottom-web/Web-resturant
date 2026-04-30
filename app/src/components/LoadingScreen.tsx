import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf } from 'lucide-react';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsExiting(true), 400);
          setTimeout(() => onComplete(), 1200);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
          style={{ background: 'hsl(150 30% 4%)' }}
        >
          {/* Animated particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-emerald-400/30"
                initial={{
                  x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                  y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                }}
                animate={{
                  y: [null, -20, 20],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          {/* Central logo animation */}
          <motion.div
            className="relative mb-12"
            animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            {/* Outer rings */}
            <motion.div
              className="absolute -inset-8 border border-emerald-500/20 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute -inset-12 border border-emerald-500/10 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute -inset-4 border border-amber-400/20 rounded-full"
              animate={{ rotate: 360, scale: [1, 1.05, 1] }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            />

            {/* Logo icon */}
            <div className="relative w-20 h-20 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-amber-400/20 rounded-2xl blur-xl" />
              <Leaf className="w-10 h-10 text-emerald-400 relative z-10" />
            </div>
          </motion.div>

          {/* Brand name */}
          <motion.h1
            className="text-3xl md:text-4xl font-light tracking-[0.3em] text-emerald-100 mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="font-bold text-emerald-400">EL</span> NATURE
          </motion.h1>

          {/* Progress bar */}
          <div className="w-64 md:w-80 h-0.5 bg-emerald-900/50 rounded-full overflow-hidden relative">
            <motion.div
              className="h-full rounded-full relative"
              style={{
                width: `${Math.min(progress, 100)}%`,
                background: 'linear-gradient(90deg, hsl(150 60% 45%), hsl(45 80% 55%))',
              }}
              transition={{ type: 'spring', stiffness: 100 }}
            >
              <motion.div
                className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-amber-400 rounded-full shadow-lg shadow-amber-400/50"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </motion.div>
          </div>

          {/* Loading text */}
          <motion.p
            className="mt-6 text-sm text-emerald-500/60 tracking-widest uppercase"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Memuat pengalaman kuliner
          </motion.p>

          {/* Decorative elements */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-emerald-500/40"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
