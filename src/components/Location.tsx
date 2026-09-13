import { motion } from 'motion/react';
import { MapPin, ArrowRight } from 'lucide-react';

export function Location() {
  return (
    <section id="lokasi" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-stone-900 mb-6">
              Lokasi Strategis di Dinoyo
            </h2>
            
            <div className="flex items-start gap-4 mb-8">
              <MapPin className="text-stone-400 mt-1 flex-shrink-0" size={24} />
              <div>
                <p className="text-lg text-stone-600 leading-relaxed font-medium">
                  Kost Putri Malang – Osaka Residence BJ999
                </p>
                <p className="text-stone-500 leading-relaxed mt-2">
                  Jl. MT Haryono Gg. VIII No.999,<br />
                  Dinoyo, Kec. Lowokwaru,<br />
                  Kota Malang, Jawa Timur 65144
                </p>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Jl.+MT+Haryono+Gg.+VIII+No.999,+Dinoyo,+Kec.+Lowokwaru,+Kota+Malang"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-stone-900 text-white font-medium hover:bg-stone-800 transition-colors"
            >
              Buka Google Maps
              <ArrowRight size={18} className="ml-2" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="w-full aspect-[4/3] md:aspect-square bg-stone-200 relative overflow-hidden"
          >
            {/* Map iframe placeholder pointing to Dinoyo Malang area */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15806.326884617578!2d112.60251785!3d-7.9386348999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7882750731eb49%3A0x7d6f51737e5e8e60!2sDinoyo%2C%20Kec.%20Lowokwaru%2C%20Kota%20Malang%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Osaka Residence"
              className="absolute inset-0"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
