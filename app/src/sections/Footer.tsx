import { Leaf, Heart, ArrowUp } from 'lucide-react';

const footerLinks = [
  {
    title: 'Navigasi',
    links: [
      { name: 'Beranda', href: '#hero' },
      { name: 'Tentang Kami', href: '#about' },
      { name: 'Menu', href: '#menu' },
      { name: 'Galeri', href: '#gallery' },
    ],
  },
  {
    title: 'Layanan',
    links: [
      { name: 'Reservasi', href: 'https://wa.me/6281234567890' },
      { name: 'Private Dining', href: 'https://wa.me/6281234567890' },
      { name: 'Catering', href: 'https://wa.me/6281234567890' },
      { name: 'Event', href: 'https://wa.me/6281234567890' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Kebijakan Privasi', href: '#' },
      { name: 'Syarat & Ketentuan', href: '#' },
      { name: 'FAQ', href: '#' },
    ],
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-20 pb-8 overflow-hidden">
      {/* Top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToTop(); }} className="flex items-center gap-2 mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-emerald-500/20 rounded-lg blur-md" />
                <Leaf className="w-6 h-6 text-emerald-400 relative" />
              </div>
              <span className="text-lg tracking-[0.2em] font-light text-emerald-50">
                <span className="font-bold text-emerald-400">EL</span> NATURE
              </span>
            </a>
            <p className="text-sm text-emerald-100/40 leading-relaxed mb-6 max-w-sm">
              Restoran fine dining yang menghadirkan harmoni sempurna antara keindahan alam
              dan seni kuliner modern. Setiap kunjungan adalah sebuah perjalanan rasa.
            </p>
            <div className="flex items-center gap-2 text-sm text-emerald-100/30">
              <Heart className="w-4 h-4 text-rose-400/60" />
              <span>Dibuat dengan cinta untuk alam</span>
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h4 className="text-sm font-semibold text-emerald-100/80 uppercase tracking-wider mb-5">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        if (link.href.startsWith('#')) {
                          e.preventDefault();
                          document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-sm text-emerald-100/40 hover:text-emerald-400 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="relative pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent" />

          <p className="text-xs text-emerald-100/30">
            &copy; {new Date().getFullYear()} El Nature Restaurant. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-xs text-emerald-100/40 hover:text-emerald-400 transition-colors"
          >
            <span>Kembali ke atas</span>
            <div className="w-8 h-8 rounded-full border border-emerald-500/20 flex items-center justify-center group-hover:bg-emerald-500/10 group-hover:border-emerald-500/40 transition-all">
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
