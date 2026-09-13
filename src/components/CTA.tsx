import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-24 md:py-32 bg-stone-900 text-white text-center">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">
            Sedang Mencari Kost Putri di Malang?
          </h2>
          <p className="text-lg md:text-xl text-stone-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Hubungi Osaka Residence BJ999 untuk mendapatkan informasi mengenai kamar, harga, dan ketersediaan.
          </p>
          <a
            href="https://wa.me/6285749545557"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-white text-stone-900 font-medium hover:bg-stone-100 transition-colors text-lg"
          >
            <MessageCircle className="mr-3" size={20} />
            WhatsApp Sekarang
          </a>
          <p className="mt-6 text-stone-500">Atau hubungi 0857-4954-5557</p>
        </motion.div>
      </div>
    </section>
  );
}
