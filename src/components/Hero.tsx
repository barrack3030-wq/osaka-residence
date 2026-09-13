import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2850&q=80"
          alt="Osaka Residence Exterior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-stone-900/40"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl text-white"
        >
          {/* Rating */}
          <div className="flex items-center gap-2 mb-6">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
            <span className="text-sm font-medium tracking-wide">4,6 / 5 · 65 Reviews</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1] mb-6">
            Kost Putri Nyaman di Dinoyo, Malang
          </h1>
          
          <p className="text-lg md:text-xl text-stone-200 mb-10 leading-relaxed max-w-xl">
            Osaka Residence BJ999 — tempat tinggal nyaman untuk mahasiswi dan perempuan di kawasan Lowokwaru, Kota Malang.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/6285749545557"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-stone-900 text-center font-medium hover:bg-stone-100 transition-colors"
            >
              Hubungi Kami
            </a>
            <a
              href="#lokasi"
              className="px-8 py-4 bg-transparent border border-white text-white text-center font-medium hover:bg-white/10 transition-colors"
            >
              Lihat Lokasi
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
